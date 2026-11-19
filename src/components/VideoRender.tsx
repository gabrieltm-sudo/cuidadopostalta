import { useId, useState, type ReactNode } from 'react';
import {
	Captions,
	ChevronDown,
	Clock,
	ExternalLink,
	FileText,
	Play,
	Video,
	VideoOff,
} from 'lucide-react';
import convertURLYT from '../script/convertURLYT';

export interface VideoRenderProps {
	url?: string | null;
	title: string;
	description?: string;
	duration?: string;
	source?: string;
	hasCaptions?: boolean;
	transcript?: ReactNode;
	startTime?: number;
	className?: string;
}

const VideoRender = ({
	url,
	title,
	description,
	duration,
	source,
	hasCaptions = false,
	transcript,
	startTime,
	className = '',
}: VideoRenderProps) => {
	const videoData = convertURLYT(url, startTime);
	const [playingVideoId, setPlayingVideoId] = useState<string | null>(null);
	const [failedThumbnailId, setFailedThumbnailId] = useState<string | null>(null);
	const [isTranscriptOpen, setIsTranscriptOpen] = useState(false);

	const headingId = useId();
	const transcriptId = useId();

	const isPlaying = videoData !== null && playingVideoId === videoData.videoId;
	const thumbnailFailed = videoData !== null && failedThumbnailId === videoData.videoId;

	return (
		<figure
			aria-labelledby={headingId}
			className={`w-full border-2 border-gray-200 bg-white ${className}`.trim()}
		>
			{/* Cabeçalho do card */}
			<div className="flex flex-wrap items-center justify-between gap-3 border-b-2 border-[#003366] bg-[#DCEEEF]/40 px-4 py-3 sm:px-6 sm:py-4">
				<div className="flex min-w-0 items-center gap-2.5">
					<Video size={22} className="shrink-0 text-[#003366]" aria-hidden="true" />
					<h3 id={headingId} className="text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						{title}
					</h3>
				</div>

				{(duration || hasCaptions) && (
					<div className="flex flex-wrap items-center gap-2">
						{duration && (
							<span className="inline-flex items-center gap-1.5 border border-[#0A4D68]/30 bg-[#DCEEEF] px-2.5 py-1 text-sm font-semibold text-[#0A4D68]">
								<Clock size={16} aria-hidden="true" />
								<span>{duration}</span>
							</span>
						)}
						{hasCaptions && (
							<span className="inline-flex items-center gap-1.5 border border-gray-300 bg-white px-2.5 py-1 text-sm font-semibold text-gray-700">
								<Captions size={16} aria-hidden="true" />
								<span>Com legendas</span>
							</span>
						)}
					</div>
				)}
			</div>

			{/* Área de mídia ou estado indisponível */}
			{!videoData ? (
				<div className="p-4 sm:p-6">
					<div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 bg-gray-50 px-6 py-10 text-center">
						<VideoOff size={36} className="mb-3 text-gray-500" aria-hidden="true" />
						<p className="text-center text-base font-bold text-gray-700">
							Nenhum vídeo disponível no momento.
						</p>
						<p className="mt-1 max-w-md text-center text-sm leading-6 text-gray-600">
							Consulte as orientações escritas nesta página ou procure a equipe de saúde em caso de
							dúvidas.
						</p>
					</div>
				</div>
			) : (
				<>
					<div className="relative aspect-video w-full overflow-hidden bg-[#003366]">
						{isPlaying ? (
							<iframe
								className="h-full w-full border-0"
								src={videoData.autoplayEmbedUrl}
								title={`Vídeo: ${title}`}
								allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
								allowFullScreen
								referrerPolicy="strict-origin-when-cross-origin"
							/>
						) : (
							<button
								type="button"
								onClick={() => setPlayingVideoId(videoData.videoId)}
								aria-label={`Assistir vídeo: ${title}`}
								className="group relative flex h-full w-full cursor-pointer items-center justify-center overflow-hidden bg-[#003366] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
							>
								{!thumbnailFailed && (
									<img
										src={videoData.thumbnailUrl}
										alt=""
										aria-hidden="true"
										loading="lazy"
										onError={() => setFailedThumbnailId(videoData.videoId)}
										className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
									/>
								)}
								<div
									className="absolute inset-0 bg-[#003366]/45 transition-colors group-hover:bg-[#003366]/35"
									aria-hidden="true"
								/>
								<span className="relative z-10 inline-flex min-h-12 items-center gap-3 border-2 border-white bg-[#003366] px-6 py-3 text-base font-bold text-white transition-colors group-hover:bg-blue-900 sm:text-lg">
									<Play size={22} className="fill-current" aria-hidden="true" />
									Assistir vídeo
								</span>
							</button>
						)}
					</div>

					{/* Legenda, créditos, link externo e resumo em texto opcional */}
					<figcaption className="space-y-4 border-t-2 border-gray-200 px-4 py-4 sm:px-6">
						{description && (
							<p className="text-base leading-7 text-gray-700">{description}</p>
						)}

						<div className="flex flex-wrap items-center justify-between gap-3">
							<div className="text-sm text-gray-600">
								{source && (
									<p className="text-sm text-gray-600">
										<span className="font-semibold text-[#003366]">Fonte:</span> {source}
									</p>
								)}
							</div>

							<div className="flex flex-wrap items-center gap-3">
								{transcript && (
									<button
										type="button"
										onClick={() => setIsTranscriptOpen((prev) => !prev)}
										aria-expanded={isTranscriptOpen}
										aria-controls={transcriptId}
										className="inline-flex min-h-11 cursor-pointer items-center gap-2 border-2 border-gray-300 bg-gray-50 px-4 py-2 text-sm font-bold text-[#003366] transition-colors hover:border-[#003366] hover:bg-gray-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003366]"
									>
										<FileText size={18} aria-hidden="true" />
										<span>{isTranscriptOpen ? 'Ocultar resumo' : 'Ler resumo em texto'}</span>
										<ChevronDown
											size={18}
											aria-hidden="true"
											className={`transition-transform duration-200 ${
												isTranscriptOpen ? 'rotate-180' : ''
											}`}
										/>
									</button>
								)}

								<a
									href={videoData.watchUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex min-h-11 items-center gap-2 border-2 border-[#003366] bg-white px-4 py-2 text-sm font-bold text-[#003366] transition-colors hover:bg-[#003366] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003366]"
								>
									<span>Abrir no YouTube</span>
									<span className="sr-only"> (abre em nova aba)</span>
									<ExternalLink size={16} aria-hidden="true" />
								</a>
							</div>
						</div>

						{transcript && isTranscriptOpen && (
							<div
								id={transcriptId}
								className="border-l-4 border-[#003366] bg-gray-50 p-4 text-base leading-7 text-gray-700"
							>
								{transcript}
							</div>
						)}
					</figcaption>
				</>
			)}
		</figure>
	);
};

export default VideoRender;

export interface YouTubeVideoData {
	videoId: string;
	embedUrl: string;
	autoplayEmbedUrl: string;
	watchUrl: string;
	thumbnailUrl: string;
	startSeconds: number | null;
}

function parseTimestamp(value: string | null): number | null {
	if (!value) {
		return null;
	}

	const trimmed = value.trim().toLowerCase();

	if (/^\d+s?$/.test(trimmed)) {
		const seconds = Number.parseInt(trimmed, 10);
		return seconds > 0 ? seconds : null;
	}

	const match = /^(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?$/.exec(trimmed);
	if (!match || (!match[1] && !match[2] && !match[3])) {
		return null;
	}

	const hours = match[1] ? Number.parseInt(match[1], 10) : 0;
	const minutes = match[2] ? Number.parseInt(match[2], 10) : 0;
	const seconds = match[3] ? Number.parseInt(match[3], 10) : 0;
	const total = hours * 3600 + minutes * 60 + seconds;

	return total > 0 ? total : null;
}

export default function convertURLYT(
	url?: string | null,
	startTime?: number,
): YouTubeVideoData | null {
	const trimmedUrl = url?.trim();
	if (!trimmedUrl) {
		return null;
	}

	try {
		const parsedURL = new URL(trimmedUrl);

		if (parsedURL.protocol !== 'https:' && parsedURL.protocol !== 'http:') {
			return null;
		}

		const hostname = parsedURL.hostname.replace(/^www\./, '').replace(/^m\./, '');
		let videoId: string | null = null;

		if (hostname === 'youtu.be') {
			videoId = parsedURL.pathname.split('/').filter(Boolean)[0] ?? null;
		} else if (hostname === 'youtube.com' || hostname === 'youtube-nocookie.com') {
			if (parsedURL.pathname === '/watch') {
				videoId = parsedURL.searchParams.get('v');
			} else {
				const parts = parsedURL.pathname.split('/').filter(Boolean);
				if (['embed', 'shorts', 'live', 'v'].includes(parts[0])) {
					videoId = parts[1] ?? null;
				}
			}
		}

		if (!videoId || !/^[\w-]{11}$/.test(videoId)) {
			return null;
		}

		const explicitStart =
			typeof startTime === 'number' && Number.isFinite(startTime) && startTime > 0
				? Math.floor(startTime)
				: null;

		const startSeconds =
			explicitStart ??
			parseTimestamp(parsedURL.searchParams.get('t') ?? parsedURL.searchParams.get('start'));

		const baseParams = new URLSearchParams({
			rel: '0',
			hl: 'pt-BR',
			cc_lang_pref: 'pt',
		});

		if (startSeconds) {
			baseParams.set('start', String(startSeconds));
		}

		const autoplayParams = new URLSearchParams(baseParams);
		autoplayParams.set('autoplay', '1');

		const watchUrl = startSeconds
			? `https://www.youtube.com/watch?v=${videoId}&t=${startSeconds}s`
			: `https://www.youtube.com/watch?v=${videoId}`;

		return {
			videoId,
			embedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?${baseParams.toString()}`,
			autoplayEmbedUrl: `https://www.youtube-nocookie.com/embed/${videoId}?${autoplayParams.toString()}`,
			watchUrl,
			thumbnailUrl: `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`,
			startSeconds,
		};
	} catch {
		return null;
	}
}

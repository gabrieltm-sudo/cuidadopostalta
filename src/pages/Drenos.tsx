import CarouselImages from '../components/CarouselImages'
import PageLayout from '../components/PageLayout'
import ImageFocus from '../components/ImageFocus'

import drenoImage from '../images/Drenos/dreno.png'
import limpezaCurativo from '../images/Drenos/DrenoLimpeza/limpezaCurativo.png'
import drenoLimpezaPasso_1 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_1.png'
import drenoLimpezaPasso_2 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_2.png'
import drenoLimpezaPasso_3 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_3.png'
import drenoLimpezaPasso_4 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_4.png'
import drenoLimpezaPasso_5 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_5.png'
import drenoLimpezaPasso_6 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_6.png'
import drenoLimpezaPasso_7 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_7.png'
import drenoLimpezaPasso_8 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_8.png'
import drenoLimpezaPasso_9 from '../images/Drenos/DrenoLimpeza/drenoLimpezaPasso_9.png'


const limpezaPassos = [
  { id: 1, image: drenoLimpezaPasso_1, text: 'LAVAR AS MÃOS COM ÁGUA E SABÃO', alt: 'Imagem de pessoa lavando as mãos' },
  { id: 2, image: drenoLimpezaPasso_2, text: 'FECHAR A PRESILHA OU CLAMPE', alt: 'Imagem de pessoa fechando uma presilha ou clampe' },
  { id: 3, image: drenoLimpezaPasso_3, text: 'ABRIR A TAMPA', alt: 'Imagem de pessoa abrindo uma tampa' },
  { id: 4, image: drenoLimpezaPasso_4, text: 'ESVAZIAR O LÍQUIDO DO COLETOR EM UM POTE PLÁSTICO OU TIGELA', alt: 'Imagem de pessoa esvaziando o líquido do coletor' },
  { id: 5, image: drenoLimpezaPasso_5, text: 'MEDIR A DRENAGEM', alt: 'Imagem de pessoa medindo a drenagem' },
  { id: 6, image: drenoLimpezaPasso_6, text: 'DESPREZAR O LÍQUIDO NO VASO SANITÁRIO', alt: 'Imagem de pessoa despejando o líquido no vaso sanitário' },
  { id: 7, image: drenoLimpezaPasso_7, text: 'REFAZER O VÁCUO, EMPURRANDO O COLETOR PARA BAIXO E FECHANDO A TAMPA', alt: 'Imagem de pessoa refazendo o vácuo' },
  { id: 8, image: drenoLimpezaPasso_8, text: 'FECHAR A TAMPA', alt: 'Imagem de pessoa fechando uma tampa' },
  { id: 9, image: drenoLimpezaPasso_9, text: 'ABRIR O CLAMPE', alt: 'Imagem de pessoa abrindo um clampe' },
];

const Drenos = () => {
	const tocItems = [
		{ id: 'portovac', label: 'Dreno Suctor/Portovac' },
		{ id: 'penrose', label: 'Dreno Penrose' },
	]

	return (
		<PageLayout title="Cuidados com Drenos" tocItems={tocItems}>
			<h2
				id="portovac"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				CUIDADOS COM DRENO: SUCTOR/PORTOVAC
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-red border-2 border-gray-200 p-6 md:col-span-2">
					<p className="mt-4 rounded border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800 col-span-2">
						Não deve ser elevado acima do nível do coração(?), pois o ...
					</p>
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						O que é e Finalidade
					</h3>
					<div className="p-4 md:flex gap-4">
							<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
							<li>Dreno de sistema fechado. Não deve tracionar (puxar);</li>
							<li>Deve-se verificar o líquido da drenagem (presença de coágulos);</li>
							<li>Manipulação asséptica (limpa);</li>
							<li>Sempre feche o clampe no manuseio.</li>
						</ul>
						<ImageFocus src={drenoImage} alt="Dreno Suctor/Portovac" className="mx-auto max-w-full" />
					</div>

					<p className="text-justify mt-4 text-lg">
						Dispositivo utilizado para remoção de ar e secreções do leito de uma ferida ou cavidade, decorrentes de procedimento cirúrgico.
					</p>
					<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
						<li>
							Evitar o acúmulo de algo que pode tornar-se um foco de infecção.
						</li>
					</ul>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Passo a passo para limpeza
					</h3>
					<div className="p-4">
						<CarouselImages steps={limpezaPassos} />
					</div>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Limpeza do curativo
					</h3>
					<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
						<li>
							Limpeza circular, com gaze e soro fisiológico;
						</li>
						<li>
							Higienizar o extensor com álcool 70%;
						</li>
						<li>
							Sentido da limpeza: inicia-se pelo local de inserção do dreno até a região ao redor da inserção (proximal-distal).
						</li>
					</ul>
					{/* TODO: Modificar imagem para uma melhor */}
					<ImageFocus src={limpezaCurativo} alt="Forma de limpar curativo" className="mx-auto max-w-full"
					/>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Cuidados com o dreno
					</h3>
					<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
						<li>
							Realizar a limpeza de 2 a 3 vezes por dia;
						</li>
						<li>
							Após o esvaziamento, deve-se comprimir o dreno para proporcionar vácuo em seu interior;
						</li>
						<li>
							Realizar curativo com gaze e soro fisiológico no local da entrada do dreno, 1x no dia ou se molhado ou sujo; 
						</li>
						<li>
							Observar o líquido quanto a cor, aspecto e quantidade;
						</li>
						<li>
							Nunca lavar o dreno por dentro;
						</li>
						<li>
							Mantenha o reservatório sanfonado sempre abaixo do local onde o dreno está inserido. O dreno pode ser mantido preso à roupa, evite contato com o chão;
						</li>
						<li>
							Use roupas mais largas para acomodar bem o dreno.
						</li>
						<p className="text-justify mt-4 text-lg">
							Atenção para não puxar o dreno nas mudanças de posição e ao levantar.
						</p>
					</ul>
				</section>
			</div>

			<h2
				id="penrose"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				CUIDADOS COM DRENO: PENROSE
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						O que é e Finalidade
					</h3>
						<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
							<li>
								Dreno de sistema aberto. Deve ser observado e tracionado em cada curativo quando indicado e cortado o excesso;
							</li>
							<li>
								O orifício de saíde deve ser fechado com gaze estéril, trocado se necessário.
							</li>
						</ul>
						<p className="text-justify mt-4 text-lg">
							Dispositivo utilizado para remoção de ar e secreções do leito de uma ferida ou cavidade decorrentes de procedimento cirúrgico.
						</p>
						<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
							<li>
								Evitar o acúmulo de algo que pode tornar-se um fooco de infecção.
							</li>
						</ul>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Cuidados no domicílio
					</h3>

					<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
						<li>
							Lave bem as mãos antes de manipular o dreno;
						</li>
						<li>
							Retire a curativo sujo do dreno;
						</li>
						<li>
							Limpe o dreno e a pele ao redor com gaze e soro fisiológico. Seque com gaze;
						</li>
						<li>
							Coloque gazes entre o dreno e a pele e outra sobre o dreno e fixe com micropore, conforme necessidade.
						</li>
					</ul>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Limpeza do curativo
					</h3>
					<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
						<li>
							Limpeza circular com gaze e soro fisiológico;
						</li>
						<li>
							Higienizar o extensor com álcool 70%;
						</li>
						<li>
							Sentido da limpeza: inicia-se pelo local de inserção do dreno até a região ao redor da inserção (proximal-distal).
						</li>
					</ul>
					<ImageFocus src={limpezaCurativo} alt="Forma de limpar curativo" className="mx-auto max-w-full"
					/>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Atenção e Quando procurar o serviço de saúde
					</h3>
					<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
						<li>
							Se tiver temperatura acima de 37,5°C; 
						</li>
						<li>
							Sangramento anormal pelo local de inserção do dreno ou pele arroxeada aumentar;
						</li>
						<li>
							Se a drenagem parar;
						</li>
						<li>
							Caso o dreno se solte ou os pontos romperem;
						</li>
						<li>
							Se a pele voltar a doer, ficar vermelha ou úmida além do habitual;
						</li>
						<li>
							Se o líquido aumentar subitamente, ficar com aspecto de pus e com odor.
						</li>
					</ul>
				</section>
			</div>
		</PageLayout>
	)
}

export default Drenos

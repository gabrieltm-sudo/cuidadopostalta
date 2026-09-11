import PageLayout from '../components/PageLayout'
import drenoImage from '../logos/dreno.png'
import drenoLimpeza from '../logos/drenoLimpeza.png'
import limpezaCurativo from '../logos/limpezaCurativo.png'

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
						<img src={drenoImage} alt="Dreno Suctor/Portovac" className="mx-auto max-w-full" />
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
						<img src={drenoLimpeza} alt="Passo a passo para limpeza do dreno Suctor" className="mx-auto max-w-full" />
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
					<img src={limpezaCurativo} alt="Forma de limpar curativo" className="mx-auto max-w-full"
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
					<img src={limpezaCurativo} alt="Forma de limpar curativo" className="mx-auto max-w-full"
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

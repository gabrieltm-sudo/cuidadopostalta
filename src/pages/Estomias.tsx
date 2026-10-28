import { useState } from 'react'

import PageLayout from '../components/PageLayout'
import ImageFocus from '../components/ImageFocus'
import CarouselImages from '../components/CarouselImages'

import ReferenceModal from '../components/ReferenceModal'
import { BookOpen } from 'lucide-react'

import tiposBolsas from '../images/Estomias/tiposBolsas.png'
import tiposBolsas1 from '../images/Estomias/tiposBolsas1.png'
import colonAsc from '../images/Estomias/colonAscendente.png'
import colonDesc from '../images/Estomias/colonDescendente.png'
import colonTrans from '../images/Estomias/colonTransverso.png'
import colonSig from '../images/Estomias/colonSigmoide.png'

const Estomias = () => {
	const tocItems = [
		{ id: 'conceito', label: 'Conceito e Tipos' },
		{ id: 'bolsas', label: 'Tipos de Bolsas' },
		{ id: 'cuidados', label: 'Troca e Higiene' },
		{ id: 'atencao', label: 'Fique Atento' },
		{ id: 'direitos', label: 'Direitos' },
	]

	const tiposDeBolsas = [
	  { id: 1, image: tiposBolsas, text: 'Tipos de bolsas', alt: 'Imagem ilustrativa mostrando 4 tipos de bolsas' },
	  { id: 2, image: tiposBolsas1, text: 'Tipos de bolsas', alt: 'Imagem ilustrativa mostrando 3 tipos de bolsas' },
	];

	const colostomias = [
		{ id: 1, image: colonAsc, text: 'Fezes líquidas, muito corrosivas', alt: 'Imagem ilustrativa mostrando a localização da colostomia ascendente' },
		{ id: 2, image: colonTrans, text: 'Fezes semi-líquidas, corrosivas', alt: 'Imagem ilustrativa mostrando a localização da colostomia transversa' },
		{ id: 3, image: colonDesc, text: 'Fezes semi-sólidas, pouco corrosivas', alt: 'Imagem ilustrativa mostrando a localização da colostomia descendente' },
		{ id: 4, image: colonSig, text: 'Fezes sólidas ou formadas, não corrosivas', alt: 'Imagem ilustrativa mostrando a localização da colostomia sigmóide' },
	]
	
	const [isRefModalOpen, setIsRefModalOpen] = useState(false);
	const references = [
		"SOBEST - Associação Brasileira de Estomaterapia. Manual de orientação a pessoa com estomia na região Amazônica. SOBEST: Belém, 2019. Disponível em: https://sobest.com.br/wp-content/uploads/2020/10/Estomia_na_regiao_Amazonica.pdf. Acesso em: 23 set. 2024.",
		"SOBEST- Associação Brasileira de Estomaterapia. Consenso Brasileiro de Cuidado às Pessoas Adultas com Estomias de Eliminação.  1. ed. Segmento Farma Editores: São Paulo, 2021. Disponível em: https://sobest.com.br/biblioteca/. Acesso em: 04 out. 2024.",
		"LIMA, A. H. A. Direitos das Pessoas com Estomias: Manual de Orientações. Belém: Editora Azul, 2023. Disponível em: https://docs.bvsalud.org/biblioref/2023/10/1512054/direitos-da-pessoa-com-estomias-manual-de-orientacoes.pdf Acesso em: 23 set. 2024."
	]
	
	return (
		<PageLayout title="Cuidados com Estomias" tocItems={tocItems}>
			<h2
				id="conceito"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				CUIDADOS COM ESTOMIAS DE ELIMINAÇÃO
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Conceito
					</h3>
					<p className="text-base leading-7 mb-4">
						Estomia (ou Ostomia), é o nome dado a uma abertura cirurgicamente, que faz a comunicação de uma víscera oca com o meio externo. Nas estomias de eliminação, o objetivo é promover a eliminação de fezes ou urina.
					</p>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Tipos
					</h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7">
						<li className="font-bold">
							Estomias urinárias:
						</li>
		                    <ul className="list-disc space-y-3 pl-5 text-base leading-7">
								<li>
									Nefrosfomia;
								</li>
								<li>
									Vesicostomia/Cistostomia;
								</li>
								<li>
									Ureterostomia/Urostomia;
								</li>
							</ul>
						<li className="font-bold">
									Estomias intestinais:
						</li>
		                    <ul className="list-disc space-y-3 pl-5 text-base leading-7">
								<li>
									Colostomia (terminal, em alça, duas bocas- que podem ser ascendente, transverso, descendente ou sigmóide.);
								</li>
								<li>
									Ileostomia.
								</li>
							</ul>
					</ul>
				</section>
			</div>

			<h2
				id="bolsas"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				TIPOS DE BOLSAS
			</h2>
			<div className="grid grid-cols-1 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6">
					<CarouselImages steps={tiposDeBolsas} />
				</section>
			</div>

			<h2
				id="bolsas"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				COLOSTOMIAS
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="grid grid-cols-1 md:grid-cols-2 gap-6 bg-white border-2 border-gray-200 p-6 md:col-span-2">
					{colostomias.map((colostomia) => (
						<div key={colostomia.id} className="text-center mb-6">
							<ImageFocus
								src={colostomia.image}
								alt={colostomia.alt}
								className="mx-auto max-w-full mb-4"
							/>
							<p className="text-base leading-7 text-center">
								{colostomia.text}
							</p>
						</div>
					))}
				</section>
			</div>

			<h2
				id="cuidados"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				TROCA E HIGIENE
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Troca da Bolsa Coletora
					</h3>
					<ol className="list-decimal space-y-3 pl-5 text-base leading-7">
						<li>
							Quando observar descolamento da placa adesiva ou infiltração, é importante realizar a troca para evitar lesão na pele periestomal;
						</li>
						<li>
							Ao tomar banho limpar com água morna ou com gaze úmida;
						</li>
						<li>
							Lave bem ao redor da estomia com água potável, e observe o aspecto;
						</li>
						<li>
							Seque bem ao redor da estomia, delicadamente, com pano limpo e macio ou gaze;
						</li>
						<li>
							Medir o tamanho da estomia e recortar de 2 a 3 MM maior que o seu diâmetro.
						</li>
					</ol>
					
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Higiene da Bolsa Coletora
					</h3>
					<ol className="list-decimal space-y-3 pl-5 text-base leading-7">
						<li>
							A bolsa coletora deve ser esvaziada sempre que estiver com 1/3 da capacidade;
						</li>
						<li>
							Após esvaziar, enxague com água a bolsa.
						</li>
						<ol className="list-disc space-y-3 pl-5 text-base leading-7">
							<li>Nunca utilize água quente</li>
						</ol>
					</ol>
				</section>
			</div>

			<h2
				id="atencao"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				SINAIS DE ALERTA
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Fique Atento!
					</h3>
					<ol className="list-disc space-y-3 pl-5 text-base leading-7">
							<li>
								Caso sua estomia mude de cor (saudável: rosa/vermelho) para roxo escuro, marrom ou preto ou sangramento de dentro da estomia procure imediatamente o serviço de saúde mais próximo de sua casa para verificar as possíveis causas desta alteração;
							</li>
							<li>
								Tenha atenção à pele periestomia atentando sempre para a presença de coceira, vermelhidão, lesões;
							</li>
							<li>
								Observe à coloração, quantidade e cheiro das fezes ou urina;
							</li>
							<li>
								Em caso de diarreia, fezes líquidas há necessidade de aumento da frequência de esvaziamento de seu equipamento;
							</li>
							<li>
								Procurar orientação de profissional de saúde em caso de constipação intestinal (dificuldade de evacuar) acima de 48h;
							</li>
							<li>
								Se ocorrer algumas dessas situações acima ou no caso de qualquer outra alteração que você perceba, procure imediatamente o Serviço de Referência Especializado ou Serviço de Saúde mais próximo de sua casa.
							</li>
						</ol>
				</section>
			</div>

			<h2
				id="direitos"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				DIREITOS
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Declaração dos Direitos da Pessoa com Estomia
					</h3>
					<ol className="list-decimal space-y-3 pl-5 text-base leading-7">
						<li>
							Receber aconselhamento pré-operatório para assegurar que ele tenha pleno conhecimento dos benefícios da cirurgia e dos fatos essenciais para sobreviver com uma estomia.
						</li>
						<li>
							Ter uma estomia bem feita e bem localizada, com consideração integral e adequada ao conforto do paciente.
						</li>
						<li>
							Receber apoio médico e cuidados especializados de enfermagem nos períodos pré e pós-operatório, tanto no hospital quanto na sua comunidade.
						</li>
						<li>
							Receber apoio e informação para o benefício da família, cuidadores e amigos, a fim de aumentar o entendimento sobre as condições e adaptações que são necessárias para se alcançar um padrão de vida satisfatório com uma estomia.
						</li>
						<li>
							Ter acesso irrestrito à variedade de produtos acessíveis para estomia.
						</li>
						<li>
							Receber informações sobre a Associação Nacional de Ostomizados, principalmente sobre os serviços e apoio que podem ser oferecidos.
						</li>
						<li>
							Estar protegido de toda e qualquer forma de discriminação.
						</li>
						<li>
							Estar seguro de que toda informação pessoal relacionada à sua cirurgia de estomia será tratada com discrição e confidencialidade para manter sua privacidade; que nenhuma informação sobre sua condição clínica será divulgada por qualquer pessoa que a possua, para entidades envolvidas com a fabricação, comércio ou distribuição de materiais relacionados à estomia; nem poderá ser divulgada para qualquer pessoa que se beneficiará, direta ou indiretamente, por causa de sua relação com o mercado de produtos de estomia, sem o consentimento expresso da pessoa com estomia.
						</li>
					</ol>
				</section>

				<div className="flex items-center justify-center pt-2 md:col-span-2">
                        <button
                            onClick={() => setIsRefModalOpen(true)}
                            className="inline-flex min-h-11 cursor-pointer items-center gap-2 border-2 border-[#003366] bg-white px-6 py-2 font-bold text-[#003366] transition-colors duration-200 hover:bg-[#003366] hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#003366]"
                        >
                            <BookOpen size={20} aria-hidden="true" />
                            Ver Referências
                        </button>
                    </div>

                    <ReferenceModal
                        isOpen={isRefModalOpen}
                        onClose={() => setIsRefModalOpen(false)}
                        references={references}
                    />
			</div>
		</PageLayout>
	)
}

export default Estomias

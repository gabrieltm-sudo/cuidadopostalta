import Illustrations from '../components/Illustrations'
import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import ReferenceModal from '../components/ReferenceModal'
import { BookOpen } from 'lucide-react'

const CateterVenosoCentral = () => {
	const tocItems = [
		{ id: 'o-que-e', label: 'O que é?' },
		{ id: 'cuidados', label: 'Cuidados' },
		{ id: 'diferenca', label: 'Curta x Longa Duração' },
	]

	const [isRefModalOpen, setIsRefModalOpen] = useState(false)
	const references = [
		"AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (Brasil). Protocolo de prevenção de infecção primária da corrente sanguínea associada a dispositivos de acesso vasculares. Versão 1. Brasília, DF: Anvisa, 2025. Disponível em: https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/prevencao-e-controle-de-infeccao-e-resistencia-microbiana/prevencao-das-principais-iras/infeccao-primaria-de-corrente-sanguinea/protocolo-1-prevencao-de-ipcs_1.pdf/@@display-file/file. Acesso em: 9 out. 2026.",
		"CENTERS FOR DISEASE CONTROL AND PREVENTION (CDC). Intravascular catheter-related infection (BSI) prevention guidelines. Atlanta: CDC, 2024. Disponível em: https://www.cdc.gov/infection-control/hcp/intravascular-catheter-related-infection/index.html Acesso em: 9 out. 2026.",
		"BC RENAL. Showering with a hemodialysis catheter. [S. l.]: BC Renal, jun. 2021. Disponível em: https://www.bcrenal.ca/resource-gallery/Documents/Showering%20with%20a%20hemodialysis%20catheter.pdf/ Acesso em: 9 out. 2026. "
	]

	return (
		<PageLayout title="Cateter Venoso Central" tocItems={tocItems}>
			<h2
				id="o-que-e"
				className="scroll-mt-24 mb-6 mt-12 w-full bg-[#003366] px-4 py-3 text-base font-bold text-white sm:text-lg"
			>
				CUIDADOS COM CATETER VENOSO CENTRAL
			</h2>


			<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
				<section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
					<h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
						O que é o cateter venoso central?
					</h3>
					<p className="text-base leading-7 text-gray-700">
						É um tubo de plástico inserido em uma veia do pescoço, virilha ou tórax,
						através de anestesia local ou sedação, até o átrio direito do coração.
					</p>
					<p className="mt-4 text-base leading-7 text-gray-700">
						Em pacientes em hemodiálise, tem como objetivo transportar o sangue até a
						máquina de hemodiálise, com o intuito de fazer a filtragem das impurezas
						presentes no organismo do paciente.
					</p>

                    <Illustrations items={[{"alt":"Ilustração de uma pessoa com cateter e curativo na região do tórax.","caption":"Ilustração de um cateter na região do tórax.","src":"/images/material-equipe/cateter-localizacao.png"}]} />
</section>

				<section
					id="cuidados"
					className="scroll-mt-24 bg-white border-2 border-gray-200 p-6"
				>
					<h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
						Cuidados com o cateter
					</h3>
					<ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
						<li>Manter o curativo seco e limpo;</li>
						<li>Não molhar durante o banho;</li>
						<li>Tentar não dormir para o lado em que o cateter está inserido;</li>
						<li>Atenção com roupas e acessórios para não puxarem o cateter;</li>
						<li>Comunicar a equipe médica e de enfermagem em caso de febre ou dor no local de inserção do cateter.</li>
					</ul>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
						Atenção!
					</h3>
					<ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
						<li>Não dobrar;</li>
						<li>Não quebrar;</li>
						<li>Não sujar;</li>
					</ul>
					<p className="mt-4 rounded border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
						Qualquer sinal de febre, dor intensa, vermelhidão ou vazamento deve ser
						comunicado imediatamente à equipe de saúde.
					</p>
				</section>

				<section
					id="diferenca"
					className="scroll-mt-24 bg-white border-2 border-gray-200 p-6 md:col-span-2"
				>
					<h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
						Diferença entre Cateteres
					</h3>
					<div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
						<div className="rounded border border-gray-200 bg-blue-50 p-5">
							<h4 className="mb-2 text-lg font-bold text-[#003366]">Cateter de curta duração</h4>
							<p className="text-base leading-7 text-gray-700">
								São indicados para início de hemodiálise, em casos de urgência e devem
								ser utilizados pelo menor tempo necessário.
							</p>
						</div>
						<div className="rounded border border-gray-200 bg-gray-50 p-5">
							<h4 className="mb-2 text-lg font-bold text-[#003366]">Cateter de longa permanência</h4>
							<p className="text-base leading-7 text-gray-700">
								São utilizados quando o paciente precisa de acesso vascular mais estável
								por um período prolongado, como em situações de hemodiálise recorrente.
							</p>
						</div>
					</div>
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
                        references={[...references, "Imagem indicada no material da equipe: Memorial Sloan Kettering Cancer Center. https://www.mskcc.org/cancer-care/patient-education/autologous-stem-cell-transplant-guide-patients-caregivers"]}
                    />

			</div>
		</PageLayout>
	)
}

export default CateterVenosoCentral
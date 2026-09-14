import PageLayout from '../components/PageLayout'

const CateterVenosoCentral = () => {
	const tocItems = [
		{ id: 'o-que-e', label: 'O que é?' },
		{ id: 'cuidados', label: 'Cuidados' },
		{ id: 'diferenca', label: 'Curta x Longa Duração' },
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

				<section className="bg-white border-2 border-l-4 border-l-red-600 border-gray-200 p-6">
					<h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
						Atenção!
					</h3>
					<ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
						<li>Não dobrar;</li>
						<li>Não quebrar;</li>
						<li>Não sujar;</li>
					</ul>
					<div className="mt-4 rounded border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
						Qualquer sinal de febre, dor intensa, vermelhidão ou vazamento deve ser
						comunicado imediatamente à equipe de saúde.
					</div>
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
			</div>
		</PageLayout>
	)
}

export default CateterVenosoCentral

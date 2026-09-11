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
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				CUIDADOS COM CATETER VENOSO CENTRAL
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						O que é o cateter venoso central?
					</h3>
					{/* Espaço para o texto */}
				</section>

				<section
					id="cuidados"
					className="scroll-mt-24 bg-white border-2 border-gray-200 p-6"
				>
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Cuidados com o cateter
					</h3>
					{/* Espaço para o texto */}
				</section>

				<section className="bg-white border-2 border-gray-200 border-l-4 border-l-red-600 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Atenção!
					</h3>
					{/* Espaço para o texto */}
				</section>

				<section
					id="diferenca"
					className="scroll-mt-24 bg-white border-2 border-gray-200 p-6 md:col-span-2"
				>
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Diferença entre Cateteres
					</h3>
					{/* Espaço para o texto */}
				</section>
			</div>
		</PageLayout>
	)
}

export default CateterVenosoCentral

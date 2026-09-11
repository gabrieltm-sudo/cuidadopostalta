import PageLayout from '../components/PageLayout'

const Estomias = () => {
	const tocItems = [
		{ id: 'conceito', label: 'Conceito e Tipos' },
		{ id: 'bolsas', label: 'Tipos de Bolsas' },
		{ id: 'cuidados', label: 'Troca e Higiene' },
		{ id: 'atencao', label: 'Fique Atento' },
		{ id: 'direitos', label: 'Direitos' },
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
					{/* Espaço para o texto */}
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Tipos
					</h3>
					{/* Espaço para o texto */}
				</section>
			</div>

			<h2
				id="bolsas"
				className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
			>
				TIPOS DE BOLSAS
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Colostomias
					</h3>
					{/* Espaço para o texto */}
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
					{/* Espaço para o texto */}
				</section>

				<section className="bg-white border-2 border-gray-200 p-6">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Higiene da Bolsa Coletora
					</h3>
					{/* Espaço para o texto */}
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
					{/* Espaço para o texto */}
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
					{/* Espaço para o texto */}
				</section>
			</div>
		</PageLayout>
	)
}

export default Estomias

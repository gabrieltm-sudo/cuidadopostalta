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
							Estinuas urinárias;
						</li>
						<li>
							Nefrosfomia;
						</li>
						<li>
							Vesicostomia/Cistostomia;
						</li>
						<li>
							Ureterostomia/Urostomia;
						</li>
						<li className="font-bold">
							Estomias intestinais;
						</li>
						<li>
							Colostomia (terminal, em alça, duas bocas- que podem ser ascendente, transverso, descendente ou sigmóide.);
						</li>
						<li>
							Ileostomia.
						</li>
					</ul>
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
			</div>
		</PageLayout>
	)
}

export default Estomias

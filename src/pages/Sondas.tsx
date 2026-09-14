import PageLayout from '../components/PageLayout'
import imagemGenerica from '../logos/imagemGenerica.png'
// import sondaGastricaLoc from '../logos/sondaGastricaLoc.png'
// import sondaEntericaLoc from '../logos/sondaEntericaLoc.png'
// import sondaGastricaViaUnica from '../logos/sondaGastricaViaUnica.png'
// import sondaEntericaDuasVias from '../logos/sondaEntericaViaDupla.png'

const ImagePlaceholder = ({ label }: { label: string }) => (
	<div className="flex min-h-40 w-full items-center justify-center border-2 border-dashed border-gray-400 bg-gray-100 p-4 text-center text-sm font-medium leading-5 text-gray-600">
		{label}
	</div>
)

const Sondas = () => {
	const tocItems = [
		{ id: 'enteral', label: 'Sonda Enteral' },
		{ id: 'vesical-alivio', label: 'Vesical de Alívio' },
		{ id: 'vesical-demora', label: 'Vesical de Demora' },
	]

	return (
		<PageLayout title="Cuidados com Sondas" tocItems={tocItems}>
			<h2
				id="enteral"
				className="scroll-mt-24 mb-6 mt-4 w-full bg-[#003366] px-4 py-3 text-xl font-bold text-white sm:text-2xl"
			>
				Sonda Enteral
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Sonda Gástrica
					</h3>
					<p>
						Sonda passada pela boca ou nariz, até o estômago. Indicada quando o
						paciente tem dificuldade para engolir o alimento por conta própria.
						Possui uma via de administração para medicamentos e dieta.
					</p>
					<div className="mt-5">
						<ImagePlaceholder label="Localização da Sonda Gástrica (Via única)" />
					</div>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Sonda Entérica
					</h3>
					<p>
						Sonda passada pela boca ou nariz, garganta, esôfago, estômago até o
						início do intestino. Indicada quando o paciente tem dificuldade para
						engolir o alimento por conta própria e tem risco de refluxo gástrico.
						Possui duas vias de administração, uma para dieta e outra para
						medicação.
					</p>
					<div className="mt-5">
						<ImagePlaceholder label="Localização da Sonda Entérica (Duas vias)" />
					</div>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7 md:col-span-2">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Cuidados com a administração de dieta
					</h3>
					<ol className="list-decimal space-y-3 pl-5 leading-7 marker:font-bold">
						<li>Higienize as mãos;</li>
						<li>Encha o frasco com o volume prescrito;</li>
						<li>Mantenha a cabeceira do paciente elevada de 45° a 90°;</li>
						<li>Conecte o equipo ao frasco e preencha-o com a dieta;</li>
						<li>
							Conecte o equipo a sonda e passe a dieta no tempo recomendado e em
							temperatura ambiente (20°C a 35°C). NÃO DEVE ESTAR FRIA NEM MUITO
							QUENTE;
						</li>
						<li>
							Após passar a dieta lave a sonda com água (filtrada/fervida em
							temperatura ambiente);
						</li>
						<li>Feche a sonda;</li>
						<li>
							Na pia da cozinha lave o frasco e o equipo com detergente e água.
							Não deixe exposto ao Sol;
						</li>
						<li>
							Guarde o frasco e o equipo em uma vasilha limpa e com tampa,
							preferencialmente, na geladeira.
						</li>
						<li>O frasco e o equipo podem ser reutilizados durante 5 dias.</li>
					</ol>
					<p className="mt-4">
						<b>OBS:</b> Após o término da dieta, mantenha a cabeceira do paciente
						elevada de 45° a 90° por <b>30 minutos</b>.
					</p>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						Quando trocar a sonda?
					</h3>
					<ul className="list-disc space-y-3 pl-5 text-base leading-7">
						<li>Sonda Ressecada, rachada ou dobrada;</li>
						<li>Sonda obstruída;</li>
						<li>Tração ou retirada acidental;</li>
						<li>Apenas enfermeiros e médicos podem realizar a troca;</li>
						<li>Se houver dúvida, procure a ESF (postinho) mais próxima.</li>
					</ul>
					<h4 className="mb-2 mt-5 text-base font-semibold leading-6 text-[#003366]">Fixação da sonda</h4>
					<p>
						FIXAÇÃO EM I: Para a troca de fixação, recortar uma fita de micropore
						em formato de I e colar uma parte no nariz e outra na sonda. Cuide da
						pele, mantendo a região da fixação sempre limpa.
					</p>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Higiene Bucal
					</h3>
					<p>
						Mesmo com as sondas é importante realizar a higiene da boca para
						evitar o acúmulo de microrganismos e reduzir o risco de infecções
						respiratórias. Utilize: escovas de dente flexíveis e creme dental ou
						abaixadores de língua de madeira com gaze na ponta e enxaguante
						bucal;
					</p>
					<h4 className="mt-5 mb-2 font-bold text-[#003366]">
						Como realizar a higiene bucal?
					</h4>
					<ul className="list-disc space-y-3 pl-5 leading-7">
						<li>
							Movimentos de cima para baixo com a escova ou circulares com a
							gaze;
						</li>
						<li>Limpe a parte de dentro e de fora dos dentes e gengivas;</li>
						<li>
							Limpe a superfície dos dentes com movimento suave de vaivém;
						</li>
						<li>Limpe a língua puxando as sujidades para fora da boca;</li>
						<li>
							Nunca coloque os dedos dentro da boca da pessoa em que está sendo
							realizada a higiene.
						</li>
					</ul>
				</section>
			</div>

			<h2
				id="vesical-alivio"
				className="scroll-mt-24 mb-6 mt-10 w-full bg-[#003366] px-4 py-3 text-xl font-bold text-white sm:text-2xl"
			>
				CUIDADOS COM SONDA VESICAL DE ALÍVIO
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						O que é?
					</h3>
					<p>
						É um dispositivo invasivo que percorre a uretra até a bexiga, para
						permitir que a urina presente na bexiga seja esvaziada e após isso é
						removido e descartado.
					</p>
					<h4 className="mt-5 mb-2 font-bold text-[#003366]">
						Quem pode fazer esse procedimento?
					</h4>
					<p>
						Pode ser feito pelo enfermeiro e médico. Também pode ser pelos
						pacientes e familiares devidamente capacitados! Procurar equipe de
						saúde se: Grande resistência ao passar a sonda de alívio.
					</p>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Materiais Para realizar a sondagem
					</h3>
					<ul className="list-disc space-y-3 pl-5 text-base leading-7">
						<li>Sonda de alívio;</li>
						<li>Lidocaína;</li>
						<li>Toalha limpa e luvas;</li>
						<li>Sabão neutro;</li>
						<li>Água;</li>
						<li>Recipiente para desprezar a urina;</li>
					</ul>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7 md:col-span-2">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Passo a Passo de como inserir a sonda
					</h3>
					<ol className="list-decimal space-y-3 pl-5 leading-7">
						<li>Separe os materiais da sondagem e coloque em ambiente limpo;</li>
						<li>Lave as mãos e em seguida o órgão genital com água e sabão;</li>
						<li>
							Escolha uma posição confortável. Homens: deitado, recostado no
							leito (cama), sentado ou em pé; Mulheres: recostada no leito:
							dobrar as pernas e acomodar o espelho para visualizar a região
							urinária;
						</li>
						<li>Colocar as luvas;</li>
						<li>
							Colocar lubrificante (lidocaína) na ponta da sonda (local que será
							inserido na uretra);
						</li>
						<li>Localizar a uretra;</li>
						<li>Insira o cateter até urina sair;</li>
						<li>Colete a urina em um recipiente de plástico;</li>
						<li>Retirar o cateter delicadamente;</li>
						<li>Secar a genitália e colocar o cateter no lixo;</li>
						<li>Desprezar a urina no vaso sanitário.</li>
					</ol>
					<div className="mt-6 border-2 border-gray-400 bg-gray-100 p-4">
						Observação: Esteja atento a sinais de infecção, irritação ou outros
						problemas, como sangramento ou dor durante o procedimento. Relate
						qualquer problema ao profissional de saúde mais próximo.
						<img src={imagemGenerica} alt={"Imagem de alerta sobre sinais de infecção"} className={"mx-auto max-w-full h-80"} />
					</div>
				</section>
			</div>

			<h2
				id="vesical-demora"
				className="scroll-mt-24 mb-6 mt-10 w-full bg-[#003366] px-4 py-3 text-xl font-bold text-white sm:text-2xl"
			>
				CUIDADOS COM SONDA VESICAL DE DEMORA
			</h2>

			<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7">
					<h3 className="text-[#003366] text-xl font-bold mb-4 border-b-2 border-[#003366] pb-2">
						O que é?
					</h3>
					<p>
						É um dispositivo invasivo que percorre a uretra até a bexiga, para
						permitir que a urina presente na bexiga seja esvaziada. A sonda fica
						fixa dentro da bexiga, com um balonete insuflado.
					</p>
					<div className="mt-5">
						<ImagePlaceholder label="Posição correta da sonda" />
					</div>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Fixação da Sonda
					</h3>
					<p>
						Em pacientes mulheres a sonda deverá ser fixada na parte interna da
						coxa. Nos pacientes homens a sonda deve ser sempre fixada em uma
						posição mais natural do pênis.
					</p>
					<div className="mt-5">
						<ImagePlaceholder label="Locais de fixação" />
					</div>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7 md:col-span-2">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Cuidados com a Sonda
					</h3>
					<ul className="list-disc text-justify space-y-3 pl-5 leading-7 marker:font-bold marker:text-[#003366] marker:text-lg">
						<li>
							Sempre manusear a bolsa coletora e a sonda com as mãos limpas e
							com cuidado.
						</li>
						<li>Fazer a higiene intima após o paciente evacuar.</li>
						<li>Após o banho sempre deixar a região seca.</li>
						<li>
							A bolsa não deve ser levantada acima do nível da bexiga do
							paciente. Quando o paciente estiver deitado a bolsa coletora deve
							estar no lado da cama, como na imagem. Se o paciente ficar sentado
							e caminhar a bolsa deve estar próxima a altura do joelho.
						</li>
						<li>Não deixar a sonda tocar no chão.</li>
						<li>
							Para esvaziar o saco coletor nunca desconectá-lo da sonda, deverá
							levar um recipiente até a pessoa e dessa forma esvaziá-la.
						</li>
						<li>Esvaziar a sonda a cada turno ou quando necessário.</li>
						<li>
							Cuidar a cor, textura, se há presença de sangue, caso haja
							alteração, avisar a ESF (postinho) da sua região para que o
							enfermeiro ou médico faça a avaliação.
						</li>
						<li>Não puxar a sonda.</li>
						<li>Sempre deixar em uma posição confortável.</li>
						<li>
							Sempre quando for esvaziar ou movimentar o paciente (mudar de
							posição, deitar) é necessário clampear (fechar) a sonda para evitar
							o retorno da urina.
						</li>
					</ul>
				</section>
			</div>
		</PageLayout>
	)
}

export default Sondas
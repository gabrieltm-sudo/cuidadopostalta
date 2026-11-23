import Illustrations from '../components/Illustrations'
import { useState } from 'react'
import PageLayout from '../components/PageLayout'
import CarouselImages from '../components/CarouselImages'
import ImageFocus from '../components/ImageFocus'

import ReferenceModal from '../components/ReferenceModal'
import { BookOpen } from 'lucide-react'

import vesicalPosicao from '../images/Sondas/vesical-posicao.png'
import vesicalFixacaoFeminina from '../images/Sondas/vesical-fixacao-feminina.png'
import vesicalFixacaoMasculina from '../images/Sondas/vesical-fixacao-masculina.png'
import vesicalBolsa from '../images/Sondas/vesical-bolsa.png'
import sondaGastricaLoc from '../images/Sondas/sondaGastricaLoc.png'
import sondaEntericaLoc from '../images/Sondas/sondaEntericaLoc.png'
import sondaGastricaViaUnica from '../images/Sondas/sondaGastricaViaUnica.png'
import sondaEntericaDuasVias from '../images/Sondas/sondaEntericaViaDupla.png'

const fonteCartilha = 'Cartilha de cuidados pós-alta hospitalar do projeto, p. 11.'

const sondaGastrica = [
  { id: 1, image: sondaGastricaLoc, text: 'Localização da Sonda Gástrica (Via única)', alt: 'Imagem ilustrativa mostrando a localização da sonda gástrica' },
  { id: 2, image: sondaGastricaViaUnica, text: 'Via única', alt: 'Imagem ilustrativa mostrando a sonda gástrica de via única' },
];

const sondaEnterica = [
	{ id: 1, image: sondaEntericaLoc, text: 'Localização da Sonda Entérica (Duas vias)', alt: 'Imagem ilustrativa mostrando a localização da sonda entérica' },
	{ id: 2, image: sondaEntericaDuasVias, text: 'Via única', alt: 'Imagem ilustrativa mostrando a sonda entérica de duas vias' },
]

const Sondas = () => {
	const tocItems = [
		{ id: 'enteral', label: 'Sonda Enteral' },
		{ id: 'vesical-alivio', label: 'Vesical de Alívio' },
		{ id: 'vesical-demora', label: 'Vesical de Demora' },
	]

	const [isRefModalOpen, setIsRefModalOpen] = useState(false);
	const references = [
		"Ministério da Saúde — Orientações para o cuidado com o paciente no ambiente domiciliar. https://bvsms.saude.gov.br/bvs/publicacoes/orientacoes_cuidado_paciente_ambiente_domiciliar.pdf",
		"Sondas, Catéteres e Drenos – Quero Instrumentar FMRP-USP https://share.google/RGsrWN80tChVmguPs",
		"Tipos de drenos cirúrgicos e cuidados da enfermagem | Artmed https://share.google/2W57m991VrcUBbha3",
		"ARAÚJO, I. S.; et al.Guia multiprofissional de orientação para pacientes em uso de nutrição enteral domiciliar. Petrolina: HEWAB, 2017. Disponível em: https://nutritotal.com.br/pro/wp-content/uploads/2019/03/Guia_Nutri%C3%A7%C3%A3o_Enteral.pdf",
		"BRASIL. Ministério da Saúde. Mantenha seu sorriso fazendo a higiene bucal corretamente. Brasília, 2012. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/mantenha_sorriso_fazendo_higiene_bucal.pdf - Link Quebrado (?)",
		"Brasil. Ministério da Saúde. Manual de terapia nutricional na atenção especializada hospitalar no âmbito do Sistema Único de Saúde – SUS [recurso eletrônico]. Brasília: Ministério da Saúde, 2016. Disponível em: https://bvsms.saude.gov.br/bvs/publicacoes/manual_terapia_nutricional_atencao_especializada.pdf",
		"MARQUIORE, L. F; et al. Programa de assistência odontológica a pacientes de transplante da UFMG: orientações de higiene bucal e cuidados. Maria Elisa de Souza e Silva - Belo Horizonte: Faculdade de Odontologia, 2021. Disponível em: https://www.odonto.ufmg.br/ecv-odr/wp-content/uploads/sites/23/2021/05/PAOPT-Cartilha-ISBN.pdf",
		"POTTER, Patricia; PERRY, Anne Griffin. Fundamentos da Enfermagem. Rio de Janeiro: Elsevier, 2013.",
		"SOCIEDADE BRASILEIRA DE UROLOGIA (SBU). Recomendações SBU 2016. Cateterismo Vesical. Intermitente. 2016. Disponível em: https://portaldaurologia.org.br/medicos/wp-content/uploads/2016/11/Recomenda%C3%A7%C3%B5es_Cateterismo-Vesical-SBU-2016_final.pdf",
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

				<p className="mt-4 rounded border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800 md:col-span-2">
					Deve ser utilizada apenas a dieta prescrita, não sendo permitido o uso de outros alimentos, como leite, sucos, vitaminas, sopas, etc.
				</p>
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
						<CarouselImages steps={sondaGastrica} />
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
						<CarouselImages steps={sondaEnterica} />
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
				
                    <Illustrations items={[{"alt":"Ilustração de uma pessoa com cabeceira elevada recebendo dieta por sonda.","caption":"Ilustração da administração de dieta por sonda.","src":"/images/material-equipe/sonda-administracao-dieta.png"}]} />
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
				
                    <Illustrations items={[{"alt":"Ilustração de manuseio da sonda com indicação para evitar puxá-la.","caption":"Atenção ao manuseio para evitar a tração da sonda.","src":"/images/material-equipe/sonda-evitar-tracao.png"}]} />
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
						<Illustrations items={[{ src: vesicalPosicao, alt: 'Desenho da sonda passando pela uretra e do balonete dentro da bexiga.', caption: 'Posição da sonda vesical de demora na bexiga.', source: fonteCartilha }]} />
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
						<Illustrations items={[
							{ src: vesicalFixacaoFeminina, alt: 'Ilustração da sonda fixada na coxa da paciente.', caption: 'Exemplo de fixação em paciente mulher.', source: fonteCartilha },
							{ src: vesicalFixacaoMasculina, alt: 'Ilustração de locais de fixação externa em paciente homem.', caption: 'Exemplos de fixação em paciente homem.', source: fonteCartilha },
						]} />
					</div>
				</section>

				<section className="bg-white border-2 border-gray-200 p-6 text-base leading-7 md:col-span-2">
					<h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
						Cuidados com a Sonda
					</h3>
					<figure className="mb-5 max-w-xs">
						<ImageFocus src={vesicalBolsa} alt="Bolsa coletora de urina pendurada na lateral da cama." className="mx-auto max-w-full" />
						<figcaption className="mt-2 text-sm text-gray-700">Bolsa coletora na lateral da cama. Fonte: {fonteCartilha}</figcaption>
					</figure>
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

export default Sondas

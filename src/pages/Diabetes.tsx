import Illustrations from '../components/Illustrations'
import { useState } from 'react'
import ReferenceModal from '../components/ReferenceModal'
import { BookOpen } from 'lucide-react'

import PageLayout from '../components/PageLayout'
import ImageFocus from '../components/ImageFocus'
import imagemGenerica from '../images/Diabetes/diabeteImagem.png'
import comoPinçar from '../images/Diabetes/comoPinçar.png'
import comoAplicar from '../images/Diabetes/comoAplicar.png'
import locaisAplicaçao from '../images/Diabetes/locaisAplicaçao.png'

const Diabetes = () => {

    
    const [isRefModalOpen, setIsRefModalOpen] = useState(false);
    const references = [
        "BRASIL. Ministério da Saúde. Diabetes (diabetes mellitus). Brasília, DF: Ministério da Saúde, [s. d.]. Disponível em: https://www.gov.br/saude/pt-br/assuntos/saude-de-a-a-z/d/diabetes Acesso em: 9 out. 2026.",
        "BRASIL. Ministério da Saúde. Comissão Nacional de Incorporação de Tecnologias no Sistema Único de Saúde. Protocolo Clínico e Diretrizes Terapêuticas: diabete melito tipo 2. Brasília, DF: Ministério da Saúde, 2026. Disponível em: https://www.gov.br/saude/pt-br/assuntos/pcdt/d/diabete-melito-tipo-2.pdf/view Acesso em: 9 out. 2026.",
        "HOSPITAL UNIVERSITÁRIO DA UNIVERSIDADE FEDERAL DO RIO GRANDE (HU-FURG). Cuidados com o armazenamento, preparo e administração de insulina com seringa. Rio Grande, RS: HU-FURG, [s. d.]. Disponível em: https://www.gov.br/hubrasil/pt-br/hospitais-universitarios/regiao-sul/hu-furg/saude/areas-de-apoio-e-de-diagnostico/FORMCA1.PDF Acesso em: 9 out. 2026.",
        "BRASIL. Ministério da Saúde. Manual do pé diabético: estratégias para o cuidado da pessoa com doença crônica. Brasília, DF: Ministério da Saúde, 2016. Disponível em: https://www.gov.br/saude/pt-br/centrais-de-conteudo/publicacoes/guias-e-manuais/2016/manual-do-pe-diabetico.pdf/view Acesso em: 9 out. 2026.",
        "Brasil. Ministério da Saúde. Secretaria de Atenção à Saúde. Departamento de Atenção Básica. Estratégias para o cuidado da pessoa com doença crônica : diabetes mellitus / Ministério da Saúde, Secretaria de Atenção à Saúde, Departamento de Atenção Básica. – Brasília : Ministério da Saúde, 2013. 160 p. : il. (Cadernos de Atenção Básica, n. 36). Acesso em: 20 set. 2024.",        "Diabetes (diabetes mellitus) — Ministério da Saúde https://share.google/Xky9WwwD4b8TEqWSa",
        "Sociedade Brasileira de Diabetes. Diretrizes da Sociedade Brasileira de Diabetes 2019-2020. Disponível em: https://www.diabetes.org.br/profissionais/images/DIRETRIZES-COMPLETA-2019-2020.pdf Acesso em: 20 set. 2024.",
        "Conselho Regional de Enfermagem, Rio Grande do Sul. Protocolos de Enfermagem na Atenção primária à Saúde: Hipertensão e Diabetes. Porto Alegre: Conselho Regional de Enfermagem, Rio Grande do Sul, 2020. Disponível em:  https://www.portalcoren-rs.gov.br/docs/ProtocolosEnfermagem/ProtocoloEnfermagemHipertensaoDiabetes.pdf Acesso em: 20 set. 2024."
    ]
    
    return (
        <PageLayout
            title="Diabetes Mellitus Tipo 1 e 2"
            tocItems={[
                { id: 'o-que-e', label: 'O que é?' },
                { id: 'tipo-1', label: 'Diabetes Mellitus Tipo 1' },
                { id: 'sintomas-tipo-1', label: 'Sintomas do Tipo 1' },
                { id: 'tratamento', label: 'Tratamento' },
                { id: 'tipo-2', label: 'Diabetes Mellitus Tipo 2' },
                { id: 'aplicacao-insulina', label: 'Aplicação da insulina (tipos 1 e 2)' },
                { id: 'locais-aplicacao', label: 'Locais para aplicação' },
                { id: 'cuidados-insulina', label: 'Cuidados com a Insulina' },
                { id: 'descarte', label: 'Descarte' },
                { id: 'cuidados-saude', label: 'Cuidados com a Saúde' },
            ]}
        >
            <div className="text-base leading-7">

                <section>
                    <h2 id="o-que-e" className="bg-[#003366] py-2 text-center font-bold text-white">
                        O que é?
                    </h2>
                
                    <div className="mt-4 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(18rem,0.7fr)] lg:items-center">
                        <div className="space-y-4">
                            <p>
                                Diabetes mellitus é uma doença em que o organismo não produz
                                insulina suficiente ou não consegue utilizá-la adequadamente.
                                Com isso, a glicose se acumula no sangue e pode causar
                                alterações em diferentes órgãos.
                            </p>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="bg-white border-2 border-gray-200 p-4 leading-7">
                                    <h3 className="mb-1 font-semibold text-[#0A4D68]">Tipo 1</h3>
                                    <p>
                                        O corpo deixa de produzir insulina. O tratamento exige
                                        reposição de insulina todos os dias.
                                    </p>
                                </div>
                                <div className="bg-white border-2 border-gray-200 p-4 leading-7">
                                    <h3 className="mb-1 font-semibold text-[#0A4D68]">Tipo 2</h3>
                                    <p>
                                        O corpo utiliza a insulina com dificuldade. Alimentação,
                                        atividade física e medicamentos ajudam no controle.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <ImageFocus src={imagemGenerica} alt="Ilustração sobre diabetes" className="mx-auto max-w-full" />
                    </div>
                </section>

                <header id="tipo-1" className="bg-blue-900 text-white px-6 py-4 border-b-4 border-blue-700 mt-12">
                    <h1 className="text-2xl font-bold sm:text-3xl">Diabetes Mellitus Tipo 1</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-6">
                        <section className="bg-white border-2 border-gray-200 p-6 h-full">
                            <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">O que é?</h2>
                            <p className="mb-6 text-base leading-7 text-gray-700">
                                Doença autoimune em que o organismo deixa de produzir insulina, elevando a glicose no sangue.
                            </p>

                            <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">O que é Hipoglicemia?</h2>
                            <p className="text-base leading-7 text-gray-700">
                                É o baixo nível de glicose no sangue.
                            </p>
                        </section>
                    </div>

                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h2 id="sintomas-tipo-1" className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Sintomas</h2>
                        <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                            <li>Necessidade de urinar com frequência;</li>
                            <li>Perda de peso;</li>
                            <li>Fome excessiva;</li>
                            <li>Sede excessiva.</li>
                        </ul>
                    </section>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h2 id="tratamento" className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Tratamento</h2>
                        <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                            <li>Essa doença não possui cura, mas o tratamento pode ajudar.</li>
                            <li>O tratamento visa a manutenção dos níveis de glicose no sangue com acompanhamento regular, insulinoterapia, dieta e exercícios físicos.</li>
                            <li>É necessário injeções diárias de insulina para manterem a glicose no sangue em valores considerados normais (o estado de normalidade da glicemia em jejum é de 70 mg/dl a 100 mg/dl).</li>
                        </ul>
                    
                    <Illustrations items={[{"alt":"Ilustração de uma medição de glicose com glicosímetro.","caption":"Medição de glicose com glicosímetro. O valor desenhado na tela é apenas ilustrativo.","source":"Ilustração identificada como feita por IA no material fornecido pela equipe.","src":"/images/material-equipe/diabetes-glicemia.png"}]} />
</section>

                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Regular x NPH</h2>
                        <ul className="space-y-4 text-base leading-7 text-gray-700">
                            <li className="bg-blue-50 p-3 border border-blue-100">
                                <strong className="text-blue-900 block mb-1">A insulina Regular:</strong> 
                                Tem ação rápida, duração de 8-10h, as doses são feitas 30 minutos antes das refeições e tem o aspecto cristalino.
                            </li>
                            <li className="bg-gray-50 p-3 border border-gray-200">
                                <strong className="text-blue-900 block mb-1">A insulina NPH:</strong> 
                                Tem ação intermediária, duração de 12-18h e tem o aspecto turvo.
                            </li>
                        </ul>
                    </section>
                </div>

                <header id="tipo-2" className="bg-blue-900 text-white px-6 py-4 border-b-4 border-blue-700 mt-12">
                    <h1 className="text-2xl font-bold sm:text-3xl">Diabetes Mellitus Tipo 2</h1>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">O que é?</h2>
                        <p className="text-base leading-7">
                            O organismo utiliza a insulina com dificuldade e pode produzir menos desse hormônio. Isso aumenta a glicose no sangue. O acompanhamento inclui alimentação, atividade física e medicamentos conforme prescrição.
                        </p>
                    </section>

                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Sintomas</h2>
                        <ul className="list-disc space-y-3 pl-5 text-base leading-7">
                            <li>Fome frequente;</li>
                            <li>Sede constante;</li>
                            <li>Formigamento nos pés e mãos;</li>
                            <li>Vontade de urinar diversas vezes;</li>
                            <li>Feridas que demoram para cicatrizar;</li>
                            <li>Visão embaçada.</li>
                        </ul>
                    </section>

                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Tratamento e Prevenção</h2>
                        <p className="text-base leading-7">
                            O tratamento é feito por meio de cuidados individuais, como dieta
                            e atividade física, e do uso de medicamentos antidiabéticos. A
                            prevenção se dá a partir de hábitos saudáveis, com uma boa
                            alimentação e a prática de atividades físicas.
                        </p>
                    </section>

                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Problemas Associados</h2>
                        <p className="text-base leading-7">A DM pode estar acompanhada de outros problemas de saúde como:</p>
                        <ul className="mt-3 list-disc space-y-2 pl-5 text-base leading-7">
                            <li>Triglicerídios elevados;</li>
                            <li>Obesidade;</li>
                            <li>Sobrepeso;</li>
                            <li>Sedentarismo;</li>
                            <li>Pressão alta.</li>
                        </ul>
                    </section>
                </div>

                <section className="bg-white border-2 border-gray-200 p-6">
                    <h2 id="aplicacao-insulina" className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Modo de aplicação da insulina na seringa</h2>
                    <p className="mb-4 rounded border border-blue-200 bg-blue-50 p-4">Estas orientações se aplicam a quem usa insulina, tanto no tipo 1 quanto no tipo 2. Siga a prescrição e a técnica ensinada pela equipe de saúde.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                            <ol className="mb-6 list-decimal space-y-4 pl-5 text-base leading-7 text-gray-700">
                                <li>Lavar as mãos com água e sabão antes da preparação da insulina;</li>
                                <li>Proceder a limpeza (álcool 70% e algodão) na borracha do frasco de insulina;</li>
                                <li>O frasco de insulina deve ser rolado gentilmente entre as mãos para misturá-la, antes de aspirar seu conteúdo;</li>
                                <li>Não é necessário limpar o local de aplicação com álcool.</li>
                            </ol>
                            <h3 className="mb-2 mt-6 text-base font-semibold leading-6 text-[#003366]">Modo de aplicação:</h3>
                            <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                                <li>O local deve ser pinçado levemente entre os dois dedos e a agulha deve ser introduzida completamente, em ângulo de 90 graus e em indivíduos magros em ângulo de 45 graus.</li>
                                <li>Esperar cinco segundos após a aplicação antes de retirar a agulha do subcutâneo, para garantir que toda dose de insulina foi aplicada.</li>
                            </ul>
                        </div>

                        <div className="flex flex-col gap-4 justify-center">
                            <ImageFocus src={comoPinçar} alt="Ilustração de como pinçar a pele para aplicação da insulina" className="mx-auto max-w-full" />
                            <ImageFocus src={comoAplicar} alt="Ilustração: Ângulos de aplicação da agulha na pele (90º e 45º)" className="mx-auto max-w-full" />
                        </div>
                    </div>
                </section>

                <section className="bg-white border-2 border-gray-200 p-6 mt-12">
                    <h2 id="locais-aplicacao" className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Locais para aplicação</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                        <p className="text-base leading-7 text-gray-700 sm:text-lg">
                            O local de aplicação deve estar limpo e seco, realizando o rodízio dos pontos de aplicação.
                        </p>
                        <ImageFocus src={locaisAplicaçao} alt="Ilustração de locais para aplicação da insulina" className="mx-auto max-w-full" />
                    </div>
                </section>

                <h2
                    id="cuidados-insulina"
                    className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
                >
                    CUIDADOS GERAIS
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
                        <h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                            Cuidados com a Insulina
                        </h3>
                        <ul className="list-disc space-y-3 pl-5 text-base leading-7">
                            <li>Anotar a data de abertura no frasco;</li>
                            <li>Não congelar o frasco da insulina, pois perde seu efeito;</li>
                            <li>Quando for armazenar, não deixar na porta da geladeira;</li>
                            <li>Não reutilizar a agulha;</li>
                            <li><strong>Insulina lacrada:</strong> Sob refrigeração entre 2 e 8°C, com validade de 2 a 3 anos a partir da data de fabricação.</li>
                            <li><strong>Insulina em uso (frasco ou caneta descartável):</strong> sob refrigeração, entre 2 e 8°C e em temperatura ambiente até 30°C. Com validade de 4 a 8 semanas após a data de abertura.</li>
                            <li><strong>Insulina em uso (caneta recarregável contendo refil):</strong> temperatura ambiente até 30°C com validade de 4 a 8 semanas após a data de abertura.</li>
                        </ul>
                    </section>

                    <section id="descarte" className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
                        <h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                            Descarte da seringa e da agulha
                        </h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <p className="mb-4 text-base leading-7">
                                    Descartar em um recipiente próprio: rígido e de boca larga. Garrafa de amaciante vazia.
                                </p>
                                <div className="mt-4 bg-gray-100 border-2 border-gray-400 p-4 font-semibold text-gray-800">
                                    OBS: Quando cheia, descarte a garrafa na ESF (postinho).
                                </div>
                            </div>
                            <div className="space-y-3 font-bold text-red-700 flex flex-col justify-center">
                                <p className="flex items-center gap-2"><span>X</span> Não usar Garrafa PET</p>
                                <p className="flex items-center gap-2"><span>X</span> Não jogar no Lixo Comum</p>
                            </div>
                        </div>
                    </section>
                </div>

                <h2
                    id="cuidados-saude"
                    className="scroll-mt-24 bg-[#003366] text-white font-bold py-3 px-4 w-full mb-6 mt-12"
                >
                    CUIDADOS COM A SAÚDE DA PESSOA QUE VIVE COM DIABETES
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                            Neuropatia Diabética
                        </h3>
                        <p className="text-base leading-7">
                            O diabetes pode causar danos aos nervos, com formigamento e alteração da sensibilidade. Examine os pés diariamente e mantenha o acompanhamento com a equipe de saúde.
                        </p>
                    </section>

                    <section className="bg-white border-2 border-gray-200 p-6">
                        <h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                            Problemas nos olhos
                        </h3>
                        <ul className="list-disc space-y-3 pl-5 text-base leading-7">
                            <li>Glaucoma;</li>
                            <li>Catarata;</li>
                            <li>Retinopatia diabética.</li>
                        </ul>
                    </section>

                    <section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
                        <h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                            Problemas arteriais e amputações
                        </h3>
                        <p className="text-base leading-7 mb-4">A maioria das amputações são evitáveis com:</p>
                        <ul className="list-disc space-y-3 pl-5 text-base leading-7">
                            <li>Cuidados regulares de examinar diariamente os pés, principalmente entre os dedos;</li>
                            <li>Utilizar calçados adequados;</li>
                            <li>Evitar andar descalço;</li>
                            <li>Inspecionar e palpar o interior dos sapatos;</li>
                            <li>Usar cremes e hidratantes, exceto entre os dedos;</li>
                            <li>Não cortar calos ou verrugas, não tirar cutículas ou cantos das unhas;</li>
                            <li>Lavar diariamente os pés, secando-os, especialmente entre os dedos;</li>
                            <li>Pacientes com DM podem apresentar feridas com difícil cicatrização.</li>
                        </ul>
                    </section>

                    <section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
                        <h3 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                            Alteração de humor, ansiedade e depressão
                        </h3>
                        <p className="text-base leading-7">
                            O diagnóstico pode afetar o bem-estar emocional. Converse com a equipe de saúde e procure apoio profissional quando necessário.
                        </p>
                    </section>
                </div>
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
export default Diabetes;
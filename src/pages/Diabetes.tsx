import PageLayout from '../components/PageLayout'
import imagemGenerica from '../logos/diabeteImagem.png'
import comoPinçar from '../logos/comoPinçar.png'
import comoAplicar from '../logos/comoAplicar.png'
import locaisAplicaçao from '../logos/locaisAplicaçao.png'

const ImagePlaceholder = ({ label }: { label: string }) => (
    <div className="flex min-h-40 w-full items-center justify-center border-2 border-dashed border-gray-400 bg-gray-100 p-4 text-center font-medium text-gray-600">
        {label}
    </div>
)

const Diabetes = () => (
    <PageLayout
        title="Diabetes Mellitus Tipo 1 e 2"
        tocItems={[
            { id: 'o-que-e', label: 'O que é?' },
            { id: 'tipo-1', label: 'Diabetes Mellitus Tipo 1' },
            { id: 'sintomas-tipo-1', label: 'Sintomas do Tipo 1' },
            { id: 'tratamento', label: 'Tratamento' },
            { id: 'aplicacao-insulina', label: 'Aplicação da insulina' },
            { id: 'tipo-2', label: 'Diabetes Mellitus Tipo 2' },
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
                    <img src={imagemGenerica} alt="Ilustração sobre diabetes" className="mx-auto max-w-full" />
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
                            Doença autoimune, que atrapalha a produção de insulina. Ocasionando aumento nas taxas de glicemia.
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
                        <li>O tratamento visa a manutenção dos níveis normais de açúcar no sangue com acompanhamento regular, insulinoterapia, dieta e exercícios físicos.</li>
                        <li>É necessário injeções diárias de insulina para manterem a glicose no sangue em valores considerados normais (o estado de normalidade da glicemia em jejum é de 70 mg/dl a 100 mg/dl).</li>
                    </ul>
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

            <section className="bg-white border-2 border-gray-200 p-6">
                <h2 id="aplicacao-insulina" className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Modo de aplicação da Insulina na seringa</h2>
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
                        <img src={comoPinçar} alt="Ilustração de como pinçar a pele para aplicação da insulina" className="mx-auto max-w-full" />
                        <img src={comoAplicar} alt="Ilustração: Ângulos de aplicação da agulha na pele (90º e 45º)" className="mx-auto max-w-full" />
                    </div>
                </div>
            </section>

            <header id="tipo-2" className="bg-blue-900 text-white px-6 py-4 border-b-4 border-blue-700 mt-12">
                <h1 className="text-2xl font-bold sm:text-3xl">Diabetes Mellitus Tipo 2</h1>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <section className="bg-white border-2 border-gray-200 p-6">
                    <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">O que é?</h2>
                    <p className="text-base leading-7">
                        É a perda progressiva e ressitência a insulina, hormônio responsável
                        pelo equilibrio de açúcar (glicose) no sangue. Suas manifestações
                        ocorrem geralmente na idade adulta (após os 40 anos). Ocorre
                        principalmente em pessoas com excesso de peso, comportamento
                        sedentário, hábitos alimentares não saudáveis e história familiar
                        de diabetes.
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

            <section className="bg-white border-2 border-gray-200 p-6 mt-12">
                <h2 id="locais-aplicacao" className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">Locais para aplicação</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
                    <p className="text-base leading-7 text-gray-700 sm:text-lg">
                        O local de aplicação deve estar limpo e seco, realizando o rodízio dos pontos de aplicação.
                    </p>
                    <img src={locaisAplicaçao} alt="Ilustração de locais para aplicação da insulina" className="mx-auto max-w-full" />
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
                        A neuropatia costuma vir acompanhada da diminuição da energia, da mobilidade, da satisfação com a vida e do envolvimento com as atividades sociais. Tanto as alterações nos vasos sanguíneos quanto no metabolismo podem causar danos aos nervos periféricos.
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
                        Ao receber o diagnóstico de diabetes, muitas pessoas apresentam várias reações emocionais, como choque, negação, entre outras. O mental e o emocional podem ser afetados com o diagnóstico de alguma doença crônica, como o diabetes. Procure ajuda profissional!
                    </p>
                </section>
            </div>
        </div>
    </PageLayout>
)

export default Diabetes;
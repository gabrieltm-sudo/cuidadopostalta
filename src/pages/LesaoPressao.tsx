import PageLayout from '../components/PageLayout'
import locaisLesoes from '../logos/locaisAparecimentoLesaoPressao.png'
import imagemGenerica from '../logos/imagemGenerica.png'
import lesoesAparecimento from '../logos/sinaisAparecem.png'
import lesoesAparecimento2 from '../logos/sinaisAparecem1.png'

const LesaoPorPressao = () => {
    const tocItems = [
        { id: 'o-que-e', label: 'O que é?' },
        { id: 'como-evitar', label: 'Como evitar?' },
        { id: 'sinais', label: 'Quais os sinais?' },
        { id: 'locais', label: 'Principais locais' },
        { id: 'o-que-fazer', label: 'O que fazer?' },
    ]

    return (
        <PageLayout title="Lesão por Pressão" tocItems={tocItems}>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <section id="o-que-e" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6">
                    <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                        O que é?
                    </h2>
                    <p className="text-base leading-7">
                        São feridas causadas pela falta ou diminuição da circulação sanguínea.
                        Isso ocorre pela pressão feita na pele por estar muito tempo na mesma
                        posição. Essas lesões provocam dor e desconforto.
                    </p>
                </section>

                <section id="como-evitar" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6">
                    <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                        Como evitar?
                    </h2>
                    <img src={imagemGenerica} alt="Como evitar a lesão por pressão" className="mx-auto mt-4 max-w-full" />
                </section>

                <section id="sinais" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6">
                    <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                        Quais os sinais?
                    </h2>
                    <ul className="list-disc space-y-2 pl-5 text-base leading-7">
                        <li>Vermelhidão na pele;</li>
                        <li>Bolhas;</li>
                        <li>Escurecimento da pele - cor arroxeada ou preta.</li>
                    </ul>
                </section>

                <section id="locais" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6">
                    <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                        Principais locais de aparecimento da lesão
                    </h2>
                    <img src={locaisLesoes} alt="Locais de aparição da lesão por pressão" className="mx-auto mt-4 max-w-full" />
                </section>

                <section id="o-que-fazer" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6 md:col-span-2">
                    <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                        O que fazer quando os sinais aparecerem?
                    </h2>
                    <p className="text-base leading-7">
                        Manter uma boa alimentação, ingesta de água suficiente. Além disso,
                        pode ser utilizado o óleo vegetal, chamado Ácido graxo essencial
                        (AGE), que ajuda na hidratação da pele. Manter lençóis secos e
                        esticados; Evitar umidade na pele.
                    </p>
                    <div className="mt-4 border border-red-200 bg-red-50 p-4 font-medium text-red-800">
                        Importante: Se houver dúvidas ou outras alterações na pele, deve-se
                        entrar em contato com os profissionais da Estratégia de saúde da
                        família do seu bairro.
                    </div>
                    <div className="mt-4 space-y-4">
                        <img src={lesoesAparecimento} alt="Imagem ilustrativa do que fazer quando os sinais aparecerem" className="mx-auto max-w-full" />
                        <img src={lesoesAparecimento2} alt="Imagem ilustrativa do que fazer quando os sinais aparecerem" className="mx-auto max-w-full" />
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}

export default LesaoPorPressao

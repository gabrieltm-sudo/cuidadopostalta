import { useState } from 'react'

import PageLayout from '../components/PageLayout'
import ImageFocus from '../components/ImageFocus'
import ReferenceModal from '../components/ReferenceModal'
// import imagemGenerica from '../images/imagemGenerica.png'

import locaisLesoes from '../images/LessaoPorPressao/locaisAparecimentoLesaoPressao.png'
import comoEvitar from '../images/LessaoPorPressao/comoEvitarLesaoporPressao.png'
import lesoesAparecimento from '../images/LessaoPorPressao/sinaisAparecem.png'
import lesoesAparecimento2 from '../images/LessaoPorPressao/sinaisAparecem1.png'
import { BookOpen } from 'lucide-react'

const LesaoPorPressao = () => {
    const tocItems = [
        { id: 'o-que-e', label: 'O que é?' },
        { id: 'como-evitar', label: 'Como evitar?' },
        { id: 'sinais', label: 'Quais os sinais?' },
        { id: 'locais', label: 'Principais locais' },
        { id: 'o-que-fazer', label: 'O que fazer?' },
    ]

    const [isRefModalOpen, setIsRefModalOpen] = useState(false);
    const references = [
        "EUROPEAN PRESSURE ULCER ADVISORY PANEL (EPUAP); NATIONAL PRESSURE INJURY ADVISORY PANEL (NPIAP); PAN PACIFIC PRESSURE INJURY ALLIANCE (PPPIA). The International Pressure Ulcer/Injury Clinical Practice Guideline. 4. ed. 2026. Disponível em: https://epuap.org/pu-guidelines/",
        "BRASIL. Ministério da Saúde; AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (ANVISA); FUNDAÇÃO OSWALDO CRUZ (FIOCRUZ). Protocolo para prevenção de úlcera por pressão. Brasília, DF: Ministério da Saúde, 2013. Disponível em: https://bibliotecadigital.anvisa.gov.br/jspui/handle/anvisa/1775"
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
                    <ImageFocus src={comoEvitar} alt="Como evitar a lesão por pressão" className="mx-auto mt-4 max-w-full" />
                    <ul className="list-disc space-y-2 pl-5 text-base leading-7">
                        <li>Mudar a posição da pessoa a cada 2 horas;</li>
                        <li>A cada mudança, é importante que a pessoa seja levantada e não arrastada;</li>
                        <li>Os lençois devem estar bem espichados;</li>
                        <li>Pode usar almofadas e travesseiros para auxiliar no posicionamento correto.</li>
                    </ul>
                </section>

                <section id="sinais" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6">
                    <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                        Quais os sinais?
                    </h2>
                    <ul className="list-disc space-y-2 pl-5 text-base leading-7">
                        <li>Vermelhidão na pele;</li>
                        <li>Bolhas;</li>
                        <li>Dor;</li>
                        <li>Alteração na sensibilidade;</li>
                        <li>Escurecimento da pele - cor arroxeada ou preta.</li>
                    </ul>
                </section>

                <section id="locais" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6">
                    <h2 className="mb-3 border-b-2 border-[#003366] pb-2 text-lg font-bold leading-6 text-[#003366] sm:text-xl">
                        Principais locais de aparecimento da lesão
                    </h2>
                    <ImageFocus src={locaisLesoes} alt="Locais de aparição da lesão por pressão" className="mx-auto mt-4 max-w-full" />
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
                        entrar em contato com os profissionais da Estratégia de Saúde da
                        Família (Postinho) do seu bairro.
                    </div>
                    <div className="mt-4 space-y-4">
                        <ImageFocus src={lesoesAparecimento} alt="Imagem ilustrativa do que fazer quando os sinais aparecerem" className="mx-auto max-w-full" />
                        <ImageFocus src={lesoesAparecimento2} alt="Imagem ilustrativa do que fazer quando os sinais aparecerem" className="mx-auto max-w-full" />
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
                    references={references}
                />
            </div>

        </PageLayout>
    )
}

export default LesaoPorPressao

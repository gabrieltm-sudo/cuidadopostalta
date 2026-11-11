import { useState } from 'react'

import PageLayout from '../components/PageLayout'
import ReferenceModal from '../components/ReferenceModal'
import { BookOpen } from 'lucide-react'

const FeridaOperatoria = () => {
    const tocItems = [
        { id: 'o-que-e', label: 'O que é?' },
        { id: 'cuidados', label: 'Cuidados principais' },
        { id: 'higiene', label: 'Higiene e troca' },
        { id: 'alerta', label: 'Quando procurar ajuda' },
    ]

    const [isRefModalOpen, setIsRefModalOpen] = useState(false)
    const references = [
        "AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (Brasil). Protocolo de prevenção de infecção de sítio cirúrgico (ISC). Brasília, DF: Anvisa, 2026. Disponível em: https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/prevencao-e-controle-de-infeccao-e-resistencia-microbiana/prevencao-das-principais-iras/infeccao-de-sitio-cirurgico/protocolo-2-prevecao-de-isc-final.pdf Acesso em: 10 nov. 2026.",
        "WORLD HEALTH ORGANIZATION. Global guidelines for the prevention of surgical site infection. 2. ed. Geneva: World Health Organization, 2018. Disponível em: https://www.who.int/publications/i/item/9789241550475 Acesso em: 10 nov. 2026.",
        "CENTERS FOR DISEASE CONTROL AND PREVENTION. Guideline for the prevention of surgical site infection. Atlanta: CDC, 2017. Disponível em: https://www.cdc.gov/infection-control/hcp/surgical-site-infection/index.html Acesso em: 10 nov. 2026."
    ]

    return (
        <PageLayout title="Cuidados com Ferida Operatória" tocItems={tocItems}>
            <h2
                id="o-que-e"
                className="scroll-mt-24 bg-[#003366] px-4 py-3 text-base font-bold text-white sm:text-lg"
            >
                CUIDADOS COM FERIDA OPERATÓRIA
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        O que é a ferida operatória?
                    </h3>
                    <p className="text-base leading-7 text-gray-700">
                        Ferida operatória é a incisão ou abertura realizada durante uma cirurgia,
                        que precisa ser protegida e observada para permitir cicatrização adequada.
                        A limpeza correta, a observação do local e a avaliação de sinais de infecção
                        ajudam a evitar complicações.
                    </p>
                </section>

                <section id="cuidados" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Cuidados principais
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                        <li>Manter a ferida limpa e seca;</li>
                        <li>Não tocar no curativo sem necessidade;</li>
                        <li>Proteger a área de atrito ou umidade;</li>
                        <li>Seguir as orientações do médico ou enfermagem sobre troca do curativo;</li>
                        <li>Usar roupas confortáveis e evitar pressionar a região.</li>
                    </ul>
                </section>

                <section id="higiene" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Higiene e troca do curativo
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                        <li>Lavar as mãos antes de manipular a ferida;</li>
                        <li>Limpar a pele ao redor com solução prescrita e cuidado;</li>
                        <li>Não remover o curativo se não houver indicação para troca;</li>
                        <li>Trocar o curativo somente quando orientado;</li>
                        <li>Observar se há secreção, cheiro ou alteração na pele.</li>
                    </ul>
                </section>

                <section id="alerta" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6 md:col-span-2">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Quando procurar ajuda
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                        <li>Febre ou mal-estar;</li>
                        <li>Vermelhidão, calor ou inchaço ao redor da ferida;</li>
                        <li>Secreção com cheiro forte, pus ou excesso de sangramento;</li>
                        <li>Dor intensa ou piora da dor;</li>
                        <li>Ferida aberta, com bordas separadas ou com saída de líquidos anormais.</li>
                    </ul>
                    <p className="mt-5 rounded border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
                        Caso apareçam sinais de infecção ou complicação, procure o serviço de saúde imediatamente.
                    </p>
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

export default FeridaOperatoria
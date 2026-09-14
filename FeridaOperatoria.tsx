import PageLayout from '../components/PageLayout'

const FeridaOperatoria = () => {
    const tocItems = [
        { id: 'o-que-e', label: 'O que é?' },
        { id: 'cuidados', label: 'Cuidados principais' },
        { id: 'higiene', label: 'Higiene e troca' },
        { id: 'alerta', label: 'Quando procurar ajuda' },
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
                        Ferida operatória é a incisã o ou abertura realizada durante uma cirurgia,
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

                <section id="alerta" className="scroll-mt-24 border-2 border-l-4 border-l-red-600 border-gray-200 bg-white p-6">
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
                    <div className="mt-5 rounded border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
                        Caso apareçam sinais de infecção ou complicação, procure o serviço de saúde imediatamente.
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}

export default FeridaOperatoria

import PageLayout from '../components/PageLayout'

const Hipertensao = () => {
    const tocItems = [
        { id: 'o-que-e', label: 'O que é?' },
        { id: 'causas', label: 'Causas e fatores de risco' },
        { id: 'sintomas', label: 'Sintomas' },
        { id: 'diagnostico', label: 'Diagnóstico' },
        { id: 'controle', label: 'Como controlar' },
    ]

    return (
        <PageLayout title="Hipertensão Arterial" tocItems={tocItems}>
            <h2
                id="o-que-e"
                className="scroll-mt-24 bg-[#003366] px-4 py-3 text-base font-bold text-white sm:text-lg"
            >
                HIPERTENSÃO ARTERIAL
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        O que é a hipertensão arterial?
                    </h3>
                    <p className="text-base leading-7 text-gray-700">
                        A hipertensão arterial é a elevação da pressão dos vasos sanguíneos
                        contra as paredes das artérias. Quando isto acontece de forma contínua,
                        pode comprometer o coração, o cérebro e os rins, além de aumentar o
                        risco de doenças graves.
                    </p>
                </section>

                <section id="causas" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Causas e fatores de risco
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                        <li>Histórico familiar de hipertensão;</li>
                        <li>Excesso de peso ou obesidade;</li>
                        <li>Alimentação rica em sal e gorduras;</li>
                        <li>Consumo excessivo de álcool;</li>
                        <li>Falta de atividade física;</li>
                        <li>Estresse e sono inadequado.</li>
                    </ul>
                </section>

                <section id="sintomas" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Sintomas da hipertensão
                    </h3>
                    <p className="text-base leading-7 text-gray-700">
                        Muitas pessoas com pressão alta não apresentam sintomas. Em alguns casos,
                        podem surgir dores de cabeça, tontura, sensação de palpitação, zumbido
                        ou desconforto no peito. Por isso, a verificação regular da pressão é tão importante.
                    </p>
                </section>

                <section id="diagnostico" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Diagnóstico
                    </h3>
                    <p className="text-base leading-7 text-gray-700">
                        O diagnóstico é feito pela medida da pressão arterial em diferentes momentos,
                        associada a avaliação dos sinais e fatores de risco. A hipertensão é considerada
                        quando a pressão permanece elevada em pelo menos duas medidas.
                    </p>
                </section>

                <section id="controle" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6 md:col-span-2">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Como controlar a hipertensão
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                        <li>Manter alimentação equilibrada, com pouca quantidade de sal;</li>
                        <li>Praticar atividade física conforme orientação médica;</li>
                        <li>Evitar o consumo excessivo de álcool e tabaco;</li>
                        <li>Controlar o peso, o estresse e a qualidade do sono;</li>
                        <li>Tomar os medicamentos conforme prescrição e medir a pressão regularmente.</li>
                    </ul>
                    <div className="mt-5 rounded border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-800">
                        Acompanhar o tratamento com o profissional de saúde é essencial para evitar
                        complicações e manter a pressão em níveis adequados.
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}

export default Hipertensao

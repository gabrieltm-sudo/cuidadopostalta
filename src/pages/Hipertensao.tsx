import { useState } from 'react';
import PageLayout from '../components/PageLayout'
import ReferenceModal from '../components/ReferenceModal'
import { BookOpen } from 'lucide-react'

const Hipertensao = () => {
    const tocItems = [
        { id: 'o-que-e', label: 'O que é?' },
        { id: 'causas', label: 'Causas e fatores de risco' },
        { id: 'sintomas', label: 'Sintomas' },
        { id: 'diagnostico', label: 'Diagnóstico' },
        { id: 'controle', label: 'Como controlar' },
    ]

        const [isRefModalOpen, setIsRefModalOpen] = useState(false);
        const references = [
            "https://ufsb.edu.br/proaf/proaf/dace/cqv/calendario-de-saude-e-acessibilidade/26-de-abril-2023-dia-nacional-de-prevencao-e-combate-a-hipertensao-arterial?utm_source=chatgpt.com Acesso em: 10 nov. 2026.",
            "https://storage.googleapis.com/dpnprzdgiuwsqe/proper-blood-pressure-position.html?utm_source=chatgpt.com Acesso em: 10 nov. 2026.",
            "https://www.cdc.gov/high-blood-pressure/measure/index.html?utm_source=chatgpt.com Acesso em: 10 nov. 2026.",
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

                <section id="diagnostico" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6 md:col-span-2">
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
                    <p className="mt-5 rounded border border-blue-200 bg-blue-50 p-4 text-sm font-medium text-blue-800">
                        Acompanhar o tratamento com o profissional de saúde é essencial para evitar
                        complicações e manter a pressão em níveis adequados.
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

export default Hipertensao
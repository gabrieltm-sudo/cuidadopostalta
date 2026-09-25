import PageLayout from '../components/PageLayout'

const Traqueostomia = () => {
    const tocItems = [
        { id: 'oque-e', label: 'O que é?' },
        { id: 'cuidados', label: 'Cuidados diários' },
        { id: 'higiene', label: 'Higiene e troca do curativo' },
        { id: 'alerta', label: 'Sinais de alerta' },
    ]

    return (
        <PageLayout title="Traqueostomia" tocItems={tocItems}>
            <h2
                id="oque-e"
                className="scroll-mt-24 bg-[#003366] px-4 py-3 text-base font-bold text-white sm:text-lg"
            >
                CUIDADOS COM TRAQUEOSTOMIA
            </h2>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <section className="bg-white border-2 border-gray-200 p-6 md:col-span-2">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        O que é a traqueostomia?
                    </h3>
                    <p className="text-base leading-7 text-gray-700">
                        É um procedimento cirúrgico que cria uma abertura (estoma) na parte frontal do pescoço, diretamente na traqueia. Um tubo ou cânula é inserido nessa abertura para permitir a passagem de ar e facilitando a respiração.
                    </p>
                    <p className="mt-4 text-base leading-7 text-gray-700">
                        É um dispositivo importante para a respiração, mas exige atenção
                        diária para manter a limpeza e prevenir infecções e obstruções.
                    </p>
                </section>

                <section id="cuidados" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Cuidados diários
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                        <li>Manter o local limpo e seco;</li>
                        <li>Evitar puxar ou mexer no tubo da traqueostomia;</li>
                        <li>Usar roupas que não pressionem o local da abertura;</li>
                        <li>Manter sempre um aparato de emergência disponível;</li>
                        <li>Seguir as orientações do profissional responsável pela troca do tubo.</li>
                    </ul>
                </section>

                <section id="higiene" className="scroll-mt-24 bg-white border-2 border-gray-200 p-6">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Higiene e troca do curativo
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                        <li>Lavar bem as mãos antes de qualquer cuidado;</li>
                        <li>Limpar a pele ao redor do estoma com solução salina ou conforme indicação;</li>
                        <li>Secar com cuidado e trocar o curativo quando necessário;</li>
                        <li>Não usar objetos pontiagudos ou materiais que possam irritar a pele;</li>
                        <li>Observar se há secreções excessivas ou odor forte.</li>
                    </ul>
                </section>

                <section id="alerta" className="scroll-mt-24 border-2 border-gray-200 bg-white p-6 md:col-span-2">
                    <h3 className="mb-4 border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                        Sinais de alerta
                    </h3>
                    <ul className="list-disc space-y-3 pl-5 text-base leading-7 text-gray-700">
                        <li>Febre ou calor no local;</li>
                        <li>Secreção muito abundante, amarelada ou com odor;</li>
                        <li>Dificuldade para respirar;</li>
                        <li>Vermelhidão, inchaço ou secreção no estoma;</li>
                        <li>Deslocamento do tubo ou obstrução.</li>
                    </ul>
                    <div className="mt-5 rounded border border-red-200 bg-red-50 p-4 text-sm font-medium text-red-800">
                        Importante: se houver qualquer sinal de dificuldade respiratória, solicite
                        ajuda imediata do serviço de saúde ou do responsável pela assistência.
                    </div>
                </section>
            </div>
        </PageLayout>
    )
}

export default Traqueostomia
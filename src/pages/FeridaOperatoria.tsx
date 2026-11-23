import Illustrations from '../components/Illustrations'
import References from '../components/References'
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


            <p className="rounded border-2 border-red-300 bg-red-50 p-4 font-bold text-red-800">
                Antes de realizar qualquer cuidado, siga as orientações dos profissionais de saúde responsáveis pelo seu atendimento.
            </p>

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
                
                    <Illustrations items={[{"alt":"Ilustração de uma incisão aberta, suturada e fechada.","caption":"Ilustração das etapas de fechamento de uma incisão. A evolução varia entre pessoas e cirurgias.","src":"/images/material-equipe/ferida-etapas.png"}]} />
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
                
                    <Illustrations items={[{"alt":"Fotografia de uma incisão cirúrgica fechada com pontos.","caption":"Exemplo de uma ferida operatória suturada.","src":"/images/material-equipe/ferida-suturada.png"}]} />
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
            </div>
        <References items={[
            {
                title: 'AGÊNCIA NACIONAL DE VIGILÂNCIA SANITÁRIA (Brasil). Protocolo de prevenção de infecção de sítio cirúrgico (ISC). Brasília, DF: Anvisa, 2026. Disponível em:',
                url: 'https://www.gov.br/anvisa/pt-br/assuntos/servicosdesaude/prevencao-e-controle-de-infeccao-e-resistencia-microbiana/prevencao-das-principais-iras/infeccao-de-sitio-cirurgico/protocolo-2-prevecao-de-isc-final.pdf',
            },
            {
                title: 'WORLD HEALTH ORGANIZATION. Global guidelines for the prevention of surgical site infection. 2. ed. Geneva: World Health Organization, 2018. Disponível em:',
                url: 'https://www.who.int/publications/i/item/9789241550475',
            },
            {
                title: 'CENTERS FOR DISEASE CONTROL AND PREVENTION. Guideline for the prevention of surgical site infection. Atlanta: CDC, 2017. Disponível em:',
                url: 'https://www.cdc.gov/infection-control/hcp/surgical-site-infection/index.html',
            },
        ]} accessedOn="10 nov. 2026" imageSources={[{"title":"Imagem indicada no material da equipe: Medlatec.","url":"https://medlatec.vn/tin-tuc/5-dau-hieu-vet-mo-dang-lanh-va-hoi-phuc-tot"},{"title":"Imagem indicada no material da equipe: Vuelo Pharma.","url":"https://www.vuelopharma.com/feridas-cirurgicas/"}]} />
</PageLayout>
    )
}

export default FeridaOperatoria

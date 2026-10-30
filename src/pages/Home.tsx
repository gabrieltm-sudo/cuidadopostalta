import { Link } from 'react-router-dom'
import {
    Activity,
    Droplet,
    HeartPulse,
    Syringe,
    Stethoscope,
    Wind,
    Cable,
    Bandage,
    BedDouble,
    type LucideIcon,
} from 'lucide-react'

type Topic = {
    to: string
    title: string
    description: string
    icon: LucideIcon
}

const topics: Topic[] = [
    { to: '/lesao-pressao', title: 'Lesão por Pressão', description: 'Como prevenir e identificar feridas causadas por pressão.', icon: BedDouble },
    { to: '/diabetes', title: 'Diabetes Mellitus', description: 'Cuidados diários e aplicação de insulina.', icon: Syringe },
    { to: '/sondas', title: 'Sondas', description: 'Orientações sobre sondas gástrica e enteral.', icon: Stethoscope },
    { to: '/drenos', title: 'Drenos', description: 'Cuidados e limpeza do dreno e do curativo.', icon: Droplet },
    { to: '/estomias', title: 'Estomias', description: 'Cuidados com estomias e bolsas coletoras.', icon: Activity },
    { to: '/traqueostomia', title: 'Traqueostomia', description: 'Orientações para cuidar da traqueostomia.', icon: Wind },
    { to: '/hipertensao', title: 'Hipertensão Arterial', description: 'Causas, sintomas e como controlar a pressão.', icon: HeartPulse },
    { to: '/cateter', title: 'Cateter Venoso Central', description: 'Cuidados com o cateter no dia a dia.', icon: Cable },
    { to: '/feridaOperatoria', title: 'Ferida Operatória', description: 'Como cuidar do local da cirurgia.', icon: Bandage },
]

const Home = () => (
    <>
        <section className="border-b-8 border-[#0A4D68] bg-[#003366] px-4 py-12 text-white sm:px-8 sm:py-16">
            <div className="mx-auto max-w-4xl">
                <h2 className="text-3xl font-bold sm:text-4xl lg:text-5xl">
                    Cartilha de Cuidados Pós-Alta Hospitalar
                </h2>
                <p className="mt-4 text-lg text-blue-100 text-pretty">
                    O cuidado continua em casa. Esta cartilha digital foi elaborada para apoiar você e
                    sua família durante o processo de recuperação, trazendo orientações seguras,
                    práticas e validadas por profissionais de saúde.
                </p>
            </div>
        </section>

        <main className="bg-gray-50 text-base leading-relaxed text-gray-700">
            <div className="mx-auto w-full max-w-7xl px-4 py-8">
                <h2 className="mb-6 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-[#003366]">
                    Escolha o assunto que deseja consultar:
                </h2>
            <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {topics.map(({ to, title, description, icon: Icon }) => (
                    <li key={to}>
                        <Link
                            to={to}
                            className="flex h-full flex-col gap-3 border-2 border-gray-200 bg-white p-6 transition-colors hover:border-[#003366] focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-400"
                        >
                            <Icon size={36} className="text-[#003366]" aria-hidden="true" />
                            <h3 className="border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">
                                {title}
                            </h3>
                            <p className="text-base leading-7 text-gray-700">{description}</p>
                            <span className="mt-auto font-semibold text-[#003366]">
                                Acessar →
                            </span>
                        </Link>
                    </li>
                ))}
            </ul>
            </div>
        </main>

        <footer className="border-t-4 border-[#003366] bg-white px-4 py-8 sm:px-8">
            <div className="mx-auto flex max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-2">
                    <p className="font-bold text-[#003366]">
                        Projeto PET-Saúde: Informação e Saúde Digital (I&amp;SD)
                    </p>
                    <p className="text-gray-700">
                        Desenvolvido pelo Grupo Tecnologia I. Uma iniciativa da Universidade Federal do
                        Pampa (UNIPAMPA) voltada à inovação na saúde pública.
                    </p>
                </div>
                <div className="md:text-right">
                    <p className="text-gray-700 md:text-right">Apoio Institucional:</p>
                    <p className="font-bold text-gray-500">UNIPAMPA • SUS</p>
                </div>
            </div>
        </footer>
    </>
)

export default Home

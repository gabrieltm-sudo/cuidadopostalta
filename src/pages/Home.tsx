import VideoRender from '../components/VideoRender'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { topicGroups } from '../topics'

const Home = () => (
    <>
        <section className="border-b-8 border-[#0A4D68] bg-[#003366] px-4 py-8 text-white sm:px-8 sm:py-12">
            <div className="mx-auto max-w-6xl">
                <h1 className="text-2xl font-bold leading-tight sm:text-3xl lg:text-4xl">
                    Cartilha de Cuidados Pós-Alta Hospitalar
                </h1>
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
            {topicGroups.map(group => <section key={group.title} className="mb-10">
                <h3 className="mb-4 text-xl font-bold text-[#003366]">{group.title}</h3>
                <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                    {group.topics.map(topic => <li key={topic.to}>
                        <Link to={topic.to} className="flex h-full flex-col gap-3 border-2 border-gray-200 bg-white p-6 hover:border-[#003366] focus-visible:ring-4 focus-visible:ring-blue-400">
                            <topic.icon size={32} className="text-[#003366]" aria-hidden="true" />
                            <h4 className="border-b-2 border-[#003366] pb-2 text-xl font-bold text-[#003366]">{topic.title}</h4>
                            <p>{topic.description}</p>
                            <span className="mt-auto flex items-center gap-2 font-semibold text-[#003366]">Acessar <ArrowRight size={18} aria-hidden="true"/></span>
                        </Link>
                    </li>)}
                </ul>
            </section>)}

            </div>

            <div className="mx-auto w-full max-w-7xl px-4 py-8">
                <h2 className="mb-6 border-b-2 border-gray-200 pb-2 text-2xl font-bold text-[#003366]">
                    Vídeo explicativo
                </h2>
                <VideoRender
                    url="https://youtu.be/ikoiN8yMHj8?is=Oz01P5swtS3ycvZX"
                    title="Título"
                    description="Descrição."
                    source="Fonte: XYZ"
                    className="mx-auto max-w-3xl"
                />
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
                    <p className="font-bold text-gray-500">UNIPAMPA · SUS</p>
                </div>
            </div>
        </footer>
    </>
)

export default Home

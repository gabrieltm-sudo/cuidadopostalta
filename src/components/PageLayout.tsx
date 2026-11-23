import type { ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

type TocItem = {
    id: string
    label: string
}

type PageLayoutProps = {
    title: string
    children: ReactNode
    tocItems: TocItem[]
}

const PageLayout = ({ title, children, tocItems }: PageLayoutProps) => (
    <main className="min-h-screen bg-gray-50 text-base leading-relaxed text-gray-700">
        <header className="border-b-2 border-[#0A4D68] bg-[#DCEEEF] px-4 py-6 text-center sm:px-8">
            <div className="mx-auto mb-2 flex max-w-7xl">
                <Link
                    to="/"
                    onClick={() => window.scrollTo({ top: 0, behavior: 'instant' })}
                    className="inline-flex min-h-11 items-center gap-2 rounded text-sm font-bold text-[#003366] hover:underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#003366]"
                >
                    <ArrowLeft size={18} aria-hidden="true" />
                    Voltar
                </Link>
            </div>
            <h1 className="text-2xl font-black text-[#0A4D68] sm:text-3xl">
                {title}
            </h1>
        </header>

        <div className="mx-auto w-full max-w-7xl px-4 py-8 flex flex-col items-start lg:flex-row gap-8">
            <div className="min-w-0 flex-1 space-y-8 w-full article-content">{children}</div>

            <aside className="sticky top-8 hidden w-64 shrink-0 self-start lg:block">
                <div className="border-2 border-gray-200 bg-white p-5">
                    <h3 className="font-bold text-[#0A4D68] mb-4 border-b pb-2">
                        Nesta página
                    </h3>
                    <ul className="space-y-3 text-sm text-gray-700">
                        {tocItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={'#' + item.id}
                                    className="hover:text-blue-700 transition-colors"
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div>
    </main>
)

export default PageLayout

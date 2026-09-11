import type { ReactNode } from 'react'

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
            <h1 className="text-2xl font-black text-[#0A4D68] sm:text-3xl">
                {title}
            </h1>
        </header>

        <div className="mx-auto w-full max-w-7xl px-4 py-8 flex flex-col items-start lg:flex-row gap-8">
            <div className="flex-1 space-y-8 w-full">{children}</div>

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

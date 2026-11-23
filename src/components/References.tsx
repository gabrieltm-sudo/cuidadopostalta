import { BookOpen } from 'lucide-react'
import { useState } from 'react'
import ReferenceModal from './ReferenceModal'

type Reference = { title: string; url: string }

export default function References({ items, accessedOn, imageSources = [] }: { items: Reference[]; accessedOn?: string; imageSources?: Reference[] }) {
  const [isRefModalOpen, setIsRefModalOpen] = useState(false)

  return (
    <>
      <div className="flex items-center justify-center pt-2 md:col-span-2">
        <button
          type="button"
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
        references={[
          ...items.map(({ title, url }) => `${title} ${url}${accessedOn ? ` Acesso em: ${accessedOn}.` : ''}`),
          ...imageSources.map(({ title, url }) => `${title} ${url}`),
        ]}
      />
    </>
  )
}

import ImageFocus from './ImageFocus'

export type Illustration = { src: string; alt: string; caption: string; source?: string }

export default function Illustrations({ items }: { items: Illustration[] }) {
  return <div className={`mt-6 grid min-w-0 grid-cols-1 gap-6 ${items.length > 1 ? 'sm:grid-cols-2' : ''}`}>
    {items.map(item => <figure key={item.src} className="min-w-0 border-2 border-gray-200 bg-white p-4">
      <ImageFocus src={item.src} alt={item.alt} className="mx-auto max-h-[32rem] w-auto max-w-full object-contain" />
      <figcaption className="mt-4 space-y-2 text-sm leading-relaxed">
        <p>{item.caption}</p>
        {item.source && <p className="text-left text-xs text-gray-600">{item.source}</p>}
      </figcaption>
    </figure>)}
  </div>
}

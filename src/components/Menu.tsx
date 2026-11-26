import { useRef } from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { Home, Menu as MenuIcon, X } from 'lucide-react'
import { topicGroups } from '../topics'
import { InstitutionLogos } from './Header'

const linkClass = ({ isActive }: { isActive: boolean }) =>
  `flex items-center gap-2.5 rounded-xl p-3 font-semibold focus-visible:outline-2 focus-visible:outline-[#003366] ${
    isActive ? 'bg-[#DCEEEF] text-[#003366]' : 'text-gray-800 hover:bg-gray-100'
  }`

export default function Menu() {
  const { pathname } = useLocation()
  const drawer = useRef<HTMLDialogElement>(null)
  const closeMenu = () => drawer.current?.close()

  return (
    <div className="flex items-center justify-between gap-4 bg-[#003366] px-4 py-2 text-white sm:px-8">
      <button
        type="button"
        aria-label="Abrir menu"
        aria-haspopup="dialog"
        aria-controls="topic-menu"
        className="grid size-10 cursor-pointer place-items-center rounded-xl border border-white/25 bg-white/12 hover:bg-white/25 focus-visible:outline-2 focus-visible:outline-white"
        onClick={() => drawer.current?.showModal()}
      >
        <MenuIcon size={24} aria-hidden="true" />
      </button>
      {pathname === '/' && <InstitutionLogos onBlue />}

      <dialog
        ref={drawer}
        id="topic-menu"
        aria-labelledby="topic-menu-title"
        className="topic-drawer fixed inset-y-0 left-0 m-0 h-[100dvh] max-h-none w-80 max-w-[85vw] overflow-y-auto bg-white text-slate-900 shadow-xl backdrop:bg-black/50"
        onClick={(event) => { if (event.target === event.currentTarget) closeMenu() }}
      >
        <div className="min-h-full">
          <div className="relative bg-linear-to-br from-[#0a4d68] to-[#003366] p-6 pr-16 text-white">
            <h2 id="topic-menu-title" className="text-xl font-bold">Cuidado Pós-Alta</h2>
            <button type="button" aria-label="Fechar menu" className="absolute right-3 top-3 grid size-10 cursor-pointer place-items-center rounded-xl bg-white/12 hover:bg-white/25" onClick={closeMenu}>
              <X size={22} aria-hidden="true" />
            </button>
          </div>
          <nav aria-label="Assuntos da cartilha" className="space-y-2 p-3">
            <NavLink to="/" end className={linkClass} onClick={closeMenu}>
              <span className="flex items-center gap-2"><Home size={18} aria-hidden="true" /> Início</span>
            </NavLink>
            {topicGroups.map(group => (
              <div key={group.title} className="border-t border-slate-200 pt-3">
                <p className="px-3 pb-1 text-sm font-bold text-[#003366]">{group.title}</p>
                <ul>
                  {group.topics.map(topic => (
                    <li key={topic.to}>
                      <NavLink to={topic.to} className={linkClass} onClick={closeMenu}>
                        <topic.icon size={18} className="shrink-0" aria-hidden="true" /> {topic.title}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </nav>
        </div>
      </dialog>
    </div>
  )
}

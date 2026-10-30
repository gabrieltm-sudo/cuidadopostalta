import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const getNavLinkClass = ({ isActive }: { isActive: boolean }) =>
    `block px-4 py-2 transition-colors border-2 border-transparent ${
      isActive ? 'bg-blue-400 font-semibold border-white/20' : 'hover:bg-blue-300'
    }`;

  return (
    <nav className="w-full bg-blue-900 p-4 text-white md:flex md:items-center md:justify-between md:px-6">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-bold">Menu</h2>
        
        <button
          onClick={toggleMenu}
          className="p-2 text-white focus:outline-none md:hidden"
          aria-expanded={isOpen}
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isOpen ? <X size={28} /> : <MenuIcon size={28} />}
        </button>
      </div>

      <ul 
        className={`${
          isOpen ? 'flex' : 'hidden'
        } mt-4 flex-col gap-2 md:mt-0 md:flex md:flex-row md:flex-wrap md:items-center`}
      >
        <li>
          <NavLink to="/" end className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Início
          </NavLink>
        </li>
        <li>
          <NavLink to="/lesao-pressao" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Lesão por Pressão
          </NavLink>
        </li>
        <li>
          <NavLink to="/diabetes" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Diabetes Mellitus
          </NavLink>
        </li>
        <li>
          <NavLink to="/sondas" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Sondas
          </NavLink>
        </li>
        <li>
          <NavLink to="/drenos" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Drenos
          </NavLink>
        </li>
        <li>
          <NavLink to="/estomias" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Estomias
          </NavLink>
        </li>
        <li>
          <NavLink to="/traqueostomia" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Traqueostomia
          </NavLink>
        </li>
        <li>
          <NavLink to="/hipertensao" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Hipertensão Arterial
          </NavLink>
        </li>
        <li>
          <NavLink to="/cateter" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Cateter Venoso Central
          </NavLink>
        </li>
        <li>
          <NavLink to="/feridaOperatoria" className={getNavLinkClass} onClick={() => setIsOpen(false)}>
            Cuidados com Ferida Operatória
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
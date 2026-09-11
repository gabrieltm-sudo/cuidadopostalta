import { NavLink } from 'react-router-dom';

function Menu() {
  return (
    <nav className="flex w-full flex-col justify-between gap-4 bg-blue-900 p-4 text-white md:flex-row md:items-center md:px-6">
      <h2 className="shrink-0 text-xl font-bold">Menu</h2>
      <ul className="flex flex-col gap-2 md:flex-row md:flex-wrap md:items-center">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`
            }
          >
            Lesão por Pressão
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/diabetes"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`
            }
          >
            Diabetes Mellitus
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/sondas"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`
            }
          >
            Sondas
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/drenos"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`
            }
          >
            Drenos
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/estomias"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`
            }
          >
            Estomias
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/traqueostomia"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`
            }
          >
            Traqueostomia
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/hipertensao"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`}
          >
            Hipertensão Arterial
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cateter"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`}
            >
              Cateter Venoso Central
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/feridaOperatoria"
            className={({ isActive }) =>
              `block rounded px-4 py-2 transition-colors ${isActive ? 'bg-blue-400 font-semibold' : 'hover:bg-blue-300'}`}
            >
              Cuidados com Ferida Operatória
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
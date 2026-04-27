import { NavLink } from 'react-router-dom'

export default function Sidebar() {
  const baseLink =
    'block px-4 py-2 rounded-lg text-sm font-medium transition'

  const getLinkClass = ({ isActive }) =>
    isActive
      ? `${baseLink} bg-slate-700 text-white`
      : `${baseLink} text-slate-200 hover:bg-slate-800 hover:text-white`

  return (
    <aside className="w-56 min-h-screen bg-slate-900 p-4">
      <div className="mb-8">
        <h2 className="text-white text-xl font-bold">Gestão Comercial</h2>
        <p className="text-slate-400 text-sm mt-1">Painel administrativo</p>
      </div>

      <nav className="flex flex-col gap-2">
        <NavLink to="/" className={getLinkClass} end>
          Dashboard
        </NavLink>

        <NavLink to="/clients" className={getLinkClass}>
          Clientes
        </NavLink>

        <NavLink to="/orders" className={getLinkClass}>
          Pedidos
        </NavLink>

        <NavLink to="/users" className={getLinkClass}>
          Usuários
        </NavLink>
      </nav>
    </aside>
  )
}
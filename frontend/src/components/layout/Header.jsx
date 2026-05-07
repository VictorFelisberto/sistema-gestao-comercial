import { useNavigate } from 'react-router-dom'
import { useAuth } from '../../contexts/AuthContext'

export default function Header() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  function handleLogout() {
    logout()
    navigate('/login')
  }

  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Sistema de Gestão Comercial
        </h1>
      </div>

      <div className="flex items-center gap-4">
        <div className="text-sm text-gray-500">
          {user ? `Olá, ${user.name}` : 'Usuário'}
        </div>

        <button
          onClick={handleLogout}
          className="bg-slate-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-slate-800 transition"
        >
          Sair
        </button>
      </div>
    </header>
  )
}
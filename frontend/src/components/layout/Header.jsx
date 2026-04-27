export default function Header() {
  return (
    <header className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6">
      <div>
        <h1 className="text-lg font-semibold text-gray-800">
          Sistema de Gestão Comercial
        </h1>
      </div>

      <div className="text-sm text-gray-500">
        Usuário logado
      </div>
    </header>
  )
}
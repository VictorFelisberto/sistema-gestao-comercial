export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md border p-8">
        <h1 className="text-2xl font-bold text-center text-gray-800">
          Login
        </h1>
        <p className="text-sm text-center text-gray-500 mt-2 mb-6">
          Essa será a tela de autenticação do sistema.
        </p>

        <form className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="Digite seu email"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Senha
            </label>
            <input
              type="password"
              placeholder="Digite sua senha"
              className="w-full border border-gray-300 rounded-lg px-3 py-2 outline-none focus:ring-2 focus:ring-slate-400"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-slate-900 text-white py-2 rounded-lg hover:bg-slate-800 transition"
          >
            Entrar
          </button>
        </form>
      </div>
    </div>
  )
}
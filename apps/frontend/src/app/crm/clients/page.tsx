const clients = [
  {
    name: "Alix Aular",
    email: "alix.aular@example.com",
    phone: "305-555-0101",
    status: "Esperando Respuesta",
    badgeClasses: "bg-blue-900 text-blue-300",
    aNumber: "234567890",
  },
  {
    name: "María García",
    email: "maria.g@example.com",
    phone: "305-555-0101",
    status: "Caso Cerrado",
    badgeClasses: "bg-green-900 text-green-300",
    aNumber: "234567892",
  },
  {
    name: "Sofía López",
    email: "sofia.l@example.com",
    phone: "305-555-0101",
    status: "Formulario en Proceso",
    badgeClasses: "bg-indigo-900 text-indigo-300",
    aNumber: "234567894",
  },
];

const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

export default function ClientsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-50">
      <div className="mx-auto flex max-w-7xl gap-6 px-6 py-10">
        {/* Alphabet column */}
        <aside className="hidden w-10 flex-shrink-0 flex-col items-center space-y-2 text-xs font-semibold uppercase text-slate-500 lg:flex">
          {alphabet.map((letter) => (
            <span
              key={letter}
              className="rounded-full px-2 py-1 transition hover:bg-slate-800 hover:text-slate-200"
            >
              {letter}
            </span>
          ))}
        </aside>

        <main className="flex-1 space-y-6">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
              <div>
                <h1 className="text-2xl font-semibold">Mis Clientes</h1>
                <p className="text-sm text-slate-400">
                  Gestiona tus clientes y revisa el estado de cada caso.
                </p>
              </div>
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
                <div className="flex w-full items-center gap-3 rounded-full border border-slate-800 bg-slate-950/60 px-4 py-2 text-sm text-slate-400">
                  <span>🔍</span>
                  <input
                    type="text"
                    placeholder="Buscar cliente…"
                    className="flex-1 bg-transparent text-slate-50 placeholder:text-slate-500 focus:outline-none"
                  />
                </div>
                <div className="flex items-center gap-2 text-slate-400">
                  <button
                    type="button"
                    className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm hover:border-slate-700 hover:text-slate-100"
                    aria-label="Vista lista"
                  >
                    ☰
                  </button>
                  <button
                    type="button"
                    className="rounded-full border border-slate-800 bg-slate-900/70 px-3 py-2 text-sm hover:border-slate-700 hover:text-slate-100"
                    aria-label="Vista grid"
                  >
                    ⬛
                  </button>
                </div>
                <button
                  type="button"
                  className="rounded-full bg-blue-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-blue-500"
                >
                  + Cliente
                </button>
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-xl">
            <div className="overflow-x-auto">
              <table className="min-w-full text-left text-sm">
                <thead className="text-xs uppercase text-slate-400">
                  <tr className="border-b border-slate-800">
                    <th className="pb-4 font-medium">Nombre</th>
                    <th className="pb-4 font-medium">Email</th>
                    <th className="pb-4 font-medium">Teléfono</th>
                    <th className="pb-4 font-medium">Estado del caso</th>
                    <th className="pb-4 font-medium">A-Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {clients.map((client) => (
                    <tr key={client.email} className="transition hover:bg-slate-900/60">
                      <td className="py-4 text-sm font-semibold">{client.name}</td>
                      <td className="py-4 text-sm text-slate-400">{client.email}</td>
                      <td className="py-4 text-sm text-slate-400">{client.phone}</td>
                      <td className="py-4">
                        <span
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${client.badgeClasses}`}
                        >
                          {client.status}
                        </span>
                      </td>
                      <td className="py-4 text-sm text-slate-400">{client.aNumber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

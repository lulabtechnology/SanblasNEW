// components/BinationalRoutes.tsx
import Link from "next/link";

const routes = [
  {
    title: "Panamá → Colombia (4–5 días)",
    subtitle: "Ciudad de Panamá · Puerto Cartí · Islas de San Blas · Capurganá / Sapzurro",
    description:
      "Ruta ideal para quienes inician en Ciudad de Panamá y quieren cruzar al Caribe colombiano sin cadenas de vuelos internos. Cada día suma islas, historias y nuevos paisajes.",
    bullets: [
      "Salida coordinada desde Ciudad de Panamá en 4×4 autorizado hasta Puerto Cartí.",
      "Recorrido en lancha por islas seleccionadas, con cápsulas culturales Guna.",
      "Noches en cabañas familiares o alojamientos seleccionados según el paquete.",
      "Llegada organizada a Capurganá / Sapzurro con asistencia en el cruce."
    ]
  },
  {
    title: "Colombia → Panamá (4–5 días)",
    subtitle: "Capurganá / Sapzurro · Islas de San Blas · Ciudad de Panamá",
    description:
      "Pensado para mochileros y viajeros que vienen desde Capurganá o Sapzurro y quieren vivir San Blas antes de llegar a la capital panameña, con acompañamiento constante.",
    bullets: [
      "Salida desde Capurganá o Sapzurro con operador aliado Darius Capurganá.",
      "Islas cuidadosamente elegidas para evitar saturación y cuidar el entorno.",
      "Itinerario cronometrado: horas de salida, paradas, comidas y descansos.",
      "Cierre del viaje en Ciudad de Panamá con recomendaciones de conexión."
    ]
  }
];

export default function BinationalRoutes() {
  return (
    <section
      id="rutas-binacionales"
      className="bg-gradient-to-b from-sky-50 via-emerald-50/40 to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/90">
            rutas binacionales panamá ↔ colombia
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Darius Capurganá × San Blas Wave
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Una alianza diseñada para conectar el ecoturismo de Capurganá con la autenticidad de San Blas.
            Más que un simple traslado: un recorrido coherente, transparente y lleno de narrativa caribeña.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {routes.map((route) => (
            <article
              key={route.title}
              className="flex flex-col rounded-3xl bg-white/90 p-5 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-lg hover:ring-cyan-200/80"
            >
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {route.title}
              </h3>
              <p className="mt-1 text-xs font-medium text-cyan-700/90 sm:text-sm">
                {route.subtitle}
              </p>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {route.description}
              </p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-600 sm:text-sm">
                {route.bullets.map((b) => (
                  <li key={b} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-amber-400" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="mt-8 rounded-2xl bg-sky-900/90 p-5 text-xs sm:text-sm text-cyan-50 shadow-lg">
          <p className="font-semibold text-amber-200">
            Transparencia por encima del precio.
          </p>
          <p className="mt-2">
            No buscamos ser la opción más barata, sino la más coherente con el Caribe, las comunidades
            Guna y los aliados en Capurganá. Por eso trabajamos con itinerarios escritos, benchmarking de
            precios y reparto justo entre todos los que participan en tu viaje.
          </p>
          <div className="mt-4 flex flex-wrap gap-3">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-amber-300 px-5 py-2 text-xs font-semibold text-slate-900 shadow-md hover:brightness-110"
            >
              Pedir propuesta binacional
            </Link>
            <span className="text-[11px] text-cyan-100/80">
              Cuéntanos desde dónde sales, fechas tentativas y número de viajeros.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

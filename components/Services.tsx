// components/Services.tsx
const serviceGroups = [
  {
    label: "Tours y paquetes",
    services: [
      "Días de Sol desde Panamá y desde Colombia.",
      "Tours de 2 días / 1 noche y 3 días / 2 noches.",
      "Expediciones Panamá → Colombia y Colombia → Panamá (4–5 días).",
    ],
  },
  {
    label: "Transporte y logística",
    services: [
      "Transporte terrestre 4×4 autorizado desde Ciudad de Panamá.",
      "Traslados marítimos con lanchas verificadas y capitán local.",
      "Coordinación de permisos, tasas y asistencia migratoria en rutas binacionales.",
    ],
  },
  {
    label: "Hospedaje y experiencias",
    services: [
      "Cabañas frente al mar operadas por familias Guna (económicas y premium).",
      "Experiencias culturales: cápsulas históricas, gastronomía y artesanías.",
      "Apoyo a proyectos comunitarios y turismo responsable.",
    ],
  },
  {
    label: "Artesanías y productos",
    services: [
      "Molas originales y collares tradicionales.",
      "Pulseras y recuerdos hechos a mano por artesanas Guna.",
      "Kits de viaje y productos turísticos seleccionados.",
    ],
  },
];

export default function Services() {
  return (
    <section id="servicios" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/80">
            servicios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Mucho más que un tour: un acompañamiento completo
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            San Blas Wave integra logística, hospedaje, cultura y apoyo comunitario en un solo lugar.
            Cada servicio está diseñado para que tu experiencia sea clara, segura y coherente desde el primer mensaje.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {serviceGroups.map((group) => (
            <article
              key={group.label}
              className="rounded-3xl bg-sky-50/70 p-5 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:bg-sky-50 hover:shadow-md hover:ring-cyan-200/70"
            >
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {group.label}
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-700 sm:text-sm">
                {group.services.map((s) => (
                  <li key={s} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500/80" />
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-slate-500">
          *Los detalles específicos de cada servicio (horarios, puntos de encuentro y precios actualizados) se confirman
          directamente por WhatsApp al momento de la reserva.
        </p>
      </div>
    </section>
  );
}

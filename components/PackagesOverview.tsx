// components/PackagesOverview.tsx

const packages = [
  {
    label: "Día de Sol",
    duration: "1 día",
    from: "Desde Panamá o Colombia",
    idealFor: "Primer contacto con San Blas, viajes cortos, familias y grupos de amigos.",
    includes: [
      "Transporte principal (4×4 desde Panamá o lancha desde Colombia, según ruta).",
      "Visita a varias islas y piscina natural.",
      "Almuerzo típico y tiempo libre de playa."
    ]
  },
  {
    label: "2 días / 1 noche",
    duration: "2D / 1N",
    from: "Panamá",
    idealFor: "Viajeros que quieren dormir en la isla y ver atardecer / amanecer.",
    includes: [
      "Día de Sol completo + noche en cabaña frente al mar.",
      "Cenas y desayunos según plan.",
      "Tiempo extra para snorkel, descanso y fotos sin apuro."
    ]
  },
  {
    label: "3 días / 2 noches",
    duration: "3D / 2N",
    from: "Panamá",
    idealFor: "Parejas, mochileros y familias que quieren una experiencia más profunda.",
    includes: [
      "Recorrido por varias islas durante los 3 días.",
      "2 noches de alojamiento en cabañas familiares.",
      "Mayor inmersión en cultura Guna y vida isleña."
    ]
  },
  {
    label: "Expediciones 4–5 días",
    duration: "4–5 días",
    from: "Panamá ↔ Colombia",
    idealFor: "Viajeros que quieren conectar Ciudad de Panamá, San Blas y Capurganá / Sapzurro.",
    includes: [
      "Itinerario binacional diseñado junto a Darius Capurganá.",
      "Paradas estratégicas en islas seleccionadas.",
      "Acompañamiento en cruces y coordinación logística completa."
    ]
  }
];

export default function PackagesOverview() {
  return (
    <section
      id="paquetes"
      className="bg-gradient-to-b from-sky-100 via-amber-50/60 to-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/90">
            planes y paquetes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Elige cuánto tiempo quieres vivir San Blas
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Trabajamos con paquetes organizados por duración para que sea fácil entender qué tipo de
            experiencia se ajusta mejor a tus días disponibles, presupuesto y estilo de viaje.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {packages.map((pkg) => (
            <article
              key={pkg.label}
              className="flex h-full flex-col rounded-3xl bg-white/90 p-4 text-left shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:bg-white hover:shadow-md hover:ring-cyan-200/80"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.25em] text-cyan-700">
                {pkg.duration}
              </p>
              <h3 className="mt-2 text-sm font-semibold text-slate-900 sm:text-base">
                {pkg.label}
              </h3>
              <p className="mt-1 text-[11px] font-medium text-cyan-700/90">
                {pkg.from}
              </p>
              <p className="mt-2 text-xs text-slate-600 sm:text-sm">
                {pkg.idealFor}
              </p>
              <ul className="mt-3 flex-1 space-y-1.5 text-xs text-slate-600 sm:text-[13px]">
                {pkg.includes.map((item) => (
                  <li key={item} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-[11px] text-cyan-700/90">
                Detalles, precios y disponibilidad se confirman por WhatsApp según temporada.
              </p>
            </article>
          ))}
        </div>

        <p className="mt-6 text-xs sm:text-sm text-slate-600">
          También ofrecemos{" "}
          <span className="font-semibold">tours privados y experiencias a medida</span> para propuestas,
          aniversarios, grupos grandes o proyectos especiales de contenido. Solo tienes que contarnos qué
          buscas y diseñamos el plan junto contigo.
        </p>
      </div>
    </section>
  );
}

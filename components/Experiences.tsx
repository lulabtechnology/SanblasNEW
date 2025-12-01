// components/Experiences.tsx
import Image from "next/image";
import Link from "next/link";

const experiences = [
  {
    title: "Día de Sol desde Panamá",
    badge: "Full day",
    description:
      "Salida en 4×4 desde Ciudad de Panamá hacia Cartí Tupile y recorrido en lancha por varias islas, piscina natural y cápsula cultural Guna.",
    details: ["Jeep 4×4 autorizado", "Lancha, tasas y almuerzo incluidos", "Ideal para parejas, grupos y familias"],
  },
  {
    title: "Día de Sol desde Colombia",
    badge: "Full day",
    description:
      "Desde Capurganá o Sapzurro hacia San Blas en lancha, perfecto para quienes quieren conocer el archipiélago sin regresar a Panamá primero.",
    details: ["Salida desde Capurganá / Sapzurro", "Islas paradisíacas en un solo día", "Enlace perfecto con otros planes del Caribe"],
  },
  {
    title: "Tours de 2 a 3 días",
    badge: "2D/1N – 3D/2N",
    description:
      "Paquetes que combinan varias islas, experiencias culturales, fogata (según clima) y noches en cabañas u opciones premium frente al mar.",
    details: ["Alojamiento en cabañas familiares", "Actividades culturales Guna", "Snorkeling y playas vírgenes"],
  },
  {
    title: "Expediciones Panamá ↔ Colombia",
    badge: "4–5 días",
    description:
      "Rutas binacionales especializadas para mochileros y viajeros que buscan algo más que un tour tradicional entre Capurganá y San Blas.",
    details: ["Asistencia migratoria", "Itinerarios cronometrados", "Modelo binacional Darius × San Blas Wave"],
  },
];

export default function Experiences() {
  return (
    <section id="experiencias" className="bg-gradient-to-b from-sky-50 via-emerald-50/40 to-amber-50/60 py-16 sm:py-20">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-start lg:gap-16 lg:px-8">
        {/* Texto principal */}
        <div className="w-full lg:w-2/5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/80">
            experiencias san blas wave
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Tours diseñados para vivir el Caribe sin complicaciones
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Desde días de sol rápidos hasta expediciones Panamá ↔ Colombia, nos encargamos de la logística completa:
            transporte, permisos, alojamiento y acompañamiento cultural, para que solo te enfoques en disfrutar.
          </p>

          <div className="mt-6 rounded-2xl bg-white/80 p-4 text-xs sm:text-sm text-slate-700 shadow-sm ring-1 ring-cyan-100/70">
            <p className="font-semibold text-cyan-800">
              ¿No sabes qué tour elegir?
            </p>
            <p className="mt-1">
              Cuéntanos cuántos días tienes, desde dónde sales (Panamá o Colombia) y tu presupuesto. Te proponemos el
              plan ideal por WhatsApp.
            </p>
          </div>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Link
              href="#contacto"
              className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-cyan-500 via-sky-500 to-emerald-400 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/30 transition hover:brightness-110"
            >
              Cotizar mi experiencia
            </Link>
            <Link
              href="/experiencias"
              className="text-sm font-medium text-cyan-800 underline-offset-4 hover:underline"
            >
              Ver todos los planes
            </Link>
          </div>
        </div>

        {/* Cards de experiencias */}
        <div className="grid w-full gap-6 sm:grid-cols-2 lg:w-3/5">
          {experiences.map((exp) => (
            <article
              key={exp.title}
              className="flex flex-col rounded-3xl bg-white/90 p-5 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-xl hover:ring-cyan-200/90"
            >
              <div className="flex items-center justify-between gap-3">
                <h3 className="text-sm font-semibold text-slate-900 sm:text-base">{exp.title}</h3>
                <span className="rounded-full bg-gradient-to-r from-amber-300 to-orange-400 px-3 py-1 text-xs font-semibold text-slate-900 shadow-sm">
                  {exp.badge}
                </span>
              </div>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">{exp.description}</p>
              <ul className="mt-3 space-y-1.5 text-xs text-slate-600 sm:text-sm">
                {exp.details.map((d) => (
                  <li key={d} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-cyan-500/80" />
                    <span>{d}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>

      {/* Imagen decorativa inferior */}
      <div className="mt-10 flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="relative w-full max-w-5xl overflow-hidden rounded-[2.5rem] bg-sky-100/60 shadow-lg ring-1 ring-sky-100/80">
          {/* Sube una foto panorámica de varias islas y nubes suaves */}
          <div className="relative aspect-[21/5]">
            <Image
              src="/images/sections/experiences-panorama.jpg"
              alt="Panorámica de islas en San Blas con mar turquesa y cielo amaneciendo"
              fill
              className="object-cover object-center"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-sky-900/10 via-transparent to-amber-500/10 mix-blend-soft-light" />
          </div>
        </div>
      </div>
    </section>
  );
}

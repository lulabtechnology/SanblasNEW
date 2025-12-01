// components/Highlights.tsx
import Image from "next/image";

const highlights = [
  {
    title: "Tours auténticos en San Blas",
    description:
      "Explora islas paradisíacas con enfoque cultural Guna: visitas a comunidades, playas vírgenes y experiencias reales, lejos del turismo masivo.",
  },
  {
    title: "Transporte propio 4x4 y lancha",
    description:
      "Coordinamos todo el recorrido desde Ciudad de Panamá o Colombia con vehículos 4x4 y lanchas autorizadas para mayor seguridad y puntualidad.",
  },
  {
    title: "Cabañas frente al mar",
    description:
      "Alojamiento en cabañas familiares operadas por comuneros Guna, con opciones estándar y premium literalmente a pasos del mar.",
  },
  {
    title: "Paquetes Panamá ↔ Colombia",
    description:
      "Días de sol, tours de varios días y expediciones especiales entre Panamá y Colombia para mochileros, familias y parejas.",
  },
  {
    title: "Turismo responsable",
    description:
      "Cada reserva apoya directamente a las comunidades Guna, promoviendo un turismo sostenible que cuida el mar, las islas y las tradiciones.",
  },
];

export default function Highlights() {
  return (
    <section
      id="por-que-san-blas-wave"
      className="relative overflow-hidden bg-sky-50/80 py-16 sm:py-20"
    >
      {/* Degradado suave tipo amanecer */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-amber-100/70 via-sky-50/0 to-transparent" />

      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Columna de texto + tarjetas */}
        <div className="w-full lg:w-3/5">
          <div className="max-w-xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/80">
              ¿por qué viajar con nosotros?
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Vive San Blas como un local
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              San Blas Wave conecta naturaleza, cultura Guna y logística
              completa para que solo tengas que preocuparte por una cosa:
              disfrutar cada ola, cada isla y cada historia.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {highlights.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-3xl bg-white/90 p-5 shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:bg-white hover:shadow-xl hover:ring-cyan-200/80"
              >
                {/* Icono sencillo estilo ola/amanecer */}
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-tr from-amber-300 via-orange-300 to-cyan-400/90 shadow-md">
                  <span className="sr-only">{item.title}</span>
                  <svg
                    viewBox="0 0 32 32"
                    aria-hidden="true"
                    className="h-6 w-6 text-white/95"
                  >
                    <defs>
                      <linearGradient
                        id="sunWave"
                        x1="0%"
                        y1="0%"
                        x2="100%"
                        y2="100%"
                      >
                        <stop offset="0%" stopColor="#FDE68A" />
                        <stop offset="50%" stopColor="#FDBA74" />
                        <stop offset="100%" stopColor="#22D3EE" />
                      </linearGradient>
                    </defs>
                    <circle
                      cx="16"
                      cy="11"
                      r="5"
                      fill="url(#sunWave)"
                      opacity="0.95"
                    />
                    <path
                      d="M4 20c3.5 0 5.5-2 8-2 3 0 4.5 2 7.5 2 2.5 0 4-1 5.5-1.7"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M4 24c2.5 0 4-1.2 5.8-1.8 1.7-.6 3.2-.7 5 .1 1.9.8 3.2 1.7 5.7 1.7"
                      fill="none"
                      stroke="white"
                      strokeWidth="1.4"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      opacity="0.9"
                    />
                  </svg>
                </div>

                <h3 className="mt-4 text-sm font-semibold text-slate-900 sm:text-base">
                  {item.title}
                </h3>
                <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                  {item.description}
                </p>

                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-10 bg-gradient-to-t from-cyan-50/70 via-transparent opacity-0 transition group-hover:opacity-100" />
              </article>
            ))}
          </div>
        </div>

        {/* Columna imagen decorativa (amanecer en San Blas) */}
        <div className="relative w-full lg:w-2/5">
          <div className="mx-auto max-w-md">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-sky-100 via-emerald-50 to-amber-50 shadow-xl ring-1 ring-sky-100/70">
              {/* Ruta de la imagen: súbela a /public/images/sections/highlights-san-blas.jpg */}
              <Image
                src="/images/sections/highlights-san-blas.jpg"
                alt="Islas de San Blas al amanecer con mar turquesa y cabañas frente al mar"
                fill
                className="object-cover object-center"
                priority={false}
              />

              {/* Overlay suave para mezclar con los colores de marca */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-amber-500/20 via-sky-500/10 to-transparent mix-blend-soft-light" />
            </div>

            <div className="-mt-6 flex justify-center gap-3">
              <span className="rounded-full bg-white/80 px-4 py-1 text-xs font-medium text-cyan-700 shadow-sm ring-1 ring-cyan-100">
                Transporte + Hospedaje + Cultura
              </span>
              <span className="hidden rounded-full bg-sky-900/5 px-4 py-1 text-xs font-medium text-slate-600 shadow-sm ring-1 ring-sky-100/70 sm:inline">
                Operado por familias Guna
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

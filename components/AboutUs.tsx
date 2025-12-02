// components/AboutUs.tsx
import Image from "next/image";

export default function AboutUs() {
  return (
    <section
      id="sobre-nosotros"
      className="bg-sky-50 py-16 sm:py-20"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-start gap-10 px-4 sm:px-6 lg:flex-row lg:items-center lg:gap-16 lg:px-8">
        {/* Texto */}
        <div className="w-full lg:w-3/5">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/90">
            sobre san blas wave
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Una marca nacida entre el mar, la cultura Guna y el Caribe binacional
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            San Blas Wave surge de la experiencia de familias y aliados que viven el Caribe cada día:
            comunidades Guna en San Blas, operadores locales y aliados binacionales en Capurganá.
            No es solo una agencia: es un puente entre viajeros conscientes y territorios que quieren ser
            visitados con respeto.
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-600">
            Diseñamos experiencias claras, honestas y coherentes con la realidad de las islas: tiempos reales,
            capacidad de carga de cada destino, clima, seguridad y acuerdos con las comunidades.
            Así cuidamos tanto tu viaje como a las personas que lo hacen posible.
          </p>

          {/* Misión / Visión / Valores */}
          <div className="mt-6 grid gap-4 rounded-3xl bg-white/90 p-5 shadow-sm ring-1 ring-sky-100 sm:grid-cols-3">
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                misión
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Conectar viajeros con San Blas y Capurganá mediante experiencias auténticas, seguras y bien explicadas,
                que respeten la cultura Guna y el entorno marino.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                visión
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600">
                Ser la referencia en turismo responsable y binacional en el Caribe, donde cada viaje cuente una
                historia que valga la pena recordar y repetir.
              </p>
            </div>
            <div>
              <h3 className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-700">
                valores
              </h3>
              <ul className="mt-2 space-y-1 text-xs text-slate-600">
                <li>• Autenticidad y coherencia.</li>
                <li>• Respeto por la cultura y el territorio.</li>
                <li>• Hospitalidad y calidez humana.</li>
                <li>• Seguridad y transparencia en cada decisión.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Imagen lateral */}
        <div className="relative w-full lg:w-2/5">
          <div className="relative mx-auto max-w-sm overflow-hidden rounded-[2.5rem] bg-gradient-to-b from-sky-100 via-emerald-50 to-amber-50 shadow-xl ring-1 ring-sky-100/80">
            <div className="relative aspect-[4/5]">
              <Image
                src="/images/sections/about-san-blas-wave.jpg"
                alt="Equipo y anfitriones Guna recibiendo viajeros en San Blas"
                fill
                className="object-cover object-center"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-900/20 via-transparent to-amber-200/10 mix-blend-soft-light" />
            </div>
          </div>

          <div className="mt-4 rounded-2xl bg-sky-900/90 px-4 py-3 text-[11px] text-cyan-50 shadow-lg ring-1 ring-sky-300/60">
            <p>
              Cada experiencia se construye junto a familias Guna, capitanes y conductores autorizados.
              No prometemos lo que el mar o las islas no pueden sostener.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

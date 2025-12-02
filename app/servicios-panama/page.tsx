// app/servicios-panama/page.tsx
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Servicios en Panamá | San Blas Wave",
  description:
    "Coordinación de traslados, city tours, experiencias combinadas y servicios para agencias en Ciudad de Panamá."
};

export default function PanamaServicesPage() {
  return (
    <main className="bg-sky-50">
      {/* HERO ESTÁTICO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-sky-200 via-cyan-300 to-emerald-300">
        <div className="absolute inset-0">
          <Image
            src="/images/panama/panama-city-skyline.jpg"
            alt="Ciudad de Panamá al atardecer"
            fill
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-sky-950/60 via-sky-900/40 to-emerald-300/40 mix-blend-soft-light" />
        </div>

        <div className="relative mx-auto flex max-w-6xl flex-col gap-8 px-4 py-16 sm:px-6 lg:flex-row lg:items-center lg:py-20 lg:px-8">
          <div className="w-full lg:w-3/5 rounded-3xl bg-sky-950/40 p-6 backdrop-blur-md shadow-xl ring-1 ring-sky-100/40">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              servicios en panamá
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Mucho más que San Blas: servicios en Ciudad de Panamá
            </h1>
            <p className="mt-4 text-sm sm:text-base text-cyan-50/95">
              Coordinamos traslados, city tours, noches en la ciudad y experiencias combinadas para que tu
              paso por Panamá sea fluido, seguro y memorable, antes o después de tu aventura en San Blas.
            </p>
            <div className="mt-6 flex flex-wrap gap-3 text-xs sm:text-sm text-cyan-100/90">
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-950/40 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Traslados aeropuerto ↔ hotel ↔ puerto
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-950/40 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                City tour · Canal de Panamá · Casco Antiguo
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-sky-950/40 px-3 py-1">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Paquetes combinados Panamá + San Blas
              </span>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="https://wa.me/50765654768"
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 transition hover:brightness-110"
              >
                Cotizar servicios en Panamá
              </Link>
              <Link
                href="/"
                className="inline-flex items-center justify-center rounded-full bg-sky-950/60 px-5 py-2.5 text-xs font-semibold text-cyan-50 shadow-md shadow-sky-950/50 hover:bg-sky-950/80"
              >
                Volver a experiencias en San Blas
              </Link>
            </div>
          </div>

          {/* Imagen lateral pequeña */}
          <div className="relative w-full lg:w-2/5">
            <div className="relative mx-auto max-w-xs overflow-hidden rounded-[2.5rem] bg-sky-100/80 shadow-xl ring-1 ring-sky-100/80">
              <div className="relative aspect-[4/5]">
                <Image
                  src="/images/panama/panama-casco-viejo.jpg"
                  alt="Vista de Casco Antiguo en Ciudad de Panamá"
                  fill
                  className="object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-sky-900/30 via-transparent to-amber-200/10 mix-blend-soft-light" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BLOQUE: SERVICIOS PRINCIPALES */}
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/90">
              qué podemos coordinar en panamá
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Servicios para viajeros y grupos en Ciudad de Panamá
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Pensado para quienes llegan o salen del país y quieren aprovechar su tiempo en la capital:
              desde traslados básicos hasta experiencias completas de día o de noche.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {/* Card 1 */}
            <article className="flex flex-col rounded-3xl bg-sky-50/80 p-5 text-left shadow-sm ring-1 ring-sky-100">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                Traslados y logística básica
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Coordinación de transporte terrestre privado para conectar:
              </p>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>• Aeropuerto ↔ hotel ↔ terminal / puerto.</li>
                <li>• Hoteles en Ciudad de Panamá ↔ Puerto Cartí.</li>
                <li>• Servicios para grupos, familias y agencias.</li>
              </ul>
              <p className="mt-3 text-xs font-semibold text-cyan-800">
                Desde aprox. 35–40 USD por persona (según ruta y número de viajeros).
              </p>
            </article>

            {/* Card 2 */}
            <article className="flex flex-col rounded-3xl bg-sky-50/80 p-5 text-left shadow-sm ring-1 ring-sky-100">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                City tours y experiencias urbanas
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Diseñamos recorridos que combinan puntos icónicos de Ciudad de Panamá:
              </p>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>• Canal de Panamá (esclusas de Miraflores / Cocolí).</li>
                <li>• Casco Antiguo y vistas de la Cinta Costera.</li>
                <li>• Opciones de almuerzo o cena en la ciudad.</li>
              </ul>
              <p className="mt-3 text-xs font-semibold text-cyan-800">
                Desde aprox. 75–90 USD por persona (según duración y entradas).
              </p>
            </article>

            {/* Card 3 */}
            <article className="flex flex-col rounded-3xl bg-sky-50/80 p-5 text-left shadow-sm ring-1 ring-sky-100">
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                Combinados Panamá + San Blas
              </h3>
              <p className="mt-2 text-xs sm:text-sm text-slate-600">
                Paquetes que integran ciudad y mar en un mismo viaje:
              </p>
              <ul className="mt-2 space-y-1.5 text-xs sm:text-sm text-slate-600">
                <li>• Noche(s) en Ciudad de Panamá + Día de Sol en San Blas.</li>
                <li>• 2–3 noches en la ciudad antes o después del tour.</li>
                <li>• Ideal para viajeros de larga distancia (Europa, Canadá, etc.).</li>
              </ul>
              <p className="mt-3 text-xs font-semibold text-cyan-800">
                Presupuestos a medida según hotel, fechas y número de noches.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* BLOQUE: PARA AGENCIAS Y GRUPOS */}
      <section className="bg-gradient-to-b from-sky-100 via-emerald-50/60 to-white py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/90">
              para agencias, operadores y grupos grandes
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Servicios B2B y coordinación especial
            </h2>
            <p className="mt-4 text-sm sm:text-base text-slate-600">
              Trabajamos como aliado operativo para agencias mayoristas, operadores receptivos y
              organizadores de grupos que necesitan un equipo en Panamá que entienda tanto la ciudad
              como San Blas.
            </p>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white/90 p-5 text-sm text-slate-700 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-base font-semibold text-slate-900">
                Soporte para agencias y mayoristas
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm">
                <li>• Diseño de rutas y tiempos realistas para itinerarios combinados.</li>
                <li>• Coordinación con hoteles, conductores y operadores locales.</li>
                <li>• Comunicación clara sobre capacidades, clima y temporada.</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Ejemplo: coordinación de grupos de 15–25 pasajeros que llegan en vuelos nocturnos,
                con noches en la ciudad y salida temprana hacia San Blas.
              </p>
            </article>

            <article className="rounded-3xl bg-white/90 p-5 text-sm text-slate-700 shadow-sm ring-1 ring-sky-100">
              <h3 className="text-base font-semibold text-slate-900">
                Proyectos especiales y contenido
              </h3>
              <ul className="mt-3 space-y-1.5 text-xs sm:text-sm">
                <li>• Apoyo logístico para producciones de contenido en ciudad + islas.</li>
                <li>• Rutas adaptadas para fotógrafos, creadores y medios.</li>
                <li>• Acompañamiento de anfitriones locales durante las grabaciones.</li>
              </ul>
              <p className="mt-3 text-xs text-slate-500">
                Ejemplo: campañas de marca que buscan integrar skyline, Casco Antiguo y mar Caribe
                en una misma narrativa visual.
              </p>
            </article>
          </div>

          <div className="mt-8 rounded-2xl bg-sky-900/90 px-5 py-4 text-xs sm:text-sm text-cyan-50 shadow-md">
            <p className="font-semibold text-amber-200">
              ¿Eres agencia o grupo grande?
            </p>
            <p className="mt-1">
              Escríbenos a{" "}
              <a
                href="mailto:booking@sanblaswave.com"
                className="font-semibold underline underline-offset-4"
              >
                booking@sanblaswave.com
              </a>{" "}
              con tu país de origen, número estimado de pasajeros y fechas tentativas, y te
              enviamos una propuesta operativa y comercial coherente.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}

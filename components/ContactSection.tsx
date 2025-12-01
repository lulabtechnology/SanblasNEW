// components/ContactSection.tsx
import Link from "next/link";

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-r from-sky-900 via-cyan-800 to-emerald-700 py-16 sm:py-20"
    >
      {/* Brillo amanecer */}
      <div className="pointer-events-none absolute inset-y-0 right-[-10%] w-[50%] rounded-full bg-gradient-to-l from-amber-300/60 via-orange-300/40 to-transparent blur-3xl" />

      <div className="relative mx-auto flex max-w-5xl flex-col items-start gap-6 px-4 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:gap-10 lg:px-8">
        <div className="max-w-xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100/80">
            listo para tu próxima historia
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Hablemos de tu viaje a San Blas
          </h2>
          <p className="mt-4 text-sm sm:text-base text-cyan-100/90">
            Cuéntanos desde dónde viajas, cuántos días tienes y qué tipo de experiencia buscas.
            En menos de 24 horas recibirás una propuesta clara, honesta y alineada con lo que quieres vivir.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            {/* Cambia el enlace de WhatsApp por el número real */}
            <Link
              href="https://wa.me/50700000000"
              target="_blank"
              className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/30 transition hover:brightness-110"
            >
              Escribir por WhatsApp
            </Link>
            <a
              href="mailto:info@sanblaswave.com"
              className="text-sm font-medium text-cyan-100 underline-offset-4 hover:underline"
            >
              o escríbenos por correo
            </a>
          </div>
        </div>

        <div className="w-full max-w-sm rounded-3xl bg-white/10 p-5 text-sm text-cyan-50 shadow-xl ring-1 ring-cyan-300/40 backdrop-blur">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-amber-200">
            información rápida
          </p>
          <ul className="mt-3 space-y-2 text-xs sm:text-sm">
            <li>
              <span className="font-semibold text-white">Salidas desde:</span>{" "}
              Ciudad de Panamá, Capurganá y Sapzurro (según plan).
            </li>
            <li>
              <span className="font-semibold text-white">Idiomas:</span>{" "}
              Español, apoyo en inglés (bajo coordinación previa).
            </li>
            <li>
              <span className="font-semibold text-white">Tipo de viajes:</span>{" "}
              Parejas, familias, grupos de amigos y mochileros.
            </li>
            <li>
              <span className="font-semibold text-white">Turismo responsable:</span>{" "}
              Trabajo directo con familias Guna y aliados verificados.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

// components/ContactSection.tsx
import Link from "next/link";

const contactBlocks = [
  {
    id: "es",
    title: "Viajeros que hablan español",
    audience: "Panamá, Colombia y Latinoamérica",
    description:
      "Si hablas español y quieres planear tu viaje desde Panamá, Colombia u otro país de la región, este es tu canal directo. Te explicamos todo con detalle, paso a paso.",
    whatsapp: "https://wa.me/50765654768", // Renilio Crespo (ES)
    buttonLabel: "Escribir por WhatsApp (ES)",
    notes: [
      "Asesoría sobre días de sol, planes de 2–3 días y rutas Panamá ↔ Colombia.",
      "Recomendaciones según presupuesto, fechas y tipo de grupo.",
      "Información clara sobre qué incluye cada tour y qué debes llevar."
    ]
  },
  {
    id: "en",
    title: "English-speaking travellers",
    audience: "International guests · English support",
    description:
      "If you prefer to communicate in English, this is the best way. We’ll guide you through itineraries, what’s included and the best plan for your dates and travel style.",
    whatsapp: "https://wa.me/17789918346", // Harold Echeverry (EN)
    buttonLabel: "Chat on WhatsApp (EN)",
    notes: [
      "Support for travellers coming from Canada, USA, Europe and beyond.",
      "Clear timing, islands to visit and logistic details in English.",
      "Help connecting San Blas with Panama City, Capurganá or Sapzurro."
    ]
  }
];

export default function ContactSection() {
  return (
    <section
      id="contacto"
      className="relative overflow-hidden bg-gradient-to-r from-sky-800 via-cyan-800 to-emerald-700 py-16 sm:py-20"
    >
      {/* Glow amanecer */}
      <div className="pointer-events-none absolute inset-y-0 right-[-15%] w-[55%] rounded-full bg-gradient-to-l from-amber-300/70 via-orange-300/40 to-transparent blur-3xl" />

      <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-100/95">
            listo para planear tu viaje
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Dos canales de WhatsApp, una misma experiencia en San Blas
          </h2>
          <p className="mt-4 text-sm sm:text-base text-cyan-100/90">
            Elige el canal que mejor se adapte a ti: atención en español para viajeros
            de Panamá, Colombia y Latinoamérica, o soporte en inglés para invitados
            de cualquier parte del mundo.
          </p>
        </div>

        {/* Bloques ES / EN */}
        <div className="mt-8 grid gap-6 md:grid-cols-2">
          {contactBlocks.map((block) => (
            <article
              key={block.id}
              className="flex flex-col rounded-3xl bg-sky-950/45 p-5 text-sm text-cyan-50 shadow-xl ring-1 ring-cyan-300/40 backdrop-blur"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
                {block.audience}
              </p>
              <h3 className="mt-2 text-lg font-semibold text-white">
                {block.title}
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-cyan-50/95">
                {block.description}
              </p>

              <ul className="mt-4 space-y-1.5 text-xs sm:text-sm text-cyan-50/90">
                {block.notes.map((note) => (
                  <li key={note} className="flex gap-2">
                    <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    <span>{note}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-5">
                <Link
                  href={block.whatsapp}
                  target="_blank"
                  className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-5 py-2.5 text-xs sm:text-sm font-semibold text-slate-900 shadow-md shadow-emerald-400/60 transition hover:brightness-110"
                >
                  {block.buttonLabel}
                </Link>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-6 text-[11px] sm:text-xs text-cyan-100/90">
          También puedes escribirnos a{" "}
          <a
            href="mailto:info@sanblaswave.com"
            className="font-semibold underline underline-offset-4"
          >
            info@sanblaswave.com
          </a>{" "}
          o{" "}
          <a
            href="mailto:booking@sanblaswave.com"
            className="font-semibold underline underline-offset-4"
          >
            booking@sanblaswave.com
          </a>{" "}
          si prefieres coordinar tu reserva por correo electrónico.
        </p>
      </div>
    </section>
  );
}

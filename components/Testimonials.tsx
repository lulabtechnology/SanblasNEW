// components/Testimonials.tsx
const testimonials = [
  {
    name: "María & Andrés",
    origin: "Bogotá, Colombia",
    trip: "Expedición Panamá → Colombia",
    text:
      "Queríamos cruzar al Caribe colombiano sin vuelos internos y con un plan claro. El itinerario que nos enviaron tenía todo cronometrado y siempre supimos qué venía después. Fue intenso, pero muy organizado y con momentos increíbles en cada isla."
  },
  {
    name: "Sarah & James",
    origin: "Londres, Reino Unido",
    trip: "Tour 3 días / 2 noches",
    text:
      "Nos encantó que combinaran playas hermosas con explicaciones sobre la cultura Guna. Las cabañas son sencillas pero muy auténticas, y el equipo siempre estuvo pendiente de que nos sintiéramos seguros y cómodos."
  },
  {
    name: "Familia López",
    origin: "Ciudad de Panamá, Panamá",
    trip: "Día de Sol desde Panamá",
    text:
      "Viajamos con niños pequeños y teníamos muchas dudas. Nos explicaron todo por WhatsApp, qué llevar, los horarios y cómo era el mar. El día fue perfecto: puntualidad, buen almuerzo y una cápsula cultural que nos encantó a todos."
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/80">
            testimonios
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Lo que dicen quienes ya viajaron con nosotros
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Más allá de las fotos, las mejores referencias son las experiencias reales de viajeros que
            confiaron en San Blas Wave para organizar su aventura en el Caribe.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <article
              key={t.name + t.trip}
              className="flex h-full flex-col rounded-3xl bg-sky-50/70 p-5 text-left shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:bg-sky-50 hover:shadow-md hover:ring-cyan-200/80"
            >
              <p className="text-xs leading-relaxed text-slate-700 sm:text-sm">
                “{t.text}”
              </p>
              <div className="mt-4 border-t border-sky-100 pt-3 text-[11px] sm:text-xs text-slate-600">
                <p className="font-semibold text-slate-900">
                  {t.name}
                </p>
                <p>{t.origin}</p>
                <p className="text-cyan-700 font-medium">
                  {t.trip}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

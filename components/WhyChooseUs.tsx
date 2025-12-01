// components/WhyChooseUs.tsx

const reasons = [
  {
    title: "Narrativa clara, no solo fotos",
    description:
      "Explicamos cada experiencia con lenguaje sencillo: qué incluye, qué no incluye y cómo será tu día. Sin letras pequeñas, sin sorpresas en el puerto.",
  },
  {
    title: "Alianza real con comunidades Guna",
    description:
      "San Blas Wave trabaja directamente con familias y autoridades locales, respetando sus normas, su cultura y su forma de ver el turismo.",
  },
  {
    title: "Logística probada desde Panamá y Colombia",
    description:
      "Rutas diseñadas junto a aliados como Darius Capurganá para conectar Ciudad de Panamá, San Blas y el Caribe colombiano con tiempos realistas.",
  },
  {
    title: "Seguridad y acompañamiento",
    description:
      "Capitanes y conductores autorizados, control del clima y acompañamiento en cada etapa. No vendemos aventuras que no podamos acompañar.",
  },
  {
    title: "Turismo responsable y coherente",
    description:
      "Priorizamos grupos manejables, respeto por el entorno y decisiones que beneficien a las comunidades antes que a la foto perfecta.",
  },
  {
    title: "Atención humana, antes y después del viaje",
    description:
      "Desde el primer mensaje hasta tu regreso, tienes un canal directo para dudas, cambios y soporte. No eres solo una reserva más en el sistema.",
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="por-que-elegirnos"
      className="bg-sky-50/70 py-16 sm:py-20"
    >
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/80">
            por qué elegir san blas wave
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Viajes pensados para el viajero y para las islas
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            No somos una simple vitrina de tours. Somos un puente entre tu viaje soñado y las realidades
            del Caribe panameño y colombiano, con una mirada honesta sobre tiempos, clima y capacidades locales.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {reasons.map((reason) => (
            <article
              key={reason.title}
              className="flex flex-col rounded-3xl bg-white/90 p-5 text-left shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:bg-white hover:shadow-md hover:ring-cyan-200/80"
            >
              <h3 className="text-sm font-semibold text-slate-900 sm:text-base">
                {reason.title}
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">
                {reason.description}
              </p>
            </article>
          ))}
        </div>

        <p className="mt-8 text-xs sm:text-sm text-slate-500">
          *Nuestro objetivo es que al final del viaje sientas que entendiste San Blas más allá de la postal: 
          su historia, sus tiempos y la forma en que sus comunidades han decidido cuidar estas islas.
        </p>
      </div>
    </section>
  );
}

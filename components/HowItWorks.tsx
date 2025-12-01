// components/HowItWorks.tsx
const steps = [
  {
    step: "01",
    title: "Elige tu experiencia",
    description:
      "Define desde dónde viajas (Panamá o Colombia), cuántos días tienes y con quién viajas: pareja, amigos, familia o solo.",
  },
  {
    step: "02",
    title: "Hablamos por WhatsApp",
    description:
      "Compartimos opciones claras, qué incluye cada tour y te orientamos según tu presupuesto y estilo de viaje.",
  },
  {
    step: "03",
    title: "Confirmas y recibes tu itinerario",
    description:
      "Una vez confirmado el pago, recibes tu itinerario cronometrado, lista de qué llevar y todos los puntos de encuentro.",
  },
  {
    step: "04",
    title: "Vives San Blas como un local",
    description:
      "Te acompañamos durante todo el recorrido con equipo local, seguridad y cápsulas culturales que dan sentido a cada parada.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-gradient-to-b from-amber-50 via-sky-50 to-white py-16 sm:py-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/80">
            cómo funciona
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Reservar es sencillo y transparente
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Queremos que desde el primer mensaje tengas claridad: qué incluye cada plan, qué no incluye y cómo será tu
            día (o días) en San Blas. Sin letras pequeñas.
          </p>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.step}
              className="flex flex-col rounded-3xl bg-white/90 p-4 text-left shadow-sm ring-1 ring-sky-100 transition hover:-translate-y-1 hover:shadow-md hover:ring-cyan-200/80"
            >
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-600">
                Paso {s.step}
              </span>
              <h3 className="mt-2 text-sm font-semibold text-slate-900 sm:text-base">{s.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-slate-600 sm:text-sm">{s.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

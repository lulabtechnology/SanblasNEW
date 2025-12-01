// components/FAQ.tsx
const faqs = [
  {
    question: "¿Cuál es el precio del tour y qué está incluido?",
    answer:
      "Trabajamos con diferentes tours y duraciones, por eso el precio depende del plan y la cantidad de personas. Siempre detallamos qué incluye: transporte, comidas, tasas, islas a visitar y si hay cápsulas culturales o actividades especiales.",
  },
  {
    question: "¿Cómo puedo reservar y qué métodos de pago aceptan?",
    answer:
      "Puedes reservar vía WhatsApp, correo electrónico o redes sociales. Aceptamos transferencias bancarias y otros métodos electrónicos según tu país. Tu reserva se confirma una vez registrado el pago según el plan acordado.",
  },
  {
    question: "¿Qué debo llevar al tour y cómo es el alojamiento?",
    answer:
      "Recomendamos ropa cómoda, traje de baño, toalla, protector solar biodegradable, gorra, efectivo en dólares y artículos personales. El alojamiento es en cabañas familiares frente al mar, con comodidades básicas y ambiente auténtico Guna.",
  },
  {
    question: "¿Qué nivel de seguridad y asistencia ofrecen durante el tour?",
    answer:
      "La seguridad es prioridad. Trabajamos con capitanes certificados, guías locales y aliados confiables. Supervisamos el clima, contamos con chalecos salvavidas y acompañamiento permanente durante la experiencia.",
  },
  {
    question: "¿Pueden personalizar el tour según mis necesidades?",
    answer:
      "Sí. Adaptamos horarios, islas a visitar, tipo de alojamiento y actividades según tu perfil: viaje romántico, familia con niños, grupo de amigos, mochileros, etc.",
  },
];

export default function FAQ() {
  return (
    <section id="faq" className="bg-sky-50/60 py-16 sm:py-20">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/80">
            preguntas frecuentes
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Todo lo que siempre preguntan antes de reservar
          </h2>
          <p className="mt-4 text-sm sm:text-base text-slate-600">
            Si todavía tienes dudas después de leer esto, estaremos encantados de responderte directamente por WhatsApp.
          </p>
        </div>

        <div className="mt-8 space-y-4">
          {faqs.map((item) => (
            <details
              key={item.question}
              className="group rounded-2xl bg-white/90 p-4 text-left shadow-sm ring-1 ring-sky-100 open:shadow-md open:ring-cyan-200/70"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4">
                <span className="text-sm font-semibold text-slate-900 sm:text-base">
                  {item.question}
                </span>
                <span className="text-xl leading-none text-cyan-600 transition group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mt-3 text-xs leading-relaxed text-slate-600 sm:text-sm">{item.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

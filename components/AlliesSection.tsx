// components/AlliesSection.tsx
import Image from "next/image";

const allies = [
  {
    name: "CAPTUR Mayorista Travel & Tours",
    image: "/images/allies/captur-logo.png",
    role: "Mayorista y operador turístico",
  },
  {
    name: "Cabaña Selvática",
    image: "/images/allies/cabana-selvatica-logo.png",
    role: "Alojamiento y experiencias en Capurganá",
  },
  {
    name: "Planes Capurganá",
    image: "/images/allies/planes-capurgana-logo.png",
    role: "Operador de planes y experiencias en Capurganá",
  },
];

export default function AlliesSection() {
  return (
    <section className="bg-sky-50 py-10 sm:py-12">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-700/90">
            algunos de nuestros aliados
          </p>
          <h2 className="mt-2 text-xl sm:text-2xl font-bold text-slate-900">
            Una red de aliados para que tu viaje funcione en la práctica
          </h2>
          <p className="mt-3 text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Trabajamos con aliados en Panamá y Colombia que comparten nuestra visión
            de turismo responsable y coherente. Ellos hacen posible cada itinerario.
          </p>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-3">
          {allies.map((ally) => (
            <article
              key={ally.name}
              className="flex flex-col items-center rounded-3xl bg-white/90 p-5 text-center shadow-sm ring-1 ring-sky-100"
            >
              <div className="relative h-24 w-24 overflow-hidden rounded-full bg-sky-50 shadow-inner">
                <Image
                  src={ally.image}
                  alt={ally.name}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="mt-3 text-sm font-semibold text-slate-900">
                {ally.name}
              </h3>
              <p className="mt-1 text-[11px] sm:text-xs text-slate-600">
                {ally.role}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

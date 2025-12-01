export default function Highlights() {
  const items = [
    {
      title: "Agencia local en Guna Yala",
      text: "Operación directa en San Blas con equipo Guna y años de experiencia guiando viajeros.",
    },
    {
      title: "Transporte propio 4×4 + lancha",
      text: "Coordinamos toda la logística desde Ciudad de Panamá o frontera con Colombia.",
    },
    {
      title: "Cabañas frente al mar",
      text: "Hospedajes familiares, opciones estándar y premium con vista al Caribe.",
    },
    {
      title: "Turismo responsable",
      text: "Cada reserva apoya a comunidades locales y cuida el entorno natural.",
    },
  ];

  return (
    <section className="bg-[#FFF8EC] py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="text-sm font-semibold uppercase tracking-[0.25em] text-sky-800">
            Vive San Blas con propósito
          </h2>
          <p className="mt-3 text-2xl font-semibold text-slate-900 sm:text-3xl">
            Naturaleza, cultura Guna y servicio profesional en un solo lugar.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <div
              key={item.title}
              className="flex h-full flex-col rounded-3xl bg-white/70 p-5 shadow-lg shadow-sky-100/70"
            >
              <h3 className="mb-2 text-sm font-semibold text-sky-900">
                {item.title}
              </h3>
              <p className="text-sm text-slate-700">{item

// app/galeria/page.tsx
import Image from "next/image";
import Footer from "../../components/Footer";

export const metadata = {
  title: "Galería de experiencias | San Blas Wave",
  description:
    "Galería visual de momentos, islas, cultura Guna y conexión binacional entre San Blas y Capurganá.",
};

const gallerySections = [
  {
    id: "san-blas-desde-el-mar",
    kicker: "san blas en colores",
    title: "Lancha, mar y horizonte sin filtros",
    description:
      "Así se ve el Caribe cuando lo recorres despacio: olas suaves, lanchas que conectan islas y ese horizonte que te recuerda por qué vale la pena viajar.",
    images: [
      {
        src: "/images/gallery/san-blas-lancha-1.jpg",
        alt: "Lancha navegando entre islas de San Blas",
      },
      {
        src: "/images/gallery/san-blas-lancha-2.jpg",
        alt: "Vista del mar turquesa con lancha en movimiento",
      },
      {
        src: "/images/gallery/san-blas-lancha-3.jpg",
        alt: "Lancha acercándose a una isla de arena blanca",
      },
      {
        src: "/images/gallery/san-blas-isla-1.jpg",
        alt: "Isla pequeña con palmeras y mar cristalino",
      },
      {
        src: "/images/gallery/san-blas-isla-2.jpg",
        alt: "Isla rodeada de tonos azules y verdes intensos",
      },
      {
        src: "/images/gallery/san-blas-isla-3.jpg",
        alt: "Panorámica de varias islas en San Blas",
      },
    ],
  },
  {
    id: "cultura-guna-y-momentos",
    kicker: "cultura y territorio",
    title: "Detrás de cada foto hay una familia Guna",
    description:
      "San Blas no es un escenario vacío: es el hogar de comunidades que reciben a los viajeros con su tiempo, su historia y su manera de entender el mar.",
    images: [
      {
        src: "/images/gallery/guna-cultura-1.jpg",
        alt: "Detalle de artesanía Guna y colores tradicionales",
      },
      {
        src: "/images/gallery/guna-cultura-2.jpg",
        alt: "Camino entre cabañas de una isla habitada",
      },
      {
        src: "/images/gallery/guna-cultura-3.jpg",
        alt: "Persona Guna mirando hacia el mar al atardecer",
      },
      {
        src: "/images/gallery/fogata-caribe-1.jpg",
        alt: "Fogata en la playa con cielo estrellado",
      },
      {
        src: "/images/gallery/fogata-caribe-2.jpg",
        alt: "Grupo de viajeros alrededor de una fogata en la arena",
      },
      {
        src: "/images/gallery/fogata-caribe-3.jpg",
        alt: "Sombras y luces de la fogata junto al mar",
      },
    ],
  },
  {
    id: "caribe-binacional",
    kicker: "san blas × capurganá",
    title: "Un Caribe que se comparte entre dos países",
    description:
      "Capurganá, selva y mar. San Blas, cultura y archipiélago. Juntos construyen rutas binacionales donde cada tramo cuenta una historia distinta.",
    images: [
      {
        src: "/images/gallery/capurgana-selva-mar-1.jpg",
        alt: "Vista de Capurganá con selva y mar al fondo",
      },
      {
        src: "/images/gallery/capurgana-selva-mar-2.jpg",
        alt: "Sendero entre vegetación que lleva a una playa",
      },
      {
        src: "/images/gallery/capurgana-selva-mar-3.jpg",
        alt: "Muelle o zona de embarque en Capurganá",
      },
      {
        src: "/images/gallery/viajeros-grupo-1.jpg",
        alt: "Grupo de viajeros sonriendo en una lancha",
      },
      {
        src: "/images/gallery/viajeros-grupo-2.jpg",
        alt: "Pareja o amigos caminando por la playa",
      },
      {
        src: "/images/gallery/viajeros-grupo-3.jpg",
        alt: "Grupo viendo el atardecer frente al mar",
      },
    ],
  },
];

export default function GalleryPage() {
  return (
    <>
      <main className="bg-sky-50">
        {/* HERO SIMPLE */}
        <section className="bg-gradient-to-br from-sky-200 via-cyan-200 to-emerald-200">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-900/80">
                galería de experiencias
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-sky-950 sm:text-4xl md:text-5xl">
                Imágenes que cuentan la historia de cada travesía
              </h1>
              <p className="mt-4 text-sm sm:text-base text-sky-900/90">
                No son fotos de catálogo: son momentos reales, capturados en medio de rutas,
                amaneceres, cruces binacionales y pausas que se vuelven recuerdos.
                Esta galería existe para que puedas sentir un poco del viaje antes de vivirlo.
              </p>
            </div>
          </div>
        </section>

        {/* SECCIONES DE GALERÍA */}
        {gallerySections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="bg-white py-14 sm:py-16"
          >
            <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
              <div className="max-w-3xl mx-auto text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-700/90">
                  {section.kicker}
                </p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
                  {section.title}
                </h2>
                <p className="mt-3 text-xs sm:text-sm text-slate-600">
                  {section.description}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
                {section.images.map((image) => (
                  <figure
                    key={image.src}
                    className="group relative overflow-hidden rounded-3xl bg-sky-50/80 shadow-sm ring-1 ring-sky-100"
                  >
                    <div className="relative aspect-[4/5]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <figcaption className="sr-only">{image.alt}</figcaption>
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-sky-900/10 via-transparent to-white/10" />
                  </figure>
                ))}
              </div>
            </div>
          </section>
        ))}
      </main>

      <Footer />
    </>
  );
}

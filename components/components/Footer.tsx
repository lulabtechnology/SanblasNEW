// components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-sky-950 text-sky-50">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          {/* Marca */}
          <div className="md:col-span-2">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              san blas wave
            </p>
            <h3 className="mt-2 text-lg font-semibold">
              Your adventure, your story
            </h3>
            <p className="mt-3 text-xs sm:text-sm text-sky-200">
              Experiencias diseñadas entre San Blas, Panamá y Capurganá, Colombia.
              Turismo responsable, logística clara y acompañamiento humano en cada etapa.
            </p>
          </div>

          {/* Contacto */}
          <div className="text-xs sm:text-sm space-y-1.5">
            <h4 className="text-sm font-semibold text-sky-50">
              Contacto directo
            </h4>
            <p className="mt-1 font-medium text-cyan-200">WhatsApp Español</p>
            <p>+507 6565-4768 · Renilio Crespo</p>

            <p className="mt-2 font-medium text-cyan-200">WhatsApp English</p>
            <p>+1 (778) 991-8346 · Harold Echeverry</p>

            <p className="mt-2 font-medium text-cyan-200">Correos</p>
            <p>
              <a href="mailto:info@sanblaswave.com" className="underline underline-offset-2">
                info@sanblaswave.com
              </a>
            </p>
            <p>
              <a href="mailto:booking@sanblaswave.com" className="underline underline-offset-2">
                booking@sanblaswave.com
              </a>
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="text-xs sm:text-sm space-y-1.5">
            <h4 className="text-sm font-semibold text-sky-50">
              Enlaces rápidos
            </h4>
            <p>
              <Link href="#experiencias" className="hover:underline underline-offset-2">
                Experiencias
              </Link>
            </p>
            <p>
              <Link href="#paquetes" className="hover:underline underline-offset-2">
                Planes y paquetes
              </Link>
            </p>
            <p>
              <Link href="#rutas-binacionales" className="hover:underline underline-offset-2">
                Rutas binacionales
              </Link>
            </p>
            <p>
              <Link href="#por-que-elegirnos" className="hover:underline underline-offset-2">
                ¿Por qué elegirnos?
              </Link>
            </p>
            <p>
              <Link href="#faq" className="hover:underline underline-offset-2">
                Preguntas frecuentes
              </Link>
            </p>
            <p>
              <Link href="#contacto" className="hover:underline underline-offset-2">
                Contacto
              </Link>
            </p>

            <div className="mt-3">
              <h4 className="text-sm font-semibold text-sky-50">
                Redes sociales
              </h4>
              <p className="mt-1 text-[11px] sm:text-xs text-sky-200">
                (Actualiza los enlaces cuando tengas las cuentas oficiales)
              </p>
              <p className="mt-1">
                <a
                  href="https://instagram.com/sanblaswave"
                  target="_blank"
                  className="hover:underline underline-offset-2"
                >
                  Instagram
                </a>
              </p>
              <p>
                <a
                  href="https://facebook.com/sanblaswave"
                  target="_blank"
                  className="hover:underline underline-offset-2"
                >
                  Facebook
                </a>
              </p>
              <p>
                <a
                  href="https://tiktok.com/@sanblaswave"
                  target="_blank"
                  className="hover:underline underline-offset-2"
                >
                  TikTok
                </a>
              </p>
              <p>
                <a
                  href="https://youtube.com/@sanblaswave"
                  target="_blank"
                  className="hover:underline underline-offset-2"
                >
                  YouTube
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-sky-800 pt-4 text-[11px] text-sky-400 flex flex-wrap items-center justify-between gap-2">
          <p>© {new Date().getFullYear()} San Blas Wave. Todos los derechos reservados.</p>
          <p>Diseño y desarrollo web por Lulab Tech.</p>
        </div>
      </div>
    </footer>
  );
}

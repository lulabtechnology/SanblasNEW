// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-sky-100 bg-sky-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo + marca */}
        <Link href="/" className="flex items-center gap-2">
          <div className="relative h-9 w-9 sm:h-10 sm:w-10">
            {/* 👉 Logo principal de San Blas Wave */}
            <Image
              src="/images/brand/san-blas-wave-logo.png"
              alt="San Blas Wave"
              fill
              className="object-contain"
            />
          </div>
          <div className="leading-tight">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-cyan-700">
              san blas wave
            </p>
            <p className="text-[11px] text-slate-600">
              Your adventure, your story
            </p>
          </div>
        </Link>

        {/* Navegación */}
        <nav className="flex items-center gap-4 text-xs sm:text-sm text-slate-700">
          <Link href="/" className="hover:text-cyan-700">
            Inicio
          </Link>
          <Link
            href="/#experiencias"
            className="hidden sm:inline hover:text-cyan-700"
          >
            Experiencias
          </Link>
          <Link
            href="/#paquetes"
            className="hidden sm:inline hover:text-cyan-700"
          >
            Paquetes
          </Link>
          <Link
            href="/servicios-panama"
            className="rounded-full bg-sky-900 px-4 py-1.5 text-xs font-semibold text-cyan-50 shadow-sm hover:bg-sky-800"
          >
            Servicios en Panamá
          </Link>
        </nav>
      </div>
    </header>
  );
}

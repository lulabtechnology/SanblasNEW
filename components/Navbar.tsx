// components/Navbar.tsx
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-sky-100 bg-sky-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Logo + texto */}
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
          <span className="text-xs sm:text-sm font-semibold text-slate-800">
            San Blas Wave
          </span>
        </Link>

        {/* Navegación simple */}
        <nav className="flex items-center gap-4 text-xs sm:text-sm text-slate-700">
          <Link href="/" className="hover:text-cyan-700">
            Inicio
          </Link>
          <Link
            href="/servicios-panama"
            className="hover:text-cyan-700"
          >
            Servicios en Panamá
          </Link>
          <Link
            href="/#contacto"
            className="hidden sm:inline hover:text-cyan-700"
          >
            Contacto
          </Link>
        </nav>
      </div>
    </header>
  );
}

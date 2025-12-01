"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const navItems = [
  { label: "Inicio", href: "#inicio" },
  { label: "Experiencias", href: "#experiencias" },
  { label: "Rutas binacionales", href: "#binacionales" },
  { label: "Por qué nosotros", href: "#por-que" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "FAQ", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled
          ? "bg-white/95 shadow-md shadow-sky-100 backdrop-blur"
          : "bg-gradient-to-b from-[#021A35]/40 via-transparent to-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <Link href="#inicio" className="flex items-center gap-3">
          <div className="h-9 w-9 rounded-full bg-white/90 p-1.5 shadow-md shadow-sky-200">
            {/* Logo circular pequeño; la imagen grande va en el Hero */}
            <span className="block h-full w-full rounded-full bg-[radial-gradient(circle_at_30%_20%,#FDB54A,#FD6F4A)]" />
          </div>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-[0.2em] text-sky-900">
              SAN BLAS WAVE
            </p>
            <p className="text-xs text-sky-800/80">
              Naturaleza · Tradición · Paraíso
            </p>
          </div>
        </Link>

        <div className="hidden items-center gap-6 text-xs font-medium uppercase tracking-[0.18em] text-slate-700 sm:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative pb-1 hover:text-sky-900"
            >
              {item.label}
              <span className="absolute inset-x-0 -bottom-0.5 h-0.5 origin-center scale-x-0 bg-gradient-to-r from-sky-400 via-teal-400 to-amber-400 transition-transform group-hover:scale-x-100" />
            </Link>
          ))}
        </div>

        <Link
          href="https://wa.me/50765654768?text=Hola%20San%20Blas%20Wave%2C%20quiero%20cotizar%20un%20tour."
          className="hidden rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-teal-400 px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-slate-900 shadow-md shadow-amber-100 hover:brightness-105 sm:inline-block"
        >
          Cotiza tu tour
        </Link>
      </nav>
    </header>
  );
}

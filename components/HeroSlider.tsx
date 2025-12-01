"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    image: "/images/hero-1-sanblas-sunrise.jpg",
    alt: "Amanecer en islas de San Blas con mar turquesa",
    title: "Tu aventura en San Blas empieza aquí",
    subtitle:
      "Conecta con el amanecer caribeño, el mar turquesa y la cultura Guna en un solo viaje.",
  },
  {
    image: "/images/hero-2-boat-daytrip.jpg",
    alt: "Lancha navegando entre islas de agua cristalina",
    title: "Tours y días de sol con todo coordinado",
    subtitle:
      "Transporte 4×4 + lancha, islas paradisíacas, piscinas naturales y gastronomía local.",
  },
  {
    image: "/images/hero-3-guna-community.jpg",
    alt: "Comunidad Guna compartiendo su cultura con viajeros",
    title: "Experiencias culturales auténticas",
    subtitle:
      "Vive la hospitalidad Guna, sus tradiciones, artesanías y sabores de forma responsable.",
  },
  {
    image: "/images/hero-4-snorkel.jpg",
    alt: "Personas haciendo snorkel en arrecife de coral",
    title: "Rutas Panamá ↔ Colombia sin complicaciones",
    subtitle:
      "Expediciones binacionales con guías locales, asistencia migratoria y transparencia total.",
  },
];

export default function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(
      () => setIndex((prev) => (prev + 1) % slides.length),
      7000
    );
    return () => clearInterval(id);
  }, []);

  const current = slides[index];

  return (
    <section
      id="inicio"
      className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-[#FFF6E9]"
    >
      {slides.map((slide, i) => (
        <div
          key={slide.image}
          className={`absolute inset-0 transition-opacity duration-[1200ms] ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={slide.image}
            alt={slide.alt}
            fill
            priority={i === 0}
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-[#021A35]/60 via-[#021A35]/15 to-[#FFF6E9]/40" />
        </div>
      ))}

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 py-16 text-center text-white sm:px-6">
        <div className="mb-6">
          <Image
            src="/logo-sb-wave.png"
            alt="Logo San Blas Wave"
            width={150}
            height={150}
            className="mx-auto drop-shadow-xl"
          />
        </div>

        <p className="mb-4 text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
          Explora San Blas · Naturaleza · Tradición · Paraíso
        </p>

        <h1 className="mb-4 text-3xl font-semibold leading-tight sm:text-5xl">
          {current.title}
        </h1>

        <p className="mb-8 max-w-2xl text-sm text-slate-100/90 sm:text-lg">
          {current.subtitle}
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <Link
            href="https://wa.me/50765654768?text=Hola%20San%20Blas%20Wave%2C%20quiero%20cotizar%20un%20tour."
            className="rounded-full bg-gradient-to-r from-amber-400 via-amber-300 to-teal-400 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-slate-900 shadow-lg shadow-amber-200/60 hover:brightness-110"
          >
            Cotiza tu tour
          </Link>
          <Link
            href="#experiencias"
            className="rounded-full border border-white/70 bg-white/10 px-6 py-3 text-xs font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm hover:bg-white/20"
          >
            Ver experiencias
          </Link>
        </div>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`h-2 rounded-full transition-all ${
                i === index
                  ? "w-6 bg-white"
                  : "w-2 bg-white/60 hover:bg-white/90"
              }`}
              aria-label={`Ver imagen ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

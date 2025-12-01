"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const slides = [
  {
    id: 0,
    image: "/images/hero/san-blas-sunrise-1.jpg",
    tag: "San Blas · Panamá",
    title: "Your adventure, your story",
    description:
      "Playas turquesa, cultura Guna y rutas claras desde Panamá y Colombia. San Blas Wave diseña tu experiencia para que solo tengas que disfrutar.",
  },
  {
    id: 1,
    image: "/images/hero/san-blas-sunrise-2.jpg",
    tag: "Islas & cultura Guna",
    title: "Vive San Blas como un local",
    description:
      "Tours de un día, planes de varios días y rutas binacionales Panamá ↔ Colombia con aliados locales y comunidades Guna.",
  },
  {
    id: 2,
    image: "/images/hero/san-blas-sunrise-3.jpg",
    tag: "Rutas Panamá ↔ Colombia",
    title: "Un puente entre dos costas",
    description:
      "Darius Capurganá × San Blas Wave: itinerarios pensados para mochileros, familias y parejas que quieren algo más que un traslado.",
  },
];

const AUTOPLAY_MS = 8000;

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, []);

  const active = slides[current];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-sky-200 via-cyan-300 to-emerald-300">
      {/* Fondo con foto */}
      <div className="absolute inset-0">
        <Image
          src={active.image}
          alt={active.title}
          fill
          priority
          className="object-cover object-center"
        />
        {/* Overlay para que el texto se lea pero manteniendo color luminoso */}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-900/35 via-cyan-800/10 to-amber-300/40 mix-blend-soft-light" />
      </div>

      {/* Contenido */}
      <div className="relative mx-auto flex min-h-[80vh] max-w-6xl flex-col justify-between px-4 py-10 sm:px-6 lg:px-8">
        {/* Top bar chico */}
        <div className="flex justify-between text-[11px] sm:text-xs text-cyan-50/90">
          <span className="rounded-full bg-sky-900/40 px-3 py-1 font-semibold uppercase tracking-[0.25em]">
            san blas wave
          </span>
          <span className="hidden rounded-full bg-sky-900/40 px-3 py-1 sm:inline">
            Your adventure, your story
          </span>
        </div>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,0.9fr)] lg:items-center">
          {/* Copy principal */}
          <div className="max-w-xl rounded-3xl bg-sky-950/35 p-6 backdrop-blur-md shadow-xl ring-1 ring-sky-100/40">
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-amber-200">
              {active.tag}
            </p>
            <h1 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              {active.title}
            </h1>
            <p className="mt-4 text-sm sm:text-base text-cyan-50/95">
              {active.description}
            </p>

            {/* DOS WHATSAPP: ES / EN */}
            <div className="mt-6 flex flex-wrap gap-3">
              {/* WhatsApp Español */}
              <Link
                href="https://wa.me/50700000000" // 👉 Cambia por el número REAL para español
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-emerald-300 px-6 py-2.5 text-sm font-semibold text-slate-900 shadow-lg shadow-emerald-500/40 transition hover:brightness-110"
              >
                Reservar en español
              </Link>

              {/* WhatsApp Inglés */}
              <Link
                href="https://wa.me/50711111111" // 👉 Cambia por el número REAL para inglés
                target="_blank"
                className="inline-flex items-center justify-center rounded-full bg-sky-900/80 px-5 py-2.5 text-sm font-semibold text-cyan-50 shadow-lg shadow-sky-900/50 transition hover:brightness-110"
              >
                Book in English
              </Link>
            </div>

            <p className="mt-3 text-[11px] text-cyan-100/80">
              Tell us where you&apos;re traveling from, your dates and how many people are coming – we&apos;ll send you
              a clear proposal with timing, islands and what&apos;s included.
            </p>
          </div>

          {/* Tarjetita secundaria (beneficios rápidos) */}
          <div className="space-y-4">
            <div className="rounded-3xl bg-sky-50/90 p-4 text-xs sm:text-sm text-slate-700 shadow-lg shadow-sky-900/20 ring-1 ring-sky-100">
              <p className="font-semibold text-cyan-800">
                Rutas desde Panamá y Colombia
              </p>
              <p className="mt-1">
                Días de sol, planes de varios días y expediciones binacionales conectando Ciudad de Panamá, San Blas,
                Capurganá y Sapzurro.
              </p>
            </div>
            <div className="grid gap-3 text-[11px] sm:text-xs text-slate-50">
              <div className="inline-flex items-center gap-2 rounded-2xl bg-sky-950/40 px-3 py-2 ring-1 ring-sky-100/30">
                <span className="h-2 w-2 rounded-full bg-emerald-300" />
                Transporte 4×4 + lanchas verificadas
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-sky-950/40 px-3 py-2 ring-1 ring-sky-100/30">
                <span className="h-2 w-2 rounded-full bg-amber-300" />
                Cabañas familiares Guna y experiencias culturales
              </div>
              <div className="inline-flex items-center gap-2 rounded-2xl bg-sky-950/40 px-3 py-2 ring-1 ring-sky-100/30">
                <span className="h-2 w-2 rounded-full bg-cyan-300" />
                Itinerarios escritos, sin letras pequeñas
              </div>
            </div>
          </div>
        </div>

        {/* Dots del slider */}
        <div className="mt-8 flex justify-center gap-2 pb-2">
          {slides.map((slide, index) => (
            <button
              key={slide.id}
              type="button"
              onClick={() => setCurrent(index)}
              className={`h-2.5 rounded-full transition-all ${
                index === current
                  ? "w-7 bg-emerald-300 shadow shadow-emerald-400/60"
                  : "w-2.5 bg-sky-100/70 hover:bg-sky-50"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

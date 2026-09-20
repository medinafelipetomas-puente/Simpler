"use client";

import React, { useState } from "react";
import { IconRocket, IconDownload } from "./icons";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const SETUP_URL =
    "https://github.com/medinafelipetomas-puente/Simpler/releases/download/v1.0.0/Simpler-Setup.exe";

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/[0.06] bg-[#08090d]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-indigo-500/20 to-indigo-600/5 border border-indigo-500/30 text-indigo-400 shadow-sm shadow-indigo-500/10">
            <IconRocket size={20} />
          </div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-bold tracking-tight text-white">
              Simpler
            </span>
            <span className="hidden text-[10px] uppercase font-mono tracking-wider text-indigo-400/90 bg-indigo-500/10 border border-indigo-500/20 rounded-md px-1.5 py-0.5 sm:inline-block">
              Desktop v1.0
            </span>
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-7 md:flex text-sm font-medium text-slate-400">
          <button
            onClick={() => scrollToSection("simulador")}
            className="transition-colors hover:text-white"
          >
            Simulador
          </button>
          <button
            onClick={() => scrollToSection("funcionalidades")}
            className="transition-colors hover:text-white"
          >
            Funcionalidades
          </button>
          <button
            onClick={() => scrollToSection("gestion")}
            className="transition-colors hover:text-white"
          >
            Gestión
          </button>
          <button
            onClick={() => scrollToSection("arquitectura")}
            className="transition-colors hover:text-white"
          >
            Persistencia
          </button>
        </nav>

        {/* CTA: Descargar */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={SETUP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer inline-flex items-center gap-1.5 rounded-lg bg-indigo-600 px-3.5 py-2 text-xs font-semibold text-white shadow-sm shadow-indigo-600/30 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/40 active:scale-[0.98]"
          >
            <IconDownload size={14} />
            <span>Descargar para Windows</span>
          </a>
        </div>

        {/* Mobile menu toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="rounded-lg p-2 text-slate-400 hover:bg-white/[0.05] hover:text-white"
            aria-label="Abrir menú"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {mobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-white/[0.06] bg-[#0c0e14] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3 text-sm font-medium text-slate-300">
            <button
              onClick={() => scrollToSection("simulador")}
              className="py-2 text-left hover:text-white"
            >
              Simulador interactivo
            </button>
            <button
              onClick={() => scrollToSection("funcionalidades")}
              className="py-2 text-left hover:text-white"
            >
              Funcionalidades
            </button>
            <button
              onClick={() => scrollToSection("gestion")}
              className="py-2 text-left hover:text-white"
            >
              Gestión de botones
            </button>
            <button
              onClick={() => scrollToSection("arquitectura")}
              className="py-2 text-left hover:text-white"
            >
              Persistencia & Confiabilidad
            </button>
            <a
              href={SETUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 w-full rounded-lg bg-indigo-600 py-2.5 text-center text-xs font-semibold text-white shadow-sm hover:bg-indigo-500 flex items-center justify-center gap-1.5"
              onClick={() => setMobileMenuOpen(false)}
            >
              <IconDownload size={13} />
              Descargar para Windows
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

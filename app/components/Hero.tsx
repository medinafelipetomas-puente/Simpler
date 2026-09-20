"use client";

import React from "react";
import { IconPlay, IconDownload, IconWindows, IconArchive } from "./icons";
import { DesktopMockup } from "./DesktopMockup";

export function Hero() {
  const SETUP_URL =
    "https://github.com/medinafelipetomas-puente/Simpler/releases/download/v1.0.0/Simpler-Setup.exe";
  const PORTABLE_URL =
    "https://github.com/medinafelipetomas-puente/Simpler/releases/download/v1.0.0/Simpler-Portable.zip";

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative overflow-hidden pt-12 pb-20 sm:pt-16 sm:pb-28">
      {/* Subtle Background Grid Pattern */}
      <div
        className="absolute inset-0 -z-10 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#fff 1px, transparent 1px), linear-gradient(to right, #fff 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Hero Header */}
        <div className="mx-auto max-w-3xl text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-sm mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>Launcher de escritorio minimalista</span>
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-6xl font-bold tracking-tight text-white">
            Simpler
          </h1>

          {/* Tagline */}
          <p className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight text-indigo-400">
            Tu entorno. Un clic.
          </p>

          {/* Short description */}
          <p className="mt-4 text-base sm:text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
            Centralizá aplicaciones, archivos, carpetas, webs y comandos en
            botones personalizados. Prepará todo tu espacio de trabajo de manera
            consecutiva e instantánea.
          </p>

          {/* Download CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3.5">
            {/* Botón Principal: Instalador Windows .exe */}
            <a
              href={SETUP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl bg-indigo-600 px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-600/30 transition-all duration-200 hover:bg-indigo-500 hover:shadow-indigo-500/40 hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <IconWindows size={18} className="text-white shrink-0" />
              <div className="text-left">
                <div className="leading-tight">Descargar Simpler para Windows</div>
                <div className="text-[11px] font-normal text-indigo-200/80">Instalador .exe • 106 MB</div>
              </div>
              <IconDownload size={16} className="ml-1 opacity-80 group-hover:translate-y-0.5 transition-transform shrink-0" />
            </a>

            {/* Botón Secundario: Versión Portable .zip */}
            <a
              href={PORTABLE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex w-full sm:w-auto items-center justify-center gap-3 rounded-xl border border-white/[0.12] bg-[#12151d] px-5 py-3.5 text-sm font-semibold text-slate-200 shadow-md shadow-black/40 transition-all duration-200 hover:bg-[#181d28] hover:border-white/[0.22] hover:-translate-y-0.5 active:scale-[0.98]"
            >
              <IconArchive size={18} className="text-indigo-400 shrink-0" />
              <div className="text-left">
                <div className="leading-tight">Descargar Versión Portable</div>
                <div className="text-[11px] font-normal text-slate-400">Archivo .zip • Sin instalación (150 MB)</div>
              </div>
              <IconDownload size={16} className="ml-1 opacity-60 group-hover:translate-y-0.5 transition-transform shrink-0" />
            </a>
          </div>

          {/* Secondary links */}
          <div className="mt-4 flex items-center justify-center gap-6 text-xs text-slate-400">
            <button
              onClick={() => scrollTo("simulador")}
              className="flex items-center gap-1.5 hover:text-indigo-400 transition-colors"
            >
              <IconPlay size={12} className="text-indigo-400" />
              <span>Probar simulador interactivo</span>
            </button>
            <span className="text-slate-700">•</span>
            <button
              onClick={() => scrollTo("funcionalidades")}
              className="hover:text-slate-200 transition-colors"
            >
              Ver cómo funciona
            </button>
          </div>

          {/* Value Badges */}
          <div className="mt-10 grid grid-cols-3 gap-2 border-t border-white/[0.06] pt-6 max-w-xl mx-auto text-left sm:text-center">
            <div className="flex flex-col sm:items-center">
              <span className="text-xs text-slate-500 font-mono">EJECUCIÓN</span>
              <span className="text-xs font-semibold text-slate-200 mt-0.5">
                Secuencial e independiente
              </span>
            </div>
            <div className="flex flex-col sm:items-center border-x border-white/[0.06] px-2">
              <span className="text-xs text-slate-500 font-mono">PRIVACIDAD</span>
              <span className="text-xs font-semibold text-slate-200 mt-0.5">
                100% Offline y local
              </span>
            </div>
            <div className="flex flex-col sm:items-center">
              <span className="text-xs text-slate-500 font-mono">LATENCIA</span>
              <span className="text-xs font-semibold text-slate-200 mt-0.5">
                Respuesta nativa directa
              </span>
            </div>
          </div>
        </div>

        {/* Mockup Integration */}
        <div className="mt-14 sm:mt-18">
          <DesktopMockup />
        </div>
      </div>
    </section>
  );
}

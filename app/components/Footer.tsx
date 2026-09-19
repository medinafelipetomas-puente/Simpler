import React from "react";
import { IconRocket } from "./icons";

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#06070a] py-14 text-xs text-slate-400">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand & Mission */}
          <div>
            <div className="flex items-center gap-2.5">
              <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                <IconRocket size={15} />
              </div>
              <span className="text-base font-bold text-white tracking-tight">
                Simpler
              </span>
              <span className="text-[10px] uppercase font-mono px-1.5 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                Desktop
              </span>
            </div>
            <p className="mt-2 text-slate-500 max-w-sm">
              Launcher centralizado para desarrolladores y profesionales que valoran
              la velocidad, el orden y la privacidad en su escritorio.
            </p>
          </div>

          {/* Quick Specifications */}
          <div className="flex flex-wrap gap-8 text-xs">
            <div>
              <span className="text-white font-medium block mb-2">Arquitectura</span>
              <ul className="space-y-1.5 text-slate-500">
                <li>Ejecución nativa</li>
                <li>Persistencia JSON local</li>
                <li>Aislamiento de fallos</li>
              </ul>
            </div>
            <div>
              <span className="text-white font-medium block mb-2">Plataformas</span>
              <ul className="space-y-1.5 text-slate-500">
                <li>Windows 10 / 11</li>
              </ul>
            </div>
            <div>
              <span className="text-white font-medium block mb-2">Licencia</span>
              <ul className="space-y-1.5 text-slate-500">
                <li>Código Abierto (MIT)</li>
                <li>100% Offline</li>
                <li>Cero telemetría</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="mt-12 flex flex-col sm:flex-row items-center justify-between border-t border-white/[0.06] pt-6 gap-3 text-[11px] text-slate-500">
          <div>
            © {new Date().getFullYear()} Simpler. Tu entorno. Un clic.
          </div>
          <div className="flex items-center gap-4">
            <span className="text-slate-400">Diseñado con precisión técnica y estética minimalista.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

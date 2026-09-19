"use client";

import React, { useState } from "react";
import {
  IconApp,
  IconFile,
  IconFolder,
  IconUrl,
  IconCommand,
  IconLayers,
} from "./icons";

interface FeatureCardData {
  id: string;
  icon: React.ReactNode;
  title: string;
  badge: string;
  description: string;
  sampleAction: {
    type: string;
    payload: string;
    details: string;
  };
}

const FEATURES: FeatureCardData[] = [
  {
    id: "apps",
    icon: <IconApp size={22} />,
    title: "Aplicaciones",
    badge: "Ejecutables nativos",
    description:
      "Abre cualquier programa instalado o ejecutable local en tu sistema operativo, sin recordar rutas complejas.",
    sampleAction: {
      type: "app",
      payload: "code . | figma.exe | spotify",
      details: "Lanzamiento directo por binario o variable de entorno",
    },
  },
  {
    id: "files",
    icon: <IconFile size={22} />,
    title: "Archivos",
    badge: "Asociación del sistema",
    description:
      "Abre documentos, hojas de cálculo, diagramas o PDFs utilizando la aplicación que tengas configurada por defecto.",
    sampleAction: {
      type: "file",
      payload: "C:\\Reportes\\Finanzas-Q3.xlsx",
      details: "Apertura nativa mediante shell de Windows/SO",
    },
  },
  {
    id: "folders",
    icon: <IconFolder size={22} />,
    title: "Carpetas",
    badge: "Explorador de archivos",
    description:
      "Navega y ubica de inmediato las carpetas de proyectos, descargas o recursos compartidos en el explorador.",
    sampleAction: {
      type: "folder",
      payload: "C:\\Workspace\\simpler-core",
      details: "Apertura en primer plano sin búsquedas manuales",
    },
  },
  {
    id: "urls",
    icon: <IconUrl size={22} />,
    title: "Páginas web",
    badge: "Navegador predeterminado",
    description:
      "Abre páginas web, tableros de gestión, paneles de analítica o repositorios en pestañas de tu navegador preferido.",
    sampleAction: {
      type: "url",
      payload: "https://github.com/my-org/project/pulls",
      details: "Protocolos http/https resueltos automáticamente",
    },
  },
  {
    id: "commands",
    icon: <IconCommand size={22} />,
    title: "Comandos",
    badge: "Terminal & Shell",
    description:
      "Ejecuta scripts de automatización, tareas de compilación o comandos de terminal en segundo plano o en ventana visible.",
    sampleAction: {
      type: "command",
      payload: "git pull && npm run dev",
      details: "Opción configurable para abrir consola dedicada",
    },
  },
  {
    id: "multiple",
    icon: <IconLayers size={22} />,
    title: "Acciones múltiples",
    badge: "Automatización total",
    description:
      "Agrupa cualquiera de los tipos anteriores en un mismo botón. Se ejecutan consecutivamente sin bloqueos.",
    sampleAction: {
      type: "pipeline",
      payload: "App + Carpeta + Comando + URL",
      details: "Secuencia ordenada con ejecución independiente",
    },
  },
];

export function FeaturesSection() {
  const [activeHoverId, setActiveHoverId] = useState<string | null>(null);

  return (
    <section id="funcionalidades" className="py-20 sm:py-28 border-t border-white/[0.06] bg-[#080a0e] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Capacidades nativas
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Todo lo que podés centralizar
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">
            Simpler se conecta directamente con tu sistema operativo para lanzar
            cualquier recurso de forma limpia y transparente.
          </p>
        </div>

        {/* 6 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {FEATURES.map((feat) => {
            const isHovered = activeHoverId === feat.id;

            return (
              <div
                key={feat.id}
                onMouseEnter={() => setActiveHoverId(feat.id)}
                onMouseLeave={() => setActiveHoverId(null)}
                className={`group relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-200 ${
                  isHovered
                    ? "border-indigo-500/50 bg-[#121622] shadow-xl shadow-indigo-950/30 -translate-y-1"
                    : "border-white/[0.08] bg-[#0e1118]/80 hover:border-white/[0.18]"
                }`}
              >
                <div>
                  {/* Top: Icon + Type Badge */}
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-11 w-11 items-center justify-center rounded-xl border transition-all duration-200 ${
                        isHovered
                          ? "bg-indigo-600 text-white border-indigo-400 scale-105 shadow-md shadow-indigo-600/30"
                          : "bg-white/[0.04] text-indigo-400 border-white/[0.08]"
                      }`}
                    >
                      {feat.icon}
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2 py-0.5 rounded-full border border-white/[0.06]">
                      {feat.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="mt-4 text-lg font-semibold text-white tracking-tight">
                    {feat.title}
                  </h3>
                  <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                    {feat.description}
                  </p>
                </div>

                {/* Sample Action Micro-Preview */}
                <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/40 p-3 text-left">
                  <div className="flex items-center justify-between text-[10px] font-mono text-slate-500 mb-1 uppercase tracking-wider">
                    <span>Ejemplo de acción</span>
                    <span className="text-indigo-400/80">{feat.sampleAction.type}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-200 truncate select-all">
                    {feat.sampleAction.payload}
                  </div>
                  <div className="text-[11px] text-slate-500 mt-1">
                    {feat.sampleAction.details}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

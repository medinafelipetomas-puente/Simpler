"use client";

import React, { useState } from "react";
import {
  IconCode,
  IconSparkles,
  IconBriefcase,
  IconCheck,
  IconPlay,
  IconArrowDown,
} from "./icons";

interface WorkflowPreset {
  id: string;
  name: string;
  icon: React.ReactNode;
  description: string;
  steps: {
    num: string;
    action: string;
    type: string;
    target: string;
    result: string;
  }[];
}

const PRESETS: WorkflowPreset[] = [
  {
    id: "dev",
    name: "Desarrollo",
    icon: <IconCode size={20} />,
    description: "Preparación completa del entorno de código en un solo clic.",
    steps: [
      {
        num: "01",
        action: "Abrir VS Code",
        type: "Aplicación",
        target: "code .",
        result: "Editor abierto con el espacio de trabajo activo",
      },
      {
        num: "02",
        action: "Abrir carpeta del proyecto",
        type: "Carpeta",
        target: "C:\\Proyectos\\Simpler",
        result: "Explorador ubicado en el directorio raíz",
      },
      {
        num: "03",
        action: "Ejecutar comando en terminal",
        type: "Comando",
        target: "npm run dev",
        result: "Servidor de desarrollo local levantado en puerto 3000",
      },
    ],
  },
  {
    id: "design",
    name: "Diseño UI/UX",
    icon: <IconSparkles size={20} />,
    description: "Todo el flujo de diseño visual listo para prototipar.",
    steps: [
      {
        num: "01",
        action: "Abrir Figma Desktop",
        type: "Aplicación",
        target: "figma.exe",
        result: "App de Figma lista con aceleración gráfica",
      },
      {
        num: "02",
        action: "Abrir carpeta de Assets",
        type: "Carpeta",
        target: "C:\\Design\\System-Assets",
        result: "Acceso inmediato a tipografías e iconos SVG",
      },
      {
        num: "03",
        action: "Abrir referencias en navegador",
        type: "Página Web",
        target: "https://mobbin.com",
        result: "Pestaña de referencias abierta en Chrome",
      },
    ],
  },
  {
    id: "work",
    name: "Sincronización Diaria",
    icon: <IconBriefcase size={20} />,
    description: "Conexión a herramientas de comunicación y agenda.",
    steps: [
      {
        num: "01",
        action: "Abrir Slack",
        type: "Aplicación",
        target: "slack.exe",
        result: "Canales de equipo conectados",
      },
      {
        num: "02",
        action: "Abrir tablero Notion",
        type: "Página Web",
        target: "https://notion.so/roadmap",
        result: "Hoja de ruta y backlog del sprint cargados",
      },
      {
        num: "03",
        action: "Abrir calendario de reuniones",
        type: "Página Web",
        target: "https://calendar.google.com",
        result: "Próximos compromisos y enlaces de Meet a la vista",
      },
    ],
  },
];

export function WorkflowSection() {
  const [activeTab, setActiveTab] = useState<string>("dev");
  const [simulating, setSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const currentPreset = PRESETS.find((p) => p.id === activeTab) || PRESETS[0];

  const handleSimulate = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveStep(0);

    setTimeout(() => setActiveStep(1), 500);
    setTimeout(() => setActiveStep(2), 1000);
    setTimeout(() => {
      setActiveStep(null);
      setSimulating(false);
    }, 1800);
  };

  return (
    <section id="como-funciona" className="py-20 sm:py-28 border-t border-white/[0.06] bg-[#090b0f] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            El Concepto Central
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Todo en un botón
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">
            El verdadero valor de Simpler radica en transformar secuencias manuales
            repetitivas en una única pulsación garantizada.
          </p>
        </div>

        {/* Interactive Preset Selector */}
        <div className="mt-10 flex flex-wrap justify-center gap-2">
          {PRESETS.map((preset) => (
            <button
              key={preset.id}
              onClick={() => {
                setActiveTab(preset.id);
                setActiveStep(null);
              }}
              className={`flex items-center gap-2 rounded-xl px-4 py-2.5 text-xs font-semibold transition-all duration-200 border ${
                activeTab === preset.id
                  ? "bg-indigo-600 text-white border-indigo-500 shadow-md shadow-indigo-600/25"
                  : "bg-white/[0.03] text-slate-400 border-white/[0.08] hover:bg-white/[0.06] hover:text-white"
              }`}
            >
              {preset.icon}
              <span>{preset.name}</span>
            </button>
          ))}
        </div>

        {/* Visual Workflow Diagram */}
        <div className="mt-12 mx-auto max-w-3xl">
          {/* Main Trigger Node */}
          <div className="flex flex-col items-center">
            <div className="group relative flex items-center justify-between gap-6 rounded-2xl border border-indigo-500/40 bg-[#121622] p-5 shadow-xl shadow-indigo-950/40 w-full max-w-md">
              <div className="flex items-center gap-3.5">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-md shadow-indigo-600/40">
                  {currentPreset.icon}
                </div>
                <div>
                  <div className="text-[11px] font-mono uppercase tracking-wider text-indigo-400">
                    Botón de Simpler
                  </div>
                  <div className="text-lg font-bold text-white tracking-tight">
                    {currentPreset.name}
                  </div>
                </div>
              </div>

              <button
                onClick={handleSimulate}
                disabled={simulating}
                className="flex items-center gap-1.5 rounded-lg bg-indigo-500/20 hover:bg-indigo-500/30 text-indigo-300 border border-indigo-500/30 px-3 py-1.5 text-xs font-semibold transition-all active:scale-95 disabled:opacity-50"
              >
                <IconPlay size={12} />
                <span>{simulating ? "Ejecutando..." : "Simular clic"}</span>
              </button>
            </div>

            {/* Connecting Vertical Stem */}
            <div className="flex flex-col items-center my-3">
              <div className="h-6 w-0.5 bg-gradient-to-b from-indigo-500 to-indigo-500/40" />
              <div className="h-5 w-5 rounded-full border border-indigo-500/40 bg-[#10131b] flex items-center justify-center text-indigo-400">
                <IconArrowDown size={11} />
              </div>
              <div className="h-4 w-0.5 bg-indigo-500/40" />
            </div>

            {/* Actions Tree Container */}
            <div className="w-full rounded-2xl border border-white/[0.08] bg-[#0d1017] p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-3 mb-4">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Secuencia de acciones encadenadas
                </span>
                <span className="text-xs text-indigo-400 font-mono">
                  3 acciones consecutivas
                </span>
              </div>

              <div className="flex flex-col gap-3">
                {currentPreset.steps.map((step, idx) => {
                  const isActive = activeStep === idx;
                  const isDone = activeStep !== null && activeStep > idx;

                  return (
                    <div
                      key={idx}
                      className={`flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border p-3.5 transition-all duration-300 ${
                        isActive
                          ? "border-indigo-500 bg-indigo-950/30 ring-1 ring-indigo-500"
                          : isDone
                          ? "border-emerald-500/30 bg-emerald-950/10"
                          : "border-white/[0.06] bg-white/[0.02] hover:bg-white/[0.04]"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        {/* Step indicator */}
                        <div
                          className={`flex h-7 w-7 items-center justify-center rounded-lg text-xs font-mono font-semibold ${
                            isDone
                              ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/40"
                              : isActive
                              ? "bg-indigo-600 text-white animate-pulse"
                              : "bg-white/[0.04] text-slate-400 border border-white/[0.08]"
                          }`}
                        >
                          {isDone ? <IconCheck size={14} /> : step.num}
                        </div>

                        <div>
                          <div className="text-sm font-semibold text-white">
                            {step.action}
                          </div>
                          <div className="text-xs text-slate-500 font-mono mt-0.5">
                            {step.target}
                          </div>
                        </div>
                      </div>

                      <div className="mt-2 sm:mt-0 flex items-center gap-2">
                        <span className="text-[10px] uppercase font-mono tracking-wider px-2 py-0.5 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                          {step.type}
                        </span>
                        {isDone && (
                          <span className="text-xs text-emerald-400 font-medium">
                            Completado
                          </span>
                        )}
                        {isActive && (
                          <span className="text-xs text-indigo-400 font-medium animate-pulse">
                            Ejecutando...
                          </span>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Comparison row: Traditional vs Simpler */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {/* Traditional Way */}
          <div className="rounded-2xl border border-white/[0.06] bg-white/[0.01] p-6 text-left">
            <div className="flex items-center justify-between text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">
              <span>Método tradicional</span>
              <span className="text-red-400/80">Fricción acumulada</span>
            </div>
            <h4 className="text-base font-semibold text-slate-300">
              Múltiples pasos manuales
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                Buscar y abrir el editor de código.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                Navegar en el explorador de archivos hasta la carpeta correcta.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                Abrir una terminal, escribir `cd proyecto` y recordar el comando.
              </li>
              <li className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-red-400/60" />
                Pérdida de foco y tiempo en cada cambio de contexto.
              </li>
            </ul>
          </div>

          {/* Simpler Way */}
          <div className="rounded-2xl border border-indigo-500/30 bg-indigo-950/10 p-6 text-left shadow-lg shadow-indigo-950/20">
            <div className="flex items-center justify-between text-xs font-mono text-indigo-400 mb-3 uppercase tracking-wider">
              <span>Con Simpler</span>
              <span className="text-emerald-400">Eficiencia instantánea</span>
            </div>
            <h4 className="text-base font-semibold text-white">
              Un único clic determinista
            </h4>
            <ul className="mt-3 space-y-2 text-xs text-slate-300">
              <li className="flex items-center gap-2">
                <IconCheck size={14} className="text-emerald-400 shrink-0" />
                Un botón nombrado según tu tarea o contexto de trabajo.
              </li>
              <li className="flex items-center gap-2">
                <IconCheck size={14} className="text-emerald-400 shrink-0" />
                Ejecución consecutiva de todas las aplicaciones y rutas.
              </li>
              <li className="flex items-center gap-2">
                <IconCheck size={14} className="text-emerald-400 shrink-0" />
                Cero margen de error al escribir comandos o buscar rutas.
              </li>
              <li className="flex items-center gap-2">
                <IconCheck size={14} className="text-emerald-400 shrink-0" />
                Tu entorno completo operativo en menos de medio segundo.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

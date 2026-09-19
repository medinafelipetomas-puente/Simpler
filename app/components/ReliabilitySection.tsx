"use client";

import React, { useState } from "react";
import {
  IconDatabase,
  IconShieldCheck,
  IconCheck,
  IconClose,
  IconPlay,
} from "./icons";

export function ReliabilitySection() {
  const [failActionTwo, setFailActionTwo] = useState(true);
  const [simulating, setSimulating] = useState(false);
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const runFaultToleranceDemo = () => {
    if (simulating) return;
    setSimulating(true);
    setActiveStep(0);

    setTimeout(() => {
      setActiveStep(1);
    }, 600);

    setTimeout(() => {
      setActiveStep(2);
    }, 1200);

    setTimeout(() => {
      setSimulating(false);
    }, 1800);
  };

  return (
    <section id="arquitectura" className="py-20 sm:py-28 border-t border-white/[0.06] bg-[#07090d] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Robustez y Resiliencia
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Persistencia y Confiabilidad
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">
            Diseñado para ser una herramienta predecible. Tus botones nunca se
            pierden y los fallos individuales nunca congelan tu entorno.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: Configuración Persistente */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f16] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    <IconDatabase size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      Configuración persistente
                    </h3>
                    <span className="text-xs text-indigo-400/90 font-mono">
                      Almacenamiento local directo
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded-full">
                  100% Offline
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Toda tu biblioteca de botones y acciones se serializa localmente
                en disco mediante un archivo JSON estructurado. Al cerrar, reiniciar
                o actualizar Simpler, tu configuración permanece exactamente como la dejaste.
              </p>

              {/* Visual Architecture Diagram */}
              <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/40 p-4">
                <div className="text-[11px] font-mono uppercase tracking-wider text-slate-500 mb-3">
                  Flujo de persistencia
                </div>

                <div className="grid grid-cols-3 gap-2 text-center text-xs">
                  {/* Step 1 */}
                  <div className="flex flex-col items-center rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                    <div className="text-indigo-400 mb-1 font-mono text-[11px]">
                      01. EDICIÓN
                    </div>
                    <span className="text-white font-medium text-[11px]">
                      Estado en RAM
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1">
                      En tiempo real
                    </span>
                  </div>

                  {/* Step 2 */}
                  <div className="flex flex-col items-center rounded-lg border border-indigo-500/40 bg-indigo-950/20 p-2.5 shadow-sm">
                    <div className="text-indigo-400 mb-1 font-mono text-[11px]">
                      02. DISCO
                    </div>
                    <span className="text-white font-medium text-[11px]">
                      simpler-config.json
                    </span>
                    <span className="text-[10px] text-indigo-300/80 mt-1">
                      Guardado atómico
                    </span>
                  </div>

                  {/* Step 3 */}
                  <div className="flex flex-col items-center rounded-lg border border-white/[0.06] bg-white/[0.02] p-2.5">
                    <div className="text-emerald-400 mb-1 font-mono text-[11px]">
                      03. REINICIO
                    </div>
                    <span className="text-white font-medium text-[11px]">
                      Restaurado
                    </span>
                    <span className="text-[10px] text-slate-500 mt-1">
                      Disponibilidad inmediata
                    </span>
                  </div>
                </div>

                {/* Micro JSON visual preview */}
                <div className="mt-4 rounded-lg bg-[#08090d] border border-white/[0.06] p-3 text-[11px] font-mono text-slate-400">
                  <div className="text-slate-500">{"// %APPDATA%/simpler/simpler-config.json"}</div>
                  <div>{"{"}</div>
                  <div className="pl-4 text-indigo-300">
                    &quot;version&quot;: &quot;1.0.0&quot;,
                  </div>
                  <div className="pl-4 text-emerald-300">
                    &quot;buttons&quot;: [ &quot;Desarrollo&quot;, &quot;Diseño&quot;, &quot;...&quot; ]
                  </div>
                  <div>{"}"}</div>
                </div>
              </div>
            </div>

            {/* Bottom check highlights */}
            <div className="mt-6 flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.06] pt-4">
              <span className="flex items-center gap-1.5">
                <IconCheck size={14} className="text-emerald-400" /> Sin cuentas ni registro
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck size={14} className="text-emerald-400" /> Cero telemetría
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck size={14} className="text-emerald-400" /> Backup simple
              </span>
            </div>
          </div>

          {/* Card 2: Ejecución Independiente (Resiliencia a Fallos) */}
          <div className="rounded-2xl border border-white/[0.08] bg-[#0c0f16] p-6 sm:p-7 flex flex-col justify-between shadow-xl">
            <div>
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                    <IconShieldCheck size={20} />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white tracking-tight">
                      Ejecución independiente
                    </h3>
                    <span className="text-xs text-indigo-400/90 font-mono">
                      Aislamiento no bloqueante
                    </span>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-indigo-300 bg-indigo-500/10 border border-indigo-500/20 px-2 py-0.5 rounded-full">
                  Tolerancia a fallos
                </span>
              </div>

              <p className="text-xs text-slate-400 leading-relaxed">
                Si un archivo fue movido, una URL es errónea o un comando retorna error,
                Simpler no interrumpe el lote. Cada acción se ejecuta en su propio
                hilo protegido para garantizar que el resto del entorno se complete.
              </p>

              {/* Interactive Fault Simulation */}
              <div className="mt-6 rounded-xl border border-white/[0.06] bg-black/40 p-4">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                      Simulación
                    </span>
                    <button
                      onClick={() => setFailActionTwo(!failActionTwo)}
                      className="text-[10px] font-mono px-2 py-0.5 rounded border border-white/10 bg-white/[0.04] text-slate-300 hover:text-white"
                      title="Alternar estado de prueba"
                    >
                      {failActionTwo ? "Acción 2: Con fallo simulado" : "Acción 2: Exitosa"}
                    </button>
                  </div>
                  <button
                    onClick={runFaultToleranceDemo}
                    disabled={simulating}
                    className="flex items-center gap-1.5 rounded-lg bg-indigo-600/30 hover:bg-indigo-600/50 text-indigo-300 border border-indigo-500/40 px-2.5 py-1 text-xs font-medium transition-all active:scale-95 disabled:opacity-50"
                  >
                    <IconPlay size={11} />
                    <span>{simulating ? "Probando..." : "Simular ejecución"}</span>
                  </button>
                </div>

                {/* 3 Step Pipeline Visual */}
                <div className="space-y-2">
                  {/* Step 1 */}
                  <div
                    className={`flex items-center justify-between rounded-lg border p-2.5 text-xs transition-all ${
                      activeStep !== null && activeStep >= 0
                        ? "border-emerald-500/40 bg-emerald-950/20 text-emerald-300"
                        : "border-white/[0.06] bg-white/[0.02] text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-500">1.</span>
                      <span>Abrir VS Code</span>
                    </div>
                    {activeStep !== null && activeStep >= 0 ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <IconCheck size={13} /> Éxito (0.1s)
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500 font-mono">En espera</span>
                    )}
                  </div>

                  {/* Step 2 (Fault or Success depending on toggle) */}
                  <div
                    className={`flex items-center justify-between rounded-lg border p-2.5 text-xs transition-all ${
                      activeStep !== null && activeStep >= 1
                        ? failActionTwo
                          ? "border-amber-500/40 bg-amber-950/20 text-amber-300"
                          : "border-emerald-500/40 bg-emerald-950/20 text-emerald-300"
                        : "border-white/[0.06] bg-white/[0.02] text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-500">2.</span>
                      <span className="truncate max-w-[180px]">
                        {failActionTwo
                          ? "Ruta no encontrada: C:\\Ruta\\Borrada.docx"
                          : "Abrir documento C:\\Reporte.docx"}
                      </span>
                    </div>
                    {activeStep !== null && activeStep >= 1 ? (
                      failActionTwo ? (
                        <span className="flex items-center gap-1 text-[11px] text-amber-400 font-medium">
                          <IconClose size={13} /> Capturado (Sin bloqueo)
                        </span>
                      ) : (
                        <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                          <IconCheck size={13} /> Éxito (0.2s)
                        </span>
                      )
                    ) : (
                      <span className="text-[11px] text-slate-500 font-mono">En espera</span>
                    )}
                  </div>

                  {/* Step 3 (Continues regardless) */}
                  <div
                    className={`flex items-center justify-between rounded-lg border p-2.5 text-xs transition-all ${
                      activeStep !== null && activeStep >= 2
                        ? "border-emerald-500/40 bg-emerald-950/20 text-emerald-300"
                        : "border-white/[0.06] bg-white/[0.02] text-slate-300"
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-slate-500">3.</span>
                      <span>Ejecutar terminal dev</span>
                    </div>
                    {activeStep !== null && activeStep >= 2 ? (
                      <span className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium">
                        <IconCheck size={13} /> Éxito (Continuó)
                      </span>
                    ) : (
                      <span className="text-[11px] text-slate-500 font-mono">En espera</span>
                    )}
                  </div>
                </div>

                {/* Outcome banner */}
                <div className="mt-3 rounded-lg bg-indigo-950/30 border border-indigo-500/30 p-2.5 text-[11px] text-indigo-300 flex items-center gap-2">
                  <IconShieldCheck size={15} className="shrink-0 text-indigo-400" />
                  <span>
                    {failActionTwo
                      ? "El fallo en la acción 2 no abortó la acción 3. Tu espacio de trabajo continúa listo."
                      : "Todas las acciones se ejecutaron consecutivamente sin esperas ni fricciones."}
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom check highlights */}
            <div className="mt-6 flex items-center justify-between text-xs text-slate-400 border-t border-white/[0.06] pt-4">
              <span className="flex items-center gap-1.5">
                <IconCheck size={14} className="text-emerald-400" /> Try/Catch aislado
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck size={14} className="text-emerald-400" /> Notificaciones toast
              </span>
              <span className="flex items-center gap-1.5">
                <IconCheck size={14} className="text-emerald-400" /> Cero congelamiento
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

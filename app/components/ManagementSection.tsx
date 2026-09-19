"use client";

import React, { useState } from "react";
import {
  IconPlus,
  IconEdit,
  IconTrash,
  IconArrowUp,
  IconArrowDown,
  IconCode,
  IconFolder,
  IconTerminal,
  IconGlobe,
} from "./icons";

interface DemoAction {
  id: string;
  type: "app" | "folder" | "command" | "url";
  label: string;
  value: string;
}

const INITIAL_DEMO_ACTIONS: DemoAction[] = [
  {
    id: "1",
    type: "app",
    label: "VS Code",
    value: "code .",
  },
  {
    id: "2",
    type: "folder",
    label: "Carpeta Proyecto",
    value: "C:\\Workspace\\simpler",
  },
  {
    id: "3",
    type: "command",
    label: "Servidor local",
    value: "npm run dev",
  },
];

export function ManagementSection() {
  const [buttonName, setButtonName] = useState("Entorno Fullstack");
  const [selectedIcon, setSelectedIcon] = useState("code");
  const [actions, setActions] = useState<DemoAction[]>(INITIAL_DEMO_ACTIONS);
  const [lastSavedNotice, setLastSavedNotice] = useState<string | null>(null);

  // Move action up
  const moveUp = (index: number) => {
    if (index === 0) return;
    const updated = [...actions];
    const temp = updated[index];
    updated[index] = updated[index - 1];
    updated[index - 1] = temp;
    setActions(updated);
  };

  // Move action down
  const moveDown = (index: number) => {
    if (index === actions.length - 1) return;
    const updated = [...actions];
    const temp = updated[index];
    updated[index] = updated[index + 1];
    updated[index + 1] = temp;
    setActions(updated);
  };

  // Delete action
  const deleteAction = (id: string) => {
    setActions(actions.filter((a) => a.id !== id));
  };

  // Add action
  const addAction = () => {
    const newId = String(Date.now());
    setActions([
      ...actions,
      {
        id: newId,
        type: "command",
        label: "Nueva acción",
        value: "git status",
      },
    ]);
  };

  const handleSaveDemo = () => {
    setLastSavedNotice("✓ Configuración de botón actualizada y persistida");
    setTimeout(() => setLastSavedNotice(null), 3000);
  };

  return (
    <section id="gestion" className="py-20 sm:py-28 border-t border-white/[0.06] bg-[#090b10] relative">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mx-auto max-w-3xl text-center mb-14">
          <span className="text-xs font-mono uppercase tracking-wider text-indigo-400 bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 rounded-full">
            Control total
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Gestión intuitiva y flexible
          </h2>
          <p className="mt-3 text-base text-slate-400 max-w-xl mx-auto">
            Configurá, editá y organizá tus flujos de trabajo sin complicaciones.
            Creá, ajustá y reordená acciones en segundos.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* 4 Feature Pillars (Left) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <div className="rounded-xl border border-white/[0.08] bg-[#0e121a]/90 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <IconPlus size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Crear</h3>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Asigná un nombre descriptivo, elegí un icono del catálogo y agregá
                tantas acciones consecutivas como requiera tu contexto de trabajo.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0e121a]/90 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <IconEdit size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Editar</h3>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Modificá parámetros, rutas de carpetas o comandos en cualquier
                momento. Los cambios se sincronizan en tiempo real.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0e121a]/90 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <IconArrowUp size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Reordenar</h3>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Ajustá la precedencia de ejecución con los controles de subir y
                bajar para que tus herramientas se abran en el orden exacto.
              </p>
            </div>

            <div className="rounded-xl border border-white/[0.08] bg-[#0e121a]/90 p-5">
              <div className="flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-red-500/10 border border-red-500/30 text-red-400">
                  <IconTrash size={18} />
                </div>
                <h3 className="text-base font-semibold text-white">Eliminar</h3>
              </div>
              <p className="mt-2 text-xs text-slate-400 leading-relaxed">
                Remové botones que ya no utilices o quitá acciones individuales
                sin afectar el resto de tus flujos de trabajo guardados.
              </p>
            </div>
          </div>

          {/* Interactive Button Editor Mockup (Right) */}
          <div className="lg:col-span-7">
            <div className="rounded-2xl border border-white/[0.12] bg-[#10141d] p-6 shadow-2xl relative">
              {/* Mock Window Header */}
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-4 mb-5">
                <div>
                  <div className="text-xs font-mono uppercase tracking-wider text-indigo-400">
                    Editor de botón interactivo
                  </div>
                  <h4 className="text-base font-bold text-white mt-0.5">
                    Configuración de botón
                  </h4>
                </div>
                <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-2.5 py-1 rounded-md border border-white/[0.08]">
                  Probalo en vivo
                </span>
              </div>

              {/* Form Content */}
              <div className="space-y-4">
                {/* Button Name */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1">
                    Nombre del botón
                  </label>
                  <input
                    type="text"
                    value={buttonName}
                    onChange={(e) => setButtonName(e.target.value)}
                    className="w-full rounded-lg border border-white/[0.1] bg-black/40 px-3 py-2 text-sm text-white focus:border-indigo-500 focus:outline-none"
                  />
                </div>

                {/* Icon Selection Chips */}
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Icono
                  </label>
                  <div className="flex items-center gap-2">
                    {[
                      { id: "code", icon: <IconCode size={16} />, label: "Código" },
                      { id: "folder", icon: <IconFolder size={16} />, label: "Carpeta" },
                      { id: "terminal", icon: <IconTerminal size={16} />, label: "Terminal" },
                      { id: "globe", icon: <IconGlobe size={16} />, label: "Web" },
                    ].map((ico) => (
                      <button
                        key={ico.id}
                        type="button"
                        onClick={() => setSelectedIcon(ico.id)}
                        className={`flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium transition-all ${
                          selectedIcon === ico.id
                            ? "border-indigo-500 bg-indigo-600/30 text-indigo-300"
                            : "border-white/[0.08] bg-white/[0.02] text-slate-400 hover:text-white"
                        }`}
                      >
                        {ico.icon}
                        <span>{ico.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Actions List with Reordering Controls */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="text-xs font-semibold text-slate-300">
                      Acciones asociadas ({actions.length})
                    </label>
                    <button
                      type="button"
                      onClick={addAction}
                      className="flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 font-semibold"
                    >
                      <IconPlus size={13} /> Añadir otra acción
                    </button>
                  </div>

                  <div className="space-y-2.5">
                    {actions.map((act, index) => {
                      const isFirst = index === 0;
                      const isLast = index === actions.length - 1;

                      return (
                        <div
                          key={act.id}
                          className="rounded-xl border border-white/[0.08] bg-black/30 p-3 flex flex-col gap-2 transition-all"
                        >
                          <div className="flex items-center justify-between">
                            {/* Type selector */}
                            <select
                              value={act.type}
                              onChange={(e) => {
                                const updated = [...actions];
                                updated[index].type = e.target.value as DemoAction["type"];
                                setActions(updated);
                              }}
                              className="rounded bg-[#161a24] border border-white/[0.1] px-2.5 py-1 text-xs text-slate-200 focus:outline-none"
                            >
                              <option value="app">Aplicación</option>
                              <option value="folder">Carpeta</option>
                              <option value="command">Comando</option>
                              <option value="url">Página Web</option>
                            </select>

                            {/* Reordering Controls (Up, Down, Delete) */}
                            <div className="flex items-center gap-1">
                              <button
                                type="button"
                                onClick={() => moveUp(index)}
                                disabled={isFirst}
                                className={`p-1.5 rounded hover:bg-white/[0.08] text-slate-400 hover:text-white ${
                                  isFirst ? "opacity-30 cursor-default" : ""
                                }`}
                                title="Mover arriba"
                              >
                                <IconArrowUp size={14} />
                              </button>
                              <button
                                type="button"
                                onClick={() => moveDown(index)}
                                disabled={isLast}
                                className={`p-1.5 rounded hover:bg-white/[0.08] text-slate-400 hover:text-white ${
                                  isLast ? "opacity-30 cursor-default" : ""
                                }`}
                                title="Mover abajo"
                              >
                                <IconArrowDown size={14} />
                              </button>
                              <button
                                type="button"
                                onClick={() => deleteAction(act.id)}
                                className="p-1.5 rounded hover:bg-red-500/20 text-slate-400 hover:text-red-400"
                                title="Eliminar acción"
                              >
                                <IconTrash size={14} />
                              </button>
                            </div>
                          </div>

                          {/* Value Input */}
                          <input
                            type="text"
                            value={act.value}
                            onChange={(e) => {
                              const updated = [...actions];
                              updated[index].value = e.target.value;
                              setActions(updated);
                            }}
                            className="w-full rounded bg-white/[0.03] border border-white/[0.06] px-2.5 py-1.5 text-xs text-white font-mono focus:border-indigo-500 focus:outline-none"
                          />
                        </div>
                      );
                    })}
                  </div>
                </div>

                {/* Footer buttons */}
                <div className="flex items-center justify-between border-t border-white/[0.08] pt-4 mt-6">
                  <div className="text-xs text-emerald-400 font-medium">
                    {lastSavedNotice}
                  </div>
                  <button
                    type="button"
                    onClick={handleSaveDemo}
                    className="rounded-lg bg-indigo-600 px-4 py-2 text-xs font-semibold text-white shadow-md hover:bg-indigo-500 active:scale-95 transition-all"
                  >
                    Guardar cambios
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

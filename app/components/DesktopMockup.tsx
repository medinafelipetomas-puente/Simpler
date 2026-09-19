"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  IconCode,
  IconSparkles,
  IconBriefcase,
  IconGlobe,
  IconFolder,
  IconTerminal,
  IconPlus,
  IconMoreVertical,
  IconPlay,
  IconEdit,
  IconTrash,
  IconCheck,
  IconClose,
  IconApp,
  IconFile,
  IconCommand,
  IconUrl,
} from "./icons";

interface ActionItem {
  type: "app" | "folder" | "command" | "url" | "file";
  label: string;
  value: string;
}

interface LauncherButton {
  id: string;
  name: string;
  icon: string;
  actions: ActionItem[];
  highlight?: boolean;
}

const INITIAL_BUTTONS: LauncherButton[] = [
  {
    id: "dev",
    name: "Desarrollo",
    icon: "code",
    highlight: true,
    actions: [
      { type: "app", label: "VS Code", value: "code ." },
      { type: "folder", label: "Carpeta Proyecto", value: "C:\\Proyectos\\Simpler" },
      { type: "command", label: "Terminal Dev", value: "npm run dev" },
    ],
  },
  {
    id: "design",
    name: "Diseño",
    icon: "sparkles",
    actions: [
      { type: "app", label: "Figma Desktop", value: "figma.exe" },
      { type: "folder", label: "Assets UI/UX", value: "C:\\Design\\Simpler-Assets" },
      { type: "url", label: "Inspiración Web", value: "https://dribbble.com" },
    ],
  },
  {
    id: "work",
    name: "Trabajo",
    icon: "briefcase",
    actions: [
      { type: "app", label: "Slack", value: "slack.exe" },
      { type: "url", label: "Notion Workspace", value: "https://notion.so" },
      { type: "url", label: "Google Calendar", value: "https://calendar.google.com" },
    ],
  },
  {
    id: "browser",
    name: "Navegador",
    icon: "globe",
    actions: [
      { type: "url", label: "Dashboard", value: "https://github.com" },
      { type: "url", label: "Métricas", value: "https://analytics.google.com" },
    ],
  },
  {
    id: "files",
    name: "Archivos",
    icon: "folder",
    actions: [
      { type: "folder", label: "Documentos", value: "C:\\Users\\Tomas\\Documents" },
    ],
  },
  {
    id: "terminal",
    name: "Terminal",
    icon: "terminal",
    actions: [
      { type: "command", label: "PowerShell Core", value: "pwsh.exe" },
    ],
  },
];

export function DesktopMockup() {
  const [buttons, setButtons] = useState<LauncherButton[]>(INITIAL_BUTTONS);
  const [executingId, setExecutingId] = useState<string | null>(null);
  const [executionStep, setExecutionStep] = useState<{
    buttonName: string;
    total: number;
    current: number;
    currentAction: string;
    completed: boolean;
  } | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Context menu state
  const [activeMenuId, setActiveMenuId] = useState<string | null>(null);

  // Editor Modal state
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalButton, setModalButton] = useState<{
    name: string;
    icon: string;
    actions: ActionItem[];
  }>({
    name: "Nuevo Entorno",
    icon: "code",
    actions: [
      { type: "app", label: "Editor de código", value: "code" },
      { type: "folder", label: "Ruta de trabajo", value: "C:\\Workspace" },
    ],
  });

  const executionTimeoutRef = useRef<NodeJS.Timeout[]>([]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      executionTimeoutRef.current.forEach((t) => clearTimeout(t));
    };
  }, []);

  const triggerExecution = (button: LauncherButton) => {
    // Clear ongoing executions
    executionTimeoutRef.current.forEach((t) => clearTimeout(t));
    executionTimeoutRef.current = [];
    setActiveMenuId(null);

    setExecutingId(button.id);
    const total = button.actions.length;

    // Simulate step by step execution
    button.actions.forEach((action, idx) => {
      const stepTimer = setTimeout(() => {
        setExecutionStep({
          buttonName: button.name,
          total,
          current: idx + 1,
          currentAction: `${action.label} (${action.value})`,
          completed: idx === total - 1,
        });

        if (idx === total - 1) {
          const finalTimer = setTimeout(() => {
            setExecutingId(null);
            setToastMessage(`✓ ${button.name}: ${total} ${total === 1 ? "acción completada" : "acciones completadas con éxito"}`);
            setTimeout(() => {
              setToastMessage(null);
              setExecutionStep(null);
            }, 3000);
          }, 700);
          executionTimeoutRef.current.push(finalTimer);
        }
      }, idx * 450);

      executionTimeoutRef.current.push(stepTimer);
    });
  };

  const getButtonIcon = (iconName: string) => {
    switch (iconName) {
      case "code":
        return <IconCode size={24} />;
      case "sparkles":
        return <IconSparkles size={24} />;
      case "briefcase":
        return <IconBriefcase size={24} />;
      case "globe":
        return <IconGlobe size={24} />;
      case "folder":
        return <IconFolder size={24} />;
      case "terminal":
        return <IconTerminal size={24} />;
      default:
        return <IconCode size={24} />;
    }
  };

  const getActionBadge = (type: ActionItem["type"]) => {
    switch (type) {
      case "app":
        return <span className="inline-flex items-center gap-1 text-[11px] text-blue-400 bg-blue-500/10 px-1.5 py-0.5 rounded"><IconApp size={12} /> App</span>;
      case "folder":
        return <span className="inline-flex items-center gap-1 text-[11px] text-amber-400 bg-amber-500/10 px-1.5 py-0.5 rounded"><IconFolder size={12} /> Carpeta</span>;
      case "command":
        return <span className="inline-flex items-center gap-1 text-[11px] text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded"><IconCommand size={12} /> Comando</span>;
      case "url":
        return <span className="inline-flex items-center gap-1 text-[11px] text-purple-400 bg-purple-500/10 px-1.5 py-0.5 rounded"><IconUrl size={12} /> Web</span>;
      case "file":
        return <span className="inline-flex items-center gap-1 text-[11px] text-cyan-400 bg-cyan-500/10 px-1.5 py-0.5 rounded"><IconFile size={12} /> Archivo</span>;
    }
  };

  const handleAddActionInModal = () => {
    setModalButton({
      ...modalButton,
      actions: [
        ...modalButton.actions,
        { type: "command", label: "Nueva acción", value: "echo 'Ejecutando'" },
      ],
    });
  };

  const handleSaveModal = () => {
    const newBtn: LauncherButton = {
      id: `btn-${Date.now()}`,
      name: modalButton.name || "Nuevo Botón",
      icon: modalButton.icon || "code",
      actions: modalButton.actions.length > 0 ? modalButton.actions : [
        { type: "app", label: "App", value: "code" }
      ],
    };
    setButtons([...buttons, newBtn]);
    setIsModalOpen(false);
    setToastMessage(`✓ Botón "${newBtn.name}" creado con ${newBtn.actions.length} acciones.`);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleDeleteButton = (id: string, name: string) => {
    setButtons(buttons.filter((b) => b.id !== id));
    setActiveMenuId(null);
    setToastMessage(`Eliminado "${name}"`);
    setTimeout(() => setToastMessage(null), 2500);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto" id="simulador">
      {/* Outer Glow Effect */}
      <div className="absolute -inset-1 rounded-2xl bg-gradient-to-b from-indigo-500/20 via-slate-800/10 to-transparent blur-xl opacity-75 pointer-events-none" />

      {/* Desktop Window Frame */}
      <div className="relative overflow-hidden rounded-2xl border border-white/[0.12] bg-[#0a0c10] shadow-2xl shadow-black/80 backdrop-blur-xl">
        {/* Desktop Title Bar */}
        <div className="flex h-10 items-center justify-between border-b border-white/[0.08] bg-[#0f1218]/90 px-4 select-none">
          {/* Window Controls (Mac/Linux/Windows style combo) */}
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500/80 border border-red-600/40" />
            <span className="h-3 w-3 rounded-full bg-yellow-500/80 border border-yellow-600/40" />
            <span className="h-3 w-3 rounded-full bg-emerald-500/80 border border-emerald-600/40" />
            <span className="ml-2 text-xs font-medium text-slate-400">
              Simpler — Desktop Launcher
            </span>
          </div>

          {/* Interactive instruction hint */}
          <div className="flex items-center gap-2 text-[11px] font-medium text-indigo-400/90 bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full animate-pulse">
            <span className="h-1.5 w-1.5 rounded-full bg-indigo-400" />
            <span>Simulador interactivo: Hacé clic en cualquier botón</span>
          </div>

          {/* Window Right Icons */}
          <div className="flex items-center gap-3 text-slate-500">
            <span className="text-[11px] font-mono">v1.0.0</span>
          </div>
        </div>

        {/* Desktop Content Area */}
        <div className="p-6 sm:p-8 relative min-h-[480px] flex flex-col justify-between">
          {/* Header section inside window */}
          <div className="text-center mb-6">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400">
              Simpler
            </h2>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-medium mt-1">
              Launcher centralizado
            </p>
          </div>

          {/* Execution Progress Banner (if active) */}
          {executionStep && (
            <div className="mb-5 rounded-xl border border-indigo-500/40 bg-indigo-950/40 p-3.5 shadow-lg backdrop-blur-sm transition-all duration-300">
              <div className="flex items-center justify-between text-xs mb-2">
                <div className="flex items-center gap-2">
                  <span className="flex h-2 w-2 relative">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
                  </span>
                  <span className="font-semibold text-white">
                    Ejecutando {executionStep.buttonName}
                  </span>
                  <span className="text-slate-400">
                    ({executionStep.current}/{executionStep.total})
                  </span>
                </div>
                <span className="font-mono text-[11px] text-indigo-300">
                  Paso {executionStep.current} de {executionStep.total}
                </span>
              </div>

              {/* Progress bar */}
              <div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 transition-all duration-300 rounded-full"
                  style={{
                    width: `${(executionStep.current / executionStep.total) * 100}%`,
                  }}
                />
              </div>

              <div className="mt-2 text-xs text-slate-300 font-mono truncate flex items-center gap-2">
                <IconPlay size={11} className="text-indigo-400" />
                <span>{executionStep.currentAction}</span>
              </div>
            </div>
          )}

          {/* Buttons Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-6">
            {buttons.map((btn) => {
              const isExecuting = executingId === btn.id;

              return (
                <div
                  key={btn.id}
                  onClick={() => triggerExecution(btn)}
                  className={`group relative flex flex-col justify-between rounded-xl border p-5 text-left transition-all duration-200 cursor-pointer select-none ${
                    isExecuting
                      ? "border-indigo-500 bg-indigo-950/30 shadow-lg shadow-indigo-500/20 scale-[0.99] ring-2 ring-indigo-500/50"
                      : btn.highlight
                      ? "border-indigo-500/40 bg-[#121620]/90 hover:border-indigo-500/70 hover:bg-[#181e2b] shadow-md shadow-indigo-950/20 hover:-translate-y-0.5"
                      : "border-white/[0.08] bg-[#12151c]/80 hover:border-white/[0.2] hover:bg-[#181d26] hover:-translate-y-0.5 shadow-sm shadow-black/40"
                  }`}
                >
                  {/* Top row: Icon + Options Button */}
                  <div className="flex items-start justify-between">
                    <div
                      className={`flex h-12 w-12 items-center justify-center rounded-xl border transition-all duration-200 ${
                        isExecuting
                          ? "bg-indigo-600 text-white border-indigo-400 animate-pulse"
                          : "bg-white/[0.04] border-white/[0.08] text-indigo-400 group-hover:scale-105 group-hover:bg-indigo-500/10 group-hover:text-indigo-300"
                      }`}
                    >
                      {getButtonIcon(btn.icon)}
                    </div>

                    {/* Context menu trigger */}
                    <div className="relative">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          setActiveMenuId(activeMenuId === btn.id ? null : btn.id);
                        }}
                        className="opacity-60 group-hover:opacity-100 p-1.5 rounded-lg hover:bg-white/10 text-slate-400 hover:text-white transition-opacity"
                        title="Opciones"
                      >
                        <IconMoreVertical size={16} />
                      </button>

                      {/* Dropdown Menu */}
                      {activeMenuId === btn.id && (
                        <div
                          onClick={(e) => e.stopPropagation()}
                          className="absolute right-0 top-8 z-30 w-36 rounded-lg border border-white/[0.12] bg-[#141822] py-1.5 shadow-xl text-xs backdrop-blur-md"
                        >
                          <button
                            onClick={() => triggerExecution(btn)}
                            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-slate-200 hover:bg-white/[0.08] hover:text-white"
                          >
                            <IconPlay size={13} className="text-indigo-400" />
                            <span>Ejecutar</span>
                          </button>
                          <button
                            onClick={() => {
                              setActiveMenuId(null);
                              setModalButton({
                                name: btn.name,
                                icon: btn.icon,
                                actions: [...btn.actions],
                              });
                              setIsModalOpen(true);
                            }}
                            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-slate-200 hover:bg-white/[0.08] hover:text-white"
                          >
                            <IconEdit size={13} className="text-slate-400" />
                            <span>Editar</span>
                          </button>
                          <div className="my-1 border-t border-white/[0.06]" />
                          <button
                            onClick={() => handleDeleteButton(btn.id, btn.name)}
                            className="flex w-full items-center gap-2 px-3 py-1.5 text-left text-red-400 hover:bg-red-500/10"
                          >
                            <IconTrash size={13} />
                            <span>Eliminar</span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Middle: Name & Action Breakdown (as highlighted in prompt) */}
                  <div className="mt-3">
                    <div className="flex items-center justify-between">
                      <h3 className="font-semibold text-white text-base tracking-tight">
                        {btn.name}
                      </h3>
                      <span className="text-[11px] font-mono text-slate-400 bg-white/[0.04] px-1.5 py-0.5 rounded border border-white/[0.06]">
                        {btn.actions.length} {btn.actions.length === 1 ? "acción" : "acciones"}
                      </span>
                    </div>

                    {/* Visual action list preview inside card */}
                    <div className="mt-2.5 flex flex-col gap-1 border-t border-white/[0.06] pt-2">
                      {btn.actions.map((act, i) => (
                        <div
                          key={i}
                          className="flex items-center justify-between text-[11px] text-slate-400 font-mono"
                        >
                          <span className="truncate max-w-[130px] flex items-center gap-1.5">
                            <span className="h-1 w-1 rounded-full bg-slate-500" />
                            {act.label}
                          </span>
                          {getActionBadge(act.type)}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom: Quick execution hint */}
                  <div className="mt-3 flex items-center justify-between text-[11px] text-indigo-400/80 font-medium">
                    <span className="group-hover:text-indigo-300 transition-colors flex items-center gap-1">
                      {isExecuting ? "Ejecutando..." : "Clic para lanzar"}
                    </span>
                    <IconPlay size={11} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Bar with '+' button */}
          <div className="flex flex-col items-center justify-center pt-2 border-t border-white/[0.06]">
            <button
              onClick={() => {
                setModalButton({
                  name: "Mi Nuevo Entorno",
                  icon: "sparkles",
                  actions: [
                    { type: "app", label: "App principal", value: "notepad.exe" },
                    { type: "url", label: "Docs de trabajo", value: "https://docs.google.com" },
                  ],
                });
                setIsModalOpen(true);
              }}
              className="group flex h-11 w-11 items-center justify-center rounded-full bg-indigo-600 text-white shadow-lg shadow-indigo-600/40 hover:bg-indigo-500 hover:scale-110 active:scale-95 transition-all duration-200 border border-indigo-400/30"
              title="Crear nuevo botón"
            >
              <IconPlus size={22} className="transition-transform group-hover:rotate-90 duration-300" />
            </button>
            <span className="text-[11px] text-slate-400 mt-1.5 font-medium">
              Nuevo botón
            </span>
          </div>

          {/* In-Mockup Toast Notification */}
          {toastMessage && (
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-40 flex items-center gap-2 rounded-xl border border-indigo-500/30 bg-[#121622] px-4 py-2 text-xs font-medium text-white shadow-2xl backdrop-blur-md animate-bounce">
              <IconCheck size={14} className="text-emerald-400" />
              <span>{toastMessage}</span>
            </div>
          )}

          {/* In-Mockup Modal for Button Creation / Editing */}
          {isModalOpen && (
            <div className="absolute inset-0 z-50 flex items-center justify-center bg-black/75 p-4 backdrop-blur-sm transition-all duration-200">
              <div className="w-full max-w-md rounded-2xl border border-white/[0.12] bg-[#11141c] p-5 shadow-2xl">
                {/* Modal Header */}
                <div className="flex items-center justify-between border-b border-white/[0.08] pb-3">
                  <h3 className="text-base font-semibold text-white">
                    Configurar Botón
                  </h3>
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="p-1 rounded-md text-slate-400 hover:text-white hover:bg-white/[0.08]"
                  >
                    <IconClose size={18} />
                  </button>
                </div>

                {/* Modal Body */}
                <div className="mt-4 flex flex-col gap-4 text-xs">
                  {/* Name field */}
                  <div>
                    <label className="block text-slate-300 font-medium mb-1">
                      Nombre del botón
                    </label>
                    <input
                      type="text"
                      value={modalButton.name}
                      onChange={(e) =>
                        setModalButton({ ...modalButton, name: e.target.value })
                      }
                      placeholder="Ej: Desarrollo, Streaming, Tareas..."
                      className="w-full rounded-lg border border-white/[0.1] bg-white/[0.04] px-3 py-2 text-white placeholder-slate-500 focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  {/* Actions associated */}
                  <div>
                    <div className="flex items-center justify-between mb-1.5">
                      <label className="text-slate-300 font-medium">
                        Acciones asociadas ({modalButton.actions.length})
                      </label>
                      <button
                        onClick={handleAddActionInModal}
                        className="text-[11px] text-indigo-400 hover:text-indigo-300 font-medium flex items-center gap-1"
                      >
                        <IconPlus size={13} /> Añadir acción
                      </button>
                    </div>

                    <div className="max-h-48 overflow-y-auto flex flex-col gap-2 pr-1">
                      {modalButton.actions.map((act, idx) => (
                        <div
                          key={idx}
                          className="rounded-lg border border-white/[0.08] bg-white/[0.02] p-2.5 flex flex-col gap-2"
                        >
                          <div className="flex items-center justify-between">
                            <select
                              value={act.type}
                              onChange={(e) => {
                                const updated = [...modalButton.actions];
                                updated[idx].type = e.target.value as ActionItem["type"];
                                setModalButton({ ...modalButton, actions: updated });
                              }}
                              className="rounded bg-[#1a1f2c] border border-white/[0.1] px-2 py-1 text-slate-200 text-xs focus:outline-none"
                            >
                              <option value="app">Aplicación</option>
                              <option value="folder">Carpeta</option>
                              <option value="command">Comando</option>
                              <option value="url">Página Web</option>
                              <option value="file">Archivo</option>
                            </select>

                            <button
                              onClick={() => {
                                const updated = modalButton.actions.filter((_, i) => i !== idx);
                                setModalButton({ ...modalButton, actions: updated });
                              }}
                              className="text-slate-500 hover:text-red-400 p-1"
                              title="Eliminar acción"
                            >
                              <IconTrash size={13} />
                            </button>
                          </div>

                          <input
                            type="text"
                            value={act.value}
                            onChange={(e) => {
                              const updated = [...modalButton.actions];
                              updated[idx].value = e.target.value;
                              setModalButton({ ...modalButton, actions: updated });
                            }}
                            placeholder="Ruta, URL o comando..."
                            className="w-full rounded bg-white/[0.04] border border-white/[0.08] px-2.5 py-1 text-white font-mono text-[11px] focus:outline-none focus:border-indigo-500"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="mt-5 flex items-center justify-end gap-2 border-t border-white/[0.08] pt-3 text-xs">
                  <button
                    onClick={() => setIsModalOpen(false)}
                    className="rounded-lg px-3 py-1.5 text-slate-400 hover:text-white hover:bg-white/[0.06]"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={handleSaveModal}
                    className="rounded-lg bg-indigo-600 px-3.5 py-1.5 font-medium text-white shadow-sm hover:bg-indigo-500"
                  >
                    Guardar botón
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

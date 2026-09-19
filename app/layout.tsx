import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#08090d",
};

export const metadata: Metadata = {
  title: "Simpler — Tu entorno. Un clic.",
  description:
    "Launcher de escritorio minimalista. Centralizá aplicaciones, archivos, carpetas, páginas web y comandos en botones personalizados con ejecución secuencial independiente.",
  keywords: [
    "launcher",
    "desktop app",
    "productividad",
    "automatización",
    "atajos",
    "workflows",
    "minimalista",
  ],
  authors: [{ name: "Simpler Team" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#08090d] text-slate-100 font-sans selection:bg-indigo-500/30 selection:text-white">
        {children}
      </body>
    </html>
  );
}

import type React from "react"
import { Download, Key, Shield, HelpCircle, RotateCw, Laptop, Monitor, Wrench } from "lucide-react"

interface QuickTool {
  id: number
  name: string
  description: string
  icon: React.ReactNode
  link: string
  primary?: boolean
}

export default function QuickToolsSection() {
  const tools: QuickTool[] = [
    {
      id: 1,
      name: "Descargar Windows",
      description: "Obtén la última versión de Windows",
      icon: <Download className="h-6 w-6" />,
      link: "/downloads/windows",
      primary: true,
    },
    {
      id: 2,
      name: "Activar Windows",
      description: "Activa tu copia de Windows con una clave de producto",
      icon: <Key className="h-6 w-6" />,
      link: "/activate-windows",
      primary: true,
    },
    {
      id: 3,
      name: "Verificar Windows",
      description: "Comprueba si tu Windows es original",
      icon: <Shield className="h-6 w-6" />,
      link: "/verify-windows",
      primary: true,
    },
    {
      id: 4,
      name: "Solucionar problemas",
      description: "Herramientas de diagnóstico y solución",
      icon: <Wrench className="h-6 w-6" />,
      link: "/troubleshoot",
    },
    {
      id: 5,
      name: "Actualizar Windows",
      description: "Mantén tu sistema al día con las últimas actualizaciones",
      icon: <RotateCw className="h-6 w-6" />,
      link: "/update-windows",
    },
    {
      id: 6,
      name: "Compatibilidad",
      description: "Verifica si tu PC es compatible con Windows 11",
      icon: <Laptop className="h-6 w-6" />,
      link: "/compatibility-check",
    },
    {
      id: 7,
      name: "Controladores",
      description: "Descarga los controladores más recientes",
      icon: <Monitor className="h-6 w-6" />,
      link: "/drivers",
    },
    {
      id: 8,
      name: "Centro de ayuda",
      description: "Encuentra respuestas a tus preguntas",
      icon: <HelpCircle className="h-6 w-6" />,
      link: "/help-center",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-2 dark:text-white">Herramientas rápidas</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Accesos directos a las herramientas esenciales de Windows
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <a
              key={tool.id}
              href={tool.link}
              className={`rounded-lg p-4 flex flex-col items-center text-center shadow-sm border transition-all duration-300 hover:shadow-md ${
                tool.primary
                  ? "bg-[#0078d4] text-white border-[#0078d4] hover:bg-[#006cbe]"
                  : "bg-white dark:bg-gray-700 border-gray-100 dark:border-gray-600 hover:border-[#0078d4] dark:hover:border-blue-500"
              }`}
            >
              <div
                className={`p-3 rounded-full mb-3 ${
                  tool.primary
                    ? "bg-white/20 text-white"
                    : "bg-blue-50 dark:bg-blue-900/30 text-[#0078d4] dark:text-blue-400"
                }`}
              >
                {tool.icon}
              </div>
              <h3 className={`font-medium mb-1 ${tool.primary ? "text-white" : "dark:text-white"}`}>{tool.name}</h3>
              <p className={`text-xs ${tool.primary ? "text-white/80" : "text-gray-600 dark:text-gray-300"}`}>
                {tool.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}


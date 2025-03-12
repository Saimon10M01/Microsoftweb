import { Button } from "@/components/ui/button"
import { Download, ChevronRight } from "lucide-react"

interface DownloadItem {
  id: number
  name: string
  description: string
  icon: string
  downloadLink: string
  size: string
  downloads: string
}

export default function PopularDownloadsSection() {
  const downloads: DownloadItem[] = [
    {
      id: 1,
      name: "Microsoft Edge",
      description: "Navegador rápido y seguro diseñado para Windows",
      icon: "/Microsoft Edge.webp?height=60&width=60",
      downloadLink: "/downloads/edge",
      size: "85.4 MB",
      downloads: "100M+",
    },
    {
      id: 2,
      name: "Windows 11",
      description: "La última versión del sistema operativo de Microsoft",
      icon: "/windows11.jpeg?height=60&width=60",
      downloadLink: "/downloads/windows11",
      size: "5.1 GB",
      downloads: "500M+",
    },
    {
      id: 3,
      name: "Microsoft 365",
      description: "Suite de productividad con Word, Excel, PowerPoint y más",
      icon: "/Microsoft 365.jpg?height=60&width=60",
      downloadLink: "/downloads/microsoft365",
      size: "1.8 GB",
      downloads: "250M+",
    },
    {
      id: 4,
      name: "Visual Studio Code",
      description: "Editor de código ligero y potente para desarrolladores",
      icon: "/Visual Studio Code.webp?height=60&width=60",
      downloadLink: "/downloads/vscode",
      size: "76.8 MB",
      downloads: "50M+",
    },
  ]

  return (
    <section className="py-16 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold mb-2 dark:text-white">Descargas populares</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-8">
          Las aplicaciones y software más descargados por nuestros usuarios
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {downloads.map((item) => (
            <div
              key={item.id}
              className="bg-white dark:bg-gray-700 rounded-lg p-4 flex items-center shadow-sm border border-gray-100 dark:border-gray-600 transition-all duration-300 hover:shadow-md"
            >
              <img src={item.icon || "/placeholder.svg"} alt={item.name} className="w-16 h-16 object-contain mr-4" />

              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="text-lg font-semibold dark:text-white">{item.name}</h3>
                  <span className="text-xs bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300 px-2 py-1 rounded-full">
                    {item.downloads} descargas
                  </span>
                </div>
                <p className="text-sm text-gray-600 dark:text-gray-300 mb-1">{item.description}</p>
                <span className="text-xs text-gray-500 dark:text-gray-400">{item.size}</span>
              </div>

              <Button className="bg-[#0078d4] hover:bg-[#006cbe] ml-4">
                <Download className="h-4 w-4 mr-2" />
                Descargar
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Button variant="outline" className="group dark:text-white dark:border-gray-600">
            <span>Ver todas las descargas</span>
            <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}


"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, EyeIcon as Eye3d, X } from "lucide-react"

interface ProductProps {
  product: {
    id: number
    title: string
    description: string
    image: string
    link: string
    badge?: string | null
    arEnabled?: boolean
  }
}

export default function ProductCard({ product }: ProductProps) {
  const [isHovered, setIsHovered] = useState(false)
  const [showAR, setShowAR] = useState(false)

  return (
    <div
      className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 transition-all duration-300 hover:shadow-md"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image || "/placeholder.svg"}
          alt={product.title}
          className={`w-full h-48 object-cover transition-transform duration-500 ${isHovered ? "scale-105" : "scale-100"}`}
        />

        {product.badge && (
          <div className="absolute top-3 right-3 bg-[#0078d4] text-white text-xs font-medium px-2 py-1 rounded-full">
            {product.badge}
          </div>
        )}

        {product.arEnabled && (
          <button
            onClick={() => setShowAR(true)}
            className="absolute bottom-3 right-3 bg-white/90 hover:bg-white text-[#0078d4] p-2 rounded-full shadow-sm transition-all"
            aria-label="Ver en realidad aumentada"
          >
            <Eye3d className="h-5 w-5" />
          </button>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-semibold mb-2">{product.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{product.description}</p>
        <Button
          variant="link"
          className="p-0 h-auto text-[#0078d4] hover:text-[#006cbe] dark:text-white dark:hover:text-blue-300 group flex items-center"
        >
          <span>Más información</span>
          <ChevronRight className="ml-1 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </Button>
      </div>

      {showAR && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg max-w-2xl w-full">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-semibold dark:text-white">Vista en Realidad Aumentada</h3>
              <button
                onClick={() => setShowAR(false)}
                className="text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-white"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <div className="aspect-video bg-gray-100 dark:bg-gray-700 rounded-md flex items-center justify-center mb-4">
              <p className="text-gray-500 dark:text-gray-400">Experiencia AR simulada para {product.title}</p>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
              Usa tu cámara para ver cómo se vería este producto en tu espacio.
            </p>
            <div className="flex justify-end">
              <Button onClick={() => setShowAR(false)}>Cerrar</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}


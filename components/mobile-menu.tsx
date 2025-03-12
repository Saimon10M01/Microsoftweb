"use client"

import { Button } from "@/components/ui/button"
import { X, ChevronRight, Search } from "lucide-react"

interface MobileMenuProps {
  onClose: () => void
}

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-gray-900 overflow-y-auto">
      <div className="p-4 border-b border-gray-200 dark:border-gray-700 flex justify-between items-center">
        <div className="flex items-center">
          <svg className="h-6 w-6 text-[#0078d4]" viewBox="0 0 23 23" fill="currentColor">
            <path d="M0 0h11v11H0V0zm12 0h11v11H12V0zM0 12h11v11H0V12zm12 0h11v11H12V12z" />
          </svg>
          <span className="ml-2 text-lg font-semibold">Microsoft</span>
        </div>
        <button onClick={onClose}>
          <X className="h-6 w-6 text-gray-700" />
        </button>
      </div>

      <div className="p-4">
        <div className="relative mb-6">
          <input
            type="text"
            placeholder="Buscar"
            className="w-full pl-10 pr-4 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:border-transparent"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
        </div>

        <nav>
          <ul className="space-y-4">
            <li>
              <a
                href="/products"
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 dark:text-white"
              >
                <span className="text-lg">Productos</span>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </a>
            </li>
            <li>
              <a
                href="/business"
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 dark:text-white"
              >
                <span className="text-lg">Empresas</span>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </a>
            </li>
            <li>
              <a
                href="/education"
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 dark:text-white"
              >
                <span className="text-lg">Educación</span>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </a>
            </li>
            <li>
              <a
                href="/developers"
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 dark:text-white"
              >
                <span className="text-lg">Desarrolladores</span>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </a>
            </li>
            <li>
              <a
                href="/support"
                className="flex items-center justify-between py-2 border-b border-gray-100 dark:border-gray-800 dark:text-white"
              >
                <span className="text-lg">Soporte</span>
                <ChevronRight className="h-5 w-5 text-gray-400 dark:text-gray-500" />
              </a>
            </li>
          </ul>
        </nav>

        <div className="mt-8 space-y-4">
          <Button className="w-full bg-[#0078d4] hover:bg-[#006cbe]">Iniciar sesión</Button>
          <Button variant="outline" className="w-full">
            Crear cuenta
          </Button>
        </div>
      </div>
    </div>
  )
}


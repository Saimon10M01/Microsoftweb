"use client"

import { useState, useEffect } from "react"
import { ChevronRight, Search, Menu, MessageSquare, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import ProductCard from "@/components/product-card"
import HeroSection from "@/components/hero-section"
import UserTypeSelector from "@/components/user-type-selector"
import ChatbotDialog from "@/components/chatbot-dialog"
import MobileMenu from "@/components/mobile-menu"
import SloganBanner from "@/components/slogan-banner"
import PopularDownloadsSection from "@/components/popular-downloads-section"
import StayUpdatedSection from "@/components/stay-updated-section"
import QuickToolsSection from "@/components/quick-tools-section"

export default function Home() {
  const [userType, setUserType] = useState<"business" | "student" | "developer" | "personal">("personal")
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isChatbotOpen, setIsChatbotOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [darkMode])

  const products = [
    {
      id: 1,
      title: "Microsoft 365",
      description: "Aplicaciones premium de Office, almacenamiento en la nube adicional y seguridad avanzada",
      image: "/office365.avif?height=200&width=300",
      link: "/products/microsoft-365",
      badge: userType === "student" ? "Gratis con correo institucional" : null,
    },
    {
      id: 2,
      title: "Surface Laptop",
      description: "Potencia y portabilidad en un diseño elegante con Windows 11",
      image: "/Surface Laptop.jpeg?height=200&width=300",
      link: "/products/surface-laptop",
      badge: "Nuevo",
      arEnabled: true,
    },
    {
      id: 3,
      title: "Xbox Game Pass",
      description: "Cientos de juegos de alta calidad para consola, PC y nube",
      image: "/Xbox Game Pass.png?height=200&width=300",
      link: "/products/xbox",
    },
    {
      id: 4,
      title: "Windows 11",
      description: "El Windows más reciente diseñado para acercarte a lo que te gusta",
      image: "/windows11.jpeg?height=200&width=300",
      link: "/products/windows-11",
    },
  ]

  const businessProducts = [
    {
      id: 5,
      title: "Microsoft Azure",
      description: "Crea, ejecuta y administra aplicaciones en múltiples nubes y entornos",
      image: "/Microsoft Azure.webp?height=200&width=300",
      link: "/products/azure",
      badge: "Prueba gratuita",
    },
    {
      id: 6,
      title: "Microsoft Teams",
      description: "Plataforma de comunicación y colaboración para empresas",
      image: "/Teams.avif?height=200&width=300",
      link: "/products/teams",
    },
    {
      id: 7,
      title: "Dynamics 365",
      description: "Aplicaciones de negocio inteligentes para CRM y ERP",
      image: "/Dynamics 365.jpeg?height=200&width=300",
      link: "/products/dynamics-365",
    },
    {
      id: 8,
      title: "Microsoft 365 Business",
      description: "Soluciones de productividad para pequeñas y medianas empresas",
      image: "/Microsoft 365 Business.avif?height=200&width=300",
      link: "/products/microsoft-365-business",
    },
  ]

  const developerProducts = [
    {
      id: 9,
      title: "GitHub Copilot",
      description: "Tu programador asistente con IA",
      image: "/GitHub Copilot.jpeg?height=200&width=300",
      link: "/products/github-copilot",
      badge: "IA",
    },
    {
      id: 10,
      title: "Visual Studio",
      description: "IDE potente para desarrolladores profesionales",
      image: "/Visual Studio.png?height=200&width=300",
      link: "/products/visual-studio",
    },
    {
      id: 11,
      title: ".NET",
      description: "Plataforma de desarrollo gratuita, de código abierto y multiplataforma",
      image: "/NET.png?height=200&width=300",
      link: "/products/dotnet",
    },
    {
      id: 12,
      title: "Power Platform",
      description: "Crea soluciones empresariales con poco o ningún código",
      image: "/Power Platform.webp?height=200&width=300",
      link: "/products/power-platform",
    },
  ]

  const studentProducts = [
    {
      id: 13,
      title: "Office para Estudiantes",
      description: "Obtén Office 365 gratis con tu correo institucional",
      image: "/Office para Estudiantes.webp?height=200&width=300",
      link: "/education/office",
      badge: "Gratis",
    },
    {
      id: 14,
      title: "Microsoft Learn",
      description: "Recursos de aprendizaje gratuitos para estudiantes",
      image: "/Microsoft Learn.jpg?height=200&width=300",
      link: "/education/learn",
    },
    {
      id: 15,
      title: "GitHub Student Pack",
      description: "Herramientas de desarrollo gratuitas para estudiantes",
      image: "/GitHub Student Pack.webp?height=200&width=300",
      link: "/education/github",
    },
    {
      id: 16,
      title: "Imagine Cup",
      description: "Competencia global para estudiantes innovadores",
      image: "/Imagine Cup.jpg?height=200&width=300",
      link: "/education/imagine-cup",
    },
  ]

  const displayedProducts =
    userType === "business"
      ? businessProducts
      : userType === "developer"
        ? developerProducts
        : userType === "student"
          ? studentProducts
          : products

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 flex items-center justify-between h-16">
          <div className="flex items-center">
            <button className="md:hidden mr-4" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu className="h-6 w-6 text-gray-700 dark:text-gray-300" />
            </button>
            <a href="/" className="flex items-center">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20M%201-YRWOPQNwhXbScK1n61X7XZIFycWY5Z.png"
                alt="Microsoft Logo"
                className="h-6 w-6"
              />
              <span className="ml-2 text-lg font-semibold hidden sm:block">Microsoft</span>
            </a>
            <nav className="hidden md:flex ml-8 space-x-6">
              <a
                href="/products"
                className="text-sm text-gray-700 dark:text-gray-200 hover:text-[#0078d4] dark:hover:text-white"
              >
                Productos
              </a>
              <a
                href="/business"
                className="text-sm text-gray-700 dark:text-gray-200 hover:text-[#0078d4] dark:hover:text-white"
              >
                Empresas
              </a>
              <a
                href="/education"
                className="text-sm text-gray-700 dark:text-gray-200 hover:text-[#0078d4] dark:hover:text-white"
              >
                Educación
              </a>
              <a
                href="/developers"
                className="text-sm text-gray-700 dark:text-gray-200 hover:text-[#0078d4] dark:hover:text-white"
              >
                Desarrolladores
              </a>
              <a
                href="/support"
                className="text-sm text-gray-700 dark:text-gray-200 hover:text-[#0078d4] dark:hover:text-white"
              >
                Soporte
              </a>
            </nav>
          </div>
          <div className="flex items-center space-x-4">
            <div className="relative hidden md:block">
              <input
                type="text"
                placeholder="Buscar"
                className="pl-8 pr-4 py-1 text-sm border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0078d4] focus:border-transparent dark:bg-gray-800 dark:text-white"
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400 dark:text-gray-300" />
            </div>
            <Button
              size="icon"
              variant="outline"
              className="rounded-full"
              onClick={() => setDarkMode(!darkMode)}
              aria-label={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400 dark:text-yellow-500" />
              ) : (
                <Moon className="h-5 w-5 text-[#0078d4] dark:text-white" />
              )}
            </Button>
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 dark:text-gray-300 hover:text-[#0078d4] dark:hover:text-white hidden md:flex"
            >
              Iniciar sesión
            </Button>
            <Button size="icon" variant="outline" className="rounded-full" onClick={() => setIsChatbotOpen(true)}>
              <MessageSquare className="h-5 w-5 text-[#0078d4] dark:text-white" />
            </Button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileMenu onClose={() => setIsMobileMenuOpen(false)} />}

      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Slogan Banner */}
        <SloganBanner />

        {/* User Type Selector */}
        <section className="py-12 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-semibold text-center mb-8 dark:text-white">Personaliza tu experiencia</h2>
            <UserTypeSelector userType={userType} onChange={setUserType} />
          </div>
        </section>

        {/* Products Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold mb-2 dark:text-white">
              {userType === "business"
                ? "Soluciones para empresas"
                : userType === "developer"
                  ? "Herramientas para desarrolladores"
                  : userType === "student"
                    ? "Recursos para estudiantes"
                    : "Productos destacados"}
            </h2>
            <p className="text-gray-600 dark:text-gray-200 mb-8">
              {userType === "business"
                ? "Impulsa la productividad y seguridad de tu empresa"
                : userType === "developer"
                  ? "Crea, implementa y gestiona aplicaciones innovadoras"
                  : userType === "student"
                    ? "Potencia tu aprendizaje con tecnología Microsoft"
                    : "Descubre lo último en tecnología Microsoft"}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
            <div className="mt-8 text-center">
              <Button variant="outline" className="group">
                <span className="text-gray-700 dark:text-white">Ver todos los productos</span>
                <ChevronRight className="ml-2 h-4 w-4 text-gray-700 dark:text-white group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </section>

        {/* Popular Downloads Section */}
        <PopularDownloadsSection />

        {/* Stay Updated Section */}
        <StayUpdatedSection />

        {/* Quick Tools Section */}
        <QuickToolsSection />

        {/* Sustainability Section */}
        <section className="py-16 bg-[#f2f2f2] dark:bg-gray-800">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                <h2 className="text-3xl font-semibold mb-4 dark:text-white">Comprometidos con la sostenibilidad</h2>
                <p className="text-gray-600 dark:text-gray-300 mb-6">
                  Microsoft se ha comprometido a ser carbono negativo para 2030 y a eliminar todo su histórico de
                  emisiones para 2050.
                </p>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <div className="bg-green-100 dark:bg-green-900 p-2 rounded-full mr-3">
                      <svg
                        className="h-6 w-6 text-green-600 dark:text-green-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Carbono negativo</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">para 2030</p>
                    </div>
                  </div>
                  <div className="flex items-center bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm">
                    <div className="bg-blue-100 dark:bg-blue-900 p-2 rounded-full mr-3">
                      <svg
                        className="h-6 w-6 text-blue-600 dark:text-blue-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M20 7l-8 4-8-4m16 0l-8 4-8-4m8 4v10"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="font-medium dark:text-white">Cero residuos</p>
                      <p className="text-sm text-gray-500 dark:text-gray-400">para 2030</p>
                    </div>
                  </div>
                </div>
                <Button className="mt-6 bg-[#0078d4] hover:bg-[#006cbe] dark:bg-white dark:text-[#0078d4] dark:hover:bg-[#e0e0e0]">
                  Conoce nuestras iniciativas
                </Button>
              </div>
              <div className="md:w-1/2">
                <img
                  src="/sustentable.webp?height=400&width=600"
                  alt="Microsoft Sustainability"
                  className="rounded-lg shadow-md w-full"
                />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            <div>
              <h3 className="font-semibold mb-4 text-sm dark:text-white">Lo nuevo</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Microsoft 365
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Surface Pro 9
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Surface Laptop 5
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Windows 11 apps
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm dark:text-white">Microsoft Store</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Perfil de cuenta
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Centro de descargas
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Devoluciones
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Seguimiento de pedidos
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm dark:text-white">Educación</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Microsoft en educación
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Dispositivos para educación
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Microsoft Teams para Educación
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Microsoft 365 Education
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm dark:text-white">Empresa</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Microsoft Cloud
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Seguridad
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Azure
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Dynamics 365
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm dark:text-white">Desarrollador</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Microsoft Learn
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Microsoft Tech Community
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Azure Marketplace
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    AppSource
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-sm dark:text-white">Compañía</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Carreras
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Acerca de Microsoft
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Inversores
                  </a>
                </li>
                <li>
                  <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                    Sostenibilidad
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700 flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-4 mb-4 md:mb-0">
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20M%201-YRWOPQNwhXbScK1n61X7XZIFycWY5Z.png"
                alt="Microsoft Logo"
                className="h-6 w-6"
              />
              <span className="text-sm text-gray-500 dark:text-gray-400">
                &copy; Microsoft {new Date().getFullYear()}
              </span>
            </div>
            <div className="flex space-x-6">
              <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                Privacidad
              </a>
              <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                Términos de uso
              </a>
              <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                Marcas
              </a>
              <a href="#" className="text-xs text-gray-600 dark:text-gray-400 hover:underline">
                Contacto
              </a>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Dialog */}
      {isChatbotOpen && <ChatbotDialog onClose={() => setIsChatbotOpen(false)} />}
    </div>
  )
}


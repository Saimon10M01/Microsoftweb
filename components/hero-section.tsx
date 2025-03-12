"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronRight, ChevronLeft } from "lucide-react"

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0)

  // Usamos imágenes de servicios externos confiables para evitar problemas
  const slides = [
    {
      title: "Microsoft 365",
      subtitle: "Convierte tus ideas en realidad",
      description:
        "Aplicaciones premium de Office, almacenamiento en la nube adicional y funciones de seguridad avanzadas en un solo lugar.",
      ctaText: "Comprar ahora",
      ctaLink: "/microsoft-365",
      secondaryCtaText: "Prueba gratuita",
      secondaryCtaLink: "/microsoft-365/trial",
      // Imagen actualizada con iconos de Office
      backgroundImage: "https://cdn-dynmedia-1.microsoft.com/is/image/microsoftcorp/M365_FY25_C2_BOUNCE_ALL_IN_ONE_PLAN_Textless_16x9?resMode=sharp2&op_usm=1.5,0.65,15,0&wid=1328&qlt=100&fit=constrain",
      textColor: "text-white",
    },
    {
      title: "Surface Laptop 5",
      subtitle: "Potencia y estilo",
      description: "Rendimiento excepcional con Windows 11 en un diseño elegante y ligero.",
      ctaText: "Comprar ahora",
      ctaLink: "/surface-laptop-5",
      secondaryCtaText: "Más información",
      secondaryCtaLink: "/surface-laptop-5/specs",
      // Imagen de Surface Laptop de una fuente confiable
      backgroundImage: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4OXzi?ver=6a31",
      textColor: "text-white",
    },
    {
      title: "Xbox Series X",
      subtitle: "La Xbox más rápida y potente",
      description: "Juega miles de títulos de cuatro generaciones de consolas.",
      ctaText: "Comprar ahora",
      ctaLink: "/xbox-series-x",
      secondaryCtaText: "Más información",
      secondaryCtaLink: "/xbox-series-x/specs",
      // Imagen de Xbox de una fuente confiable
      backgroundImage: "https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE4mRni?ver=0d48",
      textColor: "text-white",
    },
  ]

  // Función para ir al siguiente slide
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  // Función para ir al slide anterior
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Efecto para cambiar automáticamente los slides
  useEffect(() => {
    const timer = setTimeout(() => {
      nextSlide()
    }, 5000) // Cambia cada 5 segundos

    return () => clearTimeout(timer) // Limpia el timer cuando el componente se desmonta
  }, [currentSlide]) // Se ejecuta cada vez que currentSlide cambia

  const currentSlideData = slides[currentSlide]

  return (
    <section className="relative h-[70vh] min-h-[500px] overflow-hidden">
      {/* Fondo de respaldo (por si las imágenes no cargan) */}
      <div className="absolute inset-0 bg-gray-900"></div>

      {/* Imágenes de fondo */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 w-full h-full">
            <img
              src={slide.backgroundImage || "/placeholder.svg"}
              alt={slide.title}
              className="w-full h-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20"></div>
          </div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full container mx-auto px-4 flex items-center z-20">
        <div className="max-w-2xl">
          <h1 className={`text-4xl md:text-5xl font-bold mb-2 ${currentSlideData.textColor}`}>
            {currentSlideData.title}
          </h1>
          <p className={`text-xl md:text-2xl font-semibold mb-4 ${currentSlideData.textColor}`}>
            {currentSlideData.subtitle}
          </p>
          <p className={`text-base md:text-lg mb-8 max-w-lg ${currentSlideData.textColor}`}>
            {currentSlideData.description}
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#0078d4] hover:bg-[#006cbe] group">
              {currentSlideData.ctaText}
              <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="bg-white text-black border-white hover:bg-white/90 hover:text-black"
            >
              {currentSlideData.secondaryCtaText}
            </Button>
          </div>
        </div>
      </div>

      {/* Botones de navegación */}
      <button
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-20 hover:bg-black/50"
        onClick={prevSlide}
        aria-label="Slide anterior"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/30 text-white p-2 rounded-full z-20 hover:bg-black/50"
        onClick={nextSlide}
        aria-label="Siguiente slide"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${index === currentSlide ? "w-8 bg-white" : "w-2 bg-white/50"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}


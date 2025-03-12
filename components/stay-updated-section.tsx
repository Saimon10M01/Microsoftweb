"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Bell, CheckCircle, AlertCircle } from "lucide-react"

export default function StayUpdatedSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)
  const [error, setError] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Validación básica de email
    if (!email || !email.includes("@") || !email.includes(".")) {
      setError("Por favor, introduce un correo electrónico válido")
      return
    }

    // Simulación de suscripción exitosa
    setError("")
    setSubscribed(true)

    // Reset después de 5 segundos
    setTimeout(() => {
      setSubscribed(false)
      setEmail("")
    }, 5000)
  }

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <Bell className="h-12 w-12 text-[#0078d4] mx-auto mb-4" />
          <h2 className="text-3xl font-semibold mb-2 dark:text-white">Mantente al día con Microsoft</h2>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            Recibe las últimas noticias, actualizaciones de productos y ofertas exclusivas directamente en tu bandeja de
            entrada.
          </p>

          {subscribed ? (
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg flex items-center justify-center mb-6">
              <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400 mr-2" />
              <p className="text-green-800 dark:text-green-300">
                ¡Gracias por suscribirte! Pronto recibirás nuestras actualizaciones.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mb-6">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="flex-1">
                  <Input
                    type="email"
                    placeholder="Tu correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-12 dark:bg-gray-800"
                  />
                  {error && (
                    <div className="flex items-center mt-2 text-red-600 dark:text-red-400 text-sm">
                      <AlertCircle className="h-4 w-4 mr-1" />
                      {error}
                    </div>
                  )}
                </div>
                <Button type="submit" className="h-12 bg-[#0078d4] hover:bg-[#006cbe] px-8">
                  Suscribirme
                </Button>
              </div>
            </form>
          )}

          <div className="text-sm text-gray-500 dark:text-gray-400 space-y-2">
            <p>
              Al suscribirte, aceptas recibir correos electrónicos de Microsoft y sus socios sobre productos, eventos y
              ofertas.
            </p>
            <p>
              Puedes darte de baja en cualquier momento. Lee nuestra{" "}
              <a href="#" className="text-[#0078d4] hover:underline">
                Política de Privacidad
              </a>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}


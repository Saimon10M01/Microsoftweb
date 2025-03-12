import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Microsoft - Dispositivos y servicios digitales",
  description:
    "Explora productos y servicios Microsoft para tu hogar o empresa. Compra Surface, Microsoft 365, Xbox, Windows, Azure y mucho más.",
  icons: {
    icon: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20M%201-YRWOPQNwhXbScK1n61X7XZIFycWY5Z.png",
    shortcut: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20M%201-YRWOPQNwhXbScK1n61X7XZIFycWY5Z.png",
    apple: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/logo%20M%201-YRWOPQNwhXbScK1n61X7XZIFycWY5Z.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  )
}


"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { X, Send, Bot } from "lucide-react"

interface ChatbotDialogProps {
  onClose: () => void
}

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

export default function ChatbotDialog({ onClose }: ChatbotDialogProps) {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "¡Hola! Soy Copilot, tu asistente de Microsoft. ¿En qué puedo ayudarte hoy?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)

  const handleSendMessage = () => {
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: messages.length + 1,
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages([...messages, userMessage])
    setInput("")
    setIsTyping(true)

    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        "Puedo ayudarte con eso. ¿Qué más necesitas saber?",
        "Claro, aquí tienes la información sobre los productos de Microsoft.",
        "Para más detalles, te recomiendo visitar la página de soporte técnico.",
        "¿Necesitas ayuda con alguna aplicación específica de Microsoft?",
        "Puedo mostrarte cómo configurar tu cuenta de Microsoft 365.",
      ]

      const randomResponse = botResponses[Math.floor(Math.random() * botResponses.length)]

      const botMessage: Message = {
        id: messages.length + 2,
        text: randomResponse,
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <div className="fixed bottom-6 right-6 z-50 w-96 h-[500px] bg-white dark:bg-gray-800 rounded-lg shadow-xl flex flex-col overflow-hidden border border-gray-200 dark:border-gray-700">
      {/* Header */}
      <div className="bg-[#0078d4] text-white p-4 flex justify-between items-center">
        <div className="flex items-center">
          <Bot className="h-5 w-5 mr-2" />
          <h3 className="font-semibold">Microsoft Copilot</h3>
        </div>
        <button onClick={onClose} className="text-white hover:text-gray-200 transition-colors">
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        {messages.map((message) => (
          <div key={message.id} className={`mb-4 flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
            <div
              className={`max-w-[80%] rounded-lg p-3 ${
                message.sender === "user"
                  ? "bg-[#0078d4] text-white"
                  : "bg-white dark:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-600"
              }`}
            >
              <p>{message.text}</p>
              <p
                className={`text-xs mt-1 ${message.sender === "user" ? "text-blue-100" : "text-gray-500 dark:text-gray-400"}`}
              >
                {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
              </p>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start mb-4">
            <div className="bg-white dark:bg-gray-700 text-gray-800 dark:text-white rounded-lg p-3 border border-gray-200 dark:border-gray-600">
              <div className="flex space-x-1">
                <div className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"></div>
                <div
                  className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="h-2 w-2 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Input */}
      <div className="p-4 border-t border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
        <div className="flex items-center">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Escribe tu mensaje..."
            className="flex-1 mr-2"
          />
          <Button
            onClick={handleSendMessage}
            size="icon"
            className="bg-[#0078d4] hover:bg-[#006cbe]"
            disabled={!input.trim()}
          >
            <Send className="h-4 w-4" />
          </Button>
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2">
          Copilot puede proporcionar información inexacta. Verifica los detalles importantes.
        </p>
      </div>
    </div>
  )
}


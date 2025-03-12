"use client"

import { Button } from "@/components/ui/button"
import { Briefcase, Code, GraduationCap, User } from "lucide-react"

interface UserTypeSelectorProps {
  userType: "business" | "student" | "developer" | "personal"
  onChange: (type: "business" | "student" | "developer" | "personal") => void
}

export default function UserTypeSelector({ userType, onChange }: UserTypeSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-4">
      <Button
        variant={userType === "personal" ? "default" : "outline"}
        className={`flex flex-col items-center py-6 px-8 h-auto ${
          userType === "personal"
            ? "bg-[#0078d4] hover:bg-[#006cbe]"
            : "dark:text-white dark:border-gray-600 dark:hover:border-gray-400"
        }`}
        onClick={() => onChange("personal")}
      >
        <User className="h-8 w-8 mb-2" />
        <span>Personal</span>
      </Button>

      <Button
        variant={userType === "business" ? "default" : "outline"}
        className={`flex flex-col items-center py-6 px-8 h-auto ${
          userType === "business"
            ? "bg-[#0078d4] hover:bg-[#006cbe]"
            : "dark:text-white dark:border-gray-600 dark:hover:border-gray-400"
        }`}
        onClick={() => onChange("business")}
      >
        <Briefcase className="h-8 w-8 mb-2" />
        <span>Empresas</span>
      </Button>

      <Button
        variant={userType === "student" ? "default" : "outline"}
        className={`flex flex-col items-center py-6 px-8 h-auto ${
          userType === "student"
            ? "bg-[#0078d4] hover:bg-[#006cbe]"
            : "dark:text-white dark:border-gray-600 dark:hover:border-gray-400"
        }`}
        onClick={() => onChange("student")}
      >
        <GraduationCap className="h-8 w-8 mb-2" />
        <span>Estudiantes</span>
      </Button>

      <Button
        variant={userType === "developer" ? "default" : "outline"}
        className={`flex flex-col items-center py-6 px-8 h-auto ${
          userType === "developer"
            ? "bg-[#0078d4] hover:bg-[#006cbe]"
            : "dark:text-white dark:border-gray-600 dark:hover:border-gray-400"
        }`}
        onClick={() => onChange("developer")}
      >
        <Code className="h-8 w-8 mb-2" />
        <span>Desarrolladores</span>
      </Button>
    </div>
  )
}


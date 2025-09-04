"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: "Bosh sahifa", href: "/" },
    { name: "Haqida", href: "/about" },
    { name: "Kurslar", href: "/courses" },
    { name: "Qabul", href: "/admission" },
    { name: "Sertifikatlar", href: "/certificates" },
    { name: "O'qituvchilar", href: "/tutors" },
    { name: "Aloqa", href: "/contact" },
  ]

  return (
    <header className="mx-auto sticky top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="flex items-center py-3">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0 mx-auto">
              <img
                src="/qosimov-logo.png"
                alt="Qosimov School Logo"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h1 className="font-heading font-black text-xl bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                  Qosimov School
                </h1>
                <p className="text-sm text-muted-foreground font-medium">
                  Biologiya va Kimyo
                </p>
              </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 mx-auto">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-foreground hover:text-primary transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>

  )
}

"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { AnimatePresence, motion } from "framer-motion"
import { Home, BookOpen, Users, Phone } from "lucide-react"
import { cn } from "@/lib/utils" // Shadcn ishlatayotgan bo'lsangiz

export function BottomNav() {
  const pathname = usePathname()

  const navigation = [
    { name: "Asosiy", href: "/", icon: Home },
    { name: "Kurslar", href: "/courses", icon: BookOpen },
    { name: "Ustozlar", href: "/tutors", icon: Users },
    { name: "Aloqa", href: "/contact", icon: Phone },
  ]

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-[100] sm:hidden">
      {/* Glassmorphism orqa foni */}
      <div className="absolute inset-0 bg-white/80 backdrop-blur-xl border-t border-slate-100 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.05)]" />
      
      <div className="relative flex justify-around items-center px-4 pt-3 pb-6"> {/* pb-6 iOS uchun joy qoldiradi */}
        {navigation.map((item) => {
          const Icon = item.icon
          const isActive = pathname === item.href

          return (
            <Link
              key={item.name}
              href={item.href}
              className="relative flex flex-col items-center min-w-[64px]"
            >
              {/* Faol element uchun indikator (nuqta yoki fon) */}
              <AnimatePresence>
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute -top-1 w-10 h-1 bg-emerald-500 rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </AnimatePresence>

              <div className={cn(
                "flex flex-col items-center transition-all duration-300",
                isActive ? "text-emerald-600 scale-110" : "text-slate-400"
              )}>
                <Icon className={cn(
                  "h-6 w-6 mb-1 transition-transform",
                  isActive ? "fill-emerald-50/50" : "fill-none"
                )} />
                <span className="text-[10px] font-black uppercase tracking-widest leading-none">
                  {item.name}
                </span>
              </div>
            </Link>
          )
        })}
      </div>
    </nav>
  )
}
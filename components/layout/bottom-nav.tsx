"use client"

import Link from "next/link"
import { Home, BookOpen, Users, Phone } from "lucide-react"

export function BottomNav() {
    const navigation = [
        { name: "Bosh sahifa", href: "/", icon: Home },
        { name: "Kurslar", href: "/courses", icon: BookOpen },
        { name: "O'qituvchilar", href: "/tutors", icon: Users },
        { name: "Aloqa", href: "/contact", icon: Phone },
    ]

    return (
        <nav className="fixed bottom-0 left-0 right-0 bg-background border-t z-50 sm:hidden">
        <div className="flex justify-around items-center py-2">
            {navigation.map((item) => {
            const Icon = item.icon
            return (
                <Link
                key={item.name}
                href={item.href}
                className="flex flex-col items-center text-xs text-muted-foreground hover:text-primary transition-colors"
                >
                <Icon className="h-5 w-5 mb-1" />
                {item.name}
                </Link>
            )
            })}
        </div>
        </nav>
    )
}

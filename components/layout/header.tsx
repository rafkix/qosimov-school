'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { Menu, FlaskConical, ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'

export function Header() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'Bosh sahifa', href: '/' },
    { name: 'Haqida', href: '/about' },
    { name: 'Kurslar', href: '/courses' },
    { name: 'Qabul', href: '/admission' },
    { name: 'Natijalar', href: '/certificates' },
    { name: 'Ustozlar', href: '/tutors' },
    { name: 'Aloqa', href: '/contact' },
  ]

  return (
    <header className="sticky top-0 w-full bg-white/80 backdrop-blur-md border-b border-slate-100 z-[100]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* 1. Logo (Chapda) */}
          <Link href="/" className="flex items-center gap-3 shrink-0">
            <div className="w-15 h-15  flex items-center justify-center">
              <img src="/favicon.svg" alt="qosimov logo" />
            </div>
            <div className="hidden sm:block">
              <h1 className="font-black text-xl tracking-tighter text-slate-900 leading-none">
                Qosimov <span className="text-emerald-600">School</span>
              </h1>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">
                BioKimyo Akademiyasi
              </p>
            </div>
          </Link>

          {/* 2. Desktop Navigation (Markazda) */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={cn(
                    'px-4 py-2 text-[13px] font-bold uppercase tracking-widest transition-all rounded-xl relative group',
                    isActive
                      ? 'text-emerald-600'
                      : 'text-slate-500 hover:text-slate-900'
                  )}
                >
                  {item.name}
                  {/* Aktivlik indikatori */}
                  {isActive && (
                    <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-emerald-600 rounded-full" />
                  )}
                  <span className="absolute bottom-0 left-4 w-0 h-0.5 bg-emerald-600/30 transition-all group-hover:w-[calc(100%-32px)]" />
                </Link>
              )
            })}
          </nav>

          {/* 3. Action Button (O'ngda) */}
          <div className="flex items-center gap-4">
            <Button
              asChild
              className="hidden md:flex bg-slate-900 hover:bg-emerald-600 text-white rounded-xl px-6 font-bold text-[11px] uppercase tracking-widest h-11 transition-all"
            >
              <Link href="/admission">Qabul 2026</Link>
            </Button>

            {/* Mobile Menu (Sheet) */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="lg:hidden rounded-xl bg-slate-50 hover:bg-slate-100"
                >
                  <Menu className="h-6 w-6 text-slate-900" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] pt-12">
                <nav className="flex flex-col gap-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg font-black uppercase tracking-widest pb-2 border-b border-slate-50 transition-colors',
                        pathname === item.href
                          ? 'text-emerald-600 border-emerald-100'
                          : 'text-slate-500'
                      )}
                    >
                      {item.name}
                    </Link>
                  ))}
                  <Button
                    asChild
                    className="mt-4 bg-emerald-600 rounded-2xl h-14 font-black uppercase tracking-widest"
                  >
                    <Link href="/admission" onClick={() => setIsOpen(false)}>
                      Ro'yxatdan o'tish
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

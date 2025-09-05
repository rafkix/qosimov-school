"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 lg:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Text Content */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-medium">
                Biologiya va Kimyo Akademiyasi
              </div>
              <h1 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl xl:text-6xl text-slate-900 leading-tight">
                Qosimov <span className="text-emerald-600">School</span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0">
                Zamonaviy laboratoriyalar va tajribali o'qituvchilar bilan fan sohasida kelajak mutaxassislarini
                tayyorlash
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="/admission">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg"
                >
                  Hoziroq ro'yxatdan o'ting
                </Button>
              </Link>
              <Link href="/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-300 text-slate-700 px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg bg-transparent"
                >
                  Kurslarni ko'rish
                </Button>
              </Link>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 sm:gap-8 pt-6 sm:pt-8 border-t border-slate-200">
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">500+</div>
                <div className="text-xs sm:text-sm text-slate-600">O'quvchilar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">15+</div>
                <div className="text-xs sm:text-sm text-slate-600">O'qituvchilar</div>
              </div>
              <div className="text-center">
                <div className="text-2xl sm:text-3xl font-bold text-emerald-600">98%</div>
                <div className="text-xs sm:text-sm text-slate-600">Muvaffaqiyat</div>
              </div>
            </div>
          </div>

          {/* Hero Image */}
          <div className="relative order-first lg:order-last">
            <div className="relative bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-2xl p-4 sm:p-6 lg:p-8 shadow-2xl">
              <img
                src="/main.jpg?height=600&width=500"
                alt="Qosimov School - Zamonaviy laboratoriya"
                className="w-full h-auto rounded-xl shadow-lg"
              />
              {/* Floating elements */}
              <div className="absolute -top-2 -right-2 sm:-top-4 sm:-right-4 bg-white rounded-xl p-2 sm:p-4 shadow-lg">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 text-emerald-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
              </div>
              <div className="absolute -bottom-2 -left-2 sm:-bottom-4 sm:-left-4 bg-white rounded-xl p-2 sm:p-4 shadow-lg">
                <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <svg
                    className="w-4 h-4 sm:w-6 sm:h-6 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"
import { motion } from "framer-motion" // Animatsiya uchun

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-br from-slate-50 to-white py-12 sm:py-16 lg:py-32 overflow-hidden">
      
      {/* Orqa fondagi mayin dog'lar (shinamlik uchun) */}
      <div className="absolute top-0 right-0 -z-10 w-[500px] h-[500px] bg-emerald-50/50 blur-[100px] rounded-full" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* MATN QISMI */}
          <div className="space-y-6 lg:space-y-8 text-center lg:text-left">
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-semibold tracking-wide"
              >
                BIOLOGIYA VA KIMYO AKADEMIYASI
              </motion.div>
              
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="font-heading font-black text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-slate-900 leading-[1.1]"
              >
                Qosimov <span className="text-emerald-600 italic">School</span>
              </motion.h1>

              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-base sm:text-lg lg:text-xl text-slate-600 leading-relaxed max-w-lg mx-auto lg:mx-0 font-medium"
              >
                Zamonaviy laboratoriyalar va tajribali o'qituvchilar bilan fan sohasida kelajak mutaxassislarini tayyorlash.
              </motion.p>
            </div>

            {/* Tugmalar */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <Link href="/admission">
                <Button
                  size="lg"
                  className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 text-lg font-bold rounded-2xl shadow-lg shadow-emerald-100 transition-all hover:scale-105 active:scale-95"
                >
                  Ro'yxatdan o'tish
                </Button>
              </Link>
              <Link href="/courses">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full sm:w-auto border-slate-200 text-slate-700 px-8 py-4 text-lg font-bold rounded-2xl bg-white hover:bg-slate-500 transition-all"
                >
                  Kurslarni ko'rish
                </Button>
              </Link>
            </motion.div>

            {/* Statistika */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-4 sm:gap-8 pt-8 border-t border-slate-100"
            >
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tighter italic">500+</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">O'quvchilar</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tighter italic">15+</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">O'qituvchilar</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl sm:text-3xl font-black text-emerald-600 tracking-tighter italic">98%</div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-400 uppercase tracking-widest">Natija</div>
              </div>
            </motion.div>
          </div>

          {/* RASM QISMI (Sizga yoqqan variant, silliq animatsiya bilan) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative order-first lg:order-last"
          >
            <motion.div 
              animate={{ y: [0, -15, 0] }} // Sekin suzish effekti
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-[2.5rem] p-3 sm:p-5 shadow-2xl shadow-emerald-200/50"
            >
              <img
                src="/main.jpg"
                alt="Qosimov School"
                className="w-full h-auto rounded-[2rem] shadow-inner object-cover"
              />

              {/* Suzuvchi kichik ikonka (Lampochka) */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                className="absolute -top-4 -right-4 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-emerald-50"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-emerald-100 rounded-xl flex items-center justify-center text-emerald-600">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
              </motion.div>

              {/* Suzuvchi kichik ikonka (Kolba) */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-3 sm:p-4 shadow-xl border border-blue-50"
              >
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600">
                  <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                  </svg>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
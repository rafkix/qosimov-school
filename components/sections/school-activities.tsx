'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Calendar,
  ArrowUpRight,
  Send,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

const demoActivities = [
  {
    id: 1,
    title: "Kimyo fanidan laboratoriya mashg'uloti",
    image: 'https://images.unsplash.com/photo-1532187875462-be93d5ad4595?q=80&w=800',
    date: '12 Mart, 2026',
    category: 'Tadbir',
  },
  {
    id: 2,
    title: 'IELTS Speaking: Masterclass session',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800',
    date: '10 Mart, 2026',
    category: 'Yangilik',
  },
  {
    id: 3,
    title: "Biologiya olimpiadasi g'oliblari",
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=800',
    date: '05 Mart, 2026',
    category: 'Yutuq',
  },
]

const ActivitySkeleton = () => (
  <div className="h-[450px] bg-slate-50 rounded-[3rem] animate-pulse" />
)

export default function SchoolActivities() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="py-24 lg:py-32 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* 1. HEADER & ALL NEWS BUTTON */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 text-emerald-600 font-bold tracking-[0.2em] text-[10px] lg:text-xs uppercase mb-6"
            >
              <div className="w-10 h-[1.5px] bg-emerald-600" />
              Maktab hayoti
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tighter"
            >
              Bizning hayajonli <br />
              <span className="text-slate-300 italic font-serif font-light">onlarimiz.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <Link 
              href="/news" 
              className="group inline-flex items-center gap-4 text-slate-900 font-black text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:text-emerald-600 transition-colors"
            >
              Barcha yangiliklar
              <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm group-hover:shadow-emerald-200">
                <ArrowUpRight size={20} className="group-hover:rotate-45 transition-transform duration-500" />
              </div>
            </Link>
          </motion.div>
        </div>

        {/* 2. ACTIVITIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
          <AnimatePresence mode="wait">
            {isLoading
              ? [1, 2, 3].map((i) => <ActivitySkeleton key={i} />)
              : demoActivities.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="relative aspect-[4/5] rounded-[3.5rem] overflow-hidden shadow-sm group-hover:shadow-2xl transition-all duration-700">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-85 transition-opacity duration-500" />

                      <div className="absolute bottom-10 left-10 right-10 text-white">
                        <p className="text-[10px] font-bold uppercase tracking-widest mb-3 flex items-center gap-2 opacity-60">
                          <Calendar size={12} className="text-emerald-400" /> {item.date}
                        </p>
                        <h3 className="text-2xl font-black leading-tight mb-8">
                          {item.title}
                        </h3>
                        <Link
                          href={`/news/${item.id}`}
                          className="inline-flex items-center gap-3 text-[10px] font-black uppercase tracking-widest bg-white text-slate-900 px-7 py-4 rounded-xl hover:bg-emerald-600 hover:text-white transition-all duration-300"
                        >
                          Batafsil <ArrowRight size={14} />
                        </Link>
                      </div>
                      
                      <div className="absolute top-8 left-8">
                        <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-5 py-2 rounded-full text-[9px] font-black uppercase tracking-widest">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </motion.div>
                ))}
          </AnimatePresence>
        </div>

        {/* 3. MODERN TELEGRAM BANNER (Minimalist & Clean) */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative group"
        >
          {/* Orqa fondagi mayin neon nur */}
          <div className="absolute inset-0 bg-blue-500/5 blur-[100px] rounded-full -z-10" />
          
          <div className="relative overflow-hidden rounded-[4rem] bg-slate-50 border border-slate-100 p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10 hover:border-blue-100 transition-colors duration-500">
            
            <div className="flex flex-col lg:flex-row items-center gap-10 z-10">
              {/* Telegram Ikonkasi - Glass Style */}
              <div className="relative">
                <div className="w-24 h-24 rounded-[2.5rem] bg-gradient-to-br from-[#24A1DE] to-[#1d82b3] flex items-center justify-center text-white shadow-2xl shadow-blue-200 group-hover:rotate-12 transition-transform duration-700">
                  <Send size={40} className="-translate-x-1 translate-y-0.5" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-emerald-500 border-4 border-white rounded-full animate-bounce" />
              </div>

              <div className="text-center lg:text-left space-y-3">
                <div className="inline-flex items-center gap-2 text-blue-500 font-black text-[10px] uppercase tracking-[0.3em]">
                  <Sparkles size={12} /> Live Updates
                </div>
                <h3 className="text-3xl lg:text-5xl font-black text-slate-900 tracking-tighter">
                  Telegram hamjamiyatiga <span className="text-slate-300">qo'shiling.</span>
                </h3>
                <p className="text-slate-500 font-medium text-lg max-w-md">
                  Darsliklar, testlar va eng so'nggi natijalar bizning kanalda.
                </p>
              </div>
            </div>

            <Link 
              href="https://t.me/qosimov_school" 
              target="_blank"
              className="relative z-10 w-full lg:w-auto flex items-center justify-center gap-4 bg-slate-900 text-white px-12 py-6 rounded-3xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 transition-all shadow-xl shadow-slate-200 hover:shadow-blue-200 active:scale-95"
            >
              Kanalni ochish
              <ArrowUpRight size={20} />
            </Link>

            {/* Fon dekorativ chiziqlari */}
            <div className="absolute right-0 top-0 w-1/2 h-full bg-gradient-to-l from-blue-50/50 to-transparent pointer-events-none" />
          </div>
        </motion.div>

      </div>
    </section>
  )
}
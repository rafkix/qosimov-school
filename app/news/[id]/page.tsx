"use client"

import { useParams } from "next/navigation"
import { motion } from "framer-motion"
import { 
  Calendar, 
  Eye, 
  Clock, 
  Share2, 
  ArrowLeft,
  ChevronRight,
  PlayCircle,
  Tag
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NewsDetailPage() {
  const { id } = useParams()

  return (
    <main className="min-h-screen bg-white pb-20">
      {/* 1. Yuqori Navigatsiya */}
      <div className="border-b border-slate-100 bg-slate-50/50">
        <div className="container mx-auto px-4 md:px-6 lg:px-24 h-14 flex items-center justify-between">
          <Link href="/news" className="flex items-center gap-2 text-slate-500 hover:text-emerald-600 transition-colors text-xs font-bold uppercase tracking-widest">
            <ArrowLeft size={16} />
            Barcha yangiliklar
          </Link>
          <div className="flex items-center gap-4">
            <button className="text-slate-400 hover:text-blue-500 transition-colors"><Share2 size={18} /></button>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-6 lg:px-24 pt-10">
        <div className="grid lg:grid-cols-12 gap-12">
          
          {/* ASOSIY QISM */}
          <article className="lg:col-span-8">
            {/* Kategoriya va Statistika */}
            <div className="flex flex-wrap items-center gap-4 mb-6 text-[11px] font-bold uppercase tracking-wider text-slate-400">
              <span className="text-emerald-600">Jahon</span>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <div className="flex items-center gap-1.5"><Clock size={14} /> 19:54 / 09.03.2026</div>
              <div className="flex items-center gap-1.5"><Eye size={14} /> 9,881</div>
            </div>

            {/* Sarlavha */}
            <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-[1.1] tracking-tighter mb-8">
              “Arablar Eron ustidan arz qilyapti” – siyosatshunos<span className="text-emerald-500">.</span>
            </h1>

            {/* Lead Matn (Anons) */}
            <div className="bg-slate-50 border-l-4 border-emerald-500 p-6 md:p-8 rounded-r-3xl mb-10">
              <p className="text-lg md:text-xl text-slate-700 leading-relaxed font-medium italic">
                BAA rasmiylari Erondan yo‘llanayotgan zarbalarni keskin qoralab, mamlakat o‘zini himoya qilish uchun barcha choralarni ko‘rish huquqiga ega ekanini ta’kidladi.
              </p>
            </div>

            {/* Video Player Emulatsiyasi */}
            <div className="relative aspect-video rounded-[2.5rem] overflow-hidden shadow-2xl mb-12 group cursor-pointer bg-slate-900">
              <img 
                src="https://storage.kun.uz/source/thumbnails/_medium/11/IoqgYtTiFe4ar9gX9cs8bhLA6HiYy7dA_medium.jpg" 
                className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" 
                alt="Video cover" 
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <PlayCircle size={80} className="text-white opacity-90 group-hover:scale-110 transition-transform text-emerald-500" strokeWidth={1} />
              </div>
            </div>

            {/* Maqola matni */}
            <div className="prose prose-lg max-w-none text-slate-600 leading-relaxed space-y-6 font-medium">
              <p>
                <strong>Shavkat Ikromov:</strong> Yuqori martabali rasmiylardan biri shunday bayonot berdi, ular Eronga qarshi harbiy hujum ehtimolini istisno qilmaydi, biroq hozircha bunday reja mavjud emas va bu qadamdan tiyilishga qaror qilingan.
              </p>
              <p>
                Saudiya Arabistoni hozircha Eronga qarshi to‘g‘ridan to‘g‘ri harbiy hujum boshlash niyatida emas. Ammo agar mamlakat hududidagi energetika infratuzilmasi nishonga olinsa, javob choralarini ko‘rish ehtimoli istisno qilinmaydi.
              </p>
            </div>

            {/* Teglar */}
            <div className="mt-12 pt-8 border-t border-slate-100 flex flex-wrap gap-2">
              <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer">
                <Tag size={14} /> #Geosiyosat
              </span>
              <span className="flex items-center gap-2 px-4 py-2 bg-slate-100 rounded-full text-xs font-bold text-slate-500 hover:bg-emerald-50 hover:text-emerald-600 transition-colors cursor-pointer">
                <Tag size={14} /> #Eron
              </span>
            </div>
          </article>

          {/* SIDEBAR (O'NG QISM) */}
          <aside className="lg:col-span-4 space-y-10">
            {/* Tavsiya etamiz */}
            <div className="bg-slate-50 rounded-[2.5rem] p-8">
              <h3 className="text-xl font-black text-slate-900 mb-6 flex items-center gap-2">
                <div className="w-2 h-8 bg-emerald-500 rounded-full" />
                Tavsiya etamiz
              </h3>
              <div className="space-y-6">
                {[1, 2, 3].map((item) => (
                  <Link key={item} href="#" className="group block">
                    <p className="text-sm font-bold text-slate-800 leading-snug group-hover:text-emerald-600 transition-colors mb-2">
                      Ko‘rfaz olov ichida – hafta davomida sodir bo'lgan asosiy voqealar
                    </p>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">08.03.2026</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Reklama bloki */}
            <div className="bg-slate-900 rounded-[2.5rem] p-8 text-white relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-emerald-500 mb-4 block">E'lon</span>
                <h4 className="text-xl font-bold mb-4">HONOR Magic8 Pro flagmani O‘zbekistonda!</h4>
                <Button className="w-full bg-white text-slate-900 hover:bg-emerald-500 hover:text-white transition-all font-bold rounded-xl">
                  Batafsil
                </Button>
              </div>
              <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-emerald-500/20 rounded-full blur-3xl" />
            </div>
          </aside>

        </div>
      </div>
    </main>
  )
}
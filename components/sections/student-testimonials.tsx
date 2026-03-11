'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Award,
  ArrowRight,
  ArrowLeft,
  ArrowUpRight,
  Minus,
  LayoutGrid,
} from 'lucide-react'
import Link from 'next/link'
import { api } from '@/lib/api'

const DEMO_STUDENTS = [
  {
    id: 1,
    name: 'Tursunova Madina',
    score: 'B',
    subject: 'Ona tili',
    image: '/certificates.png',
    testimonial: 'Qosimov School jamoasiga katta rahmat!',
  },
  {
    id: 2,
    name: 'Musayeva Zebiniso',
    score: 'A+',
    subject: 'Ona tili',
    image: '/certificates.png',
    testimonial: "A+ darajani qo'lga kiritishimda markaz juda katta yordam berdi.",
  },
  {
    id: 3,
    name: 'Nuriddinova Mohinur',
    score: 'B',
    subject: 'Ona tili',
    image: '/certificates.png',
    testimonial: "Sifatli ta'lim uchun rahmat.",
  },
  {
    id: 4,
    name: 'Ahmadjonova Shukrona',
    score: 'A+',
    subject: 'Ona tili',
    image: '/certificates.png',
    testimonial: 'Maksimal natijaga intilgan edik va bunga erishdik!',
  },
]

export default function StudentResultsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [students, setStudents] = useState<any[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        const data = await api.getTestimonials()
        setStudents(data?.length > 0 ? data : DEMO_STUDENTS)
      } catch {
        setStudents(DEMO_STUDENTS)
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  const next = () => setCurrentIndex((prev) => (prev + 1) % (students.length - 2))
  const prev = () =>
    setCurrentIndex((prev) => (prev === 0 ? students.length - 3 : prev - 1))

  if (loading || students.length < 3) return null

  // Faqat joriy 3ta elementni ko'rsatish
  const visibleStudents = students.slice(currentIndex, currentIndex + 3)

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-emerald-600 mb-4">
              <Minus className="w-6 h-px bg-emerald-600" />
              <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
                Yutuqlarimiz
              </span>
            </div>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Bizning faxrli <br />{' '}
              <span className="text-slate-400">o'quvchilarimiz.</span>
            </h2>
          </div>

          {/* Navigation Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prev}
              className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm bg-white"
            >
              <ArrowLeft size={20} />
            </button>
            <button
              onClick={next}
              className="w-12 h-12 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 hover:text-emerald-600 hover:border-emerald-200 transition-all shadow-sm bg-white"
            >
              <ArrowRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <AnimatePresence mode="popLayout">
            {visibleStudents.map((student, idx) => (
              <motion.div
                key={student.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="group relative"
              >
                <div className="relative aspect-[4/5] rounded-[32px] overflow-hidden bg-slate-50 border border-slate-100 group-hover:border-emerald-200 transition-all duration-500">
                  <img
                    src={student.image}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt={student.name}
                  />

                  {/* Score Badge */}
                  <div className="absolute top-6 right-6 h-12 w-12 bg-white/90 backdrop-blur rounded-2xl flex items-center justify-center shadow-lg border border-white">
                    <span className="text-emerald-600 font-black text-sm">
                      {student.score}
                    </span>
                  </div>

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-80 group-hover:opacity-100 transition-opacity" />

                  {/* Info Overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-2">
                      {student.subject}
                    </p>
                    <h4 className="text-xl font-bold mb-1">{student.name}</h4>
                    <p className="text-slate-300 text-xs line-clamp-1 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                      "{student.testimonial}"
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Action Button */}
        <div className="flex justify-center">
          <Link href="/certificates">
            <Button className="group h-14 px-8 rounded-2xl bg-slate-900 text-white hover:bg-emerald-600 transition-all duration-300 shadow-xl shadow-slate-200">
              <LayoutGrid
                size={18}
                className="mr-2 group-hover:rotate-12 transition-transform"
              />
              Barcha natijalarni ko'rish
              <ArrowUpRight
                size={18}
                className="ml-2 opacity-50 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
              />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

// Shadcn UI Button kodi (agar loyihada bo'lmasa ishlatish uchun)
function Button({ className, children, ...props }: any) {
  return (
    <button
      className={`inline-flex items-center justify-center font-bold text-sm ${className}`}
      {...props}
    >
      {children}
    </button>
  )
}

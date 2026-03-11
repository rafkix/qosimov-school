'use client'

import { useEffect, useState } from 'react'
import { api } from '@/lib/api'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Clock, Users, Award, BookOpen, CheckCircle2 } from 'lucide-react'

// ==== DEMO DATA ====
const DEMO_CATEGORIES = [
  { id: 1, name: 'Tabiiy fanlar', description: "Biologiya va Kimyo yo'nalishlari" },
  { id: 2, name: 'Gumanitar fanlar', description: "Tarix va Ona tili yo'nalishlari" },
  { id: 3, name: 'Til kurslari', description: 'IELTS va CEFR tayyorlov' },
]

const DEMO_COURSES = [
  {
    id: 1,
    title: 'Professional Biologiya',
    description:
      "Tibbiyot oliygohlariga kiruvchilar uchun chuqurlashtirilgan Biologiya kursi. Noldan boshlab o'rgatiladi.",
    duration_weeks: 24,
    price: '450 000',
    category: { id: 1, name: 'Tabiiy fanlar' },
    teacher: { name: 'Qosimov Ustoz', experience_years: 10 },
  },
  {
    id: 2,
    title: 'Tarix (Milliy Sertifikat)',
    description:
      'Tarix fanidan A va B darajali milliy sertifikat olishni xohlovchilar uchun maxsus intensiv dastur.',
    duration_weeks: 16,
    price: '400 000',
    category: { id: 2, name: 'Gumanitar fanlar' },
    teacher: { name: 'Zokirjon Ustoz', experience_years: 8 },
  },
  {
    id: 3,
    title: 'Ona tili va Adabiyot',
    description:
      'Ona tili fanidan 189+ ball natija qayd etishni istaysizmi? Bizning metodika sizga yordam beradi.',
    duration_weeks: 20,
    price: '350 000',
    category: { id: 2, name: 'Gumanitar fanlar' },
    teacher: { name: 'Madina Ustoz', experience_years: 6 },
  },
  {
    id: 4,
    title: 'Kimyo (Abituriyent 2026)',
    description:
      "Murakkab masalalar yechish va laboratoriya testlari bilan ishlash ko'nikmasini shakllantiramiz.",
    duration_weeks: 24,
    price: '450 000',
    category: { id: 1, name: 'Tabiiy fanlar' },
    teacher: { name: 'Sirojiddin Ustoz', experience_years: 12 },
  },
  {
    id: 5,
    title: 'IELTS 7.5+ Intensive',
    description:
      "Listening, Reading, Writing va Speaking bo'limlari bo'yicha yuqori natija kafolati.",
    duration_weeks: 12,
    price: '500 000',
    category: { id: 3, name: 'Til kurslari' },
    teacher: { name: 'Mr. Jasurbek', experience_years: 5 },
  },
]

export function CoursesSection() {
  const [courses, setCourses] = useState<any[]>([])
  const [categories, setCategories] = useState<any[]>([])
  const [activeCategory, setActiveCategory] = useState<'all' | number>('all')
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const [coursesData, categoriesData] = await Promise.all([
          api.getCourses(),
          api.getCategories(),
        ])

        // API bo'sh bo'lsa demo ma'lumotlarni ishlatamiz
        setCourses(
          Array.isArray(coursesData) && coursesData.length > 0
            ? coursesData
            : DEMO_COURSES
        )
        setCategories(
          Array.isArray(categoriesData) && categoriesData.length > 0
            ? categoriesData
            : DEMO_CATEGORIES
        )
      } catch (err) {
        setCourses(DEMO_COURSES)
        setCategories(DEMO_CATEGORIES)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredCourses =
    activeCategory === 'all'
      ? courses
      : courses.filter((c) => c.category?.id === activeCategory)

  if (loading) return null

  return (
    <section id="courses" className="py-24 bg-slate-50/50">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl">
            <Badge
              variant="outline"
              className="mb-4 py-1 px-4 border-emerald-200 text-emerald-700 bg-emerald-50 font-bold uppercase tracking-widest text-[10px]"
            >
              O'quv dasturlarimiz
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              Sizga mos keladigan <br />{' '}
              <span className="text-emerald-600">kursni tanlang.</span>
            </h2>
          </div>
          <p className="text-slate-500 font-medium max-w-[300px] md:text-right">
            Barcha kurslarimiz yangi 2026-yilgi imtihon standartlari asosida
            tayyorlangan.
          </p>
        </div>

        {/* Categories Filter */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
              activeCategory === 'all'
                ? 'bg-slate-900 text-white shadow-xl shadow-slate-200'
                : 'bg-white text-slate-500 border border-slate-100 hover:border-emerald-200'
            }`}
          >
            Barcha yo'nalishlar
          </button>
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-6 py-3 rounded-2xl text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.id
                  ? 'bg-emerald-600 text-white shadow-xl shadow-emerald-100'
                  : 'bg-white text-slate-500 border border-slate-100 hover:border-emerald-200'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className="group border-none shadow-none bg-white rounded-[32px] overflow-hidden hover:shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)] transition-all duration-500 flex flex-col"
            >
              <CardHeader className="p-8 pb-0">
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-500">
                    <BookOpen size={24} />
                  </div>
                  <Badge
                    variant="secondary"
                    className="bg-slate-100 text-slate-600 border-none font-bold rounded-lg px-3 py-1"
                  >
                    {course.category?.name}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-black text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-slate-500 leading-relaxed font-medium line-clamp-2">
                  {course.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="p-8 pt-6 space-y-4 flex-grow">
                <div className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                  <Clock size={18} className="text-emerald-500" />
                  <span>{course.duration_weeks} hafta davomida</span>
                </div>
                <div className="flex items-center gap-3 text-slate-600 font-bold text-sm">
                  <Users size={18} className="text-emerald-500" />
                  <span>{course.teacher?.name}</span>
                </div>
                <div className="pt-4 border-t border-slate-50 flex items-center gap-2">
                  <CheckCircle2 size={16} className="text-emerald-500" />
                  <span className="text-xs font-bold text-slate-400">
                    Sertifikat beriladi
                  </span>
                </div>
              </CardContent>

              <CardFooter className="p-8 pt-0 flex items-center justify-between">
                <div>
                  <p className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1">
                    Kurs narxi
                  </p>
                  <p className="text-2xl font-black text-slate-900">
                    {course.price} <span className="text-sm font-medium">so'm</span>
                  </p>
                </div>
                <Button className="rounded-xl h-12 px-6 bg-slate-900 hover:bg-emerald-600 transition-all font-bold">
                  Yozilish
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { api } from "@/lib/api"

interface Student {
  id: number
  name: string
  score: string
  level: string
  testimonial: string
  image: string
  gradient: string
}

export default function StudentTestimonials() {
  const [students, setStudents] = useState<Student[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        const data = await api.getTestimonials() // backendda /api/testimonials/ bo‘lsa
        setStudents(data as Student[])
      } catch (err) {
        setError("Sharhlarni yuklashda xatolik yuz berdi.")
      } finally {
        setLoading(false)
      }
    }
    fetchTestimonials()
  }, [])

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % students.length)
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + students.length) % students.length)

  if (loading) return <p className="text-center py-10">Yuklanmoqda...</p>
  if (error) return <p className="text-center text-red-500 py-10">{error}</p>
  if (students.length === 0) return <p className="text-center py-10">Sharhlar topilmadi.</p>

  const currentStudent = students[currentIndex]

  return (
    <section className="py-10 sm:py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Title */}
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-800 mb-4">
            Bizning talabalarimiz
          </h2>
          <p className="text-base sm:text-lg xl:text-xl text-slate-600 max-w-2xl mx-auto">
            Talabalarimizning muvaffaqiyatlari bilan tanishing va motivatsiya oling
          </p>
        </div>

        {/* Testimonial Card */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image */}
              <div className="md:w-2/5 p-6 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50">
                <img
                  src={currentStudent.image || "/placeholder.svg"}
                  alt={currentStudent.name}
                  className="w-full max-w-xs rounded-xl shadow-lg"
                />
              </div>

              {/* Content */}
              <div className="md:w-3/5 p-6 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-800 mb-4">
                    {currentStudent.name}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
                    {currentStudent.testimonial}
                  </p>
                </div>

                {/* Score Cards */}
                <div className="flex flex-col sm:flex-row gap-4">
                  <div
                    className={`flex-1 p-4 rounded-xl text-white ${currentStudent.gradient}`}
                  >
                    <p className="text-2xl font-bold">{currentStudent.score}</p>
                    <p className="text-xs opacity-75">Ball / Daraja</p>
                  </div>
                  <div
                    className={`flex-1 p-4 rounded-xl text-white ${currentStudent.gradient}`}
                  >
                    <p className="text-lg font-bold">{currentStudent.level}</p>
                    <p className="text-xs opacity-75">Imtihon turi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-8 gap-4">
            <button
              onClick={prevSlide}
              className="p-3 rounded-full bg-white shadow hover:shadow-lg transition"
            >
              <ChevronLeft className="w-6 h-6 text-slate-600" />
            </button>

            <div className="flex gap-2">
              {students.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-3 rounded-full bg-white shadow hover:shadow-lg transition"
            >
              <ChevronRight className="w-6 h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

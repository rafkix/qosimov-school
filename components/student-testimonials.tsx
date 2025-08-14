"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const students = [
  {
    name: "Yuldoshev Firdavs",
    score: "95",
    level: "Kimyo Olimpiadasi",
    testimonial:
      "Qosimov maktabida 6 oy o'qib, Respublika Kimyo Olimpiadasida 1-o'rinni qo'lga kiritdim. Bu muvaffaqiyatda eng katta hissa ustoz Dilnoza Qosimovaga tegishli. Uning saboqlari juda samarali va qiziqarli bo'lib, u har bir o'quvchining ehtiyojlarini inobatga olib o'qitishni biladi.",
    image: "/placeholder.svg?height=400&width=300",
    gradient: "red-gradient",
  },
  {
    name: "Safarova Oysha",
    score: "98",
    level: "Biologiya Olimpiadasi",
    testimonial:
      "Ustoz Qosimov Dilnoza, men ko'rgan eng fidoyi o'qituvchilardan biri. Uning puxta rejalashtirilgan darslari va bizga bo'lgan o'qitishga bo'lgan ishtiyoqi meni Biologiya Olimpiadasida yuqori natijaga yetakladi. Hammasi juda mukammal edi.",
    image: "/placeholder.svg?height=400&width=300",
    gradient: "blue-gradient",
  },
  {
    name: "Boltayeva Lola",
    score: "94",
    level: "DTM Kimyo",
    testimonial:
      "Qosimov maktabida 4 oy davomida tayyorgarlik ko'rib, DTM dan Kimyo fanidan 94 ball oldim. Ustozlarimga minnatdorchilik bildiraman. Menga o'rgatgan bilimlari va yaxshi o'qishimiz uchun qilgan harakatlari uchun kattakon rahmat.",
    image: "/placeholder.svg?height=400&width=300",
    gradient: "orange-gradient",
  },
  {
    name: "Yunusova Safiya",
    score: "96",
    level: "DTM Biologiya",
    testimonial:
      "Qosimov maktabi Biologiya kursi ajoyib! Men istalgan natijaga erishdim, chunki ajoyib o'qituvchi va zor o'quv markazida o'qidim. Ularning yordami, resurslari va yo'riqnomalari tayyorlashim va muvaffaqiyatimda asosiy ahamiyatga ega bo'ldi.",
    image: "/placeholder.svg?height=400&width=300",
    gradient: "green-gradient",
  },
]

export default function StudentTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % students.length)
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + students.length) % students.length)
  }

  const currentStudent = students[currentIndex]

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-800 mb-4">Bizning talabalarimiz</h2>
          <p className="text-base sm:text-lg xl:text-xl text-slate-600 max-w-2xl mx-auto">
            Bizning talabalarimizning natijalarini bilan tanishib chiqing va motivatsiya oling
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden">
            <div className="md:flex">
              {/* Image Section */}
              <div className="md:w-2/5 p-4 sm:p-6 lg:p-8 flex items-center justify-center bg-gradient-to-br from-emerald-50 to-blue-50">
                <img
                  src={
                    currentStudent.image ||
                    "/placeholder.svg?height=300&width=250&query=student achievement certificate"
                  }
                  alt={`${currentStudent.name} certificate`}
                  className="w-full max-w-xs sm:max-w-sm rounded-xl sm:rounded-2xl shadow-lg"
                />
              </div>

              {/* Content Section */}
              <div className="md:w-3/5 p-4 sm:p-6 lg:p-8 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-800 mb-3 sm:mb-4">
                    {currentStudent.name}
                  </h3>
                  <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-6 sm:mb-8">
                    {currentStudent.testimonial}
                  </p>
                </div>

                {/* Score Cards */}
                <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                  <div className={`flex-1 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-white ${currentStudent.gradient}`}>
                    <div className="flex justify-end mb-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white bg-opacity-50"></div>
                    </div>
                    <p className="text-2xl sm:text-3xl xl:text-4xl font-bold">{currentStudent.score}</p>
                    <p className="text-xs sm:text-sm opacity-75">Ball / Daraja</p>
                  </div>
                  <div className={`flex-1 p-3 sm:p-4 rounded-xl sm:rounded-2xl text-white ${currentStudent.gradient}`}>
                    <div className="flex justify-end mb-2">
                      <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white bg-opacity-50"></div>
                    </div>
                    <p className="text-sm sm:text-base lg:text-lg xl:text-xl font-bold">{currentStudent.level}</p>
                    <p className="text-xs sm:text-sm opacity-75">Imtihon turi</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center mt-6 sm:mt-8 gap-3 sm:gap-4">
            <button
              onClick={prevSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </button>

            <div className="flex gap-1.5 sm:gap-2">
              {students.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition-colors ${
                    index === currentIndex ? "bg-emerald-500" : "bg-slate-300"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextSlide}
              className="p-2 sm:p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-shadow"
            >
              <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

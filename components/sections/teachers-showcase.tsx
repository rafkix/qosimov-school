"use client"

import { useState } from "react"
import { Play, Pause } from "lucide-react"

const teachers = [
  {
    name: "Qosimova Dilnoza",
    qualification: "Kimyo PhD",
    image: "/placeholder.svg?height=60&width=60",
    active: true,
  },
  {
    name: "Karimov Sardor",
    qualification: "Biologiya Magistr",
    image: "/placeholder.svg?height=60&width=60",
    active: false,
  },
  {
    name: "Abdullayeva Nigora",
    qualification: "Kimyo Magistr",
    image: "/placeholder.svg?height=60&width=60",
    active: false,
  },
  {
    name: "Rakhmatov Alijon",
    qualification: "Biologiya PhD",
    image: "/placeholder.svg?height=60&width=60",
    active: false,
  },
  {
    name: "Yusupova Madina",
    qualification: "Kimyo Magistr",
    image: "/placeholder.svg?height=60&width=60",
    active: false,
  },
]

export default function TeachersShowcase() {
  const [selectedTeacher, setSelectedTeacher] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)

  const activeTeacher = teachers[selectedTeacher]

  return (
    <section className="py-10 sm:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl xl:text-5xl font-bold text-slate-800 mb-4">Bizning o'qituvchilarimiz</h2>
          <p className="text-base sm:text-lg xl:text-xl text-slate-600 max-w-2xl mx-auto">
            Haqiqiy qahramonlarimiz, quyida ular bilan tanishib chiqishingiz mumkin
          </p>
        </div>

        <div className="lg:flex lg:gap-8 max-w-6xl mx-auto">
          {/* Teachers List - Mobile Slider */}
          <div className="lg:hidden mb-6 sm:mb-8">
            <div className="flex gap-3 sm:gap-4 overflow-x-auto pb-4 scrollbar-hide">
              {teachers.map((teacher, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedTeacher(index)}
                  className={`flex items-center gap-2 sm:gap-3 p-2.5 sm:p-3 rounded-xl sm:rounded-2xl min-w-max transition-all ${
                    index === selectedTeacher
                      ? "bg-gradient-to-r from-emerald-500 to-blue-500 text-white"
                      : "bg-slate-100 text-slate-700"
                  }`}
                >
                  <img
                    src={teacher.image || "/placeholder.svg?height=40&width=40&query=teacher profile"}
                    alt={teacher.name}
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover"
                  />
                  <div className="text-left">
                    <p className="font-medium text-sm sm:text-base">{teacher.name}</p>
                    <p className="text-xs sm:text-sm opacity-75">{teacher.qualification}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Teachers List - Desktop */}
          <div className="hidden lg:flex lg:flex-col lg:w-1/4 gap-2">
            {teachers.map((teacher, index) => (
              <button
                key={index}
                onClick={() => setSelectedTeacher(index)}
                className={`flex items-center gap-3 p-4 rounded-2xl transition-all text-left ${
                  index === selectedTeacher
                    ? "bg-slate-100 border-2 border-emerald-500"
                    : "bg-slate-50 hover:bg-slate-100"
                }`}
              >
                <img
                  src={teacher.image || "/placeholder.svg?height=56&width=56&query=teacher profile"}
                  alt={teacher.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <p className="font-medium text-slate-800">{teacher.name}</p>
                  <p className="text-sm text-slate-600">{teacher.qualification}</p>
                </div>
              </button>
            ))}
          </div>

          {/* Content Section */}
          <div className="lg:w-3/4 lg:flex lg:gap-8">
            {/* Video Player */}
            <div className="lg:w-2/5 mb-6 sm:mb-8 lg:mb-0">
              <div className="relative bg-gradient-to-br from-emerald-100 to-blue-100 rounded-2xl sm:rounded-3xl overflow-hidden aspect-[3/4] max-w-xs sm:max-w-sm mx-auto">
                <img
                  src="/placeholder.svg?height=500&width=350"
                  alt="Teacher video"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 bg-black bg-opacity-20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-opacity-30 transition-all"
                >
                  {isPlaying ? (
                    <Pause className="w-4 h-4 sm:w-6 sm:h-6" />
                  ) : (
                    <Play className="w-4 h-4 sm:w-6 sm:h-6 ml-0.5 sm:ml-1" />
                  )}
                </button>
              </div>
            </div>

            {/* Teacher Info */}
            <div className="lg:w-3/5">
              <div className="mb-6 sm:mb-8">
                <p className="text-slate-600 text-sm sm:text-base lg:text-lg leading-relaxed">
                  Kimyo va biologiya fanlaridan dars berishga qiziqishim universitet davridan boshlangan va shu
                  yo'nalishni hayotimga bog'lashga qaror qilganman. O'z ishimdagi eng asosiy maqsadim, o'quvchilarning
                  potensialini ochish va ularni nafaqat fan sohasiga, balki tadqiqot ishlariga ham qiziqtira olish.
                </p>
              </div>

              {/* Statistics */}
              <div className="flex flex-col xs:flex-row gap-3 sm:gap-4">
                <div className="flex-1 bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex justify-end mb-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-emerald-500 to-blue-500"></div>
                  </div>
                  <p className="text-2xl sm:text-3xl xl:text-4xl font-bold text-slate-800">8</p>
                  <p className="text-slate-600 text-sm sm:text-base">yillik tajriba</p>
                </div>
                <div className="flex-1 bg-slate-50 p-4 sm:p-6 rounded-xl sm:rounded-2xl">
                  <div className="flex justify-end mb-2">
                    <div className="w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-gradient-to-r from-orange-500 to-red-500"></div>
                  </div>
                  <p className="text-2xl sm:text-3xl xl:text-4xl font-bold text-slate-800">500+</p>
                  <p className="text-slate-600 text-sm sm:text-base">o'quvchi o'qitilgan</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

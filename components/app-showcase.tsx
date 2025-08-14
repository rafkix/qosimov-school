"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Download, Smartphone, BookOpen, FlaskConical, Trophy, Users, Map } from "lucide-react"

export default function AppShowcase() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const slides = [
    {
      title: "Har kunlik foydali odatni joriy eting",
      description:
        "Biologiya va kimyo darslariga qo'shiling va ilovamizda topshiriqlarni bajaring – mukammal o'qitish tajribasi!",
      icon: BookOpen,
    },
    {
      title: "Progressingiz va hozirgi holatingizni kuzatib boring",
      description:
        "Fan bo'yicha qanday ishlayotganingiz haqida haqiqiy statistika oling va nima yaxshilanishi mumkinligini ko'ring",
      icon: Trophy,
    },
    {
      title: "Laboratoriya tajribalari va amaliy mashg'ulotlar",
      description: "Virtual laboratoriya va haqiqiy tajribalar orqali biologiya va kimyoni chuqur o'rganing",
      icon: FlaskConical,
    },
    {
      title: "O'qituvchilar va guruhdoshlar bilan aloqa",
      description: "Chatbotlar, o'qituvchilar va guruhdoshlar bilan yozishmalar orqali bilimingizni mustahkamlang",
      icon: Users,
    },
    {
      title: "Fan bo'yicha sayohatingizning virtual xaritasini oling",
      description: "Darsga tayyorlaning, oldingizda nima kutayotganini ko'ring va o'tmish tajribangizni ko'rib chiqing",
      icon: Map,
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [slides.length])

  const CurrentIcon = slides[currentSlide].icon

  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-emerald-900 min-h-screen relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 border border-emerald-400 rounded-full"></div>
        <div className="absolute bottom-32 right-20 w-24 h-24 border border-emerald-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-16 h-16 border border-emerald-400 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center mb-6">
            <div className="h-20 w-20 bg-gradient-to-br from-emerald-400 to-blue-500 rounded-full flex items-center justify-center">
              <Smartphone className="h-10 w-10 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Qosimov School ilovasi</h2>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto">
            Biologiya va kimyo fanlarini o'rganish uchun zamonaviy mobil ilova!
          </p>
        </div>

        {/* App Showcase */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-16">
          {/* Phone Mockup */}
          <div className="relative">
            <div className="w-80 h-[600px] bg-gradient-to-b from-slate-800 to-slate-900 rounded-[3rem] p-4 shadow-2xl">
              <div className="w-full h-full bg-gradient-to-b from-emerald-50 to-white rounded-[2.5rem] relative overflow-hidden">
                {/* Phone Screen Content */}
                <div className="absolute inset-4 bg-gradient-to-br from-emerald-100 to-blue-50 rounded-[2rem] flex flex-col items-center justify-center p-6">
                  <div className="mb-8">
                    <CurrentIcon className="h-16 w-16 text-emerald-600" />
                  </div>
                  <div className="text-center">
                    <h3 className="text-lg font-semibold text-slate-800 mb-2">Qosimov School</h3>
                    <p className="text-sm text-slate-600">Biologiya va Kimyo</p>
                  </div>

                  {/* Progress indicators */}
                  <div className="mt-8 w-full">
                    <div className="flex justify-between mb-2">
                      <span className="text-xs text-slate-600">Progress</span>
                      <span className="text-xs text-emerald-600">75%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div className="bg-gradient-to-r from-emerald-500 to-blue-500 h-2 rounded-full w-3/4"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="lg:w-1/2 max-w-lg">
            {/* Download Buttons */}
            <div className="flex gap-4 mb-8 justify-center lg:justify-start">
              <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl">
                <Download className="h-5 w-5 mr-2" />
                Google Play
              </Button>
              <Button className="bg-slate-800 hover:bg-slate-700 text-white px-6 py-3 rounded-xl">
                <Download className="h-5 w-5 mr-2" />
                App Store
              </Button>
            </div>

            {/* Sliding Content */}
            <div className="text-center lg:text-left">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">{slides[currentSlide].title}</h3>
              <p className="text-white/70 text-lg leading-relaxed">{slides[currentSlide].description}</p>
            </div>

            {/* Slide Indicators */}
            <div className="flex gap-2 mt-8 justify-center lg:justify-start">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide ? "bg-emerald-400 w-8" : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

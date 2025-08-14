"use client"

import { GraduationCap, Users, FlaskConical, Award, BookOpen } from "lucide-react"

export default function WhyChooseUs() {
  const features = [
    {
      icon: <GraduationCap className="w-16 h-16 text-emerald-600" />,
      title: "Tajribali o'qituvchilar",
      description:
        "Har bir o'qituvchi biologiya va kimyo sohasida yuqori malakaga ega bo'lib, ko'p yillik tajribaga ega. Bunday ustozlarni hech nimaga alishmaymiz.",
    },
    {
      icon: <Users className="w-16 h-16 text-emerald-600" />,
      title: "Bepul qo'shimcha darslar",
      description:
        "Mavzuni yaxshi o'zlashtirolmagan bo'lsangiz, qo'shimcha o'qituvchilar har doim yoningizda va istagan mavzuyingizni qayta tushuntirib berishadi.",
    },
    {
      icon: <FlaskConical className="w-16 h-16 text-emerald-600" />,
      title: "Zamonaviy laboratoriya",
      description:
        "Alohida laboratoriyamiz mavjud u yerda siz biologiya va kimyo bo'yicha amaliy tajribalar o'tkazishingiz mumkin. Nazariyani amaliyot bilan birlashtiring.",
    },
    {
      icon: <Award className="w-16 h-16 text-emerald-600" />,
      title: "Bepul olimpiada tayyorlash",
      description:
        "Biologiya va kimyo olimpiadalariga tayyorgarlik, taniqli olimlar bilan suhbat va ilmiy tadqiqotlar, bularning barchasi Qosimov maktabi o'quvchilari uchun mutlaqo bepul.",
    },
    {
      icon: <BookOpen className="w-16 h-16 text-emerald-600" />,
      title: "O'quv zonalari",
      description:
        "Har bir sinf xonasida o'quvchilarimiz uchun maxsus o'quv zonalar mavjud bo'lib, bu yerda siz darslardan ozod vaqtingizda qo'shimcha o'qishingiz mumkin.",
    },
  ]

  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold text-slate-800 mb-4">Nega yoshlar bizni tanlashmoqda?</h2>
          <p className="text-lg xl:text-xl text-slate-600 max-w-2xl mx-auto">
            Qosimov maktabi 2020-yildan buyon yoshlarga biologiya va kimyoni o'rgatib kelmoqda va yuqori natijalarga
            erishmoqda
          </p>
        </div>

        {/* Mobile Slider */}
        <div className="md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4">
            {features.map((feature, index) => (
              <div key={index} className="min-w-[280px] bg-white rounded-2xl p-6 shadow-lg">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-slate-800 mb-3">{feature.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
              <div className="mb-4">{features[1].icon}</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">{features[1].title}</h3>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{features[1].description}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
              <div className="mb-4">{features[2].icon}</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">{features[2].title}</h3>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{features[2].description}</p>
            </div>
          </div>

          {/* Center Column */}
          <div className="bg-white rounded-2xl p-6 shadow-lg flex flex-col justify-center items-center text-center">
            <div className="mb-6">{features[0].icon}</div>
            <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-4">{features[0].title}</h3>
            <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{features[0].description}</p>
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
              <div className="mb-4">{features[3].icon}</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">{features[3].title}</h3>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{features[3].description}</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-lg flex-1">
              <div className="mb-4">{features[4].icon}</div>
              <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">{features[4].title}</h3>
              <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{features[4].description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

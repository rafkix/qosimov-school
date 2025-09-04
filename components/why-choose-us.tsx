"use client"

import { GraduationCap, Users, FlaskConical, Award, BookOpen } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Tajribali o'qituvchilar",
    description:
      "Har bir o'qituvchi biologiya va kimyo sohasida yuqori malakaga ega bo'lib, ko'p yillik tajribaga ega. Bunday ustozlarni hech nimaga alishmaymiz.",
  },
  {
    icon: Users,
    title: "Bepul qo'shimcha darslar",
    description:
      "Mavzuni yaxshi o'zlashtirolmagan bo'lsangiz, qo'shimcha o'qituvchilar har doim yoningizda va istagan mavzuyingizni qayta tushuntirib berishadi.",
  },
  {
    icon: FlaskConical,
    title: "Zamonaviy laboratoriya",
    description:
      "Alohida laboratoriyamiz mavjud u yerda siz biologiya va kimyo bo'yicha amaliy tajribalar o'tkazishingiz mumkin. Nazariyani amaliyot bilan birlashtiring.",
  },
  {
    icon: Award,
    title: "Bepul olimpiada tayyorlash",
    description:
      "Biologiya va kimyo olimpiadalariga tayyorgarlik, taniqli olimlar bilan suhbat va ilmiy tadqiqotlar, bularning barchasi Qosimov maktabi o'quvchilari uchun mutlaqo bepul.",
  },
  {
    icon: BookOpen,
    title: "O'quv zonalari",
    description:
      "Har bir sinf xonasida o'quvchilarimiz uchun maxsus o'quv zonalar mavjud bo'lib, bu yerda siz darslardan ozod vaqtingizda qo'shimcha o'qishingiz mumkin.",
  },
]

function FeatureCard({ icon: Icon, title, description }: { icon: any; title: string; description: string }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg text-center md:text-left flex flex-col items-center md:items-start">
      <div className="mb-4">
        <Icon className="w-16 h-16 text-emerald-600" />
      </div>
      <h3 className="text-xl lg:text-2xl font-semibold text-slate-800 mb-3">{title}</h3>
      <p className="text-sm lg:text-base text-slate-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default function WhyChooseUs() {
  return (
    <section className="py-16 bg-gradient-to-br from-slate-50 to-emerald-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl xl:text-5xl font-bold text-slate-800 mb-4">Nega yoshlar bizni tanlashmoqda?</h2>
          <p className="text-lg xl:text-xl text-slate-600 max-w-2xl mx-auto">
            Qosimov maktabi 2020-yildan buyon yoshlarga biologiya va kimyoni o'rgatib kelmoqda va yuqori natijalarga
            erishmoqda
          </p>
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden flex gap-4 overflow-x-auto pb-4">
          {features.map((feature, i) => (
            <div key={i} className="min-w-[280px]">
              <FeatureCard {...feature} />
            </div>
          ))}
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6">
          {/* Left */}
          <div className="flex flex-col gap-6">
            <FeatureCard {...features[1]} />
            <FeatureCard {...features[2]} />
          </div>

          {/* Center */}
          <FeatureCard {...features[0]} />

          {/* Right */}
          <div className="flex flex-col gap-6">
            <FeatureCard {...features[3]} />
            <FeatureCard {...features[4]} />
          </div>
        </div>
      </div>
    </section>
  )
}

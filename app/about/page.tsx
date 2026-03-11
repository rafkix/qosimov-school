"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BookOpen, Target } from "lucide-react"

const features = [
  {
    icon: Users,
    title: "Tajribali o'qituvchilar",
    desc: "Ko'p yillik tajribaga ega ustozlar tomonidan sifatli ta'lim beriladi.",
  },
  {
    icon: Award,
    title: "Yuqori natijalar",
    desc: "O'quvchilarimiz fan olimpiadalari va imtihonlarda yuqori natijalarga erishadi.",
  },
  {
    icon: BookOpen,
    title: "Zamonaviy dastur",
    desc: "Darslar zamonaviy metodika va amaliy yondashuv asosida tashkil etiladi.",
  },
  {
    icon: Target,
    title: "Individual yondashuv",
    desc: "Har bir o'quvchining bilim darajasi va salohiyatiga mos yondashuv qo'llaniladi.",
  },
]

const stats = [
  { number: "500+", label: "Bitiruvchilar" },
  { number: "25+", label: "O'qituvchilar" },
  { number: "10+", label: "Yillik tajriba" },
  { number: "95%", label: "Muvaffaqiyat ko'rsatkichi" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white selection:bg-emerald-100">
      <main>
        <div className="container mx-auto max-w-7xl px-6 py-20 lg:py-28">
          <div className="mb-20 space-y-4 text-center">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-emerald-600">
              Akademiya haqida
            </div>

            <h1 className="text-4xl font-black tracking-tight text-slate-900 md:text-6xl">
              Qosimov School <span className="text-emerald-600">haqida</span>
            </h1>

            <p className="mx-auto max-w-2xl text-lg font-medium text-slate-500 md:text-xl">
              Biologiya va kimyo fanlarini chuqur o‘qitishga ixtisoslashgan, zamonaviy
              yondashuvga ega ta’lim maskani.
            </p>
          </div>

          <div className="mb-20 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-8">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="relative rounded-[32px] border border-slate-100 bg-slate-50 p-8 text-center transition-all duration-500 hover:bg-white hover:shadow-xl hover:shadow-slate-100"
              >
                <div className="mb-2 text-4xl font-black text-slate-900 md:text-5xl">
                  {stat.number}
                </div>
                <div className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          <div className="mb-20 grid gap-8 md:grid-cols-2">
            <Card className="overflow-hidden rounded-[40px] border-none bg-emerald-600 shadow-none">
              <CardContent className="space-y-6 p-10 text-white md:p-14">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20">
                  <Target className="text-white" size={24} />
                </div>

                <h2 className="text-3xl font-black tracking-tight">Bizning missiyamiz</h2>

                <p className="text-lg font-medium leading-relaxed text-emerald-50/80">
                  Qosimov School o‘quvchilarga biologiya va kimyo fanlaridan mustahkam
                  bilim berish, ularni ilmiy fikrlashga, izlanishga va kelajakdagi katta
                  maqsadlar sari tayyorlashni o‘z oldiga maqsad qilgan.
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden rounded-[40px] border border-slate-100 bg-white shadow-none">
              <CardContent className="space-y-6 p-10 md:p-14">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 text-emerald-600">
                  <BookOpen size={24} />
                </div>

                <h2 className="text-3xl font-black tracking-tight text-slate-900">
                  Bizning tariximiz
                </h2>

                <p className="text-lg font-medium leading-relaxed text-slate-500">
                  2015-yilda tashkil etilgan Qosimov School bugungi kungacha ko‘plab
                  o‘quvchilarning bilim olishi va rivojlanishida muhim o‘rin tutib
                  kelmoqda. Maktab zamonaviy laboratoriyalar, tajribali ustozlar va
                  samarali ta’lim usullari bilan ajralib turadi.
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon

              return (
                <div
                  key={feature.title}
                  className="group rounded-[32px] border border-slate-50 bg-white p-8 transition-all hover:border-emerald-100"
                >
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-50 transition-colors duration-500 group-hover:bg-emerald-600 group-hover:text-white">
                    <Icon className="h-6 w-6" />
                  </div>

                  <h3 className="mb-2 text-lg font-black text-slate-900">
                    {feature.title}
                  </h3>

                  <p className="text-sm font-medium leading-relaxed text-slate-500">
                    {feature.desc}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </main>
    </div>
  )
}
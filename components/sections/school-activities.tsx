"use client"

import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SchoolActivities() {
  const activities = [
    {
      title: "Zamonaviy laboratoriyalar",
      description: "Eng so'nggi texnologiyalar bilan jihozlangan laboratoriyalar",
      image: "/placeholder.svg?height=400&width=600",
      icon: "🔬",
    },
    {
      title: "Biologiya darslari",
      description: "Amaliy mashg'ulotlar va tajribalar orqali chuqur bilim",
      image: "/placeholder.svg?height=400&width=600",
      icon: "🧬",
    },
    {
      title: "Ilmiy tadqiqotlar",
      description: "O'quvchilar bilan birgalikda olib boriladigan tadqiqot ishlari",
      image: "/placeholder.svg?height=400&width=600",
      icon: "📊",
    },
  ]

  return (
    <>
      {/* Activities Section */}
      <section className="py-10 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading font-bold text-4xl text-slate-900 mb-4">
              Bizning <span className="text-emerald-600">faoliyatimiz</span>
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Zamonaviy ta'lim usullari va amaliy tajribalar orqali o'quvchilarimizni kelajakka tayyorlaymiz
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {activities.map((activity, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={activity.image || "/placeholder.svg"}
                    alt={activity.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 left-4 w-12 h-12 bg-white rounded-xl flex items-center justify-center text-2xl shadow-lg">
                    {activity.icon}
                  </div>
                </div>
                <div className="p-8">
                  <h3 className="font-heading font-bold text-xl text-slate-900 mb-3">{activity.title}</h3>
                  <p className="text-slate-600 leading-relaxed">{activity.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-600 to-emerald-700">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-heading font-bold text-4xl text-white mb-6">Kelajagingizni bugun boshlang</h2>
            <p className="text-xl text-emerald-100 mb-8 leading-relaxed">
              Qosimov School da biologiya va kimyo sohasida professional ta'lim oling. Zamonaviy laboratoriyalar va
              tajribali o'qituvchilar sizni kutmoqda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/admission">
                <Button
                  size="lg"
                  className="bg-white text-emerald-600 hover:bg-emerald-50 px-8 py-4 text-lg font-semibold"
                >
                  Hoziroq ariza bering
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-emerald-600 px-8 py-4 text-lg font-semibold bg-transparent"
                >
                  Biz bilan bog'laning
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

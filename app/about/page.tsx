"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, BookOpen, Target } from "lucide-react"

export default function AboutPage() {
  const features = [
    { icon: Users, title: "Tajribali o'qituvchilar", desc: "15+ yillik tajribaga ega mutaxassislar" },
    { icon: Award, title: "Yuqori natijalar", desc: "95% talabalar imtihonlardan muvaffaqiyatli o'tadi" },
    { icon: BookOpen, title: "Zamonaviy dastur", desc: "Xalqaro standartlarga mos ta'lim dasturi" },
    { icon: Target, title: "Individual yondashuv", desc: "Har bir talabaga alohida e'tibor" },
  ]

  const stats = [
    { number: "500+", label: "Bitiruvchilar" },
    { number: "25+", label: "O'qituvchilar" },
    { number: "8", label: "Yillik tajriba" },
    { number: "95%", label: "Muvaffaqiyat darajasi" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <main>
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Qosimov School haqida
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Biologiya va Kimyo sohasida ta'lim beruvchi yetakchi maktab
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="p-6">
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Mission & History */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Bizning missiyamiz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  Qosimov School biologiya va kimyo fanlarida chuqur bilim berish, talabalarni ilmiy tadqiqot va
                  innovatsion fikrlashga tayyorlash maqsadida tashkil etilgan. Biz har bir talabaning potentsialini
                  ochishga va ularni kelajakdagi muvaffaqiyatga tayyorlashga intilamiz.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-heading font-bold mb-4 text-primary">Bizning tariximiz</h2>
                <p className="text-muted-foreground leading-relaxed">
                  2015-yilda tashkil etilgan Qosimov School bugungi kunga qadar 500 dan ortiq talabani tayyorlagan.
                  Maktabimiz zamonaviy laboratoriyalar, tajribali o'qituvchilar va innovatsion ta'lim usullari bilan
                  mashhur.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Features */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon; // katta harf
              return (
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                      <Icon className="h-6 w-6 text-primary" />  {/* dynamic icon */}
                    </div>
                    <h3 className="font-heading font-semibold mb-2">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              );
            })}

          </div>
        </div>
      </main>
    </div>
  )
}

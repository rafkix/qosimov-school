"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Eye, Award } from "lucide-react"

export default function CertificatesPage() {
  const [searchId, setSearchId] = useState("")

  const achievements = [
    { title: "Xalqaro olimpiada", count: "25+ medal", year: "2023" },
    { title: "Respublika tanlov", count: "50+ g'olib", year: "2023" },
    { title: "Ilmiy loyihalar", count: "100+ ish", year: "2023" },
  ]

  // Sample certificates with A4 format (210:297 aspect ratio)
  const certificates = [
    {
      id: "CERT-2023-001",
      name: "Biologiya kursi",
      student: "Aliyev Sardor",
      date: "2023-12-15",
      type: "Kurs yakunlash",
      grade: "A+",
      image: "/placeholder.svg?height=297&width=210",
    },
    {
      id: "CERT-2023-002",
      name: "Kimyo olimpiadasi",
      student: "Karimova Nilufar",
      date: "2023-11-20",
      type: "Olimpiada",
      grade: "1-o'rin",
      image: "/placeholder.svg?height=297&width=210",
    },
    {
      id: "CERT-2023-003",
      name: "Molekulyar biologiya",
      student: "Toshmatov Jasur",
      date: "2023-10-30",
      type: "Biologiya",
      grade: "A",
      image: "/placeholder.svg?height=297&width=210",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <div className="container mx-auto px-4 py-16">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-heading font-bold mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Sertifikatlar va Yutuqlar
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Talabalarimizning muvaffaqiyatlari va erishgan natijalari
            </p>
          </div>

          {/* Certificate Verification */}
          <Card className="mb-16">
            <CardContent className="p-8">
              <h2 className="text-2xl font-heading font-bold mb-6 text-center">Sertifikat tekshirish</h2>
              <div className="flex gap-4 max-w-md mx-auto">
                <Input
                  placeholder="Sertifikat ID raqamini kiriting"
                  value={searchId}
                  onChange={(e) => setSearchId(e.target.value)}
                  className="flex-1"
                />
                <Button className="px-6">
                  <Search className="h-4 w-4 mr-2" />
                  Tekshirish
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Achievements */}
          <div className="mb-16">
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Bizning yutuqlarimiz</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-6">
                    <Award className="h-12 w-12 text-primary mx-auto mb-4" />
                    <h3 className="font-heading font-semibold mb-2">{achievement.title}</h3>
                    <div className="text-2xl font-bold text-primary mb-1">{achievement.count}</div>
                    <Badge variant="secondary">{achievement.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certificates Gallery - A4 Format */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Sertifikatlar galereyasi</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {certificates.map((cert) => (
                <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                  {/* A4 Certificate Preview - maintaining 210:297 aspect ratio */}
                  <div className="relative aspect-[210/297] bg-gradient-to-br from-primary/5 to-accent/5">
                    <img
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.name} certificate`}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white">
                      <div className="text-sm font-medium mb-1">{cert.name}</div>
                      <div className="text-xs opacity-90">{cert.student}</div>
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-3">
                      <div>
                        <h3 className="font-semibold">{cert.name}</h3>
                        <p className="text-sm text-muted-foreground">{cert.student}</p>
                      </div>
                      <Badge variant="outline">{cert.grade}</Badge>
                    </div>
                    <div className="flex justify-between items-center text-sm text-muted-foreground mb-4">
                      <span>{cert.date}</span>
                      <Badge variant="secondary">{cert.type}</Badge>
                    </div>
                    <div className="flex gap-2">
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Eye className="h-4 w-4 mr-2" />
                        Ko'rish
                      </Button>
                      <Button size="sm" variant="outline" className="flex-1 bg-transparent">
                        <Download className="h-4 w-4 mr-2" />
                        Yuklab olish
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

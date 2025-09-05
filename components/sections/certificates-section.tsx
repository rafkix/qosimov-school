"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Eye, Award } from "lucide-react"
import { api } from "@/lib/api"

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState<any[]>([])
  const [achievements, setAchievements] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  // Pagination
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 12

  useEffect(() => {
    async function fetchData() {
      try {
        const [certs, achvs] = await Promise.all([api.getCertificates(), api.getActivities()])
        setCertificates(Array.isArray(certs) ? certs : [])
        setAchievements(Array.isArray(achvs) ? achvs : [])
      } catch (err) {
        console.error(err)
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi.")
        setCertificates([])
        setAchievements([])
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleOpenVerification = () => {
    window.open("https://sertifikat.uzbmb.uz/site/cert?type=1", "_blank")
  }

  // Pagination logic
  const totalPages = Math.ceil(certificates.length / itemsPerPage)
  const startIndex = (currentPage - 1) * itemsPerPage
  const currentCertificates = certificates.slice(startIndex, startIndex + itemsPerPage)

  if (loading) return <p className="text-center py-10">Yuklanmoqda...</p>
  if (error) return <p className="text-center py-10 text-red-500">{error}</p>

  return (
    <div className="min-h-screen bg-background">
      <main>
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
            <CardContent className="p-8 text-center">
              <h2 className="text-2xl font-heading font-bold mb-6">Sertifikat tekshirish</h2>
              <Button
                onClick={handleOpenVerification}
                className="px-6"
              >
                <Search className="h-4 w-4 mr-2" />
                Sertifikatni tekshirish
              </Button>
            </CardContent>
          </Card>

          {/* Certificates Gallery */}
          <div>
            <h2 className="text-3xl font-heading font-bold text-center mb-8">Sertifikatlar galereyasi</h2>
            {currentCertificates.length > 0 ? (
              <>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {currentCertificates.map((cert) => (
                    <Card key={cert.id} className="overflow-hidden hover:shadow-lg transition-shadow">
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

                {/* Pagination */}
                <div className="flex justify-center items-center gap-2 mt-8">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                  >
                    Oldingi
                  </Button>
                  {Array.from({ length: totalPages }, (_, i) => (
                    <Button
                      key={i}
                      size="sm"
                      variant={i + 1 === currentPage ? "default" : "outline"}
                      onClick={() => setCurrentPage(i + 1)}
                    >
                      {i + 1}
                    </Button>
                  ))}
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                  >
                    Keyingi
                  </Button>
                </div>
              </>
            ) : (
              <p className="text-center text-muted-foreground col-span-3">Sertifikatlar mavjud emas</p>
            )}
          </div>
        </div>
      </main>
    </div>
  )
}

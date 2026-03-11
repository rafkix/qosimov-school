"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Search, Download, Eye, Award, ExternalLink } from "lucide-react"
import { api } from "@/lib/api"

// Telegramdan olingan real ma'lumotlar asosida Demo ma'lumotlar
const DEMO_CERTIFICATES = [
  { id: 1, name: "Milliy Sertifikat", student: "Mirzarahimova Bahoroy", grade: "189 ball", date: "2026-02-13", type: "Ona tili", image: "/certificates.png" },
  { id: 2, name: "Milliy Sertifikat", student: "Mahmudov Asilbek", grade: "A", date: "2026-02-14", type: "Tarix", image: "/certificates.png" },
  { id: 3, name: "Milliy Sertifikat", student: "Hamidullayev N’ematulla", grade: "A", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 4, name: "Milliy Sertifikat", student: "Mahmudov Saidkamol", grade: "A", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 5, name: "Milliy Sertifikat", student: "G’anijonov Sohibjon", grade: "B+", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 6, name: "Milliy Sertifikat", student: "Obidova Gulmiraxon", grade: "B+", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 7, name: "Milliy Sertifikat", student: "G’ulomjonova Muxsimaxon", grade: "B+", date: "2026-02-15", type: "Biologiya", image: "/certificates.png" },
  { id: 8, name: "Milliy Sertifikat", student: "Axmadov Toliyorbek", grade: "B", date: "2026-02-14", type: "Tarix", image: "/certificates.png" },
  { id: 9, name: "Milliy Sertifikat", student: "Jo’rabekov Ozodbek", grade: "B", date: "2026-02-14", type: "Tarix", image: "/certificates.png" },
  { id: 10, name: "Milliy Sertifikat", student: "Mirzarahimova Bahoroy", grade: "B", date: "2026-02-14", type: "Tarix", image: "/certificates.png" },
  { id: 11, name: "Milliy Sertifikat", student: "Xoshimova Maftunaxon", grade: "B", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 12, name: "Milliy Sertifikat", student: "Bahromova Feruzabonu", grade: "B", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 13, name: "Milliy Sertifikat", student: "Akbarov Muhammadsiddiq", grade: "B", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 14, name: "Milliy Sertifikat", student: "Nosirov Behzodbek", grade: "B", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 15, name: "Milliy Sertifikat", student: "Raximova Gulshoda", grade: "B", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 16, name: "Milliy Sertifikat", student: "Qurbonova Diyorabonu", grade: "B", date: "2026-02-15", type: "Biologiya", image: "/certificates.png" },
  { id: 17, name: "Milliy Sertifikat", student: "Abdujalilov Javohir", grade: "C+", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
  { id: 18, name: "Milliy Sertifikat", student: "Erkinboyev Shohjahon", grade: "C+", date: "2026-02-14", type: "Biologiya", image: "/certificates.png" },
];

export default function CertificatesPage() {
  const [certificates, setCertificates] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 9

  useEffect(() => {
    async function fetchData() {
      try {
        const certs = await api.getCertificates()
        // Agar API bo'sh kelsa yoki xato bo'lsa demo ma'lumotlarni yuklaymiz
        setCertificates(Array.isArray(certs) && certs.length > 0 ? certs : DEMO_CERTIFICATES)
      } catch (err) {
        setCertificates(DEMO_CERTIFICATES)
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const handleOpenVerification = () => {
    window.open("https://sertifikat.uzbmb.uz/site/cert?type=1", "_blank")
  }

  const totalPages = Math.ceil(certificates.length / itemsPerPage)
  const currentCertificates = certificates.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-primary"></div>
    </div>
  )

  return (
    <div className="min-h-screen bg-[#F8FAFC]">
      <main className="container mx-auto px-4 py-20">
        
        {/* Hero Header */}
        <div className="text-center mb-20">
          <Badge variant="outline" className="mb-4 px-4 py-1 border-primary/30 text-primary bg-primary/5">
            Qosimov School Natijalari
          </Badge>
          <h1 className="text-4xl md:text-6xl font-black mb-6 text-slate-900 tracking-tight">
            Sertifikatlar <span className="text-primary">&</span> Yutuqlar
          </h1>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
            Bizning o'quvchilarimiz nafaqat bilim oladilar, balki davlat darajasidagi imtihonlarda yuqori cho'qqilarni zabt etadilar.
          </p>
        </div>

        {/* Verification Card */}
        <div className="max-w-4xl mx-auto mb-20">
          <div className="bg-white rounded-[32px] p-8 md:p-12 border border-slate-100 shadow-xl shadow-slate-200/50 flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full -mr-16 -mt-16" />
            <div className="relative z-10">
              <h2 className="text-2xl font-bold text-slate-900 mb-2">Rasmiy tekshirish</h2>
              <p className="text-slate-500">Sertifikatlarni UzBMB (DTM) bazasidan haqiqiyligini tekshiring.</p>
            </div>
            <Button
              onClick={handleOpenVerification}
              size="lg"
              className="rounded-2xl px-8 h-14 bg-slate-900 hover:bg-primary transition-all group"
            >
              <Search className="h-5 w-5 mr-2 group-hover:scale-110 transition-transform" />
              Tizimga o'tish
              <ExternalLink className="h-4 w-4 ml-2 opacity-50" />
            </Button>
          </div>
        </div>

        {/* Certificates Grid */}
        <div className="space-y-12">
          <div className="flex items-center justify-between">
            <h2 className="text-3xl font-bold text-slate-900">Galereya</h2>
            <div className="h-px flex-1 bg-slate-200 mx-8 hidden md:block" />
            <span className="text-slate-400 font-medium">{certificates.length} ta natija</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {currentCertificates.map((cert) => (
              <Card key={cert.id} className="group border-none shadow-none bg-transparent">
                <div className="relative aspect-[3/4] rounded-[24px] overflow-hidden bg-white border border-slate-200 shadow-sm group-hover:shadow-2xl group-hover:-translate-y-2 transition-all duration-500">
                  <img
                    src={cert.image || "/certificates.png"}
                    alt={cert.student}
                    className="w-full h-full object-cover p-2"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
                    <div className="flex gap-2 mb-4">
                       <Button size="icon" variant="secondary" className="rounded-xl"><Eye size={18} /></Button>
                       <Button size="icon" variant="secondary" className="rounded-xl"><Download size={18} /></Button>
                    </div>
                  </div>
                  
                  {/* Badge on Image */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-3 py-1 rounded-lg border border-slate-200 shadow-sm">
                    <span className="text-primary font-black text-sm">{cert.grade}</span>
                  </div>
                </div>

                <div className="mt-6 space-y-2 px-2">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-black text-primary uppercase tracking-widest">{cert.type}</span>
                    <span className="text-[10px] text-slate-400 font-medium">{cert.date}</span>
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-primary transition-colors line-clamp-1">
                    {cert.student}
                  </h3>
                </div>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center gap-3 pt-10">
              <Button
                variant="outline"
                className="rounded-xl border-slate-200"
                onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                disabled={currentPage === 1}
              >
                Oldingi
              </Button>
              <div className="flex gap-2">
                {Array.from({ length: totalPages }, (_, i) => (
                  <Button
                    key={i}
                    variant={i + 1 === currentPage ? "default" : "ghost"}
                    className={`w-10 h-10 rounded-xl ${i + 1 === currentPage ? "shadow-lg shadow-primary/20" : ""}`}
                    onClick={() => setCurrentPage(i + 1)}
                  >
                    {i + 1}
                  </Button>
                ))}
              </div>
              <Button
                variant="outline"
                className="rounded-xl border-slate-200"
                onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                disabled={currentPage === totalPages}
              >
                Keyingi
              </Button>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
} from "lucide-react"

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  category: string
  message: string
}

const contactInfo = [
  { icon: MapPin, title: "Manzil", details: ["123 Science Boulevard", "Ta’lim tumani", "Toshkent, O‘zbekiston 100000"] },
  { icon: Phone, title: "Telefon", details: ["+998 71 123 4567", "+998 90 123 4567 (Mobil)"] },
  { icon: Mail, title: "Email", details: ["info@biochemistry-academy.uz", "admissions@biochemistry-academy.uz"] },
  { icon: Clock, title: "Ish vaqti", details: ["Dushanba - Juma: 08:00 - 20:00", "Shanba: 09:00 - 18:00", "Yakshanba: 10:00 - 16:00"] },
]

const inquiryCategories = [
  { value: "general", label: "Umumiy so‘rov" },
  { value: "admission", label: "Qabul bo‘yicha ma’lumot" },
  { value: "courses", label: "Kurs tafsilotlari" },
  { value: "tutoring", label: "Shaxsiy repetitorlik" },
  { value: "certificates", label: "Sertifikatlarni tekshirish" },
  { value: "partnership", label: "Hamkorlik imkoniyatlari" },
  { value: "technical", label: "Texnik yordam" },
]

export function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    category: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const updateFormData = (field: keyof ContactForm, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await new Promise((resolve) => setTimeout(resolve, 2000))
      console.log("Contact form submitted:", formData)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", phone: "", subject: "", category: "", message: "" })
    } catch (error) {
      console.error("Contact form error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-10 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Biz bilan <span className="text-primary">bog‘laning</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kurslar, qabul yoki hamkorlik bo‘yicha savollaringiz bo‘lsa, jamoamiz bilan bog‘laning. Biz sizni ilmiy yo‘lingizda qo‘llab-quvvatlaymiz.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="font-heading font-bold text-2xl mb-6">Bog‘lanish ma’lumotlari</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <Card key={index} className="bg-white/80 dark:bg-gray-900/80 backdrop-blur">
                    <CardContent className="pt-6">
                      <div className="flex items-start space-x-4">
                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h4 className="font-semibold mb-2">{info.title}</h4>
                          <div className="space-y-1">
                            {info.details.map((detail, idx) => (
                              <p key={idx} className="text-sm text-muted-foreground">{detail}</p>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
            
            {/* Map Placeholder */}
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Bizning Manzil</CardTitle>
                <CardDescription>Toshkentdagi zamonaviy kampusimizga tashrif buyuring</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="w-full h-48 bg-muted rounded-lg flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-8 w-8 text-primary mx-auto mb-2" />
                    <p className="text-sm text-muted-foreground">Interaktiv xarita</p>
                    <p className="text-xs text-muted-foreground">123 Science Boulevard, Toshkent</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="bg-white/80 dark:bg-gray-900/80 backdrop-blur">
              <CardHeader>
                <CardTitle>Xabar yuboring</CardTitle>
                <CardDescription>Quyidagi formani to‘ldiring va biz 24 soat ichida javob beramiz.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {submitStatus === "success" && (
                  <Alert className="border-green-500 bg-green-50 dark:bg-green-900/30">
                    <CheckCircle className="h-4 w-4 text-green-500" />
                    <AlertDescription>
                      Xabaringiz uchun rahmat! Biz 24 soat ichida email va Telegram orqali javob beramiz.
                    </AlertDescription>
                  </Alert>
                )}

                {submitStatus === "error" && (
                  <Alert className="border-red-500 bg-red-50 dark:bg-red-900/30">
                    <AlertDescription>
                      Xabar yuborishda xatolik yuz berdi. Iltimos, qaytadan urinib ko‘ring yoki to‘g‘ridan-to‘g‘ri bog‘laning.
                    </AlertDescription>
                  </Alert>
                )}

                <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="col-span-1">
                    <Label htmlFor="name">Ismingiz</Label>
                    <Input id="name" placeholder="Ismingizni kiriting" value={formData.name} onChange={(e) => updateFormData("name", e.target.value)} required />
                  </div>

                  <div className="col-span-1">
                    <Label htmlFor="email">Email</Label>
                    <Input type="email" id="email" placeholder="Email manzilingiz" value={formData.email} onChange={(e) => updateFormData("email", e.target.value)} required />
                  </div>

                  <div className="col-span-1">
                    <Label htmlFor="phone">Telefon</Label>
                    <Input type="tel" id="phone" placeholder="+998 90 123 4567" value={formData.phone} onChange={(e) => updateFormData("phone", e.target.value)} />
                  </div>

                  <div className="col-span-1">
                    <Label htmlFor="subject">Mavzu</Label>
                    <Input id="subject" placeholder="Xabaringiz mavzusi" value={formData.subject} onChange={(e) => updateFormData("subject", e.target.value)} required />
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="category">Kategoriyasi</Label>
                    <Select value={formData.category} onValueChange={(value) => updateFormData("category", value)} required>
                      <SelectTrigger id="category">
                        <SelectValue placeholder="Tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        {inquiryCategories.map((cat) => (
                          <SelectItem key={cat.value} value={cat.value}>{cat.label}</SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="col-span-1 md:col-span-2">
                    <Label htmlFor="message">Xabar</Label>
                    <Textarea id="message" placeholder="Xabaringizni kiriting" value={formData.message} onChange={(e) => updateFormData("message", e.target.value)} required className="resize-none" />
                  </div>

                  <div className="col-span-1 md:col-span-2 flex justify-end">
                    <Button type="submit" disabled={isSubmitting} className="flex items-center gap-2">
                      <Send className="h-4 w-4" />
                      {isSubmitting ? "Yuborilmoqda..." : "Yuborish"}
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

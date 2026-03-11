'use client'

import type React from 'react'
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Alert, AlertDescription } from '@/components/ui/alert'
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
} from 'lucide-react'

interface ContactForm {
  name: string
  email: string
  phone: string
  subject: string
  category: string
  message: string
}

const contactInfo = [
  {
    icon: MapPin,
    title: 'Manzil',
    details: 'Toshkent sh., 123 Science Boulevard',
    sub: 'Ta’lim tumani',
  },
  {
    icon: Phone,
    title: 'Telefon',
    details: '+998 71 123 4567',
    sub: 'Du-Shan (08:00 - 20:00)',
  },
  {
    icon: Mail,
    title: 'Elektron pochta',
    details: 'info@enwis.uz',
    sub: '24/7 online yordam',
  },
]

const inquiryCategories = [
  { value: 'admission', label: 'Qabul bo‘yicha' },
  { value: 'courses', label: 'Kurslar haqida' },
  { value: 'partnership', label: 'Hamkorlik' },
  { value: 'technical', label: 'Texnik yordam' },
]

export function ContactSection() {
  const [formData, setFormData] = useState<ContactForm>({
    name: '',
    email: '',
    phone: '',
    subject: '',
    category: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-emerald-600 font-bold uppercase tracking-[0.2em] text-xs mb-3 block">
              Bog'lanish
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
              Sizga qanday <span className="text-emerald-600">yordam</span> bera olamiz?
            </h2>
            <p className="text-slate-500 text-lg leading-relaxed">
              Savollaringiz bormi? Biz bilan bog'laning va mutaxassislarimiz sizga qisqa
              vaqt ichida javob berishadi.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left: Info Cards */}
          <div className="lg:col-span-4 space-y-4">
            {contactInfo.map((info, idx) => (
              <motion.div
                key={idx}
                whileHover={{ x: 10 }}
                className="group p-6 rounded-3xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-xl hover:shadow-blue-500/5 transition-all duration-300"
              >
                <div className="flex items-center gap-5">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-lg shadow-blue-200 group-hover:scale-110 transition-transform">
                    <info.icon size={22} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                      {info.title}
                    </p>
                    <p className="text-slate-900 font-bold text-sm mt-0.5">
                      {info.details}
                    </p>
                    <p className="text-slate-500 text-xs mt-1">{info.sub}</p>
                  </div>
                </div>
              </motion.div>
            ))}

            <div className="mt-8 p-8 rounded-[32px] bg-emerald-900 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:rotate-12 transition-transform">
                <MessageCircle size={100} />
              </div>
              <h4 className="font-bold text-xl mb-2">Telegram orqali bog'lanish</h4>
              <p className="text-slate-400 text-sm mb-6">
                Tezkor javob olish uchun bizning botimizdan foydalaning.
              </p>
              <a href="https://t.me/qosimov_support" className="tracking-widest ">
                <Button
                  variant="secondary"
                  className="w-full rounded-2xl font-bold bg-white text-slate-900 hover:bg-emerald-50"
                >
                  Telegramni ochish
                  <ExternalLink size={14} className="ml-2" />
                </Button>
              </a>
            </div>
          </div>

          {/* Right: Modern Form */}
          <div className="lg:col-span-8">
            <Card className="border-none shadow-2xl shadow-slate-200/50 rounded-[40px] overflow-hidden p-2 bg-slate-50/30">
              <CardContent className="bg-white rounded-[36px] p-8 md:p-12">
                {status === 'success' ? (
                  <motion.div
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="text-2xl font-black text-slate-900 mb-2">
                      Xabar yuborildi!
                    </h3>
                    <p className="text-slate-500 mb-8">
                      Tez orada siz bilan bog'lanamiz.
                    </p>
                    <Button
                      onClick={() => setStatus('idle')}
                      variant="outline"
                      className="rounded-xl px-8"
                    >
                      Yana yozish
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label className="text-xs font-black uppercase text-slate-400 ml-1">
                          To'liq ism
                        </Label>
                        <Input
                          placeholder="Ali Valiyev"
                          className="h-14 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 transition-all"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-black uppercase text-slate-400 ml-1">
                          Email manzil
                        </Label>
                        <Input type="email" placeholder="example@mail.com" required />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-black uppercase text-slate-400 ml-1">
                          Telefon
                        </Label>
                        <Input
                          placeholder="+998 90 000 00 00"
                          className="h-14 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 transition-all"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label className="text-xs font-black uppercase text-slate-400 ml-1">
                          Mavzu turi
                        </Label>
                        <Select
                          onValueChange={(v) =>
                            setFormData({ ...formData, category: v })
                          }
                        >
                          <SelectTrigger className="h-14 rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white">
                            <SelectValue placeholder="Tanlang" />
                          </SelectTrigger>
                          <SelectContent className="rounded-2xl border-slate-100">
                            {inquiryCategories.map((cat) => (
                              <SelectItem
                                key={cat.value}
                                value={cat.value}
                                className="focus:bg-blue-50"
                              >
                                {cat.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label className="text-xs font-black uppercase text-slate-400 ml-1">
                        Sizning xabaringiz
                      </Label>
                      <Textarea
                        placeholder="Qanday savollaringiz bor?"
                        className="min-h-[150px] rounded-2xl border-slate-100 bg-slate-50/50 focus:bg-white focus:ring-4 focus:ring-emerald-500/5 transition-all resize-none p-4"
                        required
                      />
                    </div>

                    <Button
                      disabled={isSubmitting}
                      className="w-full md:w-auto h-16 px-12 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-black uppercase tracking-widest text-xs transition-all shadow-xl shadow-emerald-200"
                    >
                      {isSubmitting ? 'Yuborilmoqda...' : 'Xabarni Yuborish'}
                      <Send size={16} className="ml-3" />
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}

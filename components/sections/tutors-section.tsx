"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Play, GraduationCap, Users, ShieldCheck, ArrowRight } from "lucide-react"

const FOUNDER = {
  name: "Qobiljon Qosimov",
  role: "Qosimov School Asoschisi",
  subject: "Biologiya va Kimyo Eksperti",
  bio: "Bizning maqsadimiz — quruq yodlash emas, balki fanni mantiqiy tushunish orqali natijaga erishishdir. 15 yillik tajribamiz har bir darsimizga poydevor bo'lib xizmat qiladi.",
  image: "/founder.png",
}

export function TutorsSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")

  return (
    <section className="py-24 bg-white relative">
      <div className="container mx-auto px-6 lg:px-24">
        
        {/* FOUNDER SECTION - Toza va Ishonchli */}
        <div className="relative mb-24 p-1 rounded-[40px] bg-gradient-to-b from-slate-100 to-transparent">
          <div className="bg-white rounded-[38px] p-8 md:p-16 flex flex-col lg:flex-row items-center gap-16 shadow-sm border border-slate-100">
            
            {/* Portrait Side */}
            <div className="relative w-full lg:w-1/3 aspect-[3/4] max-w-[400px]">
              <div className="absolute inset-0 bg-slate-50 rounded-[32px] -rotate-3" />
              <div className="relative h-full w-full rounded-[32px] overflow-hidden shadow-2xl shadow-slate-200">
                <img 
                  src={FOUNDER.image} 
                  alt={FOUNDER.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Trust Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4">
                <div className="w-12 h-12 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                  <ShieldCheck size={28} />
                </div>
                <div>
                  <p className="text-slate-900 font-black leading-none">15 Yillik</p>
                  <p className="text-slate-500 text-xs font-bold uppercase tracking-widest">Tajriba</p>
                </div>
              </div>
            </div>

            {/* Content Side */}
            <div className="flex-1 space-y-8">
              <Badge variant="outline" className="border-emerald-200 text-emerald-700 bg-emerald-50 px-4 py-1.5 rounded-full font-bold uppercase tracking-widest text-[10px]">
                Maktab Asoschisi
              </Badge>
              
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 tracking-tight">
                {FOUNDER.name}
              </h2>
              
              <p className="text-lg md:text-xl text-slate-500 leading-relaxed font-medium max-w-2xl">
                {FOUNDER.bio}
              </p>

              <div className="flex flex-wrap gap-8 py-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                    <Users size={20} />
                  </div>
                  <span className="text-slate-900 font-bold">10,000+ O'quvchilar</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-full flex items-center justify-center text-slate-400">
                    <GraduationCap size={20} />
                  </div>
                  <span className="text-slate-900 font-bold">DTM/CEFR natijalar</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button className="h-14 px-8 rounded-2xl bg-slate-900 hover:bg-emerald-600 text-white font-bold transition-all group">
                  Kurslar bilan tanishish
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="ghost" className="h-14 px-8 rounded-2xl text-slate-600 font-bold hover:bg-slate-50">
                  <Play className="mr-2 fill-current" size={16} /> Tanishtiruv videosi
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* TEAM SECTION HEADER */}
        <div className="text-center mb-16 space-y-4">
          <h3 className="text-3xl md:text-5xl font-black text-slate-900">
            Professional <span className="text-emerald-600">Ustozlar</span>
          </h3>
          <p className="text-slate-500 font-medium max-w-xl mx-auto">
            Har bir ustozimiz o'z yo'nalishi bo'yicha kuchli tajribaga va yuqori natijali o'quvchilarga ega.
          </p>
        </div>

        {/* TEACHERS LIST - Toza kartalar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {[
            { name: "Zokirjon Ustoz", subject: "Tarix", exp: "8 yillik", img: "/t1.png" },
            { name: "Madina Ustoz", subject: "Ona tili", exp: "10 yillik", img: "/t2.png" },
            { name: "Mr. Jasurbek", subject: "Ingliz tili", exp: "5 yillik", img: "/t3.png" }
          ].map((t, i) => (
            <Card key={i} className="group border-none shadow-none bg-white hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500 rounded-[32px] border border-slate-50">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="aspect-square rounded-2xl overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-700">
                    <img src={t.img} alt={t.name} className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Badge variant="secondary" className="bg-slate-50 text-slate-500 border-none px-3 font-bold uppercase text-[9px] tracking-widest">
                    {t.subject}
                  </Badge>
                  <h4 className="text-2xl font-black text-slate-900 group-hover:text-emerald-600 transition-colors">
                    {t.name}
                  </h4>
                  <p className="text-slate-500 text-sm font-medium">
                    {t.exp} pedagogik faoliyat va yuzlab muvaffaqiyatli natijalar.
                  </p>
                </div>
                <div className="mt-8 pt-6 border-t border-slate-50 flex justify-between items-center">
                   <span className="text-xs font-black text-slate-400 uppercase tracking-tighter cursor-pointer hover:text-slate-900 transition-colors">Profilni ko'rish</span>
                   <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-emerald-600 group-hover:text-white transition-all">
                     <ArrowRight size={16} />
                   </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
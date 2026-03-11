"use client"

import { motion } from "framer-motion"
import { GraduationCap, Users, FlaskConical, Award, BookOpen, ArrowUpRight } from "lucide-react"

const features = [
  {
    icon: GraduationCap,
    title: "Tajribali o'qituvchilar",
    description: "Biologiya va kimyo sohasida 10 yillik tajribaga ega, o'z fanining haqiqiy ustalaridan bilim oling.",
  },
  {
    icon: Users,
    title: "Bepul qo'shimcha darslar",
    description: "Mavzuni tushunishda qiynalsangiz, yordamchi o'qituvchilarimiz sizga individual yordam berishadi.",
  },
  {
    icon: FlaskConical,
    title: "Zamonaviy laboratoriya",
    description: "Nazariy bilimlarni maxsus jihozlangan laboratoriyada real tajribalar bilan mustahkamlang.",
  },
  {
    icon: Award,
    title: "Olimpiada tayyorlov",
    description: "Nufuzli olimpiadalarda g'olib bo'lishingiz uchun bizda maxsus bepul tayyorgarlik tizimi mavjud.",
  },
  {
    icon: BookOpen,
    title: "Maxsus o'quv zonalari",
    description: "Darsdan tashqari vaqtda sokin va qulay muhitda mustaqil shug'ullanish imkoniyati.",
  },
]

export default function WhyChooseUs() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Yuqori qism (Header) - Juda toza uslubda */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4"
          >
            Nega bizni tanlashadi?
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tighter"
          >
            Kelajak mutaxassislari uchun <br />
            <span className="text-slate-400">eng qulay muhit.</span>
          </motion.h2>
        </div>

        {/* Grid - Ortiqcha ranglarsiz, oq va ochiq kulrang */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Ikonka - Faqat yashil rang urg'u uchun */}
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500">
                  <feature.icon size={32} strokeWidth={1.5} />
                </div>
              </div>

              {/* Matn qismi */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium lg:text-lg">
                  {feature.description}
                </p>
              </div>

              {/* Tagidagi mayin chiziq */}
              <div className="absolute -bottom-8 left-0 w-full h-px bg-slate-100 group-hover:bg-emerald-200 transition-colors" />
            </motion.div>
          ))}

          {/* Oxirgi blok - Harakatga chaqiruv (CTA) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center border-2 border-dashed border-slate-200 rounded-[2.5rem] p-10 hover:border-emerald-500/50 transition-colors group cursor-pointer"
          >
            <p className="text-xl font-bold text-slate-900 mb-2">Siz ham jamoaga qo'shiling</p>
            <p className="text-slate-400 font-medium mb-6">Imtihon topshirib o'z bilimingizni sinab ko'ring.</p>
            <div className="flex items-center gap-2 text-emerald-600 font-black text-sm uppercase tracking-wider group-hover:gap-4 transition-all">
              Ro'yxatdan o'tish <ArrowUpRight size={20} />
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  )
}
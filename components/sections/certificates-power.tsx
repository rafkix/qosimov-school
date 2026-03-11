"use client"

import { motion } from "framer-motion"
import { Award, GraduationCap, CheckCircle, ArrowUpRight } from "lucide-react"

const certificateFeatures = [
  {
    icon: Award,
    title: "Fanlar bo'yicha imtiyoz",
    description: "Biologiya, kimyo va ona tili fanlaridan milliy sertifikatlar orqali universitetga kirishda maksimal ballni qo'lga kiriting.",
    logos: ['/bio-svgrepo-com.svg', '/chem-svgrepo-com.svg', '/uzt-svgrepo-com.svg']
  },
  {
    icon: GraduationCap,
    title: "OTMlar tomonidan tan olingan",
    description: "O'zbekistondagi nufuzli tibbiyot institutlari va davlat universitetlariga imtiyozli qabul qilinish imkoniyati.",
    logos: [
      "https://edu.uzbmb.uz/uploads/edu_logo/1699244995.539.png",
      "https://edu.uzbmb.uz/uploads/edu_logo/1698997004.8841.png",
      "https://edu.uzbmb.uz/uploads/edu_logo/1699245943.7734.png"
    ]
  }
]

export default function CertificatesPower() {
  return (
    <section className="py-20 lg:py-32 bg-white border-t border-slate-50">
      <div className="container mx-auto px-6 lg:px-20">
        
        {/* Yuqori qism (Header) - WhyChooseUs bilan 1:1 bir xil */}
        <div className="max-w-3xl mb-16 lg:mb-24">
          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-emerald-600 font-bold tracking-widest text-xs uppercase mb-4 flex items-center gap-2"
          >
            <CheckCircle size={14} /> Imtiyozli natijalar
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tighter"
          >
            Milliy sertifikatlar bilan <br />
            <span className="text-slate-400">maqsad sari qisqa yo'l.</span>
          </motion.h2>
        </div>

        {/* Grid Strukturasi - WhyChooseUs kabi 3 ustunli format (2 ta ma'lumot + 1 ta rasm/CTA) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
          
          {certificateFeatures.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              {/* Ikonka - WhyChooseUs bilan bir xil */}
              <div className="mb-8 relative">
                <div className="w-16 h-16 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-sm">
                  <item.icon size={32} strokeWidth={1.5} />
                </div>
              </div>

              {/* Matn qismi */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 tracking-tight group-hover:text-emerald-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-500 leading-relaxed font-medium lg:text-lg">
                  {item.description}
                </p>

                {/* Logotiplar qatori */}
                <div className="flex flex-wrap gap-4 pt-4 grayscale group-hover:grayscale-0 transition-all opacity-60 group-hover:opacity-100">
                  {item.logos.map((logo, i) => (
                    <img key={i} src={logo} alt="partner" className="h-8 w-auto object-contain" />
                  ))}
                  {index === 1 && (
                    <span className="text-[10px] font-bold text-slate-400 flex items-center">
                      +10 OTM
                    </span>
                  )}
                </div>
              </div>

              {/* Tagidagi mayin chiziq */}
              <div className="absolute -bottom-8 left-0 w-full h-px bg-slate-100 group-hover:bg-emerald-200 transition-colors" />
            </motion.div>
          ))}

          {/* Rasm bloki (WhyChooseUs dagi CTA card o'rniga vizual rasm) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative h-full min-h-[300px] rounded-[2.5rem] overflow-hidden border-2 border-dashed border-slate-200 p-2 group hover:border-emerald-500/50 transition-colors"
          >
             <div className="relative h-full w-full rounded-[2rem] overflow-hidden shadow-lg group-hover:shadow-emerald-100 transition-all">
                <img 
                  src="/certificates.png" 
                  alt="Sertifikat" 
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-6 left-6 right-6 opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all">
                  <p className="text-white text-sm font-bold flex items-center gap-2">
                    Namunani ko'rish <ArrowUpRight size={16} />
                  </p>
                </div>
             </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
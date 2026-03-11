"use client"

import React from "react"
import Link from "next/link"
import { 
  FlaskConical, 
  Send, 
  Instagram, 
  Youtube, 
  Facebook, 
  Phone, 
  MapPin, 
  Mail,
  ArrowRight
} from "lucide-react"

const footerLinks = {
  academy: [
    { name: "Biz haqimizda", href: "/about" },
    { name: "O'qituvchilar", href: "/tutors" },
    { name: "Yutuqlarimiz", href: "/achievements" },
    { name: "Galereya", href: "/gallery" },
  ],
  courses: [
    { name: "Biologiya", href: "/courses/biology" },
    { name: "Kimyo", href: "/courses/chemistry" },
    { name: "IELTS & Science", href: "/courses/ielts" },
    { name: "Milliy sertifikat", href: "/courses/certificate" },
  ],
  support: [
    { name: "Bog'lanish", href: "/contact" },
    { name: "Savol-javob", href: "/faq" },
    { name: "Qabul 2026", href: "/admission" },
  ]
}

export function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 pt-20 pb-8">
      <div className="container mx-auto px-6 lg:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20">
          
          {/* 1. Brend va Aloqa */}
          <div className="lg:col-span-4 space-y-8">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-11 h-11 bg-emerald-600 rounded-2xl flex items-center justify-center transition-transform group-hover:rotate-6">
                <FlaskConical className="h-6 w-6 text-white" />
              </div>
              <span className="font-black text-2xl tracking-tighter text-slate-900">
                Qosimov <span className="text-emerald-600">School</span>
              </span>
            </Link>
            
            <p className="text-slate-500 text-sm leading-relaxed max-w-sm">
              Kelajak olimlarini tayyorlovchi zamonaviy ta'lim maskani. Biz bilan orzularingizga bir qadam yaqinlashing.
            </p>

            <div className="space-y-4">
              <a href="tel:+998916892646" className="flex items-center gap-3 text-sm text-slate-600 hover:text-emerald-600 transition-colors">
                <Phone size={16} className="text-emerald-600" />
                +998 (91) 689 26 46
              </a>
              <div className="flex items-start gap-3 text-sm text-slate-600">
                <MapPin size={16} className="text-emerald-600 shrink-0" />
                <span>Farg'ona v, Qo'shtepa t, Qorajiyda sh.</span>
              </div>
            </div>
          </div>

          {/* 2. Linklar Grid */}
          <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Akademiya</h4>
              <ul className="space-y-3">
                {footerLinks.academy.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Kurslar</h4>
              <ul className="space-y-3">
                {footerLinks.courses.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-6">
              <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Yordam</h4>
              <ul className="space-y-3">
                {footerLinks.support.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-[13px] text-slate-600 hover:text-emerald-600 transition-colors font-medium">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* 3. Ijtimoiy tarmoqlar (Kichik karta ko'rinishida) */}
          <div className="lg:col-span-3 space-y-6">
            <h4 className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 text-center lg:text-left">Bizni kuzating</h4>
            <div className="flex lg:justify-start justify-center gap-3">
              {[
                { Icon: Send, color: "hover:bg-[#24A1DE]", href: "https://t.me/QosimovSchool" },
                { Icon: Instagram, color: "hover:bg-[#E4405F]", href: "https://www.instagram.com/qosimov.school/" },
                { Icon: Youtube, color: "hover:bg-[#FF0000]", href: "https://www.youtube.com/@Qosimovschool" },
                { Icon: Facebook, color: "hover:bg-[#1877F2]", href: "https://www.facebook.com/profile.php" }
              ].map((item, i) => (
                <Link 
                  key={i} 
                  href={item.href} 
                  target="_blank"
                  className={`w-10 h-10 rounded-xl bg-slate-50 flex items-center justify-center text-slate-400 transition-all duration-300 ${item.color} hover:text-white hover:-translate-y-1`}
                >
                  <item.Icon size={18} strokeWidth={2} />
                </Link>
              ))}
            </div>
            <div className="p-5 rounded-2xl bg-emerald-50 border border-emerald-100 mt-4 group">
              <p className="text-[11px] text-emerald-800 font-bold leading-tight mb-2">Yangi darslardan xabardormisiz?</p>
              <Link href="/admission" className="text-[10px] text-emerald-600 font-black uppercase tracking-widest flex items-center gap-2">
                Ro'yxatdan o'tish <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Pastki qism */}
        <div className="pt-8 border-t border-slate-50 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-[11px] text-slate-400 font-bold uppercase tracking-widest">
            © {new Date().getFullYear()} Qosimov School. Bilim bilan kelajak sari.
          </p>
          <div className="flex gap-8">
            <Link href="#" className="text-[11px] text-slate-400 hover:text-slate-900 transition-colors uppercase font-bold tracking-tighter">Maxfiylik</Link>
            <Link href="#" className="text-[11px] text-slate-400 hover:text-slate-900 transition-colors uppercase font-bold tracking-tighter">Shartlar</Link>
          </div>
        </div>

      </div>
    </footer>
  )
}
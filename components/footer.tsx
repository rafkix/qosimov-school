"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
  Phone,
  MapPin,
  FlaskConical,
  ArrowRight,
} from "lucide-react"

const footerLinks = {
  academy: [
    { name: "Biz haqimizda", href: "/about" },
    { name: "Missiyamiz", href: "/about" },
    { name: "O‘qituvchilar", href: "/tutors" },
  ],
  programs: [
    { name: "Biologiya kurslari", href: "/courses" },
    { name: "Kimyo kurslari", href: "/courses" },
    { name: "Kengaytirilgan dasturlar", href: "/courses" },
    { name: "Sertifikatlar", href: "/certificates" },
  ],
  services: [
    { name: "Shaxsiy repetitorlik", href: "/tutors" },
    { name: "Imtihonlarga tayyorlash", href: "/courses" },
    { name: "Tadqiqot qo‘llab-quvvatlash", href: "/contact" },
  ],
  support: [
    { name: "Biz bilan bog‘lanish", href: "/contact" },
    { name: "Qabul", href: "/admission" },
    { name: "Talaba portali", href: "/student-portal" },
    { name: "Yordam markazi", href: "/help-center" },
  ],
}

const socialLinks = [
  { name: "Facebook", icon: Facebook, href: "#" },
  { name: "Twitter", icon: Twitter, href: "#" },
  { name: "Instagram", icon: Instagram, href: "#" },
  { name: "LinkedIn", icon: Linkedin, href: "#" },
  { name: "YouTube", icon: Youtube, href: "#" },
]

export function Footer() {
  return (
    <footer className="bg-background border-t">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Asosiy Footer Tarkibi */}
        <div className="py-16">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Akademiya Ma’lumotlari */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
                  <FlaskConical className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-heading font-black text-xl text-primary">BioKimyo</h3>
                  <p className="text-xs text-muted-foreground">Akademiya</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Kelajak olimlarini amaliy o‘qitish va biologiya hamda kimyo ta’limida mutaxassislar tomonidan yo‘naltirish orqali rivojlantirish.
              </p>
              <div className="space-y-3 text-sm">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">123 Science Boulevard, Toshkent, O‘zbekiston</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">+998 71 123 4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                  <span className="text-muted-foreground">info@biochemistry-academy.uz</span>
                </div>
              </div>
            </div>

            {/* Tezkor Havolalar */}
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-8 lg:col-span-2">
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Akademiya</h4>
                <ul className="space-y-3">
                  {footerLinks.academy.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Dasturlar</h4>
                <ul className="space-y-3">
                  {footerLinks.programs.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4 className="font-heading font-bold text-foreground mb-4">Xizmatlar</h4>
                <ul className="space-y-3">
                  {footerLinks.services.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Yangiliklar Obunasi */}
            <div className="lg:col-span-1">
              <h4 className="font-heading font-bold text-foreground mb-4">Yangiliklardan xabardor bo‘ling</h4>
              <p className="text-muted-foreground text-sm mb-4">
                Kurslar, tadbirlar va ilmiy kashfiyotlar bo‘yicha yangiliklar uchun bizning yangiliklar xabarnomasiga obuna bo‘ling.
              </p>
              <div className="space-y-3">
                <div className="flex space-x-2">
                  <Input placeholder="Email manzilingizni kiriting" className="flex-1" />
                  <Button size="sm">
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-muted-foreground">
                  Obuna bo‘lish orqali siz Bizning Maxfiylik Siyosati va Foydalanish Shartlariga rozilik bildirasiz.
                </p>
              </div>

              {/* Ijtimoiy Tarmoqlar */}
              <div className="mt-8">
                <h5 className="font-semibold text-foreground mb-4">Bizni kuzating</h5>
                <div className="flex space-x-3">
                  {socialLinks.map((social) => (
                    <Button key={social.name} variant="outline" size="sm" asChild>
                      <a href={social.href} aria-label={social.name}>
                        <social.icon className="h-4 w-4" />
                      </a>
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <Separator />

        {/* Footer Pastki Qismi */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-muted-foreground">© 2024 BioKimyo Akademiyasi. Barcha huquqlar himoyalangan.</div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Maxfiylik Siyosati
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Foydalanish Shartlari
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                Cookie Siyosati
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

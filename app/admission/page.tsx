"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  Sparkles, 
  User2, 
  GraduationCap, 
  BookOpen, 
  ShieldCheck,
  Phone,
  Mail,
  Calendar,
  ChevronRight
} from "lucide-react"
import { cn } from "@/lib/utils"

// --- TYPES ---
type Step = 1 | 2 | 3 | 4

const steps = [
  { id: 1, title: "Shaxsiy", icon: User2 },
  { id: 2, title: "Ta'lim", icon: GraduationCap },
  { id: 3, title: "Kurslar", icon: BookOpen },
  { id: 4, title: "Tasdiqlash", icon: ShieldCheck },
]

const courses = [
  { id: "bio", name: "Mukammal Biologiya", desc: "DTM va Olimpiada uchun", price: "450k", color: "bg-emerald-500" },
  { id: "chem", name: "Organik Kimyo", desc: "Noldan professional darajagacha", price: "450k", color: "bg-blue-500" },
  { id: "prep", name: "Meditsina Prep", desc: "Tibbiyot oliygohlari uchun maxsus", price: "600k", color: "bg-purple-500" },
  { id: "ielts", name: "Academic English", desc: "CEFR va IELTS darajalari", price: "400k", color: "bg-amber-500" },
]

export default function AdmissionPage() {
  const [step, setStep] = useState<Step>(1)
  const [loading, setLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [selectedCourses, setSelectedCourses] = useState<string[]>([])

  // Progress hisoblash
  const progress = (step / steps.length) * 100

  const handleNext = () => setStep((s) => Math.min(s + 1, 4) as Step)
  const handlePrev = () => setStep((s) => Math.max(s - 1, 1) as Step)

  const handleSubmit = async () => {
    setLoading(true)
    await new Promise(r => setTimeout(r, 2000)) // Simulyatsiya
    setIsSuccess(true)
    setLoading(false)
  }

  if (isSuccess) return <SuccessState />

  return (
    <main className="min-h-screen bg-[#F8FAFC] pb-20">
      {/* 1. Yuqori qism (Header Background) */}
      <div className="h-[300px] w-full bg-slate-900 relative overflow-hidden flex items-center justify-center text-center px-4">
        <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />
        <div className="relative z-10 space-y-4 pt-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge className="bg-emerald-500/20 text-emerald-400 border-emerald-500/30 px-4 py-1 rounded-full mb-4">
              Qabul 2026 Ochiq
            </Badge>
            <h1 className="text-4xl md:text-5xl font-black text-white tracking-tight">
              Keling, tanishib olamiz!
            </h1>
            <p className="text-slate-400 text-lg max-w-lg mx-auto mt-2">
              Qosimov School akademiyasiga a'zo bo'lish uchun qisqa anketani to'ldiring.
            </p>
          </motion.div>
        </div>
      </div>

      <div className="container max-w-5xl mx-auto -mt-16 px-4 relative z-20 mt-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* 2. Chap tomon: Step Indikatorlari (Desktop uchun) */}
          <div className="lg:col-span-4 space-y-4 hidden lg:block">
            <div className="bg-white rounded-[32px] p-8 shadow-sm border border-slate-100 sticky top-32">
              <h3 className="font-bold text-slate-900 mb-8 flex items-center gap-2">
                <Sparkles size={18} className="text-emerald-500" />
                Ro'yxatdan o'tish
              </h3>
              <div className="space-y-6">
                {steps.map((s) => (
                  <div key={s.id} className="flex items-center gap-4 group">
                    <div className={cn(
                      "w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300",
                      step === s.id ? "bg-emerald-600 text-white shadow-lg shadow-emerald-200" : 
                      step > s.id ? "bg-emerald-100 text-emerald-600" : "bg-slate-50 text-slate-400"
                    )}>
                      {step > s.id ? <CheckCircle2 size={20} /> : <s.icon size={18} />}
                    </div>
                    <div className="flex flex-col">
                      <span className={cn("text-xs font-bold uppercase tracking-widest", step === s.id ? "text-emerald-600" : "text-slate-400")}>
                        Bosqich 0{s.id}
                      </span>
                      <span className={cn("font-bold text-sm", step === s.id ? "text-slate-900" : "text-slate-400")}>
                        {s.title}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-top border-slate-100 italic text-[11px] text-slate-400 text-center">
                Ma'lumotlaringiz xavfsizligi kafolatlanadi.
              </div>
            </div>
          </div>

          {/* 3. O'ng tomon: Asosiy Forma */}
          <div className="lg:col-span-8">
            <div className="bg-white rounded-[32px] shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden min-h-[500px] flex flex-col">
              {/* Progress Bar (Mobile & Desktop) */}
              <div className="h-1.5 w-full bg-slate-50">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${progress}%` }}
                  className="h-full bg-emerald-600"
                />
              </div>

              <div className="p-8 md:p-12 flex-grow">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                  >
                    {step === 1 && <PersonalInfo />}
                    {step === 2 && <EducationInfo />}
                    {step === 3 && <CourseSelection selected={selectedCourses} setSelected={setSelectedCourses} />}
                    {step === 4 && <ReviewSection courses={selectedCourses} />}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Buttons */}
              <div className="p-8 border-t border-slate-50 bg-slate-50/50 flex items-center justify-between">
                <Button 
                  variant="ghost" 
                  onClick={handlePrev} 
                  disabled={step === 1}
                  className="rounded-2xl px-6 font-bold text-slate-500"
                >
                  <ArrowLeft className="mr-2 w-4 h-4" /> Orqaga
                </Button>

                {step < 4 ? (
                  <Button 
                    onClick={handleNext}
                    className="bg-slate-900 hover:bg-emerald-600 text-white rounded-2xl px-8 py-6 font-bold transition-all shadow-lg"
                  >
                    Davom etish <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                ) : (
                  <Button 
                    onClick={handleSubmit}
                    disabled={loading}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl px-8 py-6 font-bold transition-all shadow-lg shadow-emerald-200"
                  >
                    {loading ? "Yuborilmoqda..." : "Arizani Tasdiqlash"}
                  </Button>
                )}
              </div>
            </div>
          </div>

        </div>
      </div>
    </main>
  )
}

// --- SUB-COMPONENTS ---

function PersonalInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-slate-900">Shaxsiy ma'lumotlar</h2>
        <p className="text-slate-500">Siz bilan bog'lanishimiz uchun kerakli ma'lumotlar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label className="font-bold ml-1 flex items-center gap-2"><User2 size={14} /> Ism</Label>
          <Input placeholder="Ali" className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500 transition-all" />
        </div>
        <div className="space-y-2">
          <Label className="font-bold ml-1 flex items-center gap-2"><User2 size={14} /> Familiya</Label>
          <Input placeholder="Valiyev" className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500 transition-all" />
        </div>
        <div className="space-y-2">
          <Label className="font-bold ml-1 flex items-center gap-2"><Phone size={14} /> Telefon raqam</Label>
          <Input placeholder="+998 90 123 45 67" className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500 transition-all" />
        </div>
        <div className="space-y-2">
          <Label className="font-bold ml-1 flex items-center gap-2"><Calendar size={14} /> Tug'ilgan sana</Label>
          <Input type="date" className="h-14 rounded-2xl bg-slate-50 border-transparent focus:bg-white focus:border-emerald-500 transition-all" />
        </div>
      </div>
    </div>
  )
}

function EducationInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-slate-900">Ta'lim tarixi</h2>
        <p className="text-slate-500">Sizga mos guruhni tanlashimizga yordam beradi.</p>
      </div>
      <div className="space-y-6">
        <div className="space-y-2">
          <Label className="font-bold ml-1">Hozirgi ta'lim darajangiz</Label>
          <Select>
            <SelectTrigger className="h-14 rounded-2xl bg-slate-50 border-transparent">
              <SelectValue placeholder="Tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="7-9">7-9-sinf o'quvchisi</SelectItem>
              <SelectItem value="10-11">10-11-sinf o'quvchisi</SelectItem>
              <SelectItem value="graduated">Maktabni tamomlagan (Repetitor)</SelectItem>
              <SelectItem value="uni">Universitet talabasi</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label className="font-bold ml-1">Maqsadingiz haqida qisqacha</Label>
          <Textarea placeholder="Qaysi yo'nalishga qiziqasiz? (Masalan: Tibbiyot)" className="rounded-2xl bg-slate-50 border-transparent min-h-[150px]" />
        </div>
      </div>
    </div>
  )
}

function CourseSelection({ selected, setSelected }: any) {
  const toggle = (id: string) => {
    setSelected(selected.includes(id) ? selected.filter((i:any) => i !== id) : [...selected, id])
  }

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-slate-900">Kursni tanlang</h2>
        <p className="text-slate-500">Akademiyamizdagi eng sara yo'nalishlar.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {courses.map((c) => (
          <div 
            key={c.id} 
            onClick={() => toggle(c.id)}
            className={cn(
              "p-6 rounded-[24px] border-2 cursor-pointer transition-all relative group",
              selected.includes(c.id) ? "border-emerald-600 bg-emerald-50/30" : "border-slate-100 hover:border-emerald-200 bg-white"
            )}
          >
            <div className={cn("w-2 h-10 absolute left-0 top-1/2 -translate-y-1/2 rounded-r-full transition-all", 
              selected.includes(c.id) ? c.color : "bg-slate-200 group-hover:bg-slate-300"
            )} />
            <div className="flex justify-between items-start mb-2">
              <h4 className="font-black text-slate-900">{c.name}</h4>
              <Checkbox checked={selected.includes(c.id)} className="rounded-full border-slate-300 data-[state=checked]:bg-emerald-600" />
            </div>
            <p className="text-xs text-slate-500 mb-4">{c.desc}</p>
            <div className="flex items-center justify-between mt-auto">
              <span className="text-sm font-bold text-slate-900">{c.price} <span className="text-[10px] text-slate-400 font-normal">/oy</span></span>
              <div className="text-[10px] bg-slate-100 px-2 py-1 rounded-md font-bold uppercase tracking-tighter">Mavjud</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ReviewSection({ courses: selectedIds }: { courses: string[] }) {
  const selectedList = courses.filter(c => selectedIds.includes(c.id))

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-black text-slate-900">Yakuniy ko'rib chiqish</h2>
        <p className="text-slate-500">Ma'lumotlar to'g'riligini tasdiqlang.</p>
      </div>
      <div className="space-y-4">
        <div className="bg-slate-50 rounded-3xl p-6 border border-slate-100">
           <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center text-emerald-600 shadow-sm border border-emerald-50">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs font-bold text-slate-400 uppercase tracking-widest">A'zolik shartnomasi</p>
                <p className="text-sm font-bold text-slate-900">Qosimov School Talabasi</p>
              </div>
           </div>
           <div className="space-y-3">
              {selectedList.length > 0 ? (
                selectedList.map(c => (
                  <div key={c.id} className="flex items-center justify-between text-sm py-2 border-b border-slate-200/50 last:border-0">
                    <span className="text-slate-500">{c.name}</span>
                    <span className="font-bold text-slate-900">{c.price}</span>
                  </div>
                ))
              ) : <p className="text-sm text-rose-500 font-bold italic">Kurs tanlanmagan!</p>}
           </div>
        </div>
        <div className="flex items-start gap-3 p-4">
          <Checkbox id="confirm" className="mt-1" />
          <Label htmlFor="confirm" className="text-xs text-slate-500 leading-relaxed cursor-pointer">
            Men berilgan ma'lumotlarning to'g'riligini tasdiqlayman va akademiya ichki tartib-qoidalariga rioya qilishga roziman.
          </Label>
        </div>
      </div>
    </div>
  )
}

function SuccessState() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }} 
        animate={{ opacity: 1, scale: 1 }}
        className="text-center max-w-md"
      >
        <div className="w-24 h-24 bg-emerald-100 text-emerald-600 rounded-[32px] flex items-center justify-center mx-auto mb-8 shadow-xl shadow-emerald-100">
          <CheckCircle2 size={48} />
        </div>
        <h2 className="text-4xl font-black text-slate-900 mb-4 tracking-tight">Tabriklaymiz!</h2>
        <p className="text-slate-500 mb-8 leading-relaxed">
          Arizangiz qabul qilindi. Tez orada operatorlarimiz sizga qo'ng'iroq qilishadi va guruhga qo'shishadi.
        </p>
        <Button 
          onClick={() => window.location.href = "/"}
          className="w-full bg-slate-900 hover:bg-emerald-600 text-white py-8 rounded-[24px] font-black uppercase tracking-widest text-xs transition-all"
        >
          Bosh sahifaga qaytish <ChevronRight className="ml-2 w-4 h-4" />
        </Button>
      </motion.div>
    </main>
  )
}
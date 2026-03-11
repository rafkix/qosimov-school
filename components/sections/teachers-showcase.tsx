'use client'

import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Play, Pause, Award, GraduationCap, Minus, ChevronRight } from 'lucide-react'

const teachers = [
  {
    id: 1,
    name: 'Sardor Erkinov',
    ielts: '8.5',
    specialty: 'IELTS Instruktor',
    experience: '6+ yil',
    students: '2000+',
    image:
      'https://app.cambridgeonline.uz/storage/site/e52fa4ab-25a6-457e-85ee-f06330e647e3_thumb.png',
    video:
      'https://app.cambridgeonline.uz/storage/site/bd4cba71-5b6e-4fea-b927-045a01566ca5.mp4',
    bio: "2023-yilning 'Eng yaxshi IELTS instuktori' mukofoti sovrindori. Asosiy maqsadim — o'quvchilarni qisqa vaqt ichida Writing va Reading ko'nikmalarini maksimal darajaga olib chiqish.",
  },
  {
    id: 2,
    name: 'Jahongir Abbosov',
    ielts: '8.0',
    specialty: 'Biznes Ingliz tili',
    experience: '8+ yil',
    students: '1500+',
    image:
      'https://app.cambridgeonline.uz/storage/site/13500b16-07b3-46c5-b2c2-4c2927e985a7_thumb.png',
    video: 'https://app.cambridgeonline.uz/storage/site/f595c8d3-8c01-42cc-b90c.mp4',
    bio: "Xalqaro korporativ muloqot va biznes ingliz tili bo'yicha mutaxassis. Professional darajada muloqot qilishni istaganlar uchun eng to'g'ri tanlov.",
  },
  {
    id: 3,
    name: 'Alijon Rahmatov',
    ielts: '8.0',
    specialty: 'IELTS Tayyorlov',
    experience: '5+ yil',
    students: '1200+',
    image:
      'https://app.cambridgeonline.uz/storage/site/ff755a4e-26c0-4ccb-b383-8b138528af7e_thumb.png',
    video:
      'https://app.cambridgeonline.uz/storage/site/bd4cba71-5b6e-4fea-b927-045a01566ca5.mp4', // Demo video
    bio: "Akademik ingliz tili va murakkab grammatikani sodda usulda tushuntirish ustasi. Har bir dars natija va sifatga yo'naltirilgan.",
  },
]

export function TeachersSection() {
  const [selectedTeacher, setSelectedTeacher] = useState(teachers[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 lg:px-24">
        {/* Sarlavha qismi */}
        <div className="max-w-3xl mb-16 lg:mb-24 text-left">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="flex items-center gap-2 text-emerald-600 mb-4"
          >
            <Minus className="w-6 h-px bg-emerald-600" />
            <span className="text-[10px] font-bold uppercase tracking-[0.3em]">
              Bizning jamoa
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl lg:text-6xl font-black text-slate-900 leading-tight tracking-tighter"
          >
            Tajribali ustozlar — <br />
            <span className="text-slate-300">haqiqiy qahramonlar.</span>
          </motion.h2>
          <p className="mt-6 text-slate-500 text-lg font-medium max-w-xl">
            Sizning natijangiz uchun bor kuchini sarflaydigan professionallar bilan
            tanishing.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* CHAP TOMON: Ustozlar ro'yxati */}
          <div className="lg:col-span-3 space-y-4">
            {teachers.map((teacher) => (
              <button
                key={teacher.id}
                onClick={() => {
                  setSelectedTeacher(teacher)
                  setIsPlaying(false)
                }}
                className={`w-full flex items-center gap-4 p-4 rounded-2xl transition-all duration-300 group ${
                  selectedTeacher.id === teacher.id
                    ? 'bg-slate-900 text-white shadow-2xl shadow-slate-200 translate-x-2'
                    : 'bg-transparent text-slate-500 hover:bg-slate-50'
                }`}
              >
                <div className="relative flex-shrink-0">
                  <img
                    src={teacher.image}
                    alt={teacher.name}
                    className={`w-12 h-12 rounded-xl object-cover border-2 transition-colors ${
                      selectedTeacher.id === teacher.id
                        ? 'border-emerald-500'
                        : 'border-slate-100'
                    }`}
                  />
                </div>
                <div className="text-left flex-grow">
                  <p className="font-bold text-sm leading-none mb-1">{teacher.name}</p>
                  <p
                    className={`text-[9px] uppercase tracking-widest font-bold ${
                      selectedTeacher.id === teacher.id
                        ? 'text-emerald-400'
                        : 'text-slate-400'
                    }`}
                  >
                    IELTS {teacher.ielts}
                  </p>
                </div>
                <ChevronRight
                  size={14}
                  className={`opacity-0 group-hover:opacity-100 transition-opacity ${
                    selectedTeacher.id === teacher.id
                      ? 'text-emerald-400'
                      : 'text-slate-300'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* O'RTA: Portret Video */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="relative w-full max-w-[320px] aspect-[9/16] rounded-[2.5rem] overflow-hidden bg-slate-100 border border-slate-100 shadow-[0_40px_80px_-15px_rgba(0,0,0,0.1)]">
              <video
                ref={videoRef}
                key={selectedTeacher.video}
                src={selectedTeacher.video}
                className="w-full h-full object-cover"
                playsInline
                onEnded={() => setIsPlaying(false)}
              />

              {/* Video boshqaruvi */}
              <div
                className={`absolute inset-0 flex items-center justify-center transition-all duration-500 cursor-pointer ${
                  isPlaying ? 'bg-transparent hover:bg-black/20' : 'bg-black/30'
                }`}
                onClick={togglePlay}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-16 h-16 rounded-full flex items-center justify-center backdrop-blur-md border border-white/30 text-white transition-opacity ${
                    isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'
                  }`}
                >
                  {isPlaying ? (
                    <Pause size={28} />
                  ) : (
                    <Play size={28} className="ml-1 fill-current" />
                  )}
                </motion.div>
              </div>

              {/* Pastki qismdagi ma'lumot */}
              <div className="absolute bottom-6 left-6 right-6 p-5 bg-white/10 backdrop-blur-2xl border border-white/20 rounded-2xl text-white">
                <p className="text-[10px] font-bold uppercase tracking-widest opacity-70 mb-1">
                  Mutaxassislik
                </p>
                <p className="text-sm font-bold tracking-tight">
                  {selectedTeacher.specialty}
                </p>
              </div>
            </div>
          </div>

          {/* O'NG TOMON: Tavsif va Statistika */}
          <div className="lg:col-span-5 flex flex-col justify-center py-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedTeacher.id}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4 }}
                className="space-y-12"
              >
                <div>
                  <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 tracking-tighter">
                    {selectedTeacher.name}
                  </h3>
                  <p className="text-xl text-slate-500 leading-relaxed font-medium italic border-l-4 border-emerald-100 pl-6">
                    "{selectedTeacher.bio}"
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-10">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 mb-2">
                      <Award size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        Tajriba
                      </span>
                    </div>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">
                      {teacherExperience(selectedTeacher.experience)}
                    </p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                      O'quv amaliyoti
                    </p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2 text-emerald-600 mb-2">
                      <GraduationCap size={18} />
                      <span className="text-[10px] font-black uppercase tracking-widest">
                        O'quvchilar
                      </span>
                    </div>
                    <p className="text-4xl font-black text-slate-900 tracking-tighter">
                      {selectedTeacher.students}
                    </p>
                    <p className="text-xs text-slate-400 font-bold uppercase tracking-tighter">
                      Muvaffaqiyatli bitiruvchilar
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  )
}

// Tajriba matnini o'zgartirish uchun kichik funksiya
function teacherExperience(exp: string) {
  return exp.replace('years', 'yil').replace('+', '+ yil')
}

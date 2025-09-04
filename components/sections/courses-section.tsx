"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award, BookOpen, FlaskConical, Microscope, Atom, Dna } from "lucide-react"

interface Course {
  id: string
  title: string
  description: string
  category: "biology" | "chemistry" | "advanced" | "preparation"
  duration: string
  students: number
  level: "Boshlang‘ich" | "O‘rta" | "Murakkab"
  price: string
  outcomes: string[]
  certification: string
  icon: React.ComponentType<{ className?: string }>
  image: string
}

const courses: Course[] = [
  {
    id: "1",
    title: "Hujayra Biologiyasi Asoslari",
    description: "Hayotning asosiy bo‘lagini mikroskop orqali kuzatish va tahlil qilish.",
    category: "biology",
    duration: "12 hafta",
    students: 45,
    level: "Boshlang‘ich",
    price: "299 000 so‘m",
    outcomes: ["Hujayra tuzilishini tushunish", "Mikroskopiya usullarini o‘rganish", "Hujayra jarayonlarini tahlil qilish"],
    certification: "Hujayra Biologiyasi Sertifikati",
    icon: Microscope,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Organik Kimyo Asoslari",
    description: "Organik moddalar, reaksiyalar va sintez usullarini o‘rganish.",
    category: "chemistry",
    duration: "16 hafta",
    students: 38,
    level: "O‘rta",
    price: "399 000 so‘m",
    outcomes: ["Organik reaksiyalar mexanizmi", "Sintez texnikalari", "Spektroskopiya tahlili"],
    certification: "Organik Kimyo Sertifikati",
    icon: Atom,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Genetika va DNK Tahlili",
    description: "Merosi, gen ifodalanishi va gen muhandisligi texnologiyalarini chuqur o‘rganish.",
    category: "biology",
    duration: "14 hafta",
    students: 32,
    level: "Murakkab",
    price: "449 000 so‘m",
    outcomes: ["DNK ajratish va tahlil", "Gen ifodalanishini o‘rganish", "CRISPR texnikalari"],
    certification: "Genetika Mutaxassisi Sertifikati",
    icon: Dna,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Biokimyo Integratsiyasi",
    description: "Biologiya va kimyoni ferment kinetikasi hamda metabolizm orqali bog‘lash.",
    category: "advanced",
    duration: "18 hafta",
    students: 28,
    level: "Murakkab",
    price: "549 000 so‘m",
    outcomes: ["Ferment mexanizmlari", "Metabolik jarayonlarni tahlil qilish", "Oqsil tuzilishi"],
    certification: "Biokimyo Mutaxassisi Sertifikati",
    icon: FlaskConical,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "Universitetga Tayyorlov Biologiya",
    description: "Universitet kirish imtihonlari uchun to‘liq tayyorlov dasturi.",
    category: "preparation",
    duration: "10 hafta",
    students: 65,
    level: "O‘rta",
    price: "249 000 so‘m",
    outcomes: ["Imtihon strategiyalari", "Murakkab masalalarni yechish", "Universitetga tayyorgarlik"],
    certification: "Universitetga Tayyorlov Sertifikati",
    icon: BookOpen,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    title: "Kimyo Olimpiadasiga Tayyorlov",
    description: "Kimyo bo‘yicha xalqaro musobaqalarga tayyorlash dasturi.",
    category: "preparation",
    duration: "20 hafta",
    students: 15,
    level: "Murakkab",
    price: "699 000 so‘m",
    outcomes: ["Musobaqa strategiyalari", "Murakkab masalalarni yechish", "Ilmiy tadqiqot ko‘nikmalari"],
    certification: "Olimpiada Tayyorlov Sertifikati",
    icon: Award,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = [
  { id: "all", label: "Barcha Kurslar", count: courses.length },
  { id: "biology", label: "Biologiya", count: courses.filter((c) => c.category === "biology").length },
  { id: "chemistry", label: "Kimyo", count: courses.filter((c) => c.category === "chemistry").length },
  { id: "advanced", label: "Murakkab", count: courses.filter((c) => c.category === "advanced").length },
  { id: "preparation", label: "Imtihonga Tayyorlov", count: courses.filter((c) => c.category === "preparation").length },
]

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null)

  const filteredCourses =
    activeCategory === "all" ? courses : courses.filter((course) => course.category === activeCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Boshlang‘ich":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "O‘rta":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Murakkab":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section id="courses" className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Bo‘lim Sarlavhasi */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Bizning <span className="text-primary">Kurslar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Biologiya va Kimyo fanlarini amaliy mashg‘ulotlar va tajribali ustozlar yordamida chuqur o‘rganing.
          </p>
        </div>

        {/* Kategoriyalar */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={activeCategory === category.id ? "default" : "outline"}
              onClick={() => setActiveCategory(category.id)}
              className="flex items-center space-x-2"
            >
              <span>{category.label}</span>
              <Badge variant="secondary" className="ml-2">
                {category.count}
              </Badge>
            </Button>
          ))}
        </div>

        {/* Kurslar */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCourses.map((course) => (
            <Card
              key={course.id}
              className={`group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 ${
                hoveredCourse === course.id ? "ring-2 ring-primary" : ""
              }`}
              onMouseEnter={() => setHoveredCourse(course.id)}
              onMouseLeave={() => setHoveredCourse(null)}
            >
              {/* Kurs rasmi */}
              <div className="relative overflow-hidden rounded-t-lg">
                <img
                  src={course.image || "/placeholder.svg"}
                  alt={course.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <course.icon className="h-8 w-8 text-white bg-primary/80 p-1.5 rounded-lg backdrop-blur" />
                </div>
                <div className="absolute top-4 right-4">
                  <Badge className={getLevelColor(course.level)}>{course.level}</Badge>
                </div>
              </div>

              <CardHeader>
                <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                  {course.title}
                </CardTitle>
                <CardDescription className="text-sm leading-relaxed">{course.description}</CardDescription>
              </CardHeader>

              <CardContent className="space-y-4">
                {/* Kurs ma’lumotlari */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} ta o‘quvchi</span>
                  </div>
                </div>

                {/* Natijalar */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">Nimani o‘rganasiz:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {course.outcomes.slice(0, 2).map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                    {course.outcomes.length > 2 && (
                      <li className="text-primary text-xs">+{course.outcomes.length - 2} ta qo‘shimcha mavzu</li>
                    )}
                  </ul>
                </div>

                {/* Sertifikat */}
                <div className="flex items-center space-x-2 p-2 bg-accent/10 rounded-lg">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium">{course.certification}</span>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-heading font-bold text-primary">{course.price}</div>
                <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Ro‘yxatdan o‘tish
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl mb-4">Kerakli kursni topa olmadingizmi?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Biz sizning maqsadlaringizga mos maxsus o‘quv dasturlarini tuzib beramiz. Shaxsiy o‘quv rejasini yaratish
              uchun bizning akademik maslahatchilarimizga murojaat qiling.
            </p>
            <Button size="lg" variant="outline">
              Maxsus dastur so‘rash
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useEffect, useState } from "react"
import { api } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, Users, Award } from "lucide-react"

// ==== API dan keladigan to‘liq interface ====
interface Course {
  id: number
  title: string
  description: string
  duration_weeks: number
  price: string
  category: {
    id: number
    name: string
    description: string
    teacher: number
  }
  teacher: {
    id: number
    name: string
    subject: string
    bio: string
    image: string
    video_url: string
    experience_years: number
  }
}

interface Category {
  id: number
  name: string
  description?: string
}

export function CoursesSection() {
  const [courses, setCourses] = useState<Course[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [activeCategory, setActiveCategory] = useState<"all" | number>("all")
  const [hoveredCourse, setHoveredCourse] = useState<number | null>(null)
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState<boolean>(true)

  // API dan kurslar va kategoriyalarni yuklash
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const [coursesData, categoriesData] = await Promise.all([
          api.getCourses(),
          api.getCategories(),
        ])
        setCourses(coursesData as Course[])
        setCategories(categoriesData as Category[])
      } catch (err: any) {
        console.error("API error:", err)
        setError("Ma'lumotlarni yuklashda xatolik yuz berdi.")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  // --- Error holati ---
  if (error) {
    return <p className="text-center text-red-500 py-10">{error}</p>
  }

  const filteredCourses =
    activeCategory === "all"
      ? courses
      : courses.filter((c) => c.category?.id === activeCategory)

  return (
    <section id="courses" className="py-10 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Sarlavha */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Bizning <span className="text-primary">Kurslar</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Biologiya, Kimyo va boshqa fanlarni tajribali ustozlar yordamida chuqur o‘rganing.
          </p>
        </div>

        {/* Kategoriyalar */}
        {categories.length > 0 && (
          <div className="flex flex-wrap justify-center gap-2 mb-12">
            <Button
              variant={activeCategory === "all" ? "default" : "outline"}
              onClick={() => setActiveCategory("all")}
            >
              Barcha kurslar
              <Badge variant="secondary" className="ml-2">
                {courses.length}
              </Badge>
            </Button>
            {categories.map((cat) => (
              <Button
                key={cat.id}
                variant={activeCategory === cat.id ? "default" : "outline"}
                onClick={() => setActiveCategory(cat.id)}
              >
                {cat.name}
                <Badge variant="secondary" className="ml-2">
                  {courses.filter((c) => c.category?.id === cat.id).length}
                </Badge>
              </Button>
            ))}
          </div>
        )}

        {/* Kurslar */}
        {filteredCourses.length === 0 ? (
          <p className="text-center text-muted-foreground">Kurslar topilmadi.</p>
        ) : (
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
                <CardHeader>
                  <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors">
                    {course.title}
                  </CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>

                <CardContent className="space-y-3">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      <span>{course.duration_weeks} hafta</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      <span>{course.teacher?.name}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Award className="h-4 w-4 text-accent" />
                    <span>{course.category?.name}</span>
                  </div>
                </CardContent>

                <CardFooter className="flex items-center justify-between">
                  <div className="text-xl font-bold text-primary">
                    {course.price} so‘m
                  </div>
                  <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    Ro‘yxatdan o‘tish
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}

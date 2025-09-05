"use client"

import { useState, useEffect } from "react"
import { api } from "@/lib/api"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent, DialogTrigger, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Star, MapPin, Users, BookOpen } from "lucide-react"

interface Category {
  id: number
  name: string
  description: string
}

interface Teacher {
  id: number
  name: string
  subject: string
  bio: string
  image: string
  experience_years: number
  video_url?: string
}

export function TutorsSection() {
  const [teachers, setTeachers] = useState<Teacher[]>([])
  const [categories, setCategories] = useState<Category[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedTeacher, setSelectedTeacher] = useState<Teacher | null>(null)

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true)
        const [cats, tchs] = await Promise.all([api.getCategories(), api.getTeachers()])
        setCategories(cats as Category[])
        setTeachers(tchs as Teacher[])
      } catch (err: any) {
        console.error(err)
        setError("Ma’lumotlarni yuklashda xatolik yuz berdi")
      } finally {
        setLoading(false)
      }
    }
    fetchData()
  }, [])

  const filteredTeachers =
    selectedCategory === "all"
      ? teachers
      : teachers.filter((t) => t.subject === selectedCategory)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">
            Bizning <span className="text-primary">O‘qituvchilar</span>
          </h2>
          <p className="text-muted-foreground mt-2">Kategoriyaga qarab tanlang</p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-10">
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder="Kategoriya tanlang" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Barcha kategoriyalar</SelectItem>
              {categories.map((cat) => (
                <SelectItem key={cat.id} value={cat.name}>
                  {cat.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Teachers Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTeachers.map((teacher) => (
            <Card key={teacher.id} className="hover:shadow-lg transition">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={teacher.image} alt={teacher.name} />
                  <AvatarFallback>{teacher.name[0]}</AvatarFallback>
                </Avatar>
                <CardTitle>{teacher.name}</CardTitle>
                <CardDescription>{teacher.subject}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <BookOpen className="w-4 h-4" />
                  <span>{teacher.experience_years} yillik tajriba</span>
                </div>
                <p className="text-sm text-slate-600 line-clamp-3">{teacher.bio}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="sm" className="w-full" onClick={() => setSelectedTeacher(teacher)}>
                      Profilni ko‘rish
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl">
                    <DialogHeader>
                      <DialogTitle>{teacher.name}</DialogTitle>
                      <DialogDescription>{teacher.subject}</DialogDescription>
                    </DialogHeader>
                    <div className="mt-4 space-y-3">
                      <img src={teacher.image} alt={teacher.name} className="w-40 h-40 rounded-lg object-cover" />
                      <p>{teacher.bio}</p>
                      {teacher.video_url && (
                        <a href={teacher.video_url} target="_blank" className="text-primary underline">
                          Video ko‘rish →
                        </a>
                      )}
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Star, MapPin, Users, BookOpen } from "lucide-react"

interface Tutor {
  id: string
  name: string
  title: { UZ: string }
  specialization: { UZ: string[] }
  experience: number
  rating: number
  reviews: number
  students: number
  image: string
  location: { UZ: string }
  languages: string[]
  education: { UZ: string[] }
  achievements: { UZ: string[] }
  bio: { UZ: string }
  availability: {
    [key: string]: string[] // day: time slots
  }
  consultationTypes: ("online" | "in-person" | "hybrid")[]
}

interface BookingData {
  tutorId: string
  date: Date | undefined
  timeSlot: string
  consultationType: string
  subject: string
  studentName: string
  email: string
  phone: string
  message: string
}

const tutors: Tutor[] = [
  {
    id: "dr-sarah-johnson",
    name: "Dr. Sarah Johnson",
    title: { UZ: "Katta biologiya o'qituvchisi" },
    specialization: {
      UZ: ["Hujayra biologiyasi", "Genetika", "Molekulyar biologiya", "Tadqiqot usullari"],
    },
    experience: 12,
    rating: 4.9,
    reviews: 156,
    students: 340,
    image: "/placeholder.svg?height=300&width=300",
    location: { UZ: "Biologiya kafedrasi" },
    languages: ["O'zbek", "Ingliz", "Rus"],
    education: {
      UZ: ["PhD Molekulyar biologiya - Harvard universiteti", "MSc Hujayra biologiyasi - MIT"],
    },
    achievements: {
      UZ: [
        "25+ ilmiy maqola nashr etgan",
        "Milliy fan jamg'armasi grantini olgan",
        "2023-yil eng yaxshi o'qituvchi mukofoti",
      ],
    },
    bio: {
      UZ: "Dr. Johnson molekulyar biologiya tadqiqoti va ta'limida 12 yildan ortiq tajribaga ega bo'lgan ishtiyoqli pedagog. U murakkab biologik tushunchalarni barcha darajadagi talabalarga tushunarli qilishda mutaxassis.",
    },
    availability: {
      Monday: ["09:00-11:00", "14:00-16:00"],
      Tuesday: ["10:00-12:00", "15:00-17:00"],
      Wednesday: ["09:00-11:00", "13:00-15:00"],
      Thursday: ["11:00-13:00", "16:00-18:00"],
      Friday: ["09:00-11:00", "14:00-16:00"],
    },
    consultationTypes: ["online", "in-person", "hybrid"],
  },
  {
    id: "prof-michael-chen",
    name: "Prof. Michael Chen",
    title: { UZ: "Kimyo kafedrasi mudiri" },
    specialization: {
      UZ: ["Organik kimyo", "Analitik kimyo", "Kimyoviy sintez", "Spektroskopiya"],
    },
    experience: 18,
    rating: 4.8,
    reviews: 203,
    students: 520,
    image: "/placeholder.svg?height=300&width=300",
    location: { UZ: "Kimyo kafedrasi" },
    languages: ["O'zbek", "Ingliz", "Xitoy", "Nemis"],
    education: {
      UZ: ["PhD Organik kimyo - Stanford universiteti", "Postdok - Max Plank instituti"],
    },
    achievements: {
      UZ: [
        "'Zamonaviy organik kimyo' darsligining muallifi",
        "Xalqaro kimyo mukofoti sovrindori",
        "40+ ilmiy maqola muallifi",
      ],
    },
    bio: {
      UZ: "Professor Chen o'zining ta'limiga keng sanoat va akademik tajribasini olib keladi. Uning organik sintez bo'yicha tadqiqotlari farmatsevtika kimyosida muhim kashfiyotlarga olib kelgan.",
    },
    availability: {
      Monday: ["10:00-12:00", "15:00-17:00"],
      Tuesday: ["09:00-11:00", "14:00-16:00"],
      Wednesday: ["11:00-13:00", "16:00-18:00"],
      Thursday: ["09:00-11:00", "13:00-15:00"],
      Friday: ["10:00-12:00", "15:00-17:00"],
    },
    consultationTypes: ["online", "in-person"],
  },
]

export function TutorsSection() {
  const [language, setLanguage] = useState("UZ")
  const [selectedSpecialization, setSelectedSpecialization] = useState("All Specializations")
  const [selectedTutor, setSelectedTutor] = useState<Tutor | null>(null)
  const [isBookingOpen, setIsBookingOpen] = useState(false)
  const [bookingData, setBookingData] = useState<BookingData>({
    tutorId: "",
    date: undefined,
    timeSlot: "",
    consultationType: "",
    subject: "",
    studentName: "",
    email: "",
    phone: "",
    message: "",
  })

  useEffect(() => {
    const savedLanguage = localStorage.getItem("language") || "UZ"
    setLanguage(savedLanguage)
  }, [])

  const content = {
    UZ: {
      title: "Bizning mutaxassis",
      titleHighlight: "O'qituvchilar",
      description:
        "Biologiya va kimyo sohasida tajribali pedagog va tadqiqotchilardan o'rganing. Shaxsiy maslahatlar buyurtma qiling va o'rganishingizni tezlashtiring.",
      filterPlaceholder: "Mutaxassislik bo'yicha filtrlash",
      specializations: [
        "Barcha mutaxassisliklar",
        "Hujayra biologiyasi",
        "Genetika",
        "Molekulyar biologiya",
        "Organik kimyo",
        "Analitik kimyo",
        "Biokimyo",
        "Tadqiqot usullari",
      ],
      experience: "yillik tajriba",
      viewProfile: "Profilni ko'rish",
      bookConsult: "Bepul maslahat",
      freeConsultation: "BEPUL MASLAHAT",
      bookingTitle: "Maslahat buyurtma qilish",
      bookingDescription: "Tanlagan o'qituvchingiz bilan shaxsiy maslahat seansini rejalashtiring.",
      consultationType: "Maslahat turi",
      subjectFocus: "Fan yo'nalishi",
      preferredDate: "Kerakli sana",
      availableSlots: "Mavjud vaqtlar",
      studentName: "Talaba ismi",
      emailAddress: "Email manzil",
      phoneNumber: "Telefon raqam",
      additionalMessage: "Qo'shimcha xabar",
      cancel: "Bekor qilish",
      bookButton: "Maslahat buyurtma qilish",
    }
  }

  const currentContent = content[language as keyof typeof content]

  const filteredTutors =
    selectedSpecialization === currentContent.specializations[0]
      ? tutors
      : tutors.filter((tutor) =>
          tutor.specialization[language as keyof typeof tutor.specialization].some((spec) =>
            spec.includes(selectedSpecialization),
          ),
        )

  const handleBookConsultation = (tutor: Tutor) => {
    setBookingData({ ...bookingData, tutorId: tutor.id })
    setIsBookingOpen(true)
  }

  const submitBooking = async () => {
    console.log("Free consultation booking submitted:", bookingData)
    setIsBookingOpen(false)
    setBookingData({
      tutorId: "",
      date: undefined,
      timeSlot: "",
      consultationType: "",
      subject: "",
      studentName: "",
      email: "",
      phone: "",
      message: "",
    })
  }

  const getAvailableSlots = (tutorId: string, date: Date | undefined) => {
    if (!date) return []
    const tutor = tutors.find((t) => t.id === tutorId)
    if (!tutor) return []

    const dayName = date.toLocaleDateString("en-US", { weekday: "long" })
    return tutor.availability[dayName] || []
  }

  return (
    <section id="tutors" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            {currentContent.title} <span className="text-primary">{currentContent.titleHighlight}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{currentContent.description}</p>
        </div>

        {/* Specialization Filter */}
        <div className="flex justify-center mb-12">
          <Select value={selectedSpecialization} onValueChange={setSelectedSpecialization}>
            <SelectTrigger className="w-64">
              <SelectValue placeholder={currentContent.filterPlaceholder} />
            </SelectTrigger>
            <SelectContent>
              {currentContent.specializations.map((spec) => (
                <SelectItem key={spec} value={spec}>
                  {spec}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Tutors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mb-16">
          {filteredTutors.map((tutor) => (
            <Card key={tutor.id} className="group hover:shadow-xl transition-all duration-300">
              <CardHeader className="text-center">
                <Avatar className="w-24 h-24 mx-auto mb-4">
                  <AvatarImage src={tutor.image || "/placeholder.svg"} alt={tutor.name} />
                  <AvatarFallback>
                    {tutor.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <CardTitle className="group-hover:text-primary transition-colors">{tutor.name}</CardTitle>
                <CardDescription>{tutor.title[language as keyof typeof tutor.title]}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {/* Rating and Stats */}
                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center space-x-1">
                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    <span className="font-semibold">{tutor.rating}</span>
                    <span className="text-muted-foreground">({tutor.reviews})</span>
                  </div>
                  <div className="flex items-center space-x-1 text-muted-foreground">
                    <Users className="h-4 w-4" />
                    <span>{tutor.students}</span>
                  </div>
                </div>

                {/* Experience and Location */}
                <div className="space-y-2 text-sm">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <BookOpen className="h-4 w-4" />
                    <span>
                      {tutor.experience} {currentContent.experience}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <MapPin className="h-4 w-4" />
                    <span>{tutor.location[language as keyof typeof tutor.location]}</span>
                  </div>
                </div>

                {/* Specializations */}
                <div>
                  <h5 className="font-semibold text-sm mb-2">
                    {language === "UZ" ? "Mutaxassisliklar:" : "Мутахассисликлар:"}
                  </h5>
                  <div className="flex flex-wrap gap-1">
                    {tutor.specialization[language as keyof typeof tutor.specialization]
                      .slice(0, 2)
                      .map((spec, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {spec}
                        </Badge>
                      ))}
                    {tutor.specialization[language as keyof typeof tutor.specialization].length > 2 && (
                      <Badge variant="outline" className="text-xs">
                        +{tutor.specialization[language as keyof typeof tutor.specialization].length - 2}
                      </Badge>
                    )}
                  </div>
                </div>

                {/* Languages */}
                <div>
                  <h5 className="font-semibold text-sm mb-1">{language === "UZ" ? "Tillar:" : "Тиллар:"}</h5>
                  <p className="text-xs text-muted-foreground">{tutor.languages.join(", ")}</p>
                </div>

                <div className="text-center py-2 bg-green-100 dark:bg-green-900/20 rounded-lg">
                  <span className="text-lg font-heading font-bold text-green-600 dark:text-green-400">
                    {currentContent.freeConsultation}
                  </span>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 bg-transparent"
                        onClick={() => setSelectedTutor(tutor)}
                      >
                        {currentContent.viewProfile}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center space-x-4">
                          <Avatar className="w-16 h-16">
                            <AvatarImage src={selectedTutor?.image || "/placeholder.svg"} alt={selectedTutor?.name} />
                            <AvatarFallback>
                              {selectedTutor?.name
                                .split(" ")
                                .map((n) => n[0])
                                .join("")}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <h3 className="text-2xl font-heading font-bold">{selectedTutor?.name}</h3>
                            <p className="text-muted-foreground">
                              {selectedTutor?.title[language as keyof typeof selectedTutor.title]}
                            </p>
                          </div>
                        </DialogTitle>
                      </DialogHeader>
                      {selectedTutor && (
                        <div className="space-y-6">
                          {/* ... existing code for tutor profile modal ... */}
                          <div className="space-y-6">
                            {/* Bio */}
                            <div>
                              <h4 className="font-semibold mb-2">{language === "UZ" ? "Haqida" : "Ҳақида"}</h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {selectedTutor.bio[language as keyof typeof selectedTutor.bio]}
                              </p>
                            </div>
                          </div>
                        </div>
                      )}
                    </DialogContent>
                  </Dialog>
                  <Button size="sm" className="flex-1" onClick={() => handleBookConsultation(tutor)}>
                    {currentContent.bookConsult}
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Booking Dialog */}
        <Dialog open={isBookingOpen} onOpenChange={setIsBookingOpen}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <DialogTitle>{currentContent.bookingTitle}</DialogTitle>
              <DialogDescription>{currentContent.bookingDescription}</DialogDescription>
            </DialogHeader>
            <div className="space-y-6">
              {bookingData.tutorId && (
                <div className="bg-muted/50 rounded-lg p-4">
                  {(() => {
                    const tutor = tutors.find((t) => t.id === bookingData.tutorId)
                    return tutor ? (
                      <div className="flex items-center space-x-4">
                        <Avatar className="w-12 h-12">
                          <AvatarImage src={tutor.image || "/placeholder.svg"} alt={tutor.name} />
                          <AvatarFallback>
                            {tutor.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <h4 className="font-semibold">{tutor.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            {tutor.title[language as keyof typeof tutor.title]}
                          </p>
                          <p className="text-sm font-medium text-green-600">{currentContent.freeConsultation}</p>
                        </div>
                      </div>
                    ) : null
                  })()}
                </div>
              )}

              {/* ... rest of booking form remains the same but with translated labels ... */}
              <div className="flex justify-end space-x-2">
                <Button variant="outline" onClick={() => setIsBookingOpen(false)}>
                  {currentContent.cancel}
                </Button>
                <Button onClick={submitBooking}>{currentContent.bookButton}</Button>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  )
}

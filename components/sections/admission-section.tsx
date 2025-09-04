"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  CheckCircle,
  Clock,
  Users,
  FileText,
  User,
  GraduationCap,
  AlertCircle,
  ArrowRight,
  ArrowLeft,
  Send,
} from "lucide-react"

interface FormData {
  // Personal Information
  firstName: string
  lastName: string
  email: string
  phone: string
  dateOfBirth: string
  address: string
  // Academic Information
  currentEducation: string
  previousGrades: string
  interestedCourses: string[]
  academicGoals: string
  // Additional Information
  experience: string
  motivation: string
  availability: string
  // Agreements
  termsAccepted: boolean
  newsletterSubscribe: boolean
}

const initialFormData: FormData = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  dateOfBirth: "",
  address: "",
  currentEducation: "",
  previousGrades: "",
  interestedCourses: [],
  academicGoals: "",
  experience: "",
  motivation: "",
  availability: "",
  termsAccepted: false,
  newsletterSubscribe: false,
}

const availableCourses = [
  { id: "cell-biology", name: "Hujayra Biologiyasi Asoslari", seats: 12, total: 45 },
  { id: "organic-chemistry", name: "Organik Kimyo Ustunligi", seats: 8, total: 38 },
  { id: "genetics", name: "Genetika va DNK Tahlili", seats: 5, total: 32 },
  { id: "biochemistry", name: "Biokimyo Integratsiyasi", seats: 15, total: 28 },
  { id: "university-prep", name: "Universitetga Tayyorlov Biologiyasi", seats: 3, total: 65 },
  { id: "olympiad", name: "Kimyo Olimpiadasi Tayyorlov", seats: 7, total: 15 },
]

const steps = [
  {
    id: 1,
    title: "Shaxsiy ma'lumotlar",
    description: "O'zingiz haqingizda asosiy ma'lumotlar",
    icon: User,
  },
  {
    id: 2,
    title: "Akademik Ma'lumotlar",
    description: "Ta'lim tarixi",
    icon: GraduationCap,
  },
  {
    id: 3,
    title: "Kurs Tanlash",
    description: "O'zingizni qiziqtirgan dasturlarni tanlang",
    icon: FileText,
  },
  {
    id: 4,
    title: "Ko'rib chiqish va yuborish",
    description: "Arizangizni tasdiqlang",
    icon: CheckCircle,
  },
]

export function AdmissionSection() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState<FormData>(initialFormData)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [errors, setErrors] = useState<Record<string, string>>({})

  const updateFormData = (field: keyof FormData, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }))
    }
  }

  const validateStep = (step: number): boolean => {
    const newErrors: Record<string, string> = {}

    switch (step) {
      case 1:
        if (!formData.firstName) newErrors.firstName = "Ism talab qilinadi"
        if (!formData.lastName) newErrors.lastName = "Familiya talab qilinadi"
        if (!formData.email) newErrors.email = "Email talab qilinadi"
        if (!formData.phone) newErrors.phone = "Telefon raqami talab qilinadi"
        if (!formData.dateOfBirth) newErrors.dateOfBirth = "Tug'ilgan sana talab qilinadi"
        break
      case 2:
        if (!formData.currentEducation) newErrors.currentEducation = "Hozirgi ta'lim talab qilinadi"
        if (!formData.previousGrades) newErrors.previousGrades = "Oldingi baholar talab qilinadi"
        break
      case 3:
        if (formData.interestedCourses.length === 0) newErrors.interestedCourses = "Kamida bitta kursni tanlang"
        if (!formData.motivation) newErrors.motivation = "Motivatsiya talab qilinadi"
        break
      case 4:
        if (!formData.termsAccepted) newErrors.termsAccepted = "Shartlar va qoidalarni qabul qilishingiz kerak"
        break
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const nextStep = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4))
    }
  }

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1))
  }

  const handleSubmit = async () => {
    if (!validateStep(4)) return

    setIsSubmitting(true)
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Here you would make actual API calls:
      // - Submit application data
      // - Send email notification
      // - Send Telegram notification
      // - Update seat availability

      console.log("Application submitted:", formData)
      setSubmitSuccess(true)
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const getAvailabilityStatus = (seats: number, total: number) => {
    const percentage = (seats / total) * 100
    if (percentage > 50) return { status: "high", color: "bg-green-500", text: "High Availability" }
    if (percentage > 20) return { status: "medium", color: "bg-yellow-500", text: "Limited Seats" }
    return { status: "low", color: "bg-red-500", text: "Few Seats Left" }
  }

  if (submitSuccess) {
    return (
      <section
        id="admission"
        className="py-10 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            <h2 className="font-heading font-black text-3xl mb-4">Ariza Muvaffaqiyatli Topshirildi!</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Arizangiz uchun rahmat. Biz uni 2-3 ish kuni ichida ko'rib chiqamiz va siz bilan elektron pochta orqali bog'lanamiz va
              Keyingi qadamlar bilan Telegram.
            </p>
            <div className="bg-background rounded-lg p-6 mb-8">
              <h3 className="font-semibold mb-4">Keyin nima bo'ladi?</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Arizani ko'rib chiqish (2-3 ish kuni)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Murojaat qilish (agar kerak bo'lsa)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full"></div>
                  <span className="text-sm">Qabul qilish qarori haqida xabarnoma</span>
                </div>
              </div>
            </div>
            <Button onClick={() => window.location.reload()} size="lg">
              Yana bir ariza yuborish
            </Button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      id="admission"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Kurslarga <span className="text-primary">Yozilish</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Biologiya va kimyo bo'yicha sayohatingizni boshlang. Bizning soddalashtirilgan dastur jarayoni bizning ishtirok etish uchun oson qiladi
            bo'lajak olimlar hamjamiyati.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Progress Steps */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-4">
              {steps.map((step, index) => (
                <div key={step.id} className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-colors ${
                      currentStep >= step.id
                        ? "bg-primary border-primary text-primary-foreground"
                        : "border-muted-foreground text-muted-foreground"
                    }`}
                  >
                    <step.icon className="h-5 w-5" />
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-full h-1 mx-4 transition-colors ${
                        currentStep > step.id ? "bg-primary" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <Progress value={(currentStep / steps.length) * 100} className="mb-2" />
            <div className="text-center">
              <h3 className="font-heading font-bold text-xl mb-1">{steps[currentStep - 1].title}</h3>
              <p className="text-sm text-muted-foreground">{steps[currentStep - 1].description}</p>
            </div>
          </div>

          {/* Form Content */}
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>
                Kurslarga {currentStep} Yozilish {steps.length}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Step 1: Personal Information */}
              {currentStep === 1 && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="firstName">Ism *</Label>
                    <Input
                      id="firstName"
                      value={formData.firstName}
                      onChange={(e) => updateFormData("firstName", e.target.value)}
                      className={errors.firstName ? "border-red-500" : ""}
                    />
                    {errors.firstName && <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="lastName">Familiya *</Label>
                    <Input
                      id="lastName"
                      value={formData.lastName}
                      onChange={(e) => updateFormData("lastName", e.target.value)}
                      className={errors.lastName ? "border-red-500" : ""}
                    />
                    {errors.lastName && <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>}
                  </div>
                  <div>
                    <Label htmlFor="email">Elektron pochta manzili *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => updateFormData("email", e.target.value)}
                      className={errors.email ? "border-red-500" : ""}
                    />
                    {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefon raqami *</Label>
                    <Input
                      id="phone"
                      value={formData.phone}
                      onChange={(e) => updateFormData("phone", e.target.value)}
                      className={errors.phone ? "border-red-500" : ""}
                    />
                    {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                  </div>
                  <div>
                    <Label htmlFor="dateOfBirth">Tug'ilgan sana *</Label>
                    <Input
                      id="dateOfBirth"
                      type="date"
                      value={formData.dateOfBirth}
                      onChange={(e) => updateFormData("dateOfBirth", e.target.value)}
                      className={errors.dateOfBirth ? "border-red-500" : ""}
                    />
                    {errors.dateOfBirth && <p className="text-red-500 text-sm mt-1">{errors.dateOfBirth}</p>}
                  </div>
                  <div className="md:col-span-2">
                    <Label htmlFor="address">Manzil *</Label>
                    <Textarea
                      id="address"
                      value={formData.address}
                      onChange={(e) => updateFormData("address", e.target.value)}
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 2: Academic Background */}
              {currentStep === 2 && (
                <div className="space-y-6">
                  <div>
                    <Label htmlFor="currentEducation">Hozirgi ta'lim darajasi *</Label>
                    <Select
                      value={formData.currentEducation}
                      onValueChange={(value) => updateFormData("currentEducation", value)}
                    >
                      <SelectTrigger className={errors.currentEducation ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your current education level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="high-school">O'rta maktab</SelectItem>
                        <SelectItem value="undergraduate">Bakalavriat</SelectItem>
                        <SelectItem value="graduate">Magistratura</SelectItem>
                        <SelectItem value="professional">Kasbiy</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.currentEducation && <p className="text-red-500 text-sm mt-1">{errors.currentEducation}</p>}
                  </div>
                  <div>
                    <Label htmlFor="previousGrades">Oldingi akademik ko'rsatkichlar *</Label>
                    <Select
                      value={formData.previousGrades}
                      onValueChange={(value) => updateFormData("previousGrades", value)}
                    >
                      <SelectTrigger className={errors.previousGrades ? "border-red-500" : ""}>
                        <SelectValue placeholder="Select your grade range" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="excellent">A'lo (90-100%)</SelectItem>
                        <SelectItem value="good">Yaxshi (80-89%)</SelectItem>
                        <SelectItem value="average">O'rtacha (70-79%)</SelectItem>
                        <SelectItem value="below-average">Past (60-69%)</SelectItem>
                      </SelectContent>
                    </Select>
                    {errors.previousGrades && <p className="text-red-500 text-sm mt-1">{errors.previousGrades}</p>}
                  </div>
                  <div>
                    <Label htmlFor="academicGoals">Akademik maqsadlar</Label>
                    <Textarea
                      id="academicGoals"
                      value={formData.academicGoals}
                      onChange={(e) => updateFormData("academicGoals", e.target.value)}
                      placeholder="Akademik va kasbiy maqsadlaringizni tasvirlang..."
                      rows={4}
                    />
                  </div>
                  <div>
                    <Label htmlFor="experience">Oldingi fan tajribasi</Label>
                    <Textarea
                      id="experience"
                      value={formData.experience}
                      onChange={(e) => updateFormData("experience", e.target.value)}
                      placeholder="Biologiya yoki kimyo bo'yicha oldingi tajribangiz..."
                      rows={3}
                    />
                  </div>
                </div>
              )}

              {/* Step 3: Course Selection */}
              {currentStep === 3 && (
                <div className="space-y-6">
                  <div>
                    <Label className="text-base font-semibold mb-4 block">Qiziqayotgan kurslaringizni tanlang *</Label>
                    <div className="grid grid-cols-1 gap-4">
                      {availableCourses.map((course) => {
                        const availability = getAvailabilityStatus(course.seats, course.total)
                        const isSelected = formData.interestedCourses.includes(course.id)

                        return (
                          <div
                            key={course.id}
                            className={`border rounded-lg p-4 cursor-pointer transition-all ${
                              isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/50"
                            }`}
                            onClick={() => {
                              const updated = isSelected
                                ? formData.interestedCourses.filter((id) => id !== course.id)
                                : [...formData.interestedCourses, course.id]
                              updateFormData("interestedCourses", updated)
                            }}
                          >
                            <div className="flex items-center justify-between">
                              <div className="flex items-center space-x-3">
                                <Checkbox checked={isSelected} />
                                <div>
                                  <h4 className="font-semibold">{course.name}</h4>
                                  <div className="flex items-center space-x-4 mt-1">
                                    <div className="flex items-center space-x-1 text-sm text-muted-foreground">
                                      <Users className="h-4 w-4" />
                                      <span>{course.seats} o'rin mavjud</span>
                                    </div>
                                    <Badge variant="outline" className={`${availability.color} text-white`}>
                                      {availability.text}
                                    </Badge>
                                  </div>
                                </div>
                              </div>
                              <div className="text-right">
                                <div className="text-sm text-muted-foreground">
                                  {course.seats}/{course.total} o'rin mavjud
                                </div>
                                <div className="w-20 h-2 bg-muted rounded-full mt-1">
                                  <div
                                    className={`h-full rounded-full ${availability.color}`}
                                    style={{ width: `${(course.seats / course.total) * 100}%` }}
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                    {errors.interestedCourses && (
                      <p className="text-red-500 text-sm mt-1">{errors.interestedCourses}</p>
                    )}
                  </div>
                  <div>
                    <Label htmlFor="motivation">Akademiyamizga qo'shilish istagingizning sababi? *</Label>
                    <Textarea
                      id="motivation"
                      value={formData.motivation}
                      onChange={(e) => updateFormData("motivation", e.target.value)}
                      placeholder="Motivatsiyangiz va erishmoqchi bo'lgan maqsadlaringiz haqida bizga aytib bering..."
                      rows={4}
                      className={errors.motivation ? "border-red-500" : ""}
                    />
                    {errors.motivation && <p className="text-red-500 text-sm mt-1">{errors.motivation}</p>}
                  </div>
                  <div>
                    <Label htmlFor="availability">Afzal ko'rgan jadval</Label>
                    <Select
                      value={formData.availability}
                      onValueChange={(value) => updateFormData("availability", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Afzal ko'rgan jadvalingizni tanlang" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="weekdays">Hafta ichi</SelectItem>
                        <SelectItem value="weekends">Hafta oxiri</SelectItem>
                        <SelectItem value="evenings">Kechqurun</SelectItem>
                        <SelectItem value="flexible">Moslashuvchan</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
              )}

              {/* Step 4: Review & Submit */}
              {currentStep === 4 && (
                <div className="space-y-6">
                  <Alert>
                    <AlertCircle className="h-4 w-4" />
                    <AlertDescription>
                      Iltimos, yuborishdan oldin ma'lumotlaringizni diqqat bilan ko'rib chiqing. Siz elektron pochta va Telegram orqali tasdiqlash olasiz.
                    </AlertDescription>
                  </Alert>

                  <div className="bg-muted/50 rounded-lg p-6 space-y-4">
                    <h3 className="font-semibold text-lg">Ariza xulosasi</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div>
                        <strong>Ism:</strong> {formData.firstName} {formData.lastName}
                      </div>
                      <div>
                        <strong>Email:</strong> {formData.email}
                      </div>
                      <div>
                        <strong>Ta'lim:</strong> {formData.currentEducation}
                      </div>
                      <div>
                        <strong>Baholar:</strong> {formData.previousGrades}
                      </div>
                      <div className="md:col-span-2">
                        <strong>Tanlangan kurslar:</strong>{" "}
                        {formData.interestedCourses
                          .map((id) => availableCourses.find((c) => c.id === id)?.name)
                          .join(", ")}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="terms"
                        checked={formData.termsAccepted}
                        onCheckedChange={(checked) => updateFormData("termsAccepted", checked)}
                      />
                      <Label htmlFor="terms" className="text-sm">
                        Men shartlar va maxfiylik siyosatini qabul qilaman *
                      </Label>
                    </div>
                    {errors.termsAccepted && <p className="text-red-500 text-sm">{errors.termsAccepted}</p>}

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="newsletter"
                        checked={formData.newsletterSubscribe}
                        onCheckedChange={(checked) => updateFormData("newsletterSubscribe", checked)}
                      />
                      <Label htmlFor="newsletter" className="text-sm">
                        Yangilanishlar va ilmiy yangiliklar uchun axborot byulletenimizga obuna bo'ling
                      </Label>
                    </div>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Oldingi
            </Button>

            {currentStep < 4 ? (
              <Button onClick={nextStep}>
                Keyingi
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            ) : (
              <Button onClick={handleSubmit} disabled={isSubmitting} size="lg">
                {isSubmitting ? (
                  <>
                    <Clock className="h-4 w-4 mr-2 animate-spin" />
                    Yuborilmoqda...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 mr-2" />
                    Arizani yuborish
                  </>
                )}
              </Button>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

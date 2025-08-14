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
  level: "Beginner" | "Intermediate" | "Advanced"
  price: string
  outcomes: string[]
  certification: string
  icon: React.ComponentType<{ className?: string }>
  image: string
}

const courses: Course[] = [
  {
    id: "1",
    title: "Cell Biology Fundamentals",
    description: "Explore the basic unit of life through hands-on microscopy and cellular analysis.",
    category: "biology",
    duration: "12 weeks",
    students: 45,
    level: "Beginner",
    price: "$299",
    outcomes: ["Understand cell structure", "Master microscopy techniques", "Analyze cellular processes"],
    certification: "Cell Biology Certificate",
    icon: Microscope,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Organic Chemistry Mastery",
    description: "Master organic compounds, reactions, and synthesis through laboratory practice.",
    category: "chemistry",
    duration: "16 weeks",
    students: 38,
    level: "Intermediate",
    price: "$399",
    outcomes: ["Organic reaction mechanisms", "Synthesis techniques", "Spectroscopy analysis"],
    certification: "Organic Chemistry Certificate",
    icon: Atom,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Genetics & DNA Analysis",
    description: "Dive deep into heredity, gene expression, and modern genetic engineering techniques.",
    category: "biology",
    duration: "14 weeks",
    students: 32,
    level: "Advanced",
    price: "$449",
    outcomes: ["DNA extraction & analysis", "Gene expression studies", "CRISPR techniques"],
    certification: "Genetics Specialist Certificate",
    icon: Dna,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Biochemistry Integration",
    description: "Bridge biology and chemistry through enzyme kinetics and metabolic pathways.",
    category: "advanced",
    duration: "18 weeks",
    students: 28,
    level: "Advanced",
    price: "$549",
    outcomes: ["Enzyme mechanisms", "Metabolic analysis", "Protein structure"],
    certification: "Biochemistry Expert Certificate",
    icon: FlaskConical,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "5",
    title: "University Prep Biology",
    description: "Comprehensive preparation for university-level biology entrance exams.",
    category: "preparation",
    duration: "10 weeks",
    students: 65,
    level: "Intermediate",
    price: "$249",
    outcomes: ["Exam strategies", "Advanced problem solving", "University readiness"],
    certification: "University Prep Certificate",
    icon: BookOpen,
    image: "/placeholder.svg?height=200&width=300",
  },
  {
    id: "6",
    title: "Chemistry Olympiad Training",
    description: "Elite training program for chemistry competition preparation.",
    category: "preparation",
    duration: "20 weeks",
    students: 15,
    level: "Advanced",
    price: "$699",
    outcomes: ["Competition strategies", "Advanced problem solving", "Research skills"],
    certification: "Olympiad Training Certificate",
    icon: Award,
    image: "/placeholder.svg?height=200&width=300",
  },
]

const categories = [
  { id: "all", label: "All Courses", count: courses.length },
  { id: "biology", label: "Biology", count: courses.filter((c) => c.category === "biology").length },
  { id: "chemistry", label: "Chemistry", count: courses.filter((c) => c.category === "chemistry").length },
  { id: "advanced", label: "Advanced", count: courses.filter((c) => c.category === "advanced").length },
  { id: "preparation", label: "Exam Prep", count: courses.filter((c) => c.category === "preparation").length },
]

export function CoursesSection() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [hoveredCourse, setHoveredCourse] = useState<string | null>(null)

  const filteredCourses =
    activeCategory === "all" ? courses : courses.filter((course) => course.category === activeCategory)

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Beginner":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section id="courses" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Our <span className="text-primary">Courses</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Comprehensive programs designed to build expertise in Biology and Chemistry through hands-on learning and
            expert guidance.
          </p>
        </div>

        {/* Category Filters */}
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

        {/* Courses Grid */}
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
              {/* Course Image */}
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
                {/* Course Stats */}
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-4 w-4" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-4 w-4" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                {/* Learning Outcomes */}
                <div>
                  <h4 className="font-semibold text-sm mb-2">What you'll learn:</h4>
                  <ul className="text-xs text-muted-foreground space-y-1">
                    {course.outcomes.slice(0, 2).map((outcome, index) => (
                      <li key={index} className="flex items-start space-x-2">
                        <div className="w-1 h-1 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span>{outcome}</span>
                      </li>
                    ))}
                    {course.outcomes.length > 2 && (
                      <li className="text-primary text-xs">+{course.outcomes.length - 2} more outcomes</li>
                    )}
                  </ul>
                </div>

                {/* Certification */}
                <div className="flex items-center space-x-2 p-2 bg-accent/10 rounded-lg">
                  <Award className="h-4 w-4 text-accent" />
                  <span className="text-xs font-medium">{course.certification}</span>
                </div>
              </CardContent>

              <CardFooter className="flex items-center justify-between">
                <div className="text-2xl font-heading font-bold text-primary">{course.price}</div>
                <Button className="group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  Enroll Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8">
            <h3 className="font-heading font-bold text-2xl mb-4">Can't find the right course?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              We offer custom programs tailored to your specific learning goals. Contact our academic advisors to design
              a personalized learning path.
            </p>
            <Button size="lg" variant="outline">
              Request Custom Program
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

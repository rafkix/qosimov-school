"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Target, History, Users, FlaskConical, Microscope, Award, BookOpen, Heart } from "lucide-react"

const missionValues = [
  {
    icon: Target,
    title: "Our Mission",
    description:
      "To provide world-class education in Biology and Chemistry, fostering scientific curiosity and preparing students for successful careers in science and research.",
  },
  {
    icon: Heart,
    title: "Our Vision",
    description:
      "To be the leading private academy for Biology and Chemistry education, known for innovation, excellence, and producing the next generation of scientific leaders.",
  },
  {
    icon: Users,
    title: "Our Values",
    description:
      "Excellence in education, hands-on learning, scientific integrity, innovation, and creating an inclusive environment where every student can thrive.",
  },
]

const features = [
  {
    icon: FlaskConical,
    title: "State-of-the-Art Labs",
    description: "Modern laboratory facilities equipped with cutting-edge instruments for hands-on learning.",
  },
  {
    icon: Microscope,
    title: "Advanced Equipment",
    description: "Access to professional-grade microscopes, spectrometers, and analytical instruments.",
  },
  {
    icon: BookOpen,
    title: "Expert Faculty",
    description: "Learn from experienced educators and researchers with advanced degrees and industry experience.",
  },
  {
    icon: Award,
    title: "Recognized Certifications",
    description: "Industry-recognized certificates that enhance your academic and professional credentials.",
  },
]

const stats = [
  { number: "15+", label: "Years of Excellence" },
  { number: "500+", label: "Graduates" },
  { number: "25+", label: "Expert Tutors" },
  { number: "95%", label: "Success Rate" },
]

const teamMembers = [
  {
    name: "Dr. Robert Anderson",
    title: "Academy Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "PhD in Biochemistry with 20+ years in education leadership",
  },
  {
    name: "Prof. Lisa Chen",
    title: "Academic Coordinator",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Former university professor specializing in curriculum development",
  },
  {
    name: "Dr. Maria Santos",
    title: "Research Director",
    image: "/placeholder.svg?height=200&width=200",
    bio: "Leading researcher in molecular biology and genetics",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            About <span className="text-primary">Our Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our story, mission, and commitment to excellence in Biology and Chemistry education.
          </p>
        </div>

        {/* Mission, Vision, Values */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {missionValues.map((item, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{item.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="leading-relaxed">{item.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Academy History */}
        <div className="mb-20">
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center space-x-2 mb-4">
                  <History className="h-6 w-6 text-primary" />
                  <h3 className="font-heading font-bold text-2xl">Our History</h3>
                </div>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Founded in 2009, BioChemistry Academy began as a small tutoring center with a vision to provide
                    exceptional education in the life sciences. Our founders, Dr. Robert Anderson and Prof. Lisa Chen,
                    recognized the need for specialized, hands-on learning in Biology and Chemistry.
                  </p>
                  <p>
                    Over the years, we've grown from a modest facility to a state-of-the-art academy with modern
                    laboratories, expert faculty, and a comprehensive curriculum that bridges theoretical knowledge with
                    practical application.
                  </p>
                  <p>
                    Today, we're proud to have graduated over 500 students who have gone on to pursue successful careers
                    in medicine, research, biotechnology, and academia. Our commitment to excellence continues to drive
                    innovation in science education.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <Card key={index} className="text-center bg-gradient-to-br from-primary/5 to-accent/5">
                    <CardContent className="pt-6">
                      <div className="text-3xl font-heading font-black text-primary mb-2">{stat.number}</div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="mb-20">
          <h3 className="font-heading font-bold text-2xl text-center mb-12">Why Choose Our Academy</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <feature.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-sm leading-relaxed">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <h3 className="font-heading font-bold text-2xl text-center mb-12">Leadership Team</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarImage src={member.image || "/placeholder.svg"} alt={member.name} />
                    <AvatarFallback>
                      {member.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <CardTitle className="text-xl">{member.name}</CardTitle>
                  <CardDescription className="font-medium text-primary">{member.title}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

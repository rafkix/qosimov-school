"use client"

import { useState } from "react"
import { Award, BookOpen, CheckCircle, Trophy, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"

// 🔹 Helper Components
const BadgeList = ({ items }: { items: string[] }) => (
  <div className="flex flex-wrap gap-1">
    {items.map((item, i) => (
      <Badge key={i} variant="secondary" className="text-xs">
        {item}
      </Badge>
    ))}
  </div>
)

const StatsCard = ({ icon: Icon, title, value, variant }: { icon: any; title: string; value: string; variant: "default" | "secondary" | "outline" }) => (
  <Card className="bg-background/50 backdrop-blur border shadow-sm">
    <CardHeader className="flex flex-row items-center justify-between pb-2">
      <CardTitle className="text-sm font-medium">{title}</CardTitle>
      <div className={`p-2 rounded-full ${variant === "default" ? "bg-primary text-primary-foreground" : variant === "secondary" ? "bg-secondary text-secondary-foreground" : "bg-muted text-muted-foreground"}`}>
        <Icon className="h-4 w-4" />
      </div>
    </CardHeader>
    <CardContent>
      <div className="text-2xl font-bold">{value}</div>
    </CardContent>
  </Card>
)

// 🔹 Mock Data
const certificates = [
  {
    id: 1,
    title: "Cell Biology Fundamentals Certificate",
    description: "Awarded for completion of core cell biology modules with distinction.",
    image: "/certificates/cell-biology.png",
    category: "Biology",
    level: "Foundation",
    issueDate: "June 2024",
    validUntil: "June 2026",
    credentialId: "CBC-2024-001",
    skills: ["Cell Structure", "Molecular Biology", "Lab Techniques"],
    recipients: ["John Doe", "Sara Karimova"]
  },
  {
    id: 2,
    title: "Organic Chemistry Proficiency Certificate",
    description: "Recognition of excellence in advanced organic chemistry coursework.",
    image: "/certificates/organic-chem.png",
    category: "Chemistry",
    level: "Intermediate",
    issueDate: "July 2024",
    validUntil: "July 2027",
    credentialId: "OCP-2024-045",
    skills: ["Synthesis", "Spectroscopy", "Reaction Mechanisms"],
    recipients: ["Michael Smith", "Aisha Umar"]
  }
]

const achievements = [
  {
    id: 1,
    title: "National Biology Olympiad Winner",
    description: "Students from our academy achieved top 3 positions in the national competition.",
    icon: Trophy,
    recipients: ["John Doe", "Sara Karimova"],
    date: "May 2024",
    category: "Competition"
  },
  {
    id: 2,
    title: "Research Paper Publication",
    description: "Student research featured in International Journal of Chemistry Education.",
    icon: BookOpen,
    recipients: ["Michael Smith"],
    date: "April 2024",
    category: "Research"
  }
]

const studentStats = [
  { title: "Total Certificates", value: "2,345", icon: Award, variant: "default" },
  { title: "Active Certifications", value: "1,872", icon: CheckCircle, variant: "secondary" },
  { title: "Average Score", value: "92%", icon: Users, variant: "outline" },
  { title: "Completion Rate", value: "87%", icon: Trophy, variant: "default" }
]

export function CertificatesSection() {
  const [filter, setFilter] = useState("All")
  const [credentialId, setCredentialId] = useState("")
  const [verification, setVerification] = useState<"success" | "error" | null>(null)

  const handleVerification = () => {
    const found = certificates.find(c => c.credentialId === credentialId)
    setVerification(found ? "success" : "error")
  }

  return (
    <section className="py-10 px-4 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Certificates & Achievements</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Our certification program validates student knowledge and provides internationally recognized credentials.
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-16">
          {/* {studentStats.map((stat, i) => (
            <StatsCard key={i} {...stat} />
          ))} */}
        </div>

        {/* Verification */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-4">Verify Certificate</h3>
          <div className="flex gap-2 max-w-md">
            <Input placeholder="Enter Credential ID" value={credentialId} onChange={e => setCredentialId(e.target.value)} />
            <Button onClick={handleVerification}>Verify</Button>
          </div>
          {verification && (
            <Alert variant={verification === "success" ? "default" : "destructive"} className="mt-4">
              <AlertDescription>
                {verification === "success" ? "Certificate found and verified." : "No certificate found for this ID."}
              </AlertDescription>
            </Alert>
          )}
        </div>

        {/* Certificates */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8">Certificate Gallery</h3>
          <div className="flex gap-2 mb-6">
            {["All", "Biology", "Chemistry"].map(cat => (
              <Button key={cat} variant={filter === cat ? "default" : "outline"} size="sm" onClick={() => setFilter(cat)}>
                {cat}
              </Button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {certificates.filter(c => filter === "All" || c.category === filter).map(cert => (
              <Card key={cert.id} className="hover:shadow-lg transition-all bg-background/50 backdrop-blur">
                <CardHeader>
                  <CardTitle>{cert.title}</CardTitle>
                  <CardDescription>{cert.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={cert.image} alt={cert.title} className="w-full rounded-lg mb-4" />
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button className="w-full">View Details</Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>{cert.title}</DialogTitle>
                      </DialogHeader>
                      <p className="mb-4">{cert.description}</p>
                      <div className="space-y-2 text-sm">
                        <div><strong>Issue Date:</strong> {cert.issueDate}</div>
                        <div><strong>Valid Until:</strong> {cert.validUntil}</div>
                        <div><strong>Credential ID:</strong> {cert.credentialId}</div>
                      </div>
                      <h4 className="mt-4 font-semibold">Skills Covered</h4>
                      <BadgeList items={cert.skills} />
                      <h4 className="mt-4 font-semibold">Recipients</h4>
                      <BadgeList items={cert.recipients} />
                    </DialogContent>
                  </Dialog>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Achievements */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Student Achievements</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {achievements.map(a => (
              <Card key={a.id} className="hover:shadow-xl transition-all bg-background/50 backdrop-blur">
                <CardHeader className="flex items-center gap-4">
                  <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <a.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <CardTitle>{a.title}</CardTitle>
                    <CardDescription>{a.description}</CardDescription>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between text-sm text-muted-foreground mb-2">
                    <span>Date: {a.date}</span>
                    <Badge variant="outline">{a.category}</Badge>
                  </div>
                  <h5 className="font-semibold text-sm mb-2">Recipients:</h5>
                  <BadgeList items={a.recipients} />
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button size="lg" className="px-8 py-6 text-lg">Apply for Certification</Button>
        </div>
      </div>
    </section>
  )
}

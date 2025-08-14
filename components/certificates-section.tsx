"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Alert, AlertDescription } from "@/components/ui/alert"
import {
  Award,
  Shield,
  Users,
  TrendingUp,
  Search,
  CheckCircle,
  XCircle,
  Star,
  Calendar,
  Download,
  ExternalLink,
} from "lucide-react"

interface Certificate {
  id: string
  title: string
  description: string
  image: string
  category: "biology" | "chemistry" | "advanced" | "achievement"
  level: "Foundation" | "Intermediate" | "Advanced" | "Expert"
  issueDate: string
  validUntil: string
  credentialId: string
  skills: string[]
  recipients: number
}

interface StudentStats {
  totalCertificates: number
  activeCertifications: number
  averageScore: number
  completionRate: number
  topPerformers: number
}

interface Achievement {
  id: string
  title: string
  description: string
  icon: React.ComponentType<{ className?: string }>
  category: "academic" | "research" | "competition" | "community"
  date: string
  recipients: string[]
}

const certificates: Certificate[] = [
  {
    id: "cell-bio-cert",
    title: "Cell Biology Fundamentals Certificate",
    description: "Comprehensive certification in cellular structure, function, and laboratory techniques.",
    image: "/placeholder.svg?height=300&width=400",
    category: "biology",
    level: "Foundation",
    issueDate: "2024-01-15",
    validUntil: "2027-01-15",
    credentialId: "CBC-2024-001",
    skills: ["Microscopy", "Cell Culture", "Cellular Analysis", "Laboratory Safety"],
    recipients: 156,
  },
  {
    id: "organic-chem-cert",
    title: "Organic Chemistry Mastery Certificate",
    description: "Advanced certification in organic synthesis, mechanisms, and analytical techniques.",
    image: "/placeholder.svg?height=300&width=400",
    category: "chemistry",
    level: "Advanced",
    issueDate: "2024-02-20",
    validUntil: "2027-02-20",
    credentialId: "OCM-2024-002",
    skills: ["Organic Synthesis", "Reaction Mechanisms", "Spectroscopy", "Purification Techniques"],
    recipients: 89,
  },
  {
    id: "genetics-cert",
    title: "Genetics & DNA Analysis Certificate",
    description: "Specialized certification in genetic engineering and molecular analysis techniques.",
    image: "/placeholder.svg?height=300&width=400",
    category: "biology",
    level: "Expert",
    issueDate: "2024-03-10",
    validUntil: "2027-03-10",
    credentialId: "GDA-2024-003",
    skills: ["DNA Extraction", "PCR Techniques", "Gene Expression", "CRISPR Technology"],
    recipients: 67,
  },
  {
    id: "research-excellence",
    title: "Research Excellence Award",
    description: "Recognition for outstanding contribution to scientific research and innovation.",
    image: "/placeholder.svg?height=300&width=400",
    category: "achievement",
    level: "Expert",
    issueDate: "2024-04-05",
    validUntil: "Lifetime",
    credentialId: "REA-2024-004",
    skills: ["Research Methodology", "Data Analysis", "Scientific Writing", "Innovation"],
    recipients: 23,
  },
]

const achievements: Achievement[] = [
  {
    id: "olympiad-gold",
    title: "Chemistry Olympiad Gold Medal",
    description: "First place in National Chemistry Olympiad competition",
    icon: Award,
    category: "competition",
    date: "2024-05-15",
    recipients: ["Sarah Johnson", "Michael Chen", "Emma Rodriguez"],
  },
  {
    id: "research-publication",
    title: "Research Publication Achievement",
    description: "Students published research in peer-reviewed scientific journals",
    icon: Star,
    category: "research",
    date: "2024-06-20",
    recipients: ["David Kim", "Lisa Wang", "Alex Thompson", "Maria Garcia"],
  },
  {
    id: "university-acceptance",
    title: "Top University Acceptance",
    description: "Accepted to prestigious universities for advanced studies",
    icon: TrendingUp,
    category: "academic",
    date: "2024-07-10",
    recipients: ["John Smith", "Anna Lee", "Robert Brown", "Sophie Wilson", "James Davis"],
  },
  {
    id: "community-service",
    title: "Science Community Service Award",
    description: "Outstanding contribution to science education in local communities",
    icon: Users,
    category: "community",
    date: "2024-08-01",
    recipients: ["Emily Johnson", "Carlos Martinez"],
  },
]

const studentStats: StudentStats = {
  totalCertificates: 1247,
  activeCertifications: 892,
  averageScore: 87.5,
  completionRate: 94.2,
  topPerformers: 156,
}

export function CertificatesSection() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [verificationId, setVerificationId] = useState("")
  const [verificationResult, setVerificationResult] = useState<{
    status: "idle" | "loading" | "success" | "error"
    data?: Certificate | null
    message?: string
  }>({ status: "idle" })

  const categories = [
    { id: "all", label: "All Certificates", count: certificates.length },
    { id: "biology", label: "Biology", count: certificates.filter((c) => c.category === "biology").length },
    { id: "chemistry", label: "Chemistry", count: certificates.filter((c) => c.category === "chemistry").length },
    { id: "advanced", label: "Advanced", count: certificates.filter((c) => c.category === "advanced").length },
    {
      id: "achievement",
      label: "Achievements",
      count: certificates.filter((c) => c.category === "achievement").length,
    },
  ]

  const filteredCertificates =
    selectedCategory === "all" ? certificates : certificates.filter((cert) => cert.category === selectedCategory)

  const handleVerification = async () => {
    if (!verificationId.trim()) return

    setVerificationResult({ status: "loading" })

    // Simulate API call for certificate verification
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500))

      // Mock verification logic
      const foundCertificate = certificates.find((cert) => cert.credentialId === verificationId.toUpperCase())

      if (foundCertificate) {
        setVerificationResult({
          status: "success",
          data: foundCertificate,
          message: "Certificate verified successfully!",
        })
      } else {
        setVerificationResult({
          status: "error",
          data: null,
          message: "Certificate not found. Please check the credential ID and try again.",
        })
      }
    } catch (error) {
      setVerificationResult({
        status: "error",
        data: null,
        message: "Verification failed. Please try again later.",
      })
    }
  }

  const getLevelColor = (level: string) => {
    switch (level) {
      case "Foundation":
        return "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300"
      case "Intermediate":
        return "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300"
      case "Advanced":
        return "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300"
      case "Expert":
        return "bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-300"
      default:
        return "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300"
    }
  }

  return (
    <section
      id="certificates"
      className="py-20 bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="font-heading font-black text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Certificates & <span className="text-primary">Achievements</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Recognize your expertise with industry-recognized certifications and celebrate outstanding achievements in
            Biology and Chemistry.
          </p>
        </div>

        {/* Student Statistics */}
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 mb-16">
          <Card className="text-center bg-background/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-3xl font-heading font-bold text-primary mb-2">{studentStats.totalCertificates}</div>
              <div className="text-sm text-muted-foreground">Total Certificates</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-background/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-3xl font-heading font-bold text-primary mb-2">
                {studentStats.activeCertifications}
              </div>
              <div className="text-sm text-muted-foreground">Active Certifications</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-background/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-3xl font-heading font-bold text-primary mb-2">{studentStats.averageScore}%</div>
              <div className="text-sm text-muted-foreground">Average Score</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-background/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-3xl font-heading font-bold text-primary mb-2">{studentStats.completionRate}%</div>
              <div className="text-sm text-muted-foreground">Completion Rate</div>
            </CardContent>
          </Card>
          <Card className="text-center bg-background/50 backdrop-blur">
            <CardContent className="pt-6">
              <div className="text-3xl font-heading font-bold text-primary mb-2">{studentStats.topPerformers}</div>
              <div className="text-sm text-muted-foreground">Top Performers</div>
            </CardContent>
          </Card>
        </div>

        {/* Certificate Verification */}
        <div className="max-w-2xl mx-auto mb-16">
          <Card className="bg-background/50 backdrop-blur">
            <CardHeader className="text-center">
              <CardTitle className="flex items-center justify-center space-x-2">
                <Shield className="h-5 w-5 text-primary" />
                <span>Certificate Verification</span>
              </CardTitle>
              <CardDescription>
                Verify the authenticity of certificates issued by our academy using the credential ID.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex space-x-2">
                <div className="flex-1">
                  <Label htmlFor="verification-id">Credential ID</Label>
                  <Input
                    id="verification-id"
                    placeholder="e.g., CBC-2024-001"
                    value={verificationId}
                    onChange={(e) => setVerificationId(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleVerification()}
                  />
                </div>
                <Button
                  onClick={handleVerification}
                  disabled={verificationResult.status === "loading" || !verificationId.trim()}
                  className="mt-6"
                >
                  {verificationResult.status === "loading" ? (
                    <>
                      <Search className="h-4 w-4 mr-2 animate-spin" />
                      Verifying...
                    </>
                  ) : (
                    <>
                      <Search className="h-4 w-4 mr-2" />
                      Verify
                    </>
                  )}
                </Button>
              </div>

              {verificationResult.status !== "idle" && (
                <Alert className={verificationResult.status === "success" ? "border-green-500" : "border-red-500"}>
                  {verificationResult.status === "success" ? (
                    <CheckCircle className="h-4 w-4 text-green-500" />
                  ) : (
                    <XCircle className="h-4 w-4 text-red-500" />
                  )}
                  <AlertDescription>
                    {verificationResult.message}
                    {verificationResult.data && (
                      <div className="mt-3 p-3 bg-background rounded-lg">
                        <div className="font-semibold">{verificationResult.data.title}</div>
                        <div className="text-sm text-muted-foreground mt-1">
                          Level: {verificationResult.data.level} | Issued: {verificationResult.data.issueDate} | Valid
                          until: {verificationResult.data.validUntil}
                        </div>
                      </div>
                    )}
                  </AlertDescription>
                </Alert>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Certificate Gallery */}
        <div className="mb-16">
          <h3 className="font-heading font-bold text-2xl mb-8 text-center">Certificate Gallery</h3>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                onClick={() => setSelectedCategory(category.id)}
                className="flex items-center space-x-2"
              >
                <span>{category.label}</span>
                <Badge variant="secondary" className="ml-2">
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>

          {/* Certificates Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCertificates.map((certificate) => (
              <Card
                key={certificate.id}
                className="group hover:shadow-xl transition-all duration-300 bg-background/50 backdrop-blur"
              >
                <div className="relative overflow-hidden rounded-t-lg">
                  <img
                    src={certificate.image || "/placeholder.svg"}
                    alt={certificate.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <Badge className={getLevelColor(certificate.level)}>{certificate.level}</Badge>
                  </div>
                  <div className="absolute top-4 right-4">
                    <Badge variant="outline" className="bg-background/80">
                      <Users className="h-3 w-3 mr-1" />
                      {certificate.recipients}
                    </Badge>
                  </div>
                </div>
                <CardHeader>
                  <CardTitle className="group-hover:text-primary transition-colors">{certificate.title}</CardTitle>
                  <CardDescription>{certificate.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <Calendar className="h-4 w-4" />
                      <span>Valid until {certificate.validUntil}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Shield className="h-4 w-4" />
                      <span>{certificate.credentialId}</span>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-semibold text-sm mb-2">Skills Covered:</h5>
                    <div className="flex flex-wrap gap-1">
                      {certificate.skills.map((skill, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" size="sm" className="flex-1 bg-transparent">
                          <ExternalLink className="h-4 w-4 mr-2" />
                          View Details
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="max-w-2xl">
                        <DialogHeader>
                          <DialogTitle>{certificate.title}</DialogTitle>
                          <DialogDescription>{certificate.description}</DialogDescription>
                        </DialogHeader>
                        <div className="space-y-4">
                          <img
                            src={certificate.image || "/placeholder.svg"}
                            alt={certificate.title}
                            className="w-full h-64 object-cover rounded-lg"
                          />
                          <div className="grid grid-cols-2 gap-4">
                            <div>
                              <h4 className="font-semibold mb-2">Certificate Details</h4>
                              <div className="space-y-2 text-sm">
                                <div>
                                  <strong>Level:</strong> {certificate.level}
                                </div>
                                <div>
                                  <strong>Credential ID:</strong> {certificate.credentialId}
                                </div>
                                <div>
                                  <strong>Issue Date:</strong> {certificate.issueDate}
                                </div>
                                <div>
                                  <strong>Valid Until:</strong> {certificate.validUntil}
                                </div>
                                <div>
                                  <strong>Recipients:</strong> {certificate.recipients} students
                                </div>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-semibold mb-2">Skills & Competencies</h4>
                              <div className="space-y-1">
                                {certificate.skills.map((skill, index) => (
                                  <div key={index} className="flex items-center space-x-2 text-sm">
                                    <CheckCircle className="h-3 w-3 text-primary" />
                                    <span>{skill}</span>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                    <Button size="sm" className="flex-1">
                      <Download className="h-4 w-4 mr-2" />
                      Sample
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Student Achievements */}
        <div>
          <h3 className="font-heading font-bold text-2xl mb-8 text-center">Student Achievements</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {achievements.map((achievement) => (
              <Card key={achievement.id} className="bg-background/50 backdrop-blur">
                <CardHeader>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                      <achievement.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-lg">{achievement.title}</CardTitle>
                      <CardDescription>{achievement.date}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{achievement.description}</p>
                  <div>
                    <h5 className="font-semibold text-sm mb-2">Recipients:</h5>
                    <div className="flex flex-wrap gap-2">
                      {achievement.recipients.slice(0, 3).map((recipient, index) => (
                        <Badge key={index} variant="outline">
                          {recipient}
                        </Badge>
                      ))}
                      {achievement.recipients.length > 3 && (
                        <Badge variant="outline">+{achievement.recipients.length - 3} more</Badge>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

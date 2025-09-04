import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { SchoolActivities } from "@/components/school-activities"
import WhyChooseUs from "@/components/why-choose-us"
import CertificatesPower from "@/components/certificates-power"
import StudentTestimonials from "@/components/student-testimonials"
import TeachersShowcase from "@/components/teachers-showcase"
import { Footer } from "@/components/footer"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <WhyChooseUs />
      <CertificatesPower />
      <StudentTestimonials />
      <TeachersShowcase />
      <SchoolActivities />
      <Footer />
    </main>
  )
}

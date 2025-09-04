import { HeroSection } from "@/components/sections/hero-section"
import { SchoolActivities } from "@/components/sections/school-activities"
import WhyChooseUs from "@/components/sections/why-choose-us"
import CertificatesPower from "@/components/sections/certificates-power"
import StudentTestimonials from "@/components/sections/student-testimonials"
import TeachersShowcase from "@/components/sections/teachers-showcase"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <WhyChooseUs />
      <CertificatesPower />
      <StudentTestimonials />
      <TeachersShowcase />
      <SchoolActivities />
    </main>
  )
}

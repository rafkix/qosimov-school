import { Header } from "@/components/header"
import { AdmissionSection } from "@/components/admission-section"
import { Footer } from "@/components/footer"


export default function AdmissionPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AdmissionSection />
      <main className="pt-20">
      </main>
      <Footer />
    </div>
  )
}

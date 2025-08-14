import { Header } from "@/components/header"
import { TutorsSection } from "@/components/tutors-section"
import { Footer } from "@/components/footer"

export default function TutorsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <TutorsSection />
      </main>
      <Footer />
    </div>
  )
}

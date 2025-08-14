import { Header } from "@/components/header"
import { CoursesSection } from "@/components/courses-section"
import { Footer } from "@/components/footer"

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <CoursesSection />
      </main>
      <Footer />
    </div>
  )
}

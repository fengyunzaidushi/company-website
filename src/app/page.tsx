import { HeroSection } from '@/components/sections/HeroSection'
import { CoursesSection } from '@/components/sections/CoursesSection'
import { InstructorsSection } from '@/components/sections/InstructorsSection'
import { ContactSection } from '@/components/sections/ContactSection'

export default function Home() {
  return (
    <main>
      <HeroSection />
      <CoursesSection />
      <InstructorsSection />
      <ContactSection />
    </main>
  )
}

import Navbar from "@/components/navbar"
import HeroSection from "@/components/hero-section"
import AnimatedBanner from "@/components/animated-banner"
import FeaturesSection from "@/components/features-section"
import OmnichannelSection from "@/components/omnichannel-section"
import AgentsSection from "@/components/agents-section"
import SolutionsSection from "@/components/solutions-section"
import StatsSection from "@/components/stats-section"
import TestimonialsSection from "@/components/testimonials-section"
import TrustSection from "@/components/trust-section"
import ExperienceSection from "@/components/experience-section"
import FinalCTASection from "@/components/final-cta-section"
import Footer from "@/components/footer"

const companyLogos = ["Meta", "Google", "YouTube", "WhatsApp", "HubSpot", "RD Station", "Groq"]

const countries = ["🇧🇷 Brasil", "🇦🇷 Argentina", "🇵🇾 Paraguai", "🇨🇱 Chile", "🇺🇾 Uruguai", "🇵🇪 Peru"]

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />

      <AnimatedBanner items={companyLogos} text="Integre com as ferramentas que você já usa" direction="left" />

      <FeaturesSection />

      <OmnichannelSection />

      <AnimatedBanner
        items={["Implementação completa em até 15 dias", "Do briefing à ativação"]}
        direction="right"
        variant="timeline"
      />

      <AgentsSection />

      <AnimatedBanner items={countries} text="Atendemos empresas em toda América Latina" direction="left" />

      <SolutionsSection />

      <StatsSection />

      <TestimonialsSection />

      <TrustSection />

      <ExperienceSection />

      <FinalCTASection />

      <Footer />
    </main>
  )
}

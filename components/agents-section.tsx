"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  TrendingUp,
  HeadphonesIcon,
  DollarSign,
  Search,
  BarChart3,
  RefreshCw,
  CreditCard,
  Settings,
  Lightbulb,
  ChevronLeft,
  ChevronRight,
} from "lucide-react"

export default function AgentsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredAgent, setHoveredAgent] = useState<number | null>(null)
  const [currentSlide, setCurrentSlide] = useState(0)
  const sectionRef = useRef<HTMLElement>(null)

  const agents = [
    {
      name: "Jhon",
      specialty: "Prospecção",
      description:
        "Identifica e contata potenciais clientes, usando sua habilidade para despertar interesse e alimentar o funil de vendas com leads promissores.",
      icon: Search,
    },
    {
      name: "Camila",
      specialty: "Pré-venda e Qualificação",
      description:
        "Aborda leads de forma ativa com promoções, mensagens personalizadas e lembretes estratégicos. Detecta idioma e país automaticamente.",
      icon: TrendingUp,
    },
    {
      name: "Sofía",
      specialty: "Fechamento de Vendas",
      description:
        "Conduz o lead à conversão com uma abordagem segura, empática e técnica. Responde dúvidas e aplica gatilhos de urgência.",
      icon: DollarSign,
    },
    {
      name: "Andrés",
      specialty: "Suporte ao Cliente",
      description:
        "Resolve dúvidas e problemas após a compra com rapidez e cordialidade. Atua em temas como prazos, trocas e entregas.",
      icon: HeadphonesIcon,
    },
    {
      name: "Tomás",
      specialty: "Experiência do Cliente (CX)",
      description:
        "Monitora a jornada do cliente em tempo real, analisa padrões de comportamento e identifica pontos de melhoria.",
      icon: BarChart3,
    },
    {
      name: "Nicolas",
      specialty: "Reativação e Follow-up",
      description:
        "Dispara ações de follow-up em leads inativos. Utiliza estratégias de engajamento para estimular recompra.",
      icon: RefreshCw,
    },
    {
      name: "Clara",
      specialty: "Cobrança e Regularização",
      description: "Gera links de pagamento por meios locais e confirma status de quitação em tempo real.",
      icon: CreditCard,
    },
    {
      name: "Gabriel",
      specialty: "Automação de Processos",
      description:
        "Gerencia os bastidores da operação: integra canais, dispara automações e conecta ferramentas como CRM.",
      icon: Settings,
    },
    {
      name: "Lis",
      specialty: "Criação de Processos",
      description:
        "Analisa o comportamento dos leads para desenhar novos funis automatizados e identificar oportunidades.",
      icon: Lightbulb,
    },
  ]

  const slidesToShow = {
    mobile: 1,
    tablet: 2,
    desktop: 3,
  }

  const totalSlides = Math.ceil(agents.length / slidesToShow.desktop)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Auto-play functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 4000)

    return () => clearInterval(interval)
  }, [totalSlides])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
  }

  const getVisibleAgents = () => {
    const startIndex = currentSlide * slidesToShow.desktop
    return agents.slice(startIndex, startIndex + slidesToShow.desktop)
  }

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-montserrat font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Conheça Nossos{" "}
            <span className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] bg-clip-text text-transparent">
              Agentes Especializados
            </span>
          </h2>
          <p
            className={`text-xl font-poppins text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Cada agente tem personalidade única e expertise específica para atender suas necessidades de negócio
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6 text-gray-600" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 backdrop-blur-sm border border-gray-200 rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-white"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6 text-gray-600" />
          </button>

          {/* Cards Container */}
          <div className="overflow-hidden mx-12">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{
                transform: `translateX(-${currentSlide * 100}%)`,
              }}
            >
              {Array.from({ length: totalSlides }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                    {agents
                      .slice(slideIndex * slidesToShow.desktop, (slideIndex + 1) * slidesToShow.desktop)
                      .map((agent, agentIndex) => {
                        const Icon = agent.icon
                        const globalIndex = slideIndex * slidesToShow.desktop + agentIndex
                        return (
                          <Card
                            key={agent.name}
                            className={`group cursor-pointer bg-white/80 backdrop-blur-sm border border-gray-200 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 ${
                              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                            }`}
                            style={{ transitionDelay: `${agentIndex * 150}ms` }}
                            onMouseEnter={() => setHoveredAgent(globalIndex)}
                            onMouseLeave={() => setHoveredAgent(null)}
                          >
                            <CardContent className="p-0 overflow-hidden">
                              <div
                                className={`p-8 transition-all duration-300 ${hoveredAgent === globalIndex ? "scale-105" : ""}`}
                              >
                                <div className="text-center space-y-6">
                                  <div className="w-20 h-20 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-3xl flex items-center justify-center mx-auto shadow-lg group-hover:shadow-xl transition-all duration-300">
                                    <Icon className="w-10 h-10 text-white" />
                                  </div>

                                  <div>
                                    <h3 className="text-2xl font-montserrat font-bold text-gray-900 mb-1">
                                      {agent.name}
                                    </h3>
                                    <p className="font-poppins font-semibold bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] bg-clip-text text-transparent">
                                      {agent.specialty}
                                    </p>
                                  </div>

                                  <p className="font-poppins text-gray-600 leading-relaxed">{agent.description}</p>

                                  <div className="pt-4">
                                    <div className="inline-flex items-center gap-2 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] text-white px-4 py-2 rounded-full text-sm font-medium shadow-md group-hover:shadow-lg transition-all duration-300">
                                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                                      Online agora
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        )
                      })}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: totalSlides }).map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  currentSlide === index
                    ? "bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] scale-125"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div
          className={`text-center mt-16 transition-all duration-1000 delay-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <p className="font-poppins text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Nossos agentes trabalham 24/7, aprendem continuamente e se adaptam ao seu negócio. Cada um com personalidade
            única para diferentes momentos da jornada do cliente.
          </p>

          <Button
            size="lg"
            className="bg-[#2AE87C] hover:bg-[#2AE87C]/90 text-white px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-poppins text-lg"
          >
            Falar com nosso time
          </Button>
        </div>
      </div>
    </section>
  )
}

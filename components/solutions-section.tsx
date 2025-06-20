"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Smartphone, Target, Zap, BarChart3 } from "lucide-react"

export default function SolutionsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

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

  const solutions = [
    { icon: Target, title: "E-commerce", description: "Aumente conversões e reduza carrinho abandonado" },
    { icon: Smartphone, title: "Clínicas", description: "Agendamentos e lembretes automatizados" },
    { icon: BarChart3, title: "Imobiliárias", description: "Qualificação de leads e visitas" },
    { icon: Zap, title: "Varejo", description: "Atendimento personalizado e promoções" },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Infinitas Possibilidades.{" "}
                <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
                  Uma Única Solução.
                </span>
              </h2>
              <p className="text-xl text-gray-600 mb-8">
                Amplificar oportunidades de estratégias com os funis inteligentes que se adaptam ao seu negócio
              </p>
            </div>

            {/* Solutions Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {solutions.map((solution, index) => {
                const Icon = solution.icon
                return (
                  <Card
                    key={solution.title}
                    className={`group cursor-pointer border-0 shadow-md hover:shadow-xl transition-all duration-500 transform hover:scale-105 ${
                      isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
                    }`}
                    style={{ transitionDelay: `${200 + index * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-6 h-6 text-white" />
                        </div>
                        <div>
                          <h3 className="font-bold text-gray-900 mb-2">{solution.title}</h3>
                          <p className="text-gray-600 text-sm">{solution.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                )
              })}
            </div>

            <div
              className={`transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Quero essa solução na minha empresa
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* iPhone Mockup */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <div className="relative max-w-sm mx-auto">
              <div className="bg-black rounded-[3rem] p-2 shadow-2xl">
                <div className="bg-white rounded-[2.5rem] overflow-hidden">
                  {/* iPhone Header */}
                  <div className="bg-gray-900 px-6 py-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                      <span className="text-white text-sm font-medium">WhatsApp</span>
                    </div>
                    <div className="text-white text-xs">14:30</div>
                  </div>

                  {/* Conversation */}
                  <div className="p-4 space-y-4 bg-gray-50 min-h-[500px]">
                    <div className="bg-white rounded-2xl rounded-tl-sm p-4 max-w-xs shadow-sm">
                      <p className="text-sm text-gray-800">
                        Oi! Vi que você comprou um Apple iPhone recentemente. Temos uma promoção exclusiva de iPod com
                        40% OFF!
                      </p>
                    </div>

                    <div className="bg-green-500 text-white rounded-2xl rounded-tr-sm p-4 max-w-xs ml-auto shadow-sm">
                      <p className="text-sm">Interessante! Pode me mostrar?</p>
                    </div>

                    <div className="bg-white rounded-2xl rounded-tl-sm p-4 max-w-xs shadow-sm">
                      <div className="space-y-3">
                        <p className="text-sm text-gray-800">
                          Claro! Baseado no seu perfil Apple, selecionei estes modelos:
                        </p>

                        <div className="bg-gray-50 rounded-lg p-3">
                          <div className="flex items-center gap-3">
                            <div className="w-12 h-12 bg-gradient-to-r from-lime-500 to-green-500 rounded-lg flex items-center justify-center">
                              <span className="text-white text-xs font-bold">iPod</span>
                            </div>
                            <div>
                              <p className="font-semibold text-sm">iPod Touch 256GB</p>
                              <p className="text-xs text-gray-600">De R$ 2.499 por R$ 1.499</p>
                            </div>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600">Oferta válida até amanhã! Quer garantir o seu?</p>
                      </div>
                    </div>

                    <div className="bg-green-500 text-white rounded-2xl rounded-tr-sm p-4 max-w-xs ml-auto shadow-sm">
                      <p className="text-sm">Quero sim! Como faço?</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 bg-lime-500 rounded-full p-3 shadow-lg animate-bounce">
                <Target className="w-6 h-6 text-white" />
              </div>

              <div className="absolute -bottom-4 -left-4 bg-blue-500 rounded-full p-3 shadow-lg animate-pulse">
                <BarChart3 className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

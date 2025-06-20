"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { MessageSquare, Users, TrendingUp, Settings } from "lucide-react"

export default function FeaturesSection() {
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

  const steps = [
    {
      title: "Briefing Estratégico",
      description: "Analisamos profundamente seu negócio, público-alvo e objetivos para criar a estratégia perfeita",
      icon: MessageSquare,
    },
    {
      title: "Configuração Inteligente",
      description: "Desenvolvemos e treinamos sua IA personalizada com a personalidade da sua marca",
      icon: Settings,
    },
    {
      title: "Ativação Completa",
      description: "Implementamos a solução em todos os seus canais e realizamos testes de qualidade",
      icon: TrendingUp,
    },
    {
      title: "Resultados Mensuráveis",
      description: "Acompanhamos métricas em tempo real e otimizamos continuamente a performance",
      icon: Users,
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Como Transformamos Seu <span className="text-[#0AD4CA]">Atendimento</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Timeline */}
          <div className="space-y-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <div
                  key={index}
                  className={`flex items-start gap-6 transition-all duration-1000 ${
                    isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
                  }`}
                  style={{ transitionDelay: `${index * 200}ms` }}
                >
                  <div className="flex-shrink-0">
                    <Icon
                      className="w-12 h-12 text-[#0AD4CA]"
                      style={{
                        filter: "drop-shadow(0 2px 4px rgba(10, 212, 202, 0.2))",
                      }}
                    />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold font-montserrat text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600 text-lg font-poppins leading-relaxed">{step.description}</p>
                  </div>
                </div>
              )
            })}
          </div>

          {/* Visual Content */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            {/* Main Chat Interface */}
            <div className="relative">
              <Card className="shadow-2xl border-0 overflow-hidden bg-white">
                <CardContent className="p-0">
                  {/* Browser Header */}
                  <div className="bg-gray-100 px-4 py-3 flex items-center gap-2 border-b">
                    <div className="flex gap-1.5">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <div className="ml-4 text-sm text-gray-600">Chat ao Vivo</div>
                  </div>

                  {/* Chat Interface */}
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-10 h-10 bg-[#0AD4CA] rounded-full flex items-center justify-center">
                        <span className="text-white font-bold text-sm">AI</span>
                      </div>
                      <div>
                        <p className="font-semibold text-gray-900">Ana - Vendas Sayle.ai</p>
                        <p className="text-sm text-green-500 flex items-center gap-1">
                          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                          Online agora
                        </p>
                      </div>
                    </div>

                    <div className="space-y-4 mb-6">
                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-sm">
                        <p className="text-sm text-gray-800">
                          Oi! Vi que você está procurando tênis para corrida. Posso te ajudar a encontrar o modelo
                          perfeito? 😊
                        </p>
                      </div>

                      <div className="bg-[#0AD4CA] text-white rounded-2xl rounded-tr-sm p-4 max-w-xs ml-auto">
                        <p className="text-sm">Sim! Preciso de algo confortável para corridas longas</p>
                      </div>

                      <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4 max-w-md">
                        <p className="text-sm text-gray-800 mb-3">
                          Perfeito! Baseado no seu perfil, selecionei estas opções:
                        </p>

                        {/* Product Recommendations */}
                        <div className="space-y-3">
                          <div className="bg-white rounded-lg p-3 flex items-center gap-3 shadow-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-xs font-bold">NIKE</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-sm">Air Zoom Pegasus 40</p>
                              <p className="text-xs text-gray-600">De R$ 699 por R$ 559</p>
                            </div>
                            <div className="text-green-600 text-xs font-bold">20% OFF</div>
                          </div>

                          <div className="bg-white rounded-lg p-3 flex items-center gap-3 shadow-sm">
                            <div className="w-12 h-12 bg-gradient-to-br from-red-500 to-pink-600 rounded-lg flex items-center justify-center">
                              <span className="text-white text-xs font-bold">ADIDAS</span>
                            </div>
                            <div className="flex-1">
                              <p className="font-semibold text-sm">Ultraboost 23</p>
                              <p className="text-xs text-gray-600">De R$ 899 por R$ 719</p>
                            </div>
                            <div className="text-green-600 text-xs font-bold">Frete Grátis</div>
                          </div>
                        </div>

                        <p className="text-xs text-gray-600 mt-3">Qual desperta mais seu interesse?</p>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                      <div className="text-center">
                        <div className="text-lg font-bold text-[#0AD4CA]">+127</div>
                        <div className="text-xs text-gray-600">Leads hoje</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-blue-600">43</div>
                        <div className="text-xs text-gray-600">Vendas</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-purple-600">98%</div>
                        <div className="text-xs text-gray-600">Satisfação</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Floating Mobile Interface */}
              <div className="absolute -bottom-8 -right-8 w-48 z-10">
                <Card className="shadow-xl border-0 bg-white rounded-3xl overflow-hidden">
                  <CardContent className="p-0">
                    {/* Mobile Header */}
                    <div className="bg-[#0AD4CA] px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs font-bold">WA</span>
                        </div>
                        <span className="text-white text-sm font-medium">WhatsApp Business</span>
                      </div>
                    </div>

                    {/* Mobile Chat */}
                    <div className="p-3 space-y-2 bg-gray-50 min-h-32">
                      <div className="bg-white rounded-lg rounded-tl-sm p-2 max-w-32 text-xs">
                        Oi! Como posso ajudar?
                      </div>
                      <div className="bg-[#0AD4CA] text-white rounded-lg rounded-tr-sm p-2 max-w-28 ml-auto text-xs">
                        Quero ver promoções
                      </div>
                      <div className="bg-white rounded-lg rounded-tl-sm p-2 max-w-32 text-xs">
                        Temos 30% OFF em eletrônicos! 🔥
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Floating Dashboard Stats */}
              <div className="absolute -top-6 -left-6 z-10">
                <Card className="shadow-lg border-0 bg-white rounded-xl">
                  <CardContent className="p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-[#0AD4CA] rounded-lg flex items-center justify-center">
                        <TrendingUp className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">+300%</div>
                        <div className="text-xs text-gray-600">Conversões</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Brain, TrendingUp, Users, Zap, ArrowRight } from "lucide-react"

export default function TrustSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeTab, setActiveTab] = useState(0)
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

  const features = [
    {
      title: "Humanização",
      description: "IA com personalidade natural",
      content:
        "Nossa IA não soa robótica. Ela conversa de forma natural, com empatia e personalidade única para cada contexto, criando conexões reais com seus clientes.",
      icon: Users,
      color: "from-lime-500 to-green-500",
    },
    {
      title: "Aprendizagem Contínua",
      description: "Melhora com cada interação",
      content:
        "Cada conversa torna nossa IA mais inteligente. Ela aprende com os padrões do seu negócio e se adapta continuamente para melhorar os resultados.",
      icon: Brain,
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Personalidade por Agente",
      description: "Cada agente tem seu perfil",
      content:
        "Ana é focada em vendas, Paulo é técnico no suporte, Maria é assertiva na cobrança. Cada agente tem personalidade única para diferentes situações.",
      icon: TrendingUp,
      color: "from-purple-500 to-pink-500",
    },
    {
      title: "Adaptação Inteligente",
      description: "Se molda ao seu negócio",
      content:
        "A IA se adapta ao tom da sua marca, aos produtos que você vende e ao perfil dos seus clientes, oferecendo uma experiência totalmente personalizada.",
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Sem Alucinações.{" "}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
              Só Performance Real.
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Nossa IA é treinada especificamente para conversas comerciais, garantindo respostas precisas e resultados
            consistentes
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Tab Navigation */}
          <div
            className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <button
                  key={feature.title}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 px-6 py-4 rounded-xl font-semibold transition-all duration-300 ${
                    activeTab === index
                      ? `bg-gradient-to-r ${feature.color} text-white shadow-lg scale-105`
                      : "bg-white text-gray-700 hover:bg-gray-50 shadow-md hover:shadow-lg"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <div className="text-left">
                    <div className="font-bold">{feature.title}</div>
                    <div className={`text-sm ${activeTab === index ? "text-white/90" : "text-gray-500"}`}>
                      {feature.description}
                    </div>
                  </div>
                </button>
              )
            })}
          </div>

          {/* Tab Content */}
          <Card
            className={`shadow-2xl border-0 transition-all duration-1000 delay-500 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
          >
            <CardContent className="p-8 md:p-12">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${features[activeTab].color} rounded-3xl flex items-center justify-center shadow-lg`}
                  >
                    {(() => {
                      const Icon = features[activeTab].icon
                      return <Icon className="w-10 h-10 text-white" />
                    })()}
                  </div>

                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">{features[activeTab].title}</h3>
                    <p className="text-lg text-gray-600 leading-relaxed">{features[activeTab].content}</p>
                  </div>
                </div>

                <div className="relative">
                  <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-3xl p-8 shadow-inner">
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="space-y-4">
                        <div className="flex items-center gap-3">
                          <div
                            className={`w-10 h-10 bg-gradient-to-r ${features[activeTab].color} rounded-full flex items-center justify-center`}
                          >
                            <span className="text-white font-bold text-sm">AI</span>
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900">Sayle.ai</p>
                            <p className="text-sm text-gray-500">{features[activeTab].description}</p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          <div className="bg-gray-100 rounded-2xl rounded-tl-sm p-4">
                            <p className="text-gray-800 text-sm">
                              {activeTab === 0 &&
                                "Oi! Notei que você está procurando uma solução para seu e-commerce. Posso ajudar a encontrar exatamente o que precisa? 😊"}
                              {activeTab === 1 &&
                                "Baseado nas suas interações anteriores, vejo que você prefere soluções práticas. Que tal esta opção que se encaixa perfeitamente no seu perfil?"}
                              {activeTab === 2 &&
                                "Sou a Ana, especialista em vendas da equipe. Meu foco é entender suas necessidades e encontrar a melhor solução para você!"}
                              {activeTab === 3 &&
                                "Vejo que você é do setor de tecnologia. Preparei algumas opções específicas para empresas como a sua, com foco em inovação."}
                            </p>
                          </div>

                          <div className="flex justify-end">
                            <div
                              className={`bg-gradient-to-r ${features[activeTab].color} text-white rounded-2xl rounded-tr-sm p-4 max-w-xs`}
                            >
                              <p className="text-sm">Impressionante! Como vocês sabem tanto sobre meu negócio?</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div
            className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600 text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Quero entender como funciona
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

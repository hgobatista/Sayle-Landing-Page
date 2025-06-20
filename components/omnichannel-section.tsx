"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MessageCircle, Instagram, Globe, Facebook, Mail, Users } from "lucide-react"

export default function OmnichannelSection() {
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

  const channels = [
    {
      name: "Email",
      icon: Mail,
      color: "bg-blue-500",
      position: { top: "10%", left: "5%" },
      curvePath: "M 60 20 Q 120 40 180 80",
    },
    {
      name: "Facebook",
      icon: Facebook,
      color: "bg-blue-600",
      position: { top: "25%", left: "0%" },
      curvePath: "M 60 20 Q 100 60 160 100",
    },
    {
      name: "Instagram",
      icon: Instagram,
      color: "bg-pink-500",
      position: { top: "50%", left: "2%" },
      curvePath: "M 60 20 Q 90 80 140 120",
    },
    {
      name: "WhatsApp",
      icon: MessageCircle,
      color: "bg-green-500",
      position: { top: "75%", left: "8%" },
      curvePath: "M 60 20 Q 100 100 160 140",
    },
    {
      name: "Website",
      icon: Globe,
      color: "bg-indigo-500",
      position: { top: "90%", left: "15%" },
      curvePath: "M 60 20 Q 120 120 180 160",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-white overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Visual à Esquerda */}
          <div className="relative min-h-[600px]">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              {/* Dashboard Central */}
              <div className="relative ml-40 mt-20">
                <Card className="w-80 shadow-2xl border-2 border-gray-200 overflow-hidden">
                  <div className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] p-4">
                    <h3 className="text-white font-bold text-lg font-montserrat">Lead List - Sayle.ai</h3>
                  </div>
                  <CardContent className="p-6 space-y-4">
                    {/* Lead Items */}
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
                          <Users className="w-5 h-5 text-gray-600" />
                        </div>
                        <div className="flex-1">
                          <div className="h-3 bg-gray-300 rounded mb-2"></div>
                          <div className="h-2 bg-gray-200 rounded w-3/4"></div>
                        </div>
                        <div className="w-6 h-6 bg-[#0AD4CA] rounded flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                {/* Connection Hub */}
                <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-6">
                  <div className="w-4 h-4 bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] rounded-full shadow-lg"></div>
                </div>
              </div>

              {/* Channel Icons com Linhas Curvas */}
              {channels.map((channel, index) => {
                const Icon = channel.icon
                return (
                  <div
                    key={channel.name}
                    className={`absolute transition-all duration-1000 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-0"
                    }`}
                    style={{
                      top: channel.position.top,
                      left: channel.position.left,
                      transitionDelay: `${300 + index * 100}ms`,
                    }}
                  >
                    {/* Linha Curva Tracejada */}
                    <svg
                      className="absolute top-1/2 left-full w-48 h-32 -translate-y-1/2"
                      viewBox="0 0 200 180"
                      fill="none"
                    >
                      <path
                        d={channel.curvePath}
                        stroke="#0AD4CA"
                        strokeWidth="2"
                        strokeDasharray="6 6"
                        fill="none"
                        className={`${isVisible ? "animate-pulse" : ""}`}
                      />
                    </svg>

                    {/* Ícone da Plataforma */}
                    <div
                      className={`w-14 h-14 ${channel.color} rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 cursor-pointer`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Nome da Plataforma */}
                    <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                      <span className="text-sm font-medium font-poppins text-gray-700 bg-white px-3 py-1 rounded-full shadow-sm">
                        {channel.name}
                      </span>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Texto à Direita */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <h2 className="text-4xl md:text-5xl font-bold font-montserrat text-gray-900 mb-6">
              Esteja onde seu{" "}
              <span className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] bg-clip-text text-transparent">
                cliente está
              </span>
            </h2>

            <p className="text-xl font-poppins text-gray-600 mb-8 leading-relaxed">
              Integração completa com todas as plataformas que seus clientes já usam. Uma única IA, múltiplos canais,
              experiência unificada.
            </p>

            <div className="space-y-4 mb-10">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0AD4CA] rounded-full"></div>
                <span className="font-poppins text-gray-700 text-lg">Centralize todas as conversas em um só lugar</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0AD4CA] rounded-full"></div>
                <span className="font-poppins text-gray-700 text-lg">Conecte-se com todas as APIs disponíveis</span>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-[#0AD4CA] rounded-full"></div>
                <span className="font-poppins text-gray-700 text-lg">Gerencie leads de forma inteligente</span>
              </div>
            </div>

            <Button
              size="lg"
              className="bg-[#2AE87C] hover:bg-[#25d470] text-white px-12 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 font-poppins font-medium w-full sm:w-auto"
            >
              Quero atendimento omnichannel
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

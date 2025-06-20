"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, Sparkles } from "lucide-react"

export default function FinalCTASection() {
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

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-lime-500 to-green-500 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-br from-lime-400/20 to-green-600/20" />
      <div className="absolute top-0 left-0 w-full h-full">
        <div className="absolute top-10 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute top-32 right-20 w-16 h-16 bg-white/10 rounded-full animate-bounce" />
        <div className="absolute bottom-20 left-1/4 w-12 h-12 bg-white/10 rounded-full animate-pulse" />
        <div className="absolute bottom-32 right-1/3 w-24 h-24 bg-white/10 rounded-full animate-bounce" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex items-center justify-center gap-2 mb-6">
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
              <span className="text-white/90 font-medium">Transformação Digital</span>
              <Sparkles className="w-8 h-8 text-white animate-pulse" />
            </div>

            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Pronto para Transformar seu <span className="text-yellow-300">Atendimento?</span>
            </h2>

            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              Nossos especialistas estão prontos para ajudar você a revolucionar suas vendas com IA conversacional
            </p>

            <div className="space-y-4 mb-12">
              <p className="text-lg text-white/80">✅ Implementação em até 15 dias</p>
              <p className="text-lg text-white/80">✅ Suporte especializado 24/7</p>
              <p className="text-lg text-white/80">✅ ROI garantido em 30 dias</p>
            </div>
          </div>

          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-white text-lime-600 hover:bg-gray-100 px-12 py-6 text-xl font-bold rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
              >
                Quero uma demonstração gratuita
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <div className="text-center sm:text-left">
                <p className="text-white/90 text-sm">Sem compromisso • Sem cartão de crédito</p>
                <p className="text-white/70 text-xs">Resposta em menos de 2 horas</p>
              </div>
            </div>

            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">15 min</div>
                <div className="text-white/80">Demonstração personalizada</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">0 custo</div>
                <div className="text-white/80">Para conhecer a solução</div>
              </div>
              <div className="space-y-2">
                <div className="text-3xl font-bold text-white">24h</div>
                <div className="text-white/80">Para receber proposta</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

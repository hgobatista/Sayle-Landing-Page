"use client"

import { useState, useEffect, useRef } from "react"

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [counts, setCounts] = useState({ companies: 0, messages: 0, savings: 0 })
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

  useEffect(() => {
    if (isVisible) {
      const duration = 2000
      const steps = 60
      const stepDuration = duration / steps

      const targets = { companies: 200, messages: 300, savings: 600 }

      let step = 0
      const timer = setInterval(() => {
        step++
        const progress = step / steps

        setCounts({
          companies: Math.floor(targets.companies * progress),
          messages: Math.floor(targets.messages * progress),
          savings: Math.floor(targets.savings * progress),
        })

        if (step >= steps) {
          clearInterval(timer)
          setCounts(targets)
        }
      }, stepDuration)

      return () => clearInterval(timer)
    }
  }, [isVisible])

  const stats = [
    {
      number: `+${counts.companies}`,
      label: "empresas transformadas",
      description: "Negócios de todos os tamanhos já confiam na Sayle.ai",
    },
    {
      number: `+${counts.messages}k`,
      label: "mensagens automatizadas por dia",
      description: "Conversas inteligentes acontecendo a cada segundo",
    },
    {
      number: `+R$ ${counts.savings}k`,
      label: "economizados em atendimento",
      description: "Redução real de custos operacionais mensais",
    },
  ]

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-1000 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="space-y-4">
                <div className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-lime-400 to-green-400 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-xl font-semibold text-white">{stat.label}</div>
                <div className="text-gray-300 max-w-xs mx-auto">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

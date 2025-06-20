"use client"

import { useState, useEffect, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"

export default function TestimonialsSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const testimonials = [
    {
      name: "Carlos Silva",
      role: "CEO",
      company: "TechCommerce",
      sector: "E-commerce",
      testimonial:
        "Aumentamos 300% nas vendas online após implementar a Sayle.ai. A IA realmente entende nossos clientes e converte como nunca vimos antes.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Dra. Ana Santos",
      role: "Diretora",
      company: "Clínica Sorrir",
      sector: "Odontologia",
      testimonial:
        "O atendimento 24/7 revolucionou nossa clínica. Agendamentos automáticos e lembretes reduziram 90% das faltas dos pacientes.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Roberto Lima",
      role: "Gerente",
      company: "MegaStore",
      sector: "Varejo",
      testimonial:
        "Reduzimos 80% do tempo de resposta aos clientes. A Sayle.ai não só atende, mas vende melhor que nossa equipe humana.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
    {
      name: "Marina Costa",
      role: "Fundadora",
      company: "BeautyShop",
      sector: "Cosméticos",
      testimonial:
        "A personalização da IA é impressionante. Cada cliente recebe recomendações únicas baseadas no histórico de compras.",
      rating: 5,
      avatar: "/placeholder.svg?height=60&width=60",
    },
  ]

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section ref={sectionRef} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className={`text-4xl md:text-5xl font-bold text-gray-900 mb-6 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            A IA que se{" "}
            <span className="bg-gradient-to-r from-lime-500 to-green-500 bg-clip-text text-transparent">
              Adapta a Todas as Necessidades
            </span>
          </h2>
          <p
            className={`text-xl text-gray-600 max-w-3xl mx-auto transition-all duration-1000 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            Transformando operações de diferentes indústrias com resultados comprovados
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <Card
              className={`shadow-2xl border-0 transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
            >
              <CardContent className="p-8 md:p-12">
                <div className="text-center space-y-8">
                  {/* Stars */}
                  <div className="flex justify-center gap-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Testimonial */}
                  <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed italic">
                    "{testimonials[currentIndex].testimonial}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center justify-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-lime-500 to-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <div className="text-left">
                      <div className="font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                      <div className="text-gray-600">
                        {testimonials[currentIndex].role}, {testimonials[currentIndex].company}
                      </div>
                      <div className="text-sm text-lime-600 font-medium">{testimonials[currentIndex].sector}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full border-2 border-gray-300 hover:border-lime-500 hover:bg-lime-50"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex
                        ? "bg-gradient-to-r from-lime-500 to-green-500 scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full border-2 border-gray-300 hover:border-lime-500 hover:bg-lime-50"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

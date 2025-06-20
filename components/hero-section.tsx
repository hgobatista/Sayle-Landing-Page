"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    let animationId: number

    const handleMouseMove = (e: MouseEvent) => {
      const rect = (e.currentTarget as HTMLElement).getBoundingClientRect()
      const targetX = e.clientX - rect.left
      const targetY = e.clientY - rect.top

      const smoothMove = () => {
        setMousePosition((prev) => ({
          x: prev.x + (targetX - prev.x) * 0.12,
          y: prev.y + (targetY - prev.y) * 0.12,
        }))
        animationId = requestAnimationFrame(smoothMove)
      }

      cancelAnimationFrame(animationId)
      smoothMove()
    }

    const section = sectionRef.current
    if (!section) return

    section.addEventListener("mousemove", handleMouseMove)
    return () => {
      section.removeEventListener("mousemove", handleMouseMove)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center bg-white overflow-hidden"
    >
      {/* Main Cursor Following Blur */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary blur that follows cursor directly */}
        <div
          className="absolute w-[600px] h-[600px] bg-gradient-to-br from-[#2AE87C] to-[#0AD4CA] rounded-full blur-[150px] opacity-[0.08]"
          style={{
            left: mousePosition.x - 300,
            top: mousePosition.y - 300,
            transition: "opacity 0.3s ease-out",
          }}
        ></div>

        {/* Secondary blur with offset */}
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-tl from-[#2AE87C] to-[#0AD4CA] rounded-full blur-[120px] opacity-[0.06]"
          style={{
            left: mousePosition.x - 150,
            top: mousePosition.y - 250,
            transition: "opacity 0.4s ease-out",
          }}
        ></div>

        {/* Tertiary blur with different offset */}
        <div
          className="absolute w-[500px] h-[300px] bg-gradient-to-tr from-[#2AE87C] to-[#0AD4CA] rounded-full blur-[100px] opacity-[0.05]"
          style={{
            left: mousePosition.x - 200,
            top: mousePosition.y - 100,
            transition: "opacity 0.5s ease-out",
          }}
        ></div>

        {/* Ambient blur - slower following */}
        <div
          className="absolute w-[800px] h-[400px] bg-gradient-to-bl from-[#2AE87C] to-[#0AD4CA] rounded-full blur-[180px] opacity-[0.04]"
          style={{
            left: mousePosition.x * 0.7 - 400,
            top: mousePosition.y * 0.7 - 200,
            transition: "opacity 0.6s ease-out",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-20 sm:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div
            className={`space-y-6 sm:space-y-8 text-center lg:text-left transition-all duration-1000 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="space-y-4 sm:space-y-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold font-montserrat text-gray-900 leading-tight">
                Transforme{" "}
                <span className="bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] bg-clip-text text-transparent">
                  Visitantes
                </span>{" "}
                em Clientes com a IA da Sayle
              </h1>

              <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 font-poppins leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Automatize seu atendimento, aumente vendas e melhore a experiência do cliente com nossa plataforma de IA
                especializada em conversas
              </p>
            </div>

            <div className="pt-4 sm:pt-6">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-[#2AE87C] to-[#0AD4CA] hover:from-[#25d470] hover:to-[#08b3aa] text-white px-8 sm:px-12 py-4 sm:py-6 text-base sm:text-lg font-semibold font-poppins rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1">
                Quero automatizar meu atendimento
              </Button>
            </div>
          </div>

          {/* Right Side - Empty space for balance */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </section>
  )
}

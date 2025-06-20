"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, ChevronDown } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    { name: "Soluções", hasDropdown: true },
    { name: "Funcionalidades", hasDropdown: true },
    { name: "Casos de Uso", hasDropdown: false },
    { name: "Recursos", hasDropdown: true },
  ]

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center leading-9">
            <Image
              src="/sayle-logo.svg"
              alt="Sayle.ai"
              width={120}
              height={120}
              className="w-20 h-20 sm:w-24 sm:h-24 lg:w-30 lg:h-30"
            />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                className="flex items-center gap-1 text-gray-700 hover:text-[#2AE87C] font-medium font-poppins transition-colors duration-200"
              >
                {item.name}
                {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
              </button>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" className="text-gray-700 hover:text-[#2AE87C] font-medium font-poppins">
              Login
            </Button>
            <Button className="bg-[#2AE87C] hover:bg-[#25d470] text-white px-6 py-2.5 rounded-full font-medium font-poppins shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-105">
              Experimente Agora
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X className="w-6 h-6 text-gray-700" /> : <Menu className="w-6 h-6 text-gray-700" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 py-4">
            <div className="space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  className="flex items-center justify-between w-full px-4 py-2 text-gray-700 hover:text-[#2AE87C] font-medium font-poppins"
                >
                  {item.name}
                  {item.hasDropdown && <ChevronDown className="w-4 h-4" />}
                </button>
              ))}
              <div className="px-4 pt-4 space-y-3">
                <Button variant="ghost" className="w-full text-gray-700 hover:text-[#2AE87C] font-medium font-poppins">
                  Login
                </Button>
                <Button className="w-full bg-[#2AE87C] hover:bg-[#25d470] text-white py-3 rounded-full font-medium font-poppins">
                  Experimente Agora
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

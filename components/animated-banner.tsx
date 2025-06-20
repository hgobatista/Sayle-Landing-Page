"use client"

import { MessageSquare, Mail, Globe, BarChart3, Users, Zap, Database } from "lucide-react"

interface AnimatedBannerProps {
  items: string[]
  text?: string
  direction?: "left" | "right"
  variant?: "default" | "timeline"
}

const getToolIcon = (toolName: string) => {
  const iconMap: { [key: string]: any } = {
    WhatsApp: MessageSquare,
    Instagram: MessageSquare,
    Facebook: Users,
    Telegram: MessageSquare,
    HubSpot: BarChart3,
    "RD Station": Mail,
    Google: Globe,
    Meta: Users,
    YouTube: Globe,
    Groq: Zap,
    OpenAI: Zap,
    Zapier: Zap,
    Salesforce: Database,
    Pipedrive: BarChart3,
  }

  return iconMap[toolName] || Globe
}

export default function AnimatedBanner({ items, text, direction = "left", variant = "default" }: AnimatedBannerProps) {
  const animationClass = direction === "left" ? "animate-scroll-left" : "animate-scroll-right"

  if (variant === "timeline") {
    return (
      <section className="py-16 bg-gradient-to-r from-lime-50 to-green-50 overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-4 bg-white rounded-full px-8 py-4 shadow-lg">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-gradient-to-r from-lime-500 to-green-500 rounded-full animate-pulse"></div>
                <span className="font-semibold text-gray-900">{items[0]}</span>
              </div>
              <div className="w-16 h-1 bg-gradient-to-r from-lime-500 to-green-500 rounded-full"></div>
              <span className="text-gray-600">{items[1]}</span>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section className="py-16 bg-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 mb-16">
        {text && (
          <h2 className="text-3xl md:text-4xl font-bold font-montserrat text-center text-gray-900 mb-8">
            Integre com as{" "}
            <span className="bg-gradient-to-r from-sayle-green to-sayle-cyan bg-clip-text text-transparent">
              ferramentas que você já usa
            </span>
          </h2>
        )}
      </div>

      <div className="relative">
        <div className={`flex gap-16 ${animationClass}`}>
          {[...items, ...items, ...items].map((item, index) => {
            const IconComponent = getToolIcon(item)
            return (
              <div
                key={index}
                className="flex-shrink-0 flex flex-col items-center justify-center gap-3 opacity-60 hover:opacity-80 transition-opacity duration-300"
              >
                <IconComponent className="w-12 h-12 text-gray-500" />
                <span className="font-medium text-gray-600 whitespace-nowrap text-sm">{item}</span>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

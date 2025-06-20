"use client"

import { Mail, Linkedin, Instagram, Facebook } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-lime-500 to-green-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold">S</span>
              </div>
              <span className="text-2xl font-bold">Sayle.ai</span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Transformando atendimento com IA conversacional. Mais vendas, menos operação, melhor experiência.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Instagram className="w-5 h-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white hover:bg-gray-800">
                <Facebook className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Empresa</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Sobre nós
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Carreiras
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Blog
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Imprensa
              </a>
            </div>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Suporte</h4>
            <div className="space-y-2">
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Central de Ajuda
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Documentação
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Status
              </a>
              <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                Contato
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Newsletter</h4>
            <p className="text-gray-400 text-sm">Receba insights sobre IA e vendas direto no seu e-mail</p>
            <div className="flex gap-2">
              <Input
                type="email"
                placeholder="Seu e-mail"
                className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500"
              />
              <Button className="bg-gradient-to-r from-lime-500 to-green-500 hover:from-lime-600 hover:to-green-600">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Contatos</h4>
              <div className="space-y-2 text-gray-400">
                <p>📧 comercial@sayle.ai</p>
                <p>🛠️ suporte@sayle.ai</p>
                <p>📱 +55 (11) 99999-9999</p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Política de Privacidade
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  Termos de Uso
                </a>
                <a href="#" className="block text-gray-400 hover:text-white transition-colors">
                  LGPD
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Sayle.ai. Todos os direitos reservados.</p>
          <p className="text-sm mt-2">CNPJ: 00.000.000/0001-00 • São Paulo, SP</p>
        </div>
      </div>
    </footer>
  )
}

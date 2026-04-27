"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const menuItems = [
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Skills", href: "#skills" },
    { label: "LeetCode", href: "#leetcode" },
    { label: "Contact", href: "#contact" },
  ]

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-[#d4af37]/30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="relative w-10 h-10 bg-[#d4af37] rounded-lg flex items-center justify-center">
              <span className="absolute -top-1 -right-1 h-2 w-2 rounded-full bg-[#d4af37] motion-safe:animate-ping"></span>
              <span className="text-black font-bold text-lg">
                <img src="/assets/coding.png" alt="logo" width={40} height={40} className="w-full h-full object-contain motion-safe:animate-bounce animation-duration-[2s]" />
              </span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:inline">Ravi Azzura Putra</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-white hover:text-[#d4af37] transition-colors duration-300 text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-[#d4af37] hover:text-white transition-colors motion-safe:animate-pulse"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 motion-safe:animate-pulse">
            {menuItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-white hover:text-[#d4af37] hover:bg-[#d4af37]/10 rounded transition-all duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

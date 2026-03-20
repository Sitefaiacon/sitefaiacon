"use client"

import Image from "next/image"
import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="block w-48">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg"
              alt="Faiacon Logo"
              width={200}
              height={100}
              className="w-full"
              priority
            />
          </Link>

          {/* Mobile menu button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>

          {/* Desktop navigation */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-faiacon hover:text-faiacon-light">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-faiacon hover:text-faiacon-light">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-faiacon hover:text-faiacon-light">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-faiacon hover:text-faiacon-light">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-faiacon hover:text-faiacon-light">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4">
            <ul className="flex flex-col space-y-4">
              <li>
                <Link href="/" className="text-faiacon hover:text-faiacon-light block">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-faiacon hover:text-faiacon-light block">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="text-faiacon hover:text-faiacon-light block">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-faiacon hover:text-faiacon-light block">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-faiacon hover:text-faiacon-light block">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}

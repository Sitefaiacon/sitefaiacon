"use client"

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-primary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">FAIACON</h3>
            <p className="text-gray-300 mb-4">
              Κατασκευαστική εταιρεία με εξειδίκευση σε ανακαινίσεις, κατασκευές σπιτιών και πισίνες στην Κέρκυρα.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-accent transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Υπηρεσίες</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/house-construction" className="text-gray-300 hover:text-white transition-colors">
                  Κατασκευή Σπιτιού
                </Link>
              </li>
              <li>
                <Link href="/house-renovation" className="text-gray-300 hover:text-white transition-colors">
                  Ανακαίνιση
                </Link>
              </li>
              <li>
                <Link href="/pool-construction" className="text-gray-300 hover:text-white transition-colors">
                  Κατασκευή Πισίνας
                </Link>
              </li>
              <li>
                <Link href="/listed-houses" className="text-gray-300 hover:text-white transition-colors">
                  Διατηρητέα Κτίρια
                </Link>
              </li>
            </ul>
          </div>

          {/* More Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Σύνδεσμοι</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link href="/our-projects" className="text-gray-300 hover:text-white transition-colors">
                  Τα Έργα Μας
                </Link>
              </li>
              <li>
                <Link href="/appointment" className="text-gray-300 hover:text-white transition-colors">
                  Ραντεβού
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Επικοινωνία</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <Phone className="h-4 w-4 text-accent" />
                <a href="tel:+306987797679" className="text-gray-300 hover:text-white transition-colors">
                  +30 698 779 7679
                </a>
              </li>
              <li className="flex items-center space-x-2">
                <Mail className="h-4 w-4 text-accent" />
                <a href="mailto:info@faiacon.com" className="text-gray-300 hover:text-white transition-colors">
                  info@faiacon.com
                </a>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="h-4 w-4 text-accent mt-1" />
                <span className="text-gray-300">
                  Κέρκυρα, Ελλάδα
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} FAIACON. Όλα τα δικαιώματα διατηρούνται.</p>
        </div>
      </div>
    </footer>
  )
}

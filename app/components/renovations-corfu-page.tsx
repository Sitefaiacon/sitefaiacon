"use client"

import { AnimatedSection } from "./animated-section"
import { Button } from "@/components/ui/button"
import {
  Home,
  Building2,
  Zap,
  Palette,
  Wrench,
  CheckCircle2,
  Users,
  MapPin,
  Clock,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { useLanguage } from "../contexts/language-context"
import { useState } from "react"
import { QuoteRequestModal } from "./quote-request-modal"

const renovationServices = [
  {
    icon: Home,
    title: "Full Home Renovations",
    description: "Complete renovation of residential properties from planning to final delivery, including structural work, utilities, and finishes.",
  },
  {
    icon: Building2,
    title: "Villa Renovations",
    description: "Upscale villa renovation with attention to luxury finishes, outdoor spaces, and architectural integrity.",
  },
  {
    icon: Palette,
    title: "Interior Upgrades",
    description: "Kitchen and bathroom renovations, flooring, painting, and modern interior finishes for improved functionality and aesthetics.",
  },
  {
    icon: Zap,
    title: "Energy Efficiency",
    description: "Thermal insulation, energy-efficient windows, and sustainable upgrades to reduce operating costs and environmental impact.",
  },
  {
    icon: Wrench,
    title: "Technical Improvements",
    description: "Electrical system upgrades, plumbing modernization, heating and cooling systems, and structural repairs.",
  },
  {
    icon: MapPin,
    title: "Rental-Ready Renovations",
    description: "Specialized renovations for holiday rentals and Airbnb properties optimized for guest satisfaction and long-term durability.",
  },
]

const processSteps = [
  {
    title: "Initial Consultation",
    description: "Discuss your renovation goals, budget expectations, and timeline. Understand your vision for the property.",
  },
  {
    title: "Property Review",
    description: "Conduct a detailed site assessment, identify structural or technical issues, and evaluate renovation scope.",
  },
  {
    title: "Scope & Budget",
    description: "Define the renovation scope clearly, provide a realistic budget estimate, and outline the phased approach if needed.",
  },
  {
    title: "Planning & Scheduling",
    description: "Create a detailed project timeline, coordinate logistics, and establish communication protocols.",
  },
  {
    title: "Execution",
    description: "Execute works with quality control at every stage, manage subcontractors, and coordinate all trades professionally.",
  },
  {
    title: "Final Delivery",
    description: "Perform final inspections, complete any punch-list items, and hand over the renovated property to you.",
  },
]

const faqs = [
  {
    question: "Do you handle villa renovations in Corfu?",
    answer: "Yes, we specialize in villa renovations throughout Corfu, including luxury upgrades, outdoor space improvements, and structural work. Our experience with local materials and Corfu's specific climate conditions ensures durability and quality.",
  },
  {
    question: "Can you work with overseas property owners?",
    answer: "Absolutely. We regularly work with international clients who own property in Corfu. We provide regular updates via email and video calls, handle permits and permissions on your behalf, and can coordinate all aspects of the renovation remotely.",
  },
  {
    question: "Do you renovate homes for Airbnb or holiday rentals?",
    answer: "Yes. We understand the specific requirements of holiday rental properties and can design renovations that maximize guest satisfaction, durability, and return on investment. We recommend durable finishes and practical layouts optimized for rental use.",
  },
  {
    question: "Can you provide an initial renovation estimate?",
    answer: "We provide preliminary estimates based on initial property information and photos. For a detailed and accurate quote, we recommend a site visit where we can assess the property thoroughly and understand your specific requirements.",
  },
  {
    question: "Do you handle both cosmetic and larger renovation works?",
    answer: "Yes, we handle renovations of all scales—from targeted updates like painting and kitchen upgrades to comprehensive full-property renovations including structural work, electrical systems, and major upgrades.",
  },
  {
    question: "What areas of Corfu do you serve?",
    answer: "We provide renovation services throughout Corfu, from Kerkyra town to outlying areas. Local project coordination is one of our strengths, and we work with reliable local suppliers and subcontractors.",
  },
]

export default function RenovationsCorfuPage() {
  const { isEnglish } = useLanguage()
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const lang = isEnglish ? "en" : "el"
  const whatsappMessage =
    "Hello, I'd like to discuss a renovation project in Corfu and receive an initial estimate."
  const whatsappLink = `https://wa.me/306987797679?text=${encodeURIComponent(whatsappMessage)}`

  if (!isEnglish) return null

  return (
    <>
      <QuoteRequestModal isOpen={showQuoteModal} onClose={() => setShowQuoteModal(false)} />

      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <AnimatedSection className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              Renovations in Corfu
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg leading-relaxed">
              Faiacon delivers home, villa and property renovations in Corfu, helping owners improve functionality, appearance and long-term value with professional local project management.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => setShowQuoteModal(true)}
              >
                Request a Renovation Estimate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Trust Strip */}
      <section className="bg-primary text-white py-12">
        <div className="container px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <AnimatedSection className="text-center">
              <div className="text-3xl font-bold mb-2">35+</div>
              <p className="text-white/90">Years of local experience in Corfu</p>
            </AnimatedSection>
            <AnimatedSection className="text-center">
              <div className="text-3xl font-bold mb-2">Homes & Villas</div>
              <p className="text-white/90">Renovations for residential and investment properties</p>
            </AnimatedSection>
            <AnimatedSection className="text-center">
              <div className="text-3xl font-bold mb-2">Local Team</div>
              <p className="text-white/90">Project coordination with expert local management</p>
            </AnimatedSection>
            <AnimatedSection className="text-center">
              <div className="text-3xl font-bold mb-2">Full Service</div>
              <p className="text-white/90">Construction and property upgrade expertise</p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Intro Content */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Professional Renovation Services for Corfu Property Owners</h2>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Whether you own a home, villa, or holiday rental property in Corfu, renovation projects require more than just general contracting experience. Local knowledge, reliable coordination, and understanding of Corfu's specific climate and construction conditions are essential to success.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Faiacon provides comprehensive renovation services for homeowners, villa owners, overseas investors, and holiday rental operators. We handle the full renovation process—from initial assessment through final delivery—with clear communication, realistic budgeting, and quality execution.
                </p>
              </div>

              <div className="bg-blue-50 p-8 rounded-xl border border-blue-100">
                <h3 className="text-2xl font-bold text-primary mb-6">Who This Is For</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Private Homeowners</strong> looking to upgrade, modernize, or improve their Corfu residence</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Villa Owners</strong> seeking upscale renovations and luxury finishes for premium properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Overseas Investors</strong> who own property in Corfu and need reliable remote project management</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Holiday Rental Operators</strong> looking to renovate or upgrade Airbnb and vacation rental properties</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                    <span className="text-gray-700"><strong>Buyers of Older Properties</strong> purchasing properties in need of renovation or modernization</span>
                  </li>
                </ul>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Renovation Services in Corfu</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From targeted upgrades to comprehensive renovations, we handle all aspects of property improvement and modernization.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {renovationServices.map((service, index) => {
              const Icon = service.icon
              return (
                <AnimatedSection key={index} className="bg-white p-8 rounded-xl shadow-sm hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="text-xl font-bold text-primary mb-3">{service.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{service.description}</p>
                </AnimatedSection>
              )
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Faiacon */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection className="space-y-8">
              <div>
                <h2 className="text-4xl font-bold text-primary mb-6">Why Choose Faiacon for Corfu Renovations</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex gap-4">
                  <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Local Knowledge & Expertise</h3>
                    <p className="text-gray-700">Over 35 years working in Corfu. We understand local suppliers, climate conditions, building codes, and practical logistics that matter to successful renovations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Clock className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Professional Project Management</h3>
                    <p className="text-gray-700">Clear timelines, realistic budgets, and consistent communication. We manage all trades, coordinate logistics, and handle daily site management so you don't have to.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Building2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Full-Service Capability</h3>
                    <p className="text-gray-700">Construction expertise, renovation experience, and technical knowledge to handle any aspect of property improvement—structural work, utilities, finishes, and more.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <Palette className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Quality-Focused Execution</h3>
                    <p className="text-gray-700">We don't cut corners. Every project is completed with attention to detail, proper materials, and workmanship that lasts—whether it's a small update or a full renovation.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Clear Communication</h3>
                    <p className="text-gray-700">Regular updates, transparent reporting, and straightforward information about progress, costs, and any issues. No surprises, no hidden fees.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <MapPin className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-lg text-primary mb-2">Remote Coordination Available</h3>
                    <p className="text-gray-700">For overseas owners, we provide photo and video updates, email communication, and handle all project logistics remotely so distance isn't a barrier.</p>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Our Renovation Process</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              From initial consultation to final delivery, we follow a clear, professional process designed to deliver predictable results.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {processSteps.map((step, index) => (
              <AnimatedSection key={index} className="relative">
                <div className="bg-white p-6 rounded-lg shadow-sm h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center font-bold">
                      {index + 1}
                    </div>
                    <h3 className="font-bold text-lg text-primary">{step.title}</h3>
                  </div>
                  <p className="text-gray-700 text-sm leading-relaxed">{step.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-4xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto">
              Get answers to common questions about renovations, project management, and working with Faiacon.
            </p>
          </AnimatedSection>

          <div className="max-w-3xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <AnimatedSection
                key={index}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200 hover:border-primary/30 transition-colors"
              >
                <h3 className="font-bold text-lg text-primary mb-3">{faq.question}</h3>
                <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Local Expertise & Trust Section */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gradient-to-br from-primary/5 to-transparent border-t border-gray-200">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Local Expertise in Corfu Renovations
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                35+ years of professional construction and renovation experience across Corfu properties. We understand the local context, climate, building codes, and what works for Corfu properties specifically.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 sm:gap-8">
              {[
                {
                  number: "35+",
                  label: "Years of Experience",
                  detail: "Operating in Corfu since 1990"
                },
                {
                  number: "500+",
                  label: "Projects Completed",
                  detail: "Homes, villas, and commercial properties"
                },
                {
                  number: "1990",
                  label: "Established",
                  detail: "Local business supporting Corfu property owners"
                },
                {
                  number: "Local",
                  label: "Project Management",
                  detail: "Direct communication, clear updates, accountability"
                },
              ].map((stat, idx) => (
                <div key={idx} className="p-6 bg-white rounded-lg border border-gray-200 text-center hover:shadow-md transition-all">
                  <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="font-semibold text-gray-900 mb-2">{stat.label}</div>
                  <div className="text-sm text-gray-600">{stat.detail}</div>
                </div>
              ))}
            </div>

            <div className="mt-12 sm:mt-16 grid md:grid-cols-2 gap-8">
              <div className="p-8 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-4">Understanding Corfu Properties</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Knowledge of Corfu's architectural styles and local building traditions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Experience with Mediterranean climate challenges and solutions</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Local connections and trusted supply chains for quality materials</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Understanding of local regulations and permit processes in Corfu</span>
                  </li>
                </ul>
              </div>

              <div className="p-8 bg-white rounded-lg border border-gray-200">
                <h3 className="text-xl font-semibold text-primary mb-4">Supporting Property Owners in Corfu</h3>
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Direct project management with clear communication and regular updates</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Experience working with overseas owners and remote coordination</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Photo documentation and email updates for transparency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-primary font-bold">✓</span>
                    <span>Professional approach to budgets, timelines, and quality standards</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA for Local Service */}
      <section className="relative py-12 sm:py-16 bg-primary/10 border-t border-gray-200">
        <div className="container px-4 text-center">
          <p className="text-lg text-gray-800 mb-6">
            Planning renovations on your property in Corfu?
          </p>
          <Button className="bg-primary text-white hover:bg-primary/90 px-8 py-3 text-base font-semibold" asChild>
            <Link href={`/${lang}/cost-calculator`}>
              Get a Free Estimate for Your Corfu Property
            </Link>
          </Button>
        </div>
      </section>

      {/* Related Services & Internal Links - SEO Support */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-gray-50 border-t border-gray-200">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Related Services & Property Solutions
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Explore our complete range of construction and property improvement services in Corfu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
              <AnimatedSection className="p-6 sm:p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">🏗️</div>
                <h3 className="text-lg font-semibold text-primary mb-3">New Construction</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Professional house and villa construction services with complete project management from permits to final delivery.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-semibold hover:text-primary/80" asChild>
                  <Link href={`/${lang}/house-construction`}>
                    Explore Construction →
                  </Link>
                </Button>
              </AnimatedSection>

              <AnimatedSection className="p-6 sm:p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">✨</div>
                <h3 className="text-lg font-semibold text-primary mb-3">Villa & Luxury Upgrades</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Upscale villa renovations, luxury finishes, and premium property improvements designed for discerning clients.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-semibold hover:text-primary/80" asChild>
                  <Link href={`/${lang}/services/villa-luxury-home-construction`}>
                    Explore Villas →
                  </Link>
                </Button>
              </AnimatedSection>

              <AnimatedSection className="p-6 sm:p-8 bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                <div className="text-3xl mb-4">💧</div>
                <h3 className="text-lg font-semibold text-primary mb-3">Pools & Outdoor Upgrades</h3>
                <p className="text-sm text-gray-600 mb-6">
                  Custom swimming pools, outdoor entertaining spaces, and premium landscape improvements for property value.
                </p>
                <Button variant="ghost" className="text-primary p-0 h-auto font-semibold hover:text-primary/80" asChild>
                  <Link href={`/${lang}/pool-construction`}>
                    Explore Pools →
                  </Link>
                </Button>
              </AnimatedSection>
            </div>

          </div>
        </div>
      </section>

      {/* Case Studies & Examples - SEO Support */}
      <section className="relative py-16 sm:py-24 md:py-32 bg-white border-t border-gray-200">
        <div className="container relative z-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12 sm:mb-16">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary mb-4">
                Renovation Projects in Corfu
              </h2>
              <p className="text-base sm:text-lg text-gray-600">
                Explore real renovation projects we've completed, showcasing our expertise in house renovations, villa upgrades, and property improvements throughout Corfu.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 sm:gap-8 mb-12">
              <AnimatedSection className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6 sm:p-8">
                  <div className="text-4xl mb-4">🏠</div>
                  <h3 className="text-lg font-semibold text-primary mb-3">House Renovation in Corfu Town</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Complete interior renovation project showcasing modernization and functional design improvements in a residential property.
                  </p>
                  <Button variant="ghost" className="text-primary p-0 h-auto font-semibold hover:text-primary/80" asChild>
                    <Link href={`/${lang}/projects/house-renovation-corfu`}>
                      View Project →
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6 sm:p-8">
                  <div className="text-4xl mb-4">✨</div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Modern Villa Renovation in Sinies</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Luxury villa renovation showcasing contemporary design, enhanced amenities, and premium finishes for upscale residential living.
                  </p>
                  <Button variant="ghost" className="text-primary p-0 h-auto font-semibold hover:text-primary/80" asChild>
                    <Link href={`/${lang}/projects/villa-renovation-corfu`}>
                      View Project →
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>

              <AnimatedSection className="bg-gradient-to-br from-gray-50 to-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-all">
                <div className="p-6 sm:p-8">
                  <div className="text-4xl mb-4">🏢</div>
                  <h3 className="text-lg font-semibold text-primary mb-3">Apartment Building Renovation</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    Extensive multi-unit renovation focusing on contemporary aesthetics, improved functionality, and enhanced tenant appeal.
                  </p>
                  <Button variant="ghost" className="text-primary p-0 h-auto font-semibold hover:text-primary/80" asChild>
                    <Link href={`/${lang}/projects/apartment-renovation-corfu`}>
                      View Project →
                    </Link>
                  </Button>
                </div>
              </AnimatedSection>
            </div>

            <div className="text-center">
              <p className="text-base text-gray-700">
                These projects demonstrate our commitment to quality renovation work and professional project management across various property types and complexities in Corfu.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="relative bg-primary text-white py-16 overflow-hidden">
        <SectionBackground />
        <div className="relative z-10 container px-4">
          <AnimatedSection className="max-w-3xl mx-auto text-center space-y-8">
            <div>
              <h2 className="text-4xl font-bold mb-4">Need Renovations in Corfu?</h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Talk to Faiacon about your property and get a first renovation estimate. Whether it's a small upgrade or a full-property renovation, we're ready to discuss your goals and provide professional guidance.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-gray-100"
                onClick={() => setShowQuoteModal(true)}
              >
                Request a Renovation Estimate
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-5 h-5" />
                  Chat on WhatsApp
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </>
  )
}

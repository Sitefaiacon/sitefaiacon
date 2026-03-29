"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Building2, Hammer, CheckCircle2 } from "lucide-react"
import { ArchitecturalBackground } from "./architectural-background"

export default function ApartmentRenovationCaseStudy({ lang }: { lang: string }) {
  const isEnglish = lang === "en"

  return (
    <>
      {isEnglish ? (
        <main className="min-h-screen bg-white">
          {/* Hero Section */}
          <section className="relative h-[50vh] md:h-[60vh] flex items-center justify-center overflow-hidden">
            <ArchitecturalBackground />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            <div className="relative z-10 container px-4">
              <div className="max-w-2xl">
                <div className="flex items-center gap-2 mb-6">
                  <Building2 className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase">Multi-Unit Renovation</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Apartment Building Renovation in Corfu
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl">
                  Extensive multi-unit renovation project focusing on contemporary aesthetics, improved functionality, and enhanced tenant appeal across a residential building.
                </p>
              </div>
            </div>
          </section>

          {/* Project Overview */}
          <section className="py-16 md:py-24 bg-gradient-to-b from-white to-gray-50">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <div className="mb-16">
                  <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Project Overview</h2>
                  <div className="prose prose-lg max-w-none">
                    <p className="text-gray-700 mb-4">
                      This comprehensive apartment building renovation project in Corfu involved updating and modernizing multiple residential units within a single property. The renovation focused on creating contemporary living spaces while maintaining structural integrity and improving the building's overall appeal.
                    </p>
                    <p className="text-gray-700">
                      The project demonstrates how professional multi-unit renovation can significantly enhance property value, tenant satisfaction, and rental income potential. By coordinating renovation across multiple units, we maintained efficiency while ensuring consistent quality and aesthetic appeal throughout the building.
                    </p>
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Property Type</h3>
                    <p className="text-gray-700">Apartment building / multi-unit residential</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Location</h3>
                    <p className="text-gray-700">Corfu, Greece</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Renovation Focus</h3>
                    <p className="text-gray-700">Multi-unit modernization, aesthetics, functionality, tenant appeal</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Project Goal</h3>
                    <p className="text-gray-700">Create contemporary, functional living spaces across multiple units with improved building appeal</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Work Scope */}
          <section className="py-16 md:py-24 bg-white">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Work Scope & Improvements</h2>
                <div className="grid md:grid-cols-2 gap-8">
                  {[
                    {
                      title: "Unit-by-Unit Modernization",
                      description: "Individual apartment renovation with contemporary finishes, updated systems, and modern design.",
                      icon: "🏠"
                    },
                    {
                      title: "Contemporary Aesthetics",
                      description: "Coordinated design approach creating cohesive, modern aesthetic across all units.",
                      icon: "🎨"
                    },
                    {
                      title: "Improved Functionality",
                      description: "Layout optimization and systems upgrades enhancing livability and everyday use.",
                      icon: "⚙️"
                    },
                    {
                      title: "Common Area Enhancement",
                      description: "Renovation of shared spaces including entry areas, corridors, and exterior improvements.",
                      icon: "🏢"
                    },
                    {
                      title: "Modern Systems",
                      description: "Updated electrical, plumbing, and climate control systems throughout the building.",
                      icon: "💡"
                    },
                    {
                      title: "Quality Coordination",
                      description: "Professional project management ensuring consistent quality and efficient execution across all units.",
                      icon: "✓"
                    },
                  ].map((item, idx) => (
                    <div key={idx} className="p-6 bg-gradient-to-br from-primary/5 to-transparent rounded-lg border border-primary/10">
                      <div className="text-3xl mb-3">{item.icon}</div>
                      <h3 className="text-lg font-semibold text-primary mb-2">{item.title}</h3>
                      <p className="text-gray-700 text-sm">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Results & Value */}
          <section className="py-16 md:py-24 bg-gray-50">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8">Results & Impact</h2>
                <div className="space-y-6 mb-12">
                  {[
                    "Comprehensive modernization improving tenant satisfaction and property appeal",
                    "Enhanced building value through coordinated multi-unit renovation and upgrades",
                    "Contemporary aesthetics and functional improvements across all residential units",
                    "Improved rental income potential through modern, attractive living spaces",
                    "Professional execution maintaining quality consistency throughout the project",
                    "Stronger market position for property investment and tenant retention"
                  ].map((result, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <CheckCircle2 className="w-6 h-6 text-primary flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700 text-lg">{result}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Related Services */}
          <section className="py-16 md:py-24 bg-white border-t border-gray-200">
            <div className="container px-4">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-12">Related Renovation Services</h2>
                <div className="grid md:grid-cols-3 gap-6 mb-12">
                  {[
                    {
                      title: "Multi-Unit Renovations",
                      description: "Professional renovation services for apartment buildings and multi-unit properties in Corfu.",
                      link: "/renovations-corfu",
                      label: "Explore Services"
                    },
                    {
                      title: "Rental Property Renovations",
                      description: "Specialized renovations optimizing properties for rental income and tenant appeal.",
                      link: "/renovations-corfu",
                      label: "Learn More"
                    },
                    {
                      title: "Investment Properties",
                      description: "Renovation and improvement services for real estate investment properties in Corfu.",
                      link: "/renovations-corfu",
                      label: "Explore Options"
                    }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-primary mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                      <Button variant="ghost" className="text-primary p-0 h-auto font-semibold" asChild>
                        <Link href={service.link}>
                          {service.label} →
                        </Link>
                      </Button>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Final CTA */}
          <section className="relative py-16 md:py-24 bg-gradient-to-r from-primary/10 via-primary/5 to-transparent">
            <div className="container px-4">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Planning Apartment Building Renovations in Corfu?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Faiacon handles complex multi-unit renovation projects with professional project management and coordinated execution. Whether renovating apartment buildings for investor returns or property enhancement, we manage every aspect with quality focus and efficiency.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                    <Link href={`/${lang}/renovations-corfu`}>
                      Explore Renovation Services
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/5" asChild>
                    <Link href={`/${lang}/cost-calculator`}>
                      Get Cost Estimate
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </main>
      ) : null}
    </>
  )
}

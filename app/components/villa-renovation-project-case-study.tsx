"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, Hammer, CheckCircle2 } from "lucide-react"
import { ArchitecturalBackground } from "./architectural-background"

export default function VillaRenovationCaseStudy({ lang }: { lang: string }) {
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
                  <Home className="w-5 h-5 text-primary" />
                  <span className="text-sm font-semibold text-primary uppercase">Villa Renovation Project</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  Modern Villa Renovation in Corfu
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl">
                  Luxury villa renovation in Sinies showcasing contemporary design, enhanced amenities, and premium finishes for upscale residential living.
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
                      This villa renovation project in Sinies, Corfu, transformed a property into a modern luxury residence. The work focused on creating contemporary interior and exterior spaces while maintaining the property's character and connection to its surroundings.
                    </p>
                    <p className="text-gray-700">
                      The completed villa now features modern amenities, premium finishes, and an elegant aesthetic. This project demonstrates how professional villa renovation can significantly enhance property value, functionality, and appeal for luxury rental markets and discerning owners.
                    </p>
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Property Type</h3>
                    <p className="text-gray-700">Modern villa</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Location</h3>
                    <p className="text-gray-700">Sinies, Corfu, Greece</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Renovation Focus</h3>
                    <p className="text-gray-700">Interior and exterior modernization, premium finishes, contemporary design</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Project Goal</h3>
                    <p className="text-gray-700">Create a luxury residence with modern amenities and premium aesthetic appeal</p>
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
                      title: "Interior Redesign",
                      description: "Contemporary interior renovation with modern furnishings, updated systems, and luxury finishes throughout.",
                      icon: "🏠"
                    },
                    {
                      title: "Premium Finishes",
                      description: "High-quality materials, fixtures, and finishes elevating the villa's aesthetic and durability.",
                      icon: "✨"
                    },
                    {
                      title: "Modern Kitchen",
                      description: "State-of-the-art kitchen renovation with contemporary appliances and functional design.",
                      icon: "🍳"
                    },
                    {
                      title: "Bathroom Upgrades",
                      description: "Luxurious bathroom renovations with modern fixtures, premium tiling, and contemporary design.",
                      icon: "🚿"
                    },
                    {
                      title: "Exterior Improvements",
                      description: "Enhanced outdoor spaces with modern terracing, landscaping, and outdoor amenities.",
                      icon: "🌳"
                    },
                    {
                      title: "Systems Integration",
                      description: "Modern electrical, plumbing, and climate control systems with contemporary design integration.",
                      icon: "⚙️"
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
                    "Transformed into a luxury residential property with modern contemporary aesthetic",
                    "Significantly enhanced market value and appeal for premium real estate segment",
                    "Improved functionality with modern systems and contemporary design throughout",
                    "Premium finishes and amenities supporting vacation rental and upscale market positioning",
                    "Professional renovation exceeding owner expectations with quality execution",
                    "Strong appeal for luxury market with enhanced property investment potential"
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
                      title: "Villa Renovations",
                      description: "Comprehensive villa renovation and luxury upgrade services throughout Corfu.",
                      link: "/services/villa-luxury-home-construction",
                      label: "Villa Services"
                    },
                    {
                      title: "Renovations in Corfu",
                      description: "Complete renovation services for all property types with local expertise.",
                      link: "/renovations-corfu",
                      label: "Explore Renovations"
                    },
                    {
                      title: "Rental-Ready Properties",
                      description: "Property renovations optimized for vacation rental and Airbnb markets.",
                      link: "/renovations-corfu",
                      label: "Learn More"
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
                  Planning Villa Renovations in Corfu?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Faiacon specializes in villa renovation projects throughout Corfu, from luxury residential upgrades to rental-property improvements. Our experienced team manages complete villa renovations with attention to quality, design, and your specific property goals.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                    <Link href={`/${lang}/renovations-corfu`}>
                      Explore Villa Renovation Services
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

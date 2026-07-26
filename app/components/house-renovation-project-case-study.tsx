"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ChevronRight, Home, Hammer, CheckCircle2 } from "lucide-react"
import { ArchitecturalBackground } from "./architectural-background"

export default function HouseRenovationCaseStudy({ lang }: { lang: string }) {
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
                  <span className="text-sm font-semibold text-primary uppercase">Renovation Project</span>
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
                  House Renovation in Corfu
                </h1>
                <p className="text-lg md:text-xl text-white/90 max-w-xl">
                  Complete interior renovation project showcasing modernization and functional design improvements in a Corfu Town residence.
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
                      This project involved a comprehensive interior renovation of a residential property in Corfu Town. The homeowners sought to modernize their living space while maintaining structural integrity and enhancing functionality for everyday use.
                    </p>
                    <p className="text-gray-700">
                      The renovation transformed the property's interior with updated finishes, improved layout, and contemporary design elements—demonstrating how thoughtful renovation work can significantly enhance property value and livability.
                    </p>
                  </div>
                </div>

                {/* Project Details Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-16">
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Property Type</h3>
                    <p className="text-gray-700">Residential house</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Location</h3>
                    <p className="text-gray-700">Corfu Town, Corfu, Greece</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Renovation Focus</h3>
                    <p className="text-gray-700">Interior modernization, layout improvements, finishes upgrade</p>
                  </div>
                  <div className="p-6 bg-white rounded-lg border border-gray-200">
                    <h3 className="text-lg font-semibold text-primary mb-4">Project Goal</h3>
                    <p className="text-gray-700">Create a modern, functional living space with updated finishes and improved usability</p>
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
                      title: "Interior Layout",
                      description: "Optimized interior layout to improve flow and functionality throughout the residence.",
                      icon: "📐"
                    },
                    {
                      title: "Modern Ceiling",
                      description: "Installation of contemporary ceiling systems improving aesthetics and updating the property's appearance.",
                      icon: "⬆️"
                    },
                    {
                      title: "Wall Finishes",
                      description: "Updated wall treatments with modern materials and colors creating a fresh, contemporary feel.",
                      icon: "🎨"
                    },
                    {
                      title: "Lighting & Systems",
                      description: "Installation of modern electrical systems and lighting design for improved functionality and ambiance.",
                      icon: "💡"
                    },
                    {
                      title: "Flooring",
                      description: "Professional flooring installation using durable, contemporary materials throughout the property.",
                      icon: "🔲"
                    },
                    {
                      title: "Overall Modernization",
                      description: "Comprehensive modernization bringing the property up to current standards and aesthetic expectations.",
                      icon: "✨"
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
                    "Modernized interior aesthetics with updated finishes and contemporary design elements",
                    "Improved functional layout supporting better daily use and property livability",
                    "Enhanced property value through professional renovation and modernization",
                    "Contemporary systems and materials increasing property appeal and durability",
                    "Professional execution meeting quality standards and client expectations",
                    "Increased market attractiveness for potential buyers or renters"
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
                      title: "Renovations in Corfu",
                      description: "Comprehensive home and property renovation services throughout Corfu with local expertise.",
                      link: "/renovations-corfu",
                      label: "Explore Renovations"
                    },
                    {
                      title: "Villa Renovations",
                      description: "Specialized villa renovation and upgrade services for luxury properties and estate improvements.",
                      link: "/services/villa-luxury-home-construction",
                      label: "Villa Services"
                    },
                    {
                      title: "Cost Calculator",
                      description: "Get an instant estimation of renovation costs for kitchens, bathrooms, and full property projects.",
                      link: "/cost-calculator",
                      label: "Get Estimate"
                    }
                  ].map((service, idx) => (
                    <div key={idx} className="p-6 bg-gray-50 rounded-lg border border-gray-200 hover:shadow-lg transition-all">
                      <h3 className="font-semibold text-primary mb-2">{service.title}</h3>
                      <p className="text-sm text-gray-600 mb-4">{service.description}</p>
                      <Button variant="ghost" className="text-primary p-0 h-auto font-semibold" asChild>
                        <Link href={`/${lang}${service.link}`}>
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
                  Planning House Renovations in Corfu?
                </h2>
                <p className="text-lg text-gray-700 mb-8">
                  Faiacon brings 35+ years of local expertise and professional project management to residential renovation projects throughout Corfu. From initial consultation through final completion, we handle every aspect of your renovation with attention to detail and quality craftsmanship.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                    <Link href={`/${lang}/renovations-corfu`}>
                      Explore Our Renovation Services
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

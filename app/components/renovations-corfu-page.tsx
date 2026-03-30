"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { 
  CheckCircle2, 
  Home, 
  Bath, 
  ChefHat, 
  Paintbrush, 
  Zap, 
  Building2, 
  MapPin,
  Phone,
  Mail,
  Clock,
  Award,
  Users,
  Briefcase,
  ArrowRight,
  Star,
  Shield,
  Calculator
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function RenovationsCorfuPage({ lang }: { lang: string }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    propertyType: "",
    location: "",
    renovationType: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp message with form data
    const message = `Hello, I'm interested in renovation services in Corfu.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Property Type: ${formData.propertyType}
Location: ${formData.location}
Renovation Type: ${formData.renovationType}
Message: ${formData.message}`
    
    window.open(`https://wa.me/306987797679?text=${encodeURIComponent(message)}`, "_blank")
  }

  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-[#2c3e5c] via-[#3d5175] to-[#5c7191]">
        <div className="absolute inset-0">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/final_cleaned_logo%20test.JPG-FSlTAEvg6sCAKPe8rqG14XlINZsV8d.jpeg"
            alt="Renovations Corfu - Professional Property Renovation Services"
            fill
            className="object-cover"
            priority
            sizes="100vw"
            quality={75}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/80 to-primary/70" />
        </div>

        <div className="relative z-10 container px-4 py-16 md:py-24">
          <div className="max-w-5xl mx-auto text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm">
              <Award className="w-4 h-4" />
              <span>35+ Years of Excellence in Corfu</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight">
              Professional Renovations in Corfu
            </h1>

            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Expert house renovation, villa restoration, and property upgrades across Corfu island. 
              Transform your property with FaiaCon&apos;s trusted renovation services.
            </p>

            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              From bathroom and kitchen renovations to complete villa transformations - 
              we deliver quality craftsmanship for international property owners and local residents.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
              <Button
                size="lg"
                className="bg-white text-primary hover:bg-white/90 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <Link href={`/${lang}/cost-calculator`} className="flex items-center gap-2">
                  <Calculator className="w-5 h-5" />
                  Free Cost Calculator
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold"
                asChild
              >
                <a href="#contact-form" className="flex items-center gap-2">
                  Get Free Quote
                  <ArrowRight className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-16 bg-white">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: Award, number: "35+", label: "Years Experience", desc: "Established 1990" },
                { icon: Briefcase, number: "85+", label: "Projects Completed", desc: "Villas & Homes" },
                { icon: Users, number: "100%", label: "Client Focused", desc: "International & Local" },
                { icon: Shield, number: "5 Year", label: "Warranty", desc: "Quality Guarantee" },
              ].map((item, idx) => (
                <div key={idx} className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-3" />
                  <div className="text-3xl font-bold text-primary">{item.number}</div>
                  <div className="text-sm font-semibold text-gray-900">{item.label}</div>
                  <div className="text-xs text-gray-600">{item.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us for Renovations in Corfu */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Why Choose FaiaCon for Your Renovation in Corfu?
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                We understand the unique challenges of renovating properties in Corfu - from climate considerations 
                to local building regulations and the specific needs of international property owners.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-bold text-primary mb-6">Our Expertise</h3>
                <ul className="space-y-4">
                  {[
                    "Deep knowledge of Corfu's climate and building requirements",
                    "Experience with international property owners and expat clients",
                    "Full project management from design to completion",
                    "Network of trusted local suppliers and craftsmen",
                    "Bilingual team for seamless communication",
                    "Compliance with Greek building codes and EU standards",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-primary rounded-2xl p-8 text-white">
                <h3 className="text-xl font-bold mb-6">What Sets Us Apart</h3>
                <ul className="space-y-4">
                  {[
                    "Single point of contact throughout your project",
                    "Transparent pricing with no hidden costs",
                    "Regular progress updates with photos and reports",
                    "Flexible scheduling to suit overseas owners",
                    "Quality materials sourced locally and from Europe",
                    "Post-renovation support and maintenance services",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-white/90 flex-shrink-0 mt-0.5" />
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Services */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Complete Renovation Services in Corfu
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                From small updates to complete property transformations, we handle all aspects 
                of residential and commercial renovations across Corfu island.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Home,
                  title: "House Renovation",
                  description: "Complete interior and exterior renovations for homes and apartments. Modernise your space while preserving character.",
                  features: ["Structural upgrades", "Interior design", "Exterior finishes"],
                },
                {
                  icon: Bath,
                  title: "Bathroom Renovation",
                  description: "Transform your bathroom with modern fixtures, tiles, and plumbing. Create a spa-like retreat in your Corfu home.",
                  features: ["Modern fixtures", "Quality tiles", "Waterproofing"],
                },
                {
                  icon: ChefHat,
                  title: "Kitchen Renovation",
                  description: "Upgrade your kitchen with custom cabinets, countertops, and appliances. Functional and beautiful cooking spaces.",
                  features: ["Custom cabinets", "Stone countertops", "Appliance installation"],
                },
                {
                  icon: Paintbrush,
                  title: "Interior Painting",
                  description: "Professional painting services using premium paints. Interior and exterior painting for lasting results.",
                  features: ["Premium paints", "Surface prep", "Clean finishes"],
                },
                {
                  icon: Zap,
                  title: "Electrical Upgrades",
                  description: "Complete electrical rewiring and upgrades. Bring your property up to modern safety standards.",
                  features: ["Full rewiring", "Safety upgrades", "Smart systems"],
                },
                {
                  icon: Building2,
                  title: "Villa Restoration",
                  description: "Sensitive restoration of traditional and listed buildings. Preserve history while adding modern comfort.",
                  features: ["Heritage expertise", "Traditional methods", "Modern amenities"],
                },
              ].map((service, idx) => (
                <Card key={idx} className="border-gray-100 hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <service.icon className="w-12 h-12 text-primary mb-4" />
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 mb-4">{service.description}</p>
                    <ul className="space-y-2">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-center gap-2 text-sm text-gray-500">
                          <CheckCircle2 className="w-4 h-4 text-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-10">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link href={`/${lang}/house-renovation`}>
                  View All Renovation Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Who We Help with Renovations in Corfu
              </h2>
              <p className="text-lg text-gray-600">
                We work with a diverse range of property owners across Corfu island.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "International Property Owners",
                  description: "Own a villa or apartment in Corfu? We manage your renovation project while you're abroad, with regular updates and transparent communication. Many of our clients are based in the UK, Germany, and Scandinavia.",
                },
                {
                  title: "Holiday Home Investors",
                  description: "Preparing your property for Airbnb or holiday rentals? We create attractive, durable finishes that appeal to tourists and maximise your rental income potential.",
                },
                {
                  title: "Local Homeowners",
                  description: "Corfu residents looking to modernise their family home or upgrade their living space. We understand local needs and deliver quality results within budget.",
                },
                {
                  title: "Property Developers",
                  description: "Working on multiple properties or a development project? We offer competitive rates and reliable timelines for commercial-scale renovations.",
                },
              ].map((item, idx) => (
                <div key={idx} className="bg-white rounded-xl p-6 shadow-sm">
                  <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Renovation Process */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Our Renovation Process
              </h2>
              <p className="text-lg text-gray-600">
                A straightforward approach to delivering quality renovations in Corfu.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  step: "1",
                  title: "Initial Consultation",
                  description: "We visit your property to understand your requirements, assess the current condition, and discuss your vision. For overseas owners, we can conduct initial consultations via video call with detailed photos.",
                },
                {
                  step: "2",
                  title: "Detailed Quote",
                  description: "You receive a comprehensive quote with itemised costs, material specifications, and a realistic timeline. We explain every element so you know exactly what you're paying for.",
                },
                {
                  step: "3",
                  title: "Project Planning",
                  description: "Once approved, we create a detailed project plan, secure permits if needed, and coordinate with suppliers. You'll have a dedicated project manager as your single point of contact.",
                },
                {
                  step: "4",
                  title: "Construction Phase",
                  description: "Our skilled team executes the renovation with attention to detail. You receive regular photo updates and progress reports, keeping you informed every step of the way.",
                },
                {
                  step: "5",
                  title: "Quality Inspection & Handover",
                  description: "We conduct thorough quality checks before final handover. You receive all documentation, warranties, and maintenance guidelines for your renovated property.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-lg">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Areas We Serve */}
      <section className="py-20 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Renovation Services Across Corfu
              </h2>
              <p className="text-lg text-gray-600">
                We provide renovation services throughout Corfu island, from the historic Old Town 
                to the peaceful villages of the north and south.
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                "Corfu Town",
                "Kassiopi",
                "Sidari",
                "Paleokastritsa",
                "Gouvia",
                "Dassia",
                "Benitses",
                "Acharavi",
                "Roda",
                "Agios Gordios",
                "Lefkimmi",
                "Kavos",
              ].map((area, idx) => (
                <div key={idx} className="flex items-center gap-2 p-3 bg-white rounded-lg shadow-sm">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-medium text-gray-700">{area}</span>
                </div>
              ))}
            </div>

            <p className="text-center text-gray-500 mt-6">
              Plus all surrounding villages and areas across Corfu island.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about renovations in Corfu.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  q: "How much does a renovation cost in Corfu?",
                  a: "Renovation costs in Corfu vary based on scope and quality level. Basic renovations start from approximately 490 per square meter, while premium finishes can reach 780 per square meter. Use our free cost calculator for an instant estimate, or contact us for a detailed quote.",
                },
                {
                  q: "Can you manage my renovation if I live abroad?",
                  a: "Absolutely. Many of our clients are based overseas. We provide comprehensive project management with regular photo updates, video calls, and detailed progress reports. You'll have a dedicated project manager as your single point of contact.",
                },
                {
                  q: "How long does a typical renovation take?",
                  a: "Timelines depend on the project scope. A bathroom renovation typically takes 2-3 weeks, a kitchen 3-4 weeks, and a full house renovation 3-6 months. We provide realistic timelines upfront and keep you informed of progress.",
                },
                {
                  q: "Do you handle building permits and regulations?",
                  a: "Yes, we manage all permit applications and ensure compliance with Greek building codes and regulations. For listed buildings or properties in protected areas, we have experience navigating the additional requirements.",
                },
                {
                  q: "What warranty do you provide?",
                  a: "We provide a 5-year warranty on our workmanship, plus manufacturer warranties on all materials and fixtures. We also offer post-renovation maintenance services to keep your property in excellent condition.",
                },
                {
                  q: "Can you help prepare my property for holiday rentals?",
                  a: "Yes, we specialise in renovations that maximise rental appeal. From durable, easy-to-clean finishes to attractive designs that photograph well, we help you create properties that attract guests and command premium rates.",
                },
              ].map((item, idx) => (
                <div key={idx} className="border-b border-gray-200 pb-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{item.q}</h3>
                  <p className="text-gray-600">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact-form" className="py-20 bg-gradient-to-br from-primary to-primary-dark">
        <div className="container px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">
                  Get a Free Renovation Quote
                </h2>
                <p className="text-white/80 mb-8">
                  Tell us about your property and renovation plans. We&apos;ll get back to you 
                  within 24 hours with an initial assessment and next steps.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-white/70" />
                    <span>+30 698 779 7679</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-white/70" />
                    <span>info@faiacon.gr</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-white/70" />
                    <span>Mon-Fri: 8:00-18:00, Sat: 9:00-14:00</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-white/70" />
                    <span>Serving all of Corfu island</span>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-xl">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                    <Star className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                  </div>
                  <p className="text-white/90 text-sm italic">
                    &quot;FaiaCon transformed our villa beautifully. Professional team, excellent 
                    communication, and the results exceeded our expectations.&quot;
                  </p>
                  <p className="text-white/70 text-sm mt-2">- John S., UK</p>
                </div>
              </div>

              <div className="bg-white rounded-2xl p-6 shadow-xl">
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Your name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <Label htmlFor="phone">Phone</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="+30..."
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="propertyType">Property Type</Label>
                      <select
                        id="propertyType"
                        className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                        value={formData.propertyType}
                        onChange={(e) => setFormData({...formData, propertyType: e.target.value})}
                      >
                        <option value="">Select type</option>
                        <option value="villa">Villa</option>
                        <option value="apartment">Apartment</option>
                        <option value="house">House</option>
                        <option value="commercial">Commercial</option>
                      </select>
                    </div>
                    <div>
                      <Label htmlFor="location">Location in Corfu</Label>
                      <Input
                        id="location"
                        value={formData.location}
                        onChange={(e) => setFormData({...formData, location: e.target.value})}
                        placeholder="e.g., Kassiopi"
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="renovationType">Renovation Type</Label>
                    <select
                      id="renovationType"
                      className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm"
                      value={formData.renovationType}
                      onChange={(e) => setFormData({...formData, renovationType: e.target.value})}
                    >
                      <option value="">Select renovation type</option>
                      <option value="full">Full House Renovation</option>
                      <option value="bathroom">Bathroom Renovation</option>
                      <option value="kitchen">Kitchen Renovation</option>
                      <option value="painting">Painting / Decorating</option>
                      <option value="electrical">Electrical Upgrades</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your renovation project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                    Send Enquiry via WhatsApp
                  </Button>

                  <p className="text-xs text-gray-500 text-center">
                    Or call us directly: +30 698 779 7679
                  </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-gray-50">
        <div className="container px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">
              Ready to Start Your Renovation in Corfu?
            </h2>
            <p className="text-gray-600 mb-8">
              Use our free cost calculator for an instant estimate, or contact us to discuss 
              your project in detail.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button size="lg" className="bg-primary text-white hover:bg-primary/90" asChild>
                <Link href={`/${lang}/cost-calculator`}>
                  <Calculator className="w-5 h-5 mr-2" />
                  Free Cost Calculator
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-primary text-primary" asChild>
                <Link href={`/${lang}/appointment`}>
                  Book Free Consultation
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

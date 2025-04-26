"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "../contexts/language-context"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"

// This is a placeholder. Replace with your actual project data.
const projects = [
  {
    id: 1,
    title: "Luxury Villa",
    titleEl: "Πολυτελής Βίλα",
    location: "Kassiopi, Corfu",
    locationEl: "Κασσιόπη, Κέρκυρα",
    image: "/images/villa-kassiopi.jpg",
  },
  {
    id: 2,
    title: "House Renovation",
    titleEl: "Ανακαίνιση Οικίας",
    location: "Acharavi, Corfu",
    locationEl: "Αχαράβη, Κέρκυρα",
    image: "/images/renovation-acharavi.jpg",
  },
  {
    id: 3,
    title: "Hotel Renovation",
    titleEl: "Ανακαίνιση Ξενοδοχείου",
    location: "Corfu Town",
    locationEl: "Πόλη της Κέρκυρας",
    image: "/images/hotel-renovation-corfu-town.jpg",
  },
  {
    id: 4,
    title: "Listed Building Restoration",
    titleEl: "Αποκατάσταση Διατηρητέου",
    location: "Old Town, Corfu",
    locationEl: "Παλιά Πόλη, Κέρκυρα",
    image: "/images/listed-building-old-town.jpg",
  },
  {
    id: 5,
    title: "Villa Pool Construction",
    titleEl: "Κατασκευή Πισίνας σε Βίλα",
    location: "Dassia, Corfu",
    locationEl: "Δασιά, Κέρκυρα",
    image: "/images/pool-construction-dassia.jpg",
  },
]

export default function PortfolioPage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <ArchitecturalBackground />
        <div className="relative z-10 container px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white tracking-tight drop-shadow-lg">
              {isEnglish ? "Our Portfolio" : "Το Χαρτοφυλάκιό μας"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "Discover our recent projects and transformations"
                : "Ανακαλύψτε τα πρόσφατα έργα και τις μεταμορφώσεις μας"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Portfolio Grid */}
      <section className="relative py-16 md:py-24">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group cursor-pointer"
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div onClick={() => setSelectedProject(project)}>
                      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-4">
                        <Image
                          src={project.image || "/placeholder.svg"}
                          alt={isEnglish ? project.title : project.titleEl}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          className="object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      <h3 className="text-xl font-semibold mb-1">{isEnglish ? project.title : project.titleEl}</h3>
                      <p className="text-gray-600">{isEnglish ? project.location : project.locationEl}</p>
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px]">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={isEnglish ? project.title : project.titleEl}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">{isEnglish ? project.title : project.titleEl}</h2>
                    <p className="text-gray-600">{isEnglish ? project.location : project.locationEl}</p>
                    {/* Add more project details here */}
                  </DialogContent>
                </Dialog>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="relative py-16 md:py-24 bg-primary text-white">
        <ArchitecturalBackground className="opacity-10" />
        <div className="container relative z-10 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                {isEnglish ? "Ready to Start Your Project?" : "Έτοιμοι να Ξεκινήσετε το Έργο σας;"}
              </h2>
              <p className="text-lg text-white/80 mb-8">
                {isEnglish
                  ? "Contact us today to discuss how we can bring your vision to life."
                  : "Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε πώς μπορούμε να ζωντανέψουμε το όραμά σας."}
              </p>
              <Button size="lg" className="bg-white text-primary hover:bg-white/90" asChild>
                <a href={`/${lang}/appointment`}>{isEnglish ? "Book a Free Appointment" : "Κλείστε Δωρεάν Ραντεβού"}</a>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import { useLanguage } from "../contexts/language-context"
import { ArchitecturalBackground } from "./architectural-background"
import { SectionBackground } from "./section-background"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog"
import Head from "next/head"
import { ProjectCard } from "./project-card"

const projects = [
  {
    id: 1,
    title: "Ανακαίνιση Σπιτιού Κέρκυρα",
    titleEn: "House Renovation Corfu",
    description: "Εσωτερική ανακαίνιση με μοντέρνο ταβάνι",
    descriptionEn: "Interior renovation with modern ceiling",
    location: "Πόλη της Κέρκυρας",
    locationEn: "Corfu Town",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B1%CE%BD%CE%B1%CE%BA%CE%B1%CE%AF%CE%BD%CE%B9%CF%83%CE%B7%20%CF%83%CF%80%CE%B9%CF%84%CE%B9%CE%BF%CF%8D.jpg-4JrG4DNSdtesYOXXiWMwkTb0QcGVvE.jpeg",
  },
  {
    id: 13,
    title: "Ανακαίνιση Πολυκατοικίας",
    titleEn: "Apartment Building Renovation",
    description: "Εκτενής ανακαίνιση πολυκατοικίας με έμφαση στην αισθητική και λειτουργικότητα",
    descriptionEn: "Extensive apartment building renovation focusing on aesthetics and functionality",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-1-square-_-_-_-jpg_custom_resized.jpg-eUBjtcyIboOR0h31QfseW7PijUw0Ob.jpeg",
  },
  {
    id: 2,
    title: "Ολοκληρωμένη Βίλα στις Σινιές",
    titleEn: "Completed Villa in Sinies",
    description: "Μοντέρνα βίλα με βεράντα",
    descriptionEn: "Modern villa with terrace",
    location: "Σινιές, Κέρκυρα",
    locationEn: "Sinies, Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%84%CE%B5%CE%BB%CE%B5%CE%B9%CF%89%CE%BC%CE%AD%CE%BD%CE%B7%20%CE%B2%CE%AF%CE%BB%CE%B1%20%CF%83%CE%B9%CE%BD%CE%B9%CE%AD%CF%82.jpg-TBv1Q93tF49zLCpwPjQIhP4OS6eJLq.jpeg",
  },
  {
    id: 7,
    title: "Ανακαίνιση Καφετέριας",
    titleEn: "Café Bar Renovation",
    description: "Μοντέρνος πάγκος μπαρ με ξύλινη επιφάνεια και μαρμάρινη βάση",
    descriptionEn: "Modern bar counter with wooden top and marble base",
    location: "Πλατεία Κέρκυρας",
    locationEn: "Corfu Town Square",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B1%CE%BD%CE%B1%CE%BA%CE%B1%CE%AF%CE%BD%CE%B9%CF%83%CE%B7%20%CE%BA%CE%B1%CF%86%CE%B5%CF%84%CE%AD%CF%81%CE%B9%CE%B1%CF%82%20%CF%80%CE%BB%CE%B1%CF%84%CE%B5%CE%AF%CE%B1.jpg-MvHR5BpJy7PbwEVpnJaY7kykQCjcbt.jpeg",
  },
  {
    id: 8,
    title: "Επαγγελματική Κοπή Τοίχου",
    titleEn: "Professional Wall Cutting",
    description: "Εξειδικευμένη κατασκευαστική εργασία με επαγγελματικό εξοπλισμό",
    descriptionEn: "Specialized construction work with professional equipment",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B1%CE%B4%CE%B9%CE%B1%CF%84%CE%AC%CF%81%CE%B1%CE%BA%CF%84%CE%B7%20%CE%BA%CE%BF%CF%80%CE%AE.jpg-ok2XHJnFLf71jjbk1vPbosC5xHyFjQ.jpeg",
  },
  {
    id: 9,
    title: "Ανακαίνιση Μοντέρνου Μπάνιου",
    titleEn: "Modern Bathroom Renovation",
    description: "Σύγχρονο μπάνιο με διακοσμητικά πλακάκια και ντουζιέρα",
    descriptionEn: "Contemporary bathroom with patterned tiles and walk-in shower",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B1%CE%BD%CE%B1%CE%BA%CE%B1%CE%AF%CE%BD%CE%B9%CF%83%CE%B7%20%CE%BC%CF%80%CE%AC%CE%BD%CE%B9%CE%BF.jpg-vmXgxmxZ29hbEYB8yL36mbdeMNc01t.jpeg",
  },
  {
    id: 10,
    title: "Σύγχρονη Ανακαίνιση με Φωτισμό",
    titleEn: "Modern Renovation with Lighting",
    description: "Πλήρης εξωτερική ανακαίνιση με σύγχρονο αρχιτεκτονικό φωτισμό",
    descriptionEn: "Complete exterior renovation with modern architectural lighting",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AC%CF%88%CE%B9%CE%BC%CE%BF%20%CF%80%CE%BF%CE%BB%CF%85%CE%BA%CE%B1%CF%84%CE%BF%CE%B9%CE%BA%CE%AF%CE%B1%CF%82.jpg-1pS4NAFbrYMM6lhEmNdYov03kYA6JG.jpeg",
  },
  {
    id: 11,
    title: "Αποκατάσταση Νεοκλασικού",
    titleEn: "Neoclassical Restoration",
    description: "Αποκατάσταση παραδοσιακού νεοκλασικού κτιρίου με διατήρηση αρχιτεκτονικών στοιχείων",
    descriptionEn: "Restoration of traditional neoclassical building preserving architectural elements",
    location: "Παλιά Πόλη, Κέρκυρα",
    locationEn: "Old Town, Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%AC%CF%88%CE%B9%CE%BC%CE%BF%20%CF%83%CF%80%CE%B9%CF%84%CE%B9%CE%BF%CF%8D.jpg-p12p3EtygtRMALybdBVpzkRKpJfaw3.jpeg",
  },
  {
    id: 14,
    title: "Ανακαίνιση Εισόδου Καφετέριας",
    titleEn: "Café Entrance Renovation",
    description: "Παραδοσιακή ανακαίνιση εισόδου με πράσινες πόρτες και πέτρινη αψίδα",
    descriptionEn: "Traditional entrance renovation with green doors and stone archway",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B5%CE%B9%CF%83%CE%BF%CE%B4%CE%BF%CF%82%20%CE%BA%CE%B1%CF%86%CE%B5%CF%84%CE%AD%CF%81%CE%B9%CE%B1%CF%82%20%CE%B1%CE%BD%CE%B1%CE%BA%CE%B1%CE%AF%CE%BD%CE%B9%CF%83%CE%B7.jpg-xEzFtlsYZDh26bNICMg1vtSz5C4efp.jpeg",
  },
  {
    id: 15,
    title: "Θερμοπρόσοψη",
    titleEn: "Thermal Insulation",
    description: "Επαγγελματική εφαρμογή θερμοπρόσοψης σε εξωτερικό κτιρίου",
    descriptionEn: "Professional thermal insulation application on building exterior",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B8%CE%B5%CF%81%CE%BC%CE%BF%CF%80%CF%81%CF%8C%CF%83%CE%BF%CF%88%CE%B7.jpg-ii4riejnNPJOAlqk1WbWq32OcXg6e4.jpeg",
  },
  {
    id: 16,
    title: "Βάψιμο Σπιτιού Μετά",
    titleEn: "House Painting After",
    description: "Ολοκληρωμένο έργο εξωτερικής βαφής με μοντέρνο χρωματικό συνδυασμό",
    descriptionEn: "Completed exterior painting project with modern color scheme",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B2%CE%B1%CF%88%CE%B9%CE%BC%CE%BF%20%CF%83%CF%80%CE%B9%CF%84%CE%B9%CE%BF%CF%8D%20%CE%BC%CE%B5%CF%84%CE%AC.jpg-MI2cX08oDPeCSCxZDCaRisbd291vte.jpeg",
  },
  {
    id: 17,
    title: "Γερανός για Υλικά για Στέγη",
    titleEn: "Crane for Roof Materials",
    description: "Επαγγελματική λειτουργία γερανού για μεταφορά υλικών στέγης",
    descriptionEn: "Professional crane operation for roof material transportation",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B3%CE%B5%CF%81%CE%B1%CE%BD%CF%8C%CF%82%20%CE%B3%CE%B9%CE%B1%20%CF%85%CE%BB%CE%B9%CE%BA%CE%AC%20%CE%B3%CE%B9%CE%B1%20%CF%83%CF%84%CE%AD%CE%B3%CE%B7.jpg-TeKJnk494QVEUtnqdpgDKH1F1QdEuH.jpeg",
  },
  {
    id: 18,
    title: "Γκρέμισμα Παλιάς Στέγης",
    titleEn: "Old Roof Demolition",
    description: "Επαγγελματική κατεδάφιση και ανακαίνιση παλιάς στέγης",
    descriptionEn: "Professional demolition and renovation of old roof",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B3%CE%BA%CF%81%CE%AD%CE%BC%CE%B9%CF%83%CE%BC%CE%B1%20%CF%80%CE%B1%CE%BB%CE%B9%CE%AC%CF%82%20%CF%83%CF%84%CE%AD%CE%B3%CE%B7%CF%82.jpg-80k9wLkLzwEmHHu5cTpL8eHflz9add.jpeg",
  },
  {
    id: 19,
    title: "Εταιρικό Αμάξι",
    titleEn: "Company Vehicle",
    description: "Το εταιρικό μας όχημα στην παλιά πόλη της Κέρκυρας",
    descriptionEn: "Our company vehicle in Corfu Old Town",
    location: "Παλιά Πόλη, Κέρκυρας",
    locationEn: "Old Town, Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B5%CF%84%CE%B1%CE%B9%CF%81%CE%B9%CE%BA%CF%8C%20%CE%B1%CE%BC%CE%AC%CE%BE%CE%B9.jpg-juUcs5QL15P969Hhm6LCkLUlbJuxUv.jpeg",
  },
  {
    id: 20,
    title: "Ανακαίνιση Ολική με Εσωτερική Πέτρα και Πατάρι",
    titleEn: "Complete Renovation with Interior Stone and Loft",
    description: "Ολική ανακαίνιση με παραδοσιακή πέτρινη επένδυση, σύγχρονο πατάρι και διακοσμητικό φωτισμό",
    descriptionEn: "Complete renovation featuring traditional stone walls, modern loft design and decorative lighting",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%B1%CE%BD%CE%B1%CE%BA%CE%B1%CE%B9%CE%BD%CE%B9%CF%83%CE%B7%20%CE%BC%CE%B5%20%CE%B5%CF%83%CF%89%CF%84%CE%B5%CF%81%CE%B9%CE%BA%CE%B7%20%CF%80%CE%AD%CF%84%CF%81%CE%B1%20%CE%BA%CE%B1%CE%B9%20%CF%80%CE%B1%CF%84%CE%AC%CF%81%CE%B9.jpg-I0TMmWgFx05YSu5HvXiixraKapgBar.jpeg",
  },
  {
    id: 21,
    title: "Πολυκατοικία Πρίν Κέντρο Κέρκυρας",
    titleEn: "Apartment Building Before - Corfu Center",
    description: "Κατάσταση πολυκατοικίας πριν την ανακαίνιση στο κέντρο της Κέρκυρας",
    descriptionEn: "Apartment building condition before renovation in Corfu center",
    location: "Κέντρο Κέρκυρας",
    locationEn: "Corfu Center",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1-1-square-_-jpg_custom_resized.jpg-zqT1hlDi2n5up56sKPnkFmUWpJx5Qz.jpeg",
  },
  {
    id: 22,
    title: "Πατητή Τσιμεντοκονία",
    titleEn: "Polished Concrete Flooring",
    description: "Εφαρμογή πατητής τσιμεντοκονίας σε σύγχρονο χώρο με τζάκι και μεγάλα παράθυρα",
    descriptionEn: "Application of polished concrete flooring in modern space with fireplace and large windows",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%80%CE%B1%CF%84%CE%B7%CF%84%CE%B7%20%CF%84%CF%83%CE%B9%CE%BC%CE%B5%CE%BD%CF%84%CE%BF%CE%BA%CE%BF%CE%BD%CE%AF%CE%B1.jpg-FZZJSS164SoShsXNklP4fk52lnFfJo.jpeg",
  },
  {
    id: 23,
    title: "Πολυκατοικία στο Κέντρο Κέρκυρας",
    titleEn: "Apartment Building in Corfu Center",
    description: "Παραδοσιακή πολυκατοικία με αψιδωτές εισόδους και διακοσμητικά κάγκελα στο ιστορικό κέντρο",
    descriptionEn:
      "Traditional apartment building with arched entrances and decorative railings in the historic center",
    location: "Κέντρο Κέρκυρας",
    locationEn: "Corfu Center",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%80%CE%BF%CE%BB%CF%85%CE%BA%CE%B1%CF%84%CE%BF%CE%B9%CE%BA%CE%AF%CE%B1%20%CF%83%CF%84%CE%BF%20%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CE%BF%20%CE%9A%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%CF%82.jpg-VVDZ0SiPR9AVi8KMd2Kpnl9u0hg7Mv.jpeg",
  },
  {
    id: 24,
    title: "Χτήσιμο από Πέτρα",
    titleEn: "Stone Building Construction",
    description: "Παραδοσιακή κατασκευή πέτρινου κτιρίου με δύο παράθυρα και πόρτα",
    descriptionEn: "Traditional stone building construction with two windows and a door",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%87%CF%84%CE%B7%CF%83%CE%B9%CE%BC%CE%BF%20%CE%B1%CF%80%CE%BF%20%CF%80%CE%AD%CF%84%CF%81%CE%B1.jpg-V6fg44jmaHcENHfZROIDXpgh7sFIVl.jpeg",
  },
  {
    id: 25,
    title: "Τελειωμένη Ανακαίνιση Στέγης",
    titleEn: "Completed Roof Renovation",
    description: "Ολοκληρωμένη ανακαίνιση στέγης με κεραμίδια και ικριώματα",
    descriptionEn: "Completed roof renovation with terracotta tiles and scaffolding",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%84%CE%B5%CE%BB%CE%B5%CE%B9%CF%89%CE%BC%CE%AD%CE%BD%CE%B7%20%CE%B1%CE%BD%CE%B1%CE%BA%CE%B1%CE%AF%CE%BD%CE%B9%CF%83%CE%B7%20%CF%83%CF%84%CE%AD%CE%B3%CE%B7%CF%82.jpg-ZmyJTghJxTibkFAJGGodIshVexa1Kj.jpeg",
  },
  {
    id: 26,
    title: "Τοποθέτηση Πλακάκια",
    titleEn: "Tile Installation",
    description: "Επαγγελματική τοποθέτηση πλακιδίων με σύστημα ευθυγράμμισης",
    descriptionEn: "Professional tile installation with leveling system",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%84%CE%BF%CF%80%CE%BF%CE%B8%CE%AD%CF%84%CE%B7%CF%83%CE%B7%20%CF%80%CE%BB%CE%B1%CE%BA%CE%AC%CE%BA%CE%B9%CE%B1.jpg-cmsgJWCZS6LXV72NEexpB6S1ypninB.jpeg",
  },
  {
    id: 27,
    title: "Στέγη",
    titleEn: "Wooden Roof Structure",
    description: "Κατασκευή ξύλινης στέγης με εμφανή δοκάρια και σκελετό",
    descriptionEn: "Wooden roof construction with exposed beams and framework",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%83%CF%84%CE%AD%CE%B3%CE%B7.jpg-9rpkaCHv4ryvjYRKThtAVJmca0mDad.jpeg",
  },
  {
    id: 28,
    title: "Τελειωμένη Στέγη Πολυκατοικίας",
    titleEn: "Completed Apartment Building Roof",
    description: "Ολοκληρωμένη ανακαίνιση στέγης με νέα κεραμίδια στο κέντρο της Κέρκυρας",
    descriptionEn: "Complete roof renovation with new terracotta tiles in Corfu town center",
    location: "Κέντρο Κέρκυρας",
    locationEn: "Corfu Town Center",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%84%CE%B5%CE%BB%CE%B5%CE%B9%CF%89%CE%BC%CE%AD%CE%BD%CE%B7%20%CF%83%CF%84%CE%AD%CE%B3%CE%B7%20%CF%80%CE%BF%CE%BB%CF%85%CE%BA%CE%B1%CF%84%CE%BF%CE%B9%CE%BA%CE%AF%CE%B1%CF%82%20%CE%BA%CE%AD%CE%BD%CF%84%CF%81%CE%BF%20%CE%BA%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%CF%82.jpg-9SLJU8WsjDlGgtX5rzrcYx3F4CvfpY.jpeg",
  },
  {
    id: 29,
    title: "Μόνωση Δεξαμενής",
    titleEn: "Tank Waterproofing",
    description: "Επαγγελματική στεγανοποίηση και μόνωση δεξαμενής με ειδικά υλικά",
    descriptionEn: "Professional tank waterproofing and insulation with specialized materials",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CE%BC%CF%8C%CE%BD%CF%89%CF%83%CE%B7%20%CE%B4%CE%B5%CE%BE%CE%B1%CE%BC%CE%B5%CE%BD%CE%AE%CF%82.jpg-DD75AsNutM0eIC09N6ob3lPpkkpUDV.jpeg",
  },
  {
    id: 30,
    title: "Συγκρότημα Οικοδομών Σολάρι",
    titleEn: "Solari Residential Complex",
    description: "Μοντέρνο συγκρότημα κατοικιών με μοναδική αρχιτεκτονική, διακοσμητικές καμινάδες και ιδιωτική πύλη",
    descriptionEn: "Modern residential complex with unique architecture, decorative chimneys, and private gate",
    location: "Κέρκυρα",
    locationEn: "Corfu",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/%CF%83%CF%85%CE%B3%CE%BA%CF%81%CF%8C%CF%84%CE%B7%CE%BC%CE%B1%20%CE%BF%CE%B9%CE%BA%CE%BF%CE%B4%CE%BF%CE%BC%CF%8E%CE%BD%20%CE%A3%CE%BF%CE%BB%CE%AC%CF%81%CE%B9%20%CE%9A%CE%AD%CF%81%CE%BA%CF%85%CF%81%CE%B1%20(1).jpg-glAR8tyRwEVcIj6ZQsNmycEiIgFs6g.jpeg",
  },
]

export default function OurProjectsPage({ lang }: { lang: string }) {
  const { isEnglish } = useLanguage()
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)

  return (
    <>
      <Head>
        {projects.slice(0, 6).map((project) => (
          <link key={project.id} rel="preload" as="image" href={project.image} type="image/jpeg" />
        ))}
      </Head>
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
              {isEnglish ? "Our Projects" : "Τα Έργα μας"}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto drop-shadow-lg">
              {isEnglish
                ? "Discover our portfolio of successful projects and transformations"
                : "Ανακαλύψτε το χαρτοφυλάκιο των επιτυχημένων έργων και μεταμορφώσεων μας"}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="relative py-16 bg-white">
        <div className="container relative z-10 px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="prose prose-lg max-w-none">
              <p className="text-lg sm:text-xl leading-relaxed text-gray-700">
                {isEnglish
                  ? "We present some of our most recent projects in Corfu, reflecting our commitment to high-quality construction and absolute attention to detail. From complete home and apartment building renovations to specialized restoration and space configuration projects, each of our projects is designed and implemented based on modern building techniques and the use of durable, energy-efficient materials. Our experience ensures solutions that combine aesthetics, functionality, and durability over time."
                  : "Σας παρουσιάζουμε ορισμένα από τα πιο πρόσφατα έργα μας στην Κέρκυρα, που αντικατοπτρίζουν τη δέσμευσή μας στην υψηλή ποιότητα κατασκευής και την απόλυτη προσοχή στη λεπτομέρεια. Από ολοκληρωμένες ανακαινίσεις κατοικιών και πολυκατοικιών έως ειδικά έργα αποκατάστασης και διαμόρφωσης χώρων, κάθε έργο μας σχεδιάζεται και υλοποιείται με βάση τις μοντέρνες τεχνικές δόμησης και τη χρήση ανθεκτικών, ενεργειακά αποδοτικών υλικών. Η εμπειρία μας διασφαλίζει λύσεις που συνδυάζουν αισθητική, λειτουργικότητα και αντοχή στον χρόνο."}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative py-16 md:py-24">
        <SectionBackground />
        <div className="container relative z-10 px-4">
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
            style={{
              viewTransitionName: "projects-grid",
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <Dialog>
                  <DialogTrigger asChild>
                    <div onClick={() => setSelectedProject(project)}>
                      <ProjectCard
                        title={isEnglish ? project.titleEn : project.title}
                        location={isEnglish ? project.locationEn : project.location}
                        image={project.image}
                        priority={index < 6}
                      />
                    </div>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-[800px]">
                    <div className="relative aspect-video w-full overflow-hidden rounded-lg">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={isEnglish ? project.titleEn : project.title}
                        fill
                        className="object-cover"
                        onError={(e) => {
                          const img = e.target as HTMLImageElement
                          img.src = "/placeholder.svg"
                        }}
                      />
                    </div>
                    <h2 className="text-2xl font-bold mt-4">{isEnglish ? project.titleEn : project.title}</h2>
                    {/* Οι περιγραφές τοποθεσίας και έργου αφαιρέθηκαν */}
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

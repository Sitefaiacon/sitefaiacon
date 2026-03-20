import Image from "next/image"
import Link from "next/link"
import { Building2, Home, PenTool, Droplets, Phone, Mail, MapPin, CheckCircle2, CalendarDays } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      {/* Header */}
      <header className="bg-[#2B4B8C] text-white py-4 px-6 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg"
            alt="ΦαιάCon Logo"
            width={50}
            height={50}
            className="rounded-full"
          />
          <span className="text-2xl font-bold">ΦαιάCon</span>
        </div>
        <nav className="hidden md:flex gap-6">
          <Link href="/house-construction" className="hover:text-gray-200">Κατασκευή Σπιτιού</Link>
          <Link href="/house-renovation" className="hover:text-gray-200">Ανακαίνιση</Link>
          <Link href="/listed-houses" className="hover:text-gray-200">Διατηρητέα</Link>
          <Link href="/pool-construction" className="hover:text-gray-200">Πισίνες</Link>
          <Link href="/appointment" className="hover:text-gray-200">Ραντεβού</Link>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-[#2B4B8C] to-[#1E3563] text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">ΦαιάCon</h1>
          <p className="text-2xl md:text-3xl mb-4 bg-white/20 inline-block px-6 py-2 rounded-full">
            ΤΕΧΝΙΚΗ ΚΑΤΑΣΚΕΥΑΣΤΙΚΗ
          </p>
          <p className="text-xl md:text-2xl mb-8 text-white/90">
            Αριστεία στις Κατασκευές από το 1990
          </p>
          <Button size="lg" className="bg-white text-[#2B4B8C] hover:bg-gray-100 text-lg px-8 py-6" asChild>
            <Link href="/appointment">Κλείστε Ραντεβού</Link>
          </Button>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2B4B8C] mb-12">
            Οι Υπηρεσίες μας
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Home, title: "Κατασκευή Σπιτιού", desc: "Δημιουργούμε το σπίτι των ονείρων σας", href: "/house-construction" },
              { icon: PenTool, title: "Ανακαίνιση Σπιτιού", desc: "Ανανεώστε τον χώρο σας", href: "/house-renovation" },
              { icon: Building2, title: "Διατηρητέα Κτίρια", desc: "Ειδική φροντίδα για ιστορικά κτίρια", href: "/listed-houses" },
              { icon: Droplets, title: "Κατασκευή Πισίνας", desc: "Πολυτελείς πισίνες υψηλής ποιότητας", href: "/pool-construction" },
            ].map((service) => (
              <Link key={service.title} href={service.href} className="group">
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all text-center">
                  <service.icon className="w-12 h-12 text-[#2B4B8C] mx-auto mb-4 group-hover:scale-110 transition-transform" />
                  <h3 className="text-xl font-semibold mb-2 text-[#2B4B8C]">{service.title}</h3>
                  <p className="text-gray-600">{service.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2B4B8C] mb-8">
            Τεχνική Κατασκευαστική Κέρκυρας
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            Η ΦαίαCon, με έδρα την Κέρκυρα, αποτελεί σημείο αναφοράς στον χώρο των κατασκευών, 
            προσφέροντας υψηλής ποιότητας υπηρεσίες στην κατασκευή σπιτιών, την ανακαίνιση κατοικιών, 
            τη δημιουργία διατηρητέων κτιρίων και την κατασκευή πολυτελών πισινών. 
            Με εμπειρία άνω των 35 ετών, η τεχνική μας ομάδα εγγυάται καινοτομία, αντοχή και αισθητική υπεροχή.
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-[#2B4B8C] mb-4">Γιατί να μας επιλέξετε;</h3>
              <ul className="space-y-3">
                {[
                  "Εξειδίκευση στην αρχιτεκτονική αρτιότητα",
                  "Προηγμένες τεχνικές κατασκευής",
                  "Ολοκληρωμένες λύσεις",
                  "Αξιοπιστία και διαφάνεια",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#2B4B8C] flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#2B4B8C] text-white p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4">Η Δέσμευσή μας</h3>
              <p className="mb-6">
                Με πάθος για τη λεπτομέρεια και δέσμευση στην ποιότητα, δημιουργούμε κατασκευές 
                που ξεχωρίζουν για την αντοχή και την αισθητική τους.
              </p>
              <Button className="bg-white text-[#2B4B8C] hover:bg-gray-100 w-full" asChild>
                <Link href="/appointment">Κλείστε Ραντεβού</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-6 bg-[#2B4B8C] text-white">
        <div className="max-w-3xl mx-auto text-center">
          <CalendarDays className="w-12 h-12 mx-auto mb-4" />
          <h2 className="text-3xl font-bold mb-4">Έτοιμοι να Ξεκινήσετε;</h2>
          <p className="text-lg mb-8">
            Επικοινωνήστε μαζί μας σήμερα για να συζητήσουμε το έργο σας.
          </p>
          <Button size="lg" className="bg-white text-[#2B4B8C] hover:bg-gray-100" asChild>
            <Link href="/appointment">Κλείστε Δωρεάν Ραντεβού</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#1E3563] text-white py-12 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">ΦαιάCon</h3>
            <p className="text-white/80">
              Τεχνική Κατασκευαστική Κέρκυρας - Αριστεία στις Κατασκευές από το 1990
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Υπηρεσίες</h4>
            <ul className="space-y-2 text-white/80">
              <li><Link href="/house-construction" className="hover:text-white">Κατασκευή Σπιτιού</Link></li>
              <li><Link href="/house-renovation" className="hover:text-white">Ανακαίνιση Σπιτιού</Link></li>
              <li><Link href="/listed-houses" className="hover:text-white">Διατηρητέα Κτίρια</Link></li>
              <li><Link href="/pool-construction" className="hover:text-white">Κατασκευή Πισίνας</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Επικοινωνία</h4>
            <ul className="space-y-2 text-white/80">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <span>+30 26610 12345</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <span>info@faiacon.gr</span>
              </li>
              <li className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>Κέρκυρα, Ελλάδα</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-white/20 text-center text-white/60">
          <p>&copy; 2024 ΦαιάCon. Όλα τα δικαιώματα διατηρούνται.</p>
        </div>
      </footer>
    </main>
  )
}

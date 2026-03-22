import Link from "next/link"
import { Mail, MapPin, Phone, ExternalLink } from "lucide-react"
import Script from "next/script"

const serviceLinks = [
  { href: "/house-construction", label: "Κατασκευή Σπιτιού", labelEn: "House Construction" },
  { href: "/house-renovation", label: "Ανακαίνιση Σπιτιού", labelEn: "House Renovation" },
  { href: "/listed-houses", label: "Διατηρητέα Κτίρια", labelEn: "Listed Buildings" },
  { href: "/pool-construction", label: "Κατασκευή Πισίνας", labelEn: "Pool Construction" },
  { href: "/our-projects", label: "Τα Έργα μας", labelEn: "Our Projects" },
]

interface FooterProps {
  lang?: string
}

export function Footer({ lang = "el" }: FooterProps) {
  const isEnglish = lang === "en"

  return (
    <>
      <footer className="bg-primary-dark text-white">
        {/* Main footer content */}
        <div className="container px-4 sm:px-6 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

            {/* Brand column */}
            <div className="lg:col-span-2">
              <Link href={`/${lang}`} className="font-serif text-3xl font-bold text-white hover:text-accent transition-colors inline-block mb-4">
                ΦαιάCon
              </Link>
              <p className="text-white/60 text-sm leading-relaxed max-w-xs mb-6">
                {isEnglish
                  ? "Technical Construction Company based in Corfu, Greece. Excellence in construction since 1990."
                  : "Τεχνική Κατασκευαστική Εταιρεία με έδρα την Κέρκυρα. Αριστεία στις κατασκευές από το 1990."}
              </p>

              {/* Contact details */}
              <div className="space-y-3">
                <a
                  href="tel:+306987797679"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Phone className="w-4 h-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  +30 6987 797 679
                </a>
                <a
                  href="mailto:faiacon@yahoo.com"
                  className="flex items-center gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <Mail className="w-4 h-4 text-accent flex-shrink-0 group-hover:scale-110 transition-transform" />
                  faiacon@yahoo.com
                </a>
                <a
                  href="https://maps.app.goo.gl/LWjc7NV3s1NADhtF9"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/70 hover:text-white transition-colors text-sm group"
                >
                  <MapPin className="w-4 h-4 text-accent flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                  <span>
                    {isEnglish ? "Potamos, Corfu 491 00, Greece" : "Ποταμός, Κέρκυρα 491 00"}
                    <ExternalLink className="inline ml-1 w-3 h-3 opacity-50" />
                  </span>
                </a>
              </div>
            </div>

            {/* Services column */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-5">
                {isEnglish ? "Services" : "Υπηρεσίες"}
              </h4>
              <nav className="space-y-3" aria-label="Footer υπηρεσίες">
                {serviceLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={`/${lang}${item.href}`}
                    className="block text-white/60 hover:text-white transition-colors text-sm hover:translate-x-0.5 motion-safe:transition-transform"
                  >
                    {isEnglish ? item.labelEn : item.label}
                  </Link>
                ))}
              </nav>
            </div>

            {/* Company column */}
            <div>
              <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-5">
                {isEnglish ? "Company" : "Εταιρεία"}
              </h4>
              <nav className="space-y-3" aria-label="Footer εταιρεία">
                <Link
                  href={`/${lang}`}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {isEnglish ? "Home" : "Αρχική"}
                </Link>
                <Link
                  href={`/${lang}/our-projects`}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {isEnglish ? "Our Projects" : "Τα Έργα μας"}
                </Link>
                <Link
                  href={`/${lang}/appointment`}
                  className="block text-white/60 hover:text-white transition-colors text-sm"
                >
                  {isEnglish ? "Book Appointment" : "Κλείστε Ραντεβού"}
                </Link>
              </nav>

              {/* Translate widget */}
              <div className="mt-8">
                <h4 className="text-xs font-semibold tracking-widest uppercase text-accent mb-3">
                  {isEnglish ? "Language" : "Γλώσσα"}
                </h4>
                <div id="google_translate_element" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10">
          <div className="container px-4 sm:px-6 py-5 flex flex-col sm:flex-row justify-between items-center gap-3">
            <p className="text-white/40 text-xs">
              &copy; {new Date().getFullYear()} ΦαιάCon.{" "}
              {isEnglish ? "All rights reserved." : "Με επιφύλαξη παντός δικαιώματος."}
            </p>
            <p className="text-white/30 text-xs">
              {isEnglish ? "Corfu, Greece" : "Κέρκυρα, Ελλάδα"}
            </p>
          </div>
        </div>
      </footer>

      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="lazyOnload"
      />
      <Script id="google-translate-init" strategy="lazyOnload">
        {`
          function googleTranslateElementInit() {
            if (typeof google !== 'undefined' && google.translate) {
              new google.translate.TranslateElement(
                {
                  pageLanguage: 'el',
                  includedLanguages: 'en,it,de,fr,ru',
                  layout: google.translate.TranslateElement.InlineLayout.SIMPLE
                },
                'google_translate_element'
              );
            }
          }
        `}
      </Script>
    </>
  )
}

import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import Script from "next/script"

export function Footer() {
  return (
    <>
      <footer className="bg-white border-t">
        <div className="container py-8 px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Επικοινωνία</h3>
              <div className="space-y-3 text-gray-600">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5" />
                  <span>+30 6987797679</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5" />
                  <span>faiacon@yahoo.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="h-5 w-5 mt-1" />
                  <div>
                    <p>Κέρκυρα, Ελλάδα</p>
                    <p>Ποταμός 491 00</p>
                    <Button variant="link" className="p-0 h-auto text-primary" asChild>
                      <Link href="https://maps.app.goo.gl/LWjc7NV3s1NADhtF9" target="_blank" rel="noopener noreferrer">
                        Δείτε στο χάρτη
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-primary mb-4">Τοποθεσία</h3>
              <p className="text-gray-600">
                Με έδρα την Κέρκυρα, εξυπηρετούμε ολόκληρο το νησί με επαγγελματικές υπηρεσίες κατασκευής και
                ανακαίνισης.
              </p>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600">&copy; {new Date().getFullYear()} Faiacon. All rights reserved.</p>
            <div className="mt-4 md:mt-0"></div>
          </div>
          <div className="mt-4 flex justify-center">
            <div id="google_translate_element"></div>
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
            new google.translate.TranslateElement(
              {
                pageLanguage: 'el',
                includedLanguages: 'en,it,de,fr,ru',
                layout: google.translate.TranslateElement.InlineLayout.SIMPLE
              },
              'google_translate_element'
            );
          }
        `}
      </Script>
    </>
  )
}

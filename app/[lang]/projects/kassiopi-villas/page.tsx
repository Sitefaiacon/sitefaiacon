import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CheckCircle2, MapPin } from "lucide-react"
import SiteLayout from "@/app/components/site-layout"
import { Button } from "@/components/ui/button"
import { localizedAlternates, SITE_URL } from "@/lib/seo"
import { PhotoWatermark } from "@/app/components/photo-watermark"

const images = [
  {
    src: "/images/projects/2026/completed-villa-kassiopi-rectangular-pool-01.jpg",
    altEn: "Aerial view of a completed villa with rectangular pool in Kassiopi, Corfu",
    altEl: "Αεροφωτογραφία ολοκληρωμένης βίλας με ορθογώνια πισίνα στην Κασσιόπη Κέρκυρας",
  },
  {
    src: "/images/projects/2026/completed-villa-kassiopi-curved-pool-01.jpg",
    altEn: "Aerial view of a completed villa with curved pool in Kassiopi, Corfu",
    altEl: "Αεροφωτογραφία ολοκληρωμένης βίλας με καμπύλη πισίνα στην Κασσιόπη Κέρκυρας",
  },
]

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params
  const en = lang === "en"
  const title = en ? "Completed Villas in Kassiopi, Corfu" : "Ολοκληρωμένες Βίλες στην Κασσιόπη Κέρκυρας"
  const description = en
    ? "Two completed villa projects in Kassiopi, Corfu, with private pools, stone-paved outdoor areas and landscaping integrated into the site."
    : "Δύο ολοκληρωμένα έργα βιλών στην Κασσιόπη Κέρκυρας, με ιδιωτικές πισίνες, πλακόστρωτους εξωτερικούς χώρους και ένταξη στο φυσικό τοπίο."

  return {
    title,
    description,
    alternates: localizedAlternates(lang, "projects/kassiopi-villas"),
    openGraph: {
      title: `${title} | ΦαιάCon`,
      description,
      url: `${SITE_URL}/${lang}/projects/kassiopi-villas`,
      type: "article",
      images: [images[0].src],
    },
  }
}

export default async function KassiopiVillasPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params
  const en = lang === "en"
  const details = en
    ? ["Two completed villa properties", "Private pools with distinct designs", "Stone-paved terraces and outdoor circulation", "Site planning that respects the Corfu landscape"]
    : ["Δύο ολοκληρωμένες βίλες", "Ιδιωτικές πισίνες διαφορετικού σχεδιασμού", "Πλακόστρωτες βεράντες και εξωτερικές διαδρομές", "Διαμόρφωση προσαρμοσμένη στο κερκυραϊκό τοπίο"]

  return (
    <SiteLayout>
      <main className="bg-white">
        <section className="bg-slate-950 px-4 py-16 text-white sm:py-24">
          <div className="container max-w-6xl">
            <Link href={`/${lang}/our-projects`} className="mb-8 inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
              <ArrowLeft className="h-4 w-4" /> {en ? "All projects" : "Όλα τα έργα"}
            </Link>
            <p className="mb-4 flex items-center gap-2 text-primary-foreground/80"><MapPin className="h-5 w-5" /> {en ? "Kassiopi, Corfu" : "Κασσιόπη, Κέρκυρα"}</p>
            <h1 className="max-w-4xl text-4xl font-semibold tracking-tight sm:text-6xl">
              {en ? "Two Completed Villas in Kassiopi" : "Δύο Ολοκληρωμένες Βίλες στην Κασσιόπη"}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">
              {en
                ? "A pair of completed residential projects that combine private pools, generous outdoor living areas and the material character of Corfu."
                : "Δύο ολοκληρωμένα οικιστικά έργα που συνδυάζουν ιδιωτικές πισίνες, άνετους εξωτερικούς χώρους και τον ιδιαίτερο χαρακτήρα της Κέρκυρας."}
            </p>
          </div>
        </section>

        <section className="container max-w-6xl px-4 py-14 sm:py-20">
          <div className="grid gap-8 lg:grid-cols-2">
            {images.map((image) => (
              <figure key={image.src} className="overflow-hidden rounded-2xl bg-slate-100 shadow-lg">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={en ? image.altEn : image.altEl}
                    fill
                    quality={90}
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <PhotoWatermark className="sm:text-base" />
                </div>
              </figure>
            ))}
          </div>

          <div className="mt-14 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
            <div>
              <h2 className="text-3xl font-semibold text-slate-950">{en ? "The project" : "Το έργο"}</h2>
              <p className="mt-5 text-lg leading-8 text-slate-600">
                {en
                  ? "The two villas show how different pool geometries and outdoor layouts can respond to the individual site while maintaining a consistent architectural character. The aerial views document the completed buildings, roof forms, stone-paved areas, pools and surrounding landscape."
                  : "Οι δύο βίλες δείχνουν πώς διαφορετικές γεωμετρίες πισίνας και εξωτερικών χώρων μπορούν να προσαρμοστούν στο κάθε οικόπεδο, διατηρώντας κοινό αρχιτεκτονικό χαρακτήρα. Οι αεροφωτογραφίες καταγράφουν τα ολοκληρωμένα κτίρια, τις στέγες, τις πλακοστρώσεις, τις πισίνες και το τοπίο."}
              </p>
            </div>
            <ul className="space-y-4 rounded-2xl bg-slate-50 p-7">
              {details.map((detail) => <li key={detail} className="flex gap-3 text-slate-700"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />{detail}</li>)}
            </ul>
          </div>

          <div className="mt-14 rounded-2xl bg-primary p-8 text-white sm:p-10">
            <h2 className="text-3xl font-semibold">{en ? "Planning a villa project in Corfu?" : "Σχεδιάζετε βίλα στην Κέρκυρα;"}</h2>
            <p className="mt-3 max-w-2xl text-white/80">{en ? "Tell us about the property, your priorities and the stage your plans have reached." : "Πείτε μας για το ακίνητο, τις ανάγκες σας και το στάδιο στο οποίο βρίσκεται ο σχεδιασμός."}</p>
            <Button asChild className="mt-6 bg-white text-primary hover:bg-white/90"><Link href={`/${lang}/appointment`}>{en ? "Discuss your project" : "Συζητήστε το έργο σας"}</Link></Button>
          </div>
        </section>
      </main>
    </SiteLayout>
  )
}

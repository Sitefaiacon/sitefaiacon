import { SITE_URL } from "@/lib/seo"

export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#organization`,
    name: "ΦαιάCon - Τεχνική Κατασκευαστική",
    alternateName: "FaiaCon",
    description:
      "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Ανακαίνιση σπιτιών, βιλών, κατασκευή νέων κατοικιών, πισίνες, και λύσεις ανάπτυξης ακινήτων. 35+ χρόνια εμπειρίας. Εξυπηρετούμε ιδιοκτήτες ακινήτων, επενδυτές και ξένους ιδιοκτήτες.",
    url: SITE_URL,
    logo: `${SITE_URL}/logo-faiacon.png`,
    image: `${SITE_URL}/images/petrinI-vila-kerkira.jpg`,
    telephone: "+30-6987797679",
    email: "info@faiacon.gr",
    foundingDate: "1990",
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Ποταμός",
      postalCode: "49100",
      addressLocality: "Κέρκυρα",
      addressRegion: "Κέρκυρα",
      addressCountry: "GR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 39.6243,
      longitude: 19.9217,
    },
    areaServed: {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 39.6243,
        longitude: 19.9217,
      },
      geoRadius: "50000",
    },
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        opens: "08:00",
        closes: "20:00",
      },
    ],
    sameAs: ["https://www.facebook.com/faiacon", "https://www.instagram.com/faiacon"],
    knowsLanguage: ["Greek", "English"],
    serviceArea: {
      "@type": "GeoShape",
      description: "Corfu Island, Greece",
    },
    slogan: "Professional construction and renovation services in Corfu since 1990",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}/#website`,
    name: "ΦαιάCon",
    url: SITE_URL,
    description: "Τεχνική Κατασκευαστική Εταιρεία Κέρκυρας - Ανακαίνιση, Κατασκευή, Πισίνες",
    publisher: {
      "@id": `${SITE_URL}/#organization`,
    },
    inLanguage: ["el-GR", "en-US"],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function RenovationCalculatorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${SITE_URL}/el/cost-calculator#calculator`,
    name: "Υπολογιστής Κόστους Ανακαίνισης",
    alternateName: "Renovation Cost Calculator",
    description:
      "Δωρεάν online υπολογιστής για εκτίμηση κόστους ανακαίνισης σπιτιού. Υπολογίστε το κόστος για μπάνιο, κουζίνα, δάπεδα, ηλεκτρολογικά, βαφή και αλλαγή κουφωμάτων.",
    url: `${SITE_URL}/el/cost-calculator`,
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@id": `${SITE_URL}/#organization`,
    },
    featureList: [
      "Υπολογισμός κόστους ανακαίνισης μπάνιου",
      "Υπολογισμός κόστους ανακαίνισης κουζίνας",
      "Εκτίμηση κόστους αλλαγής δαπέδων",
      "Εκτίμηση κόστους ηλεκτρολογικών εργασιών",
      "Κόστος βαφής σπιτιού",
      "Κόστος αλλαγής κουφωμάτων (αλουμίνιο, PVC, ξύλο)",
      "Εκτίμηση κατασκευής πισίνας",
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ServiceSchema({ isEnglish = false }: { isEnglish?: boolean }) {
  const services = [
    {
      "@type": "Service",
      "@id": `${SITE_URL}/el/house-renovation#service`,
      name: isEnglish ? "House Renovation" : "Ανακαίνιση Σπιτιού",
      description: isEnglish
        ? "Complete house renovation services including bathroom, kitchen, flooring, and electrical work"
        : "Ολοκληρωμένες υπηρεσίες ανακαίνισης σπιτιού συμπεριλαμβανομένων μπάνιου, κουζίνας, δαπέδων και ηλεκτρολογικών",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "Κέρκυρα, Ελλάδα" },
      serviceType: "Home Renovation",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/el/house-construction#service`,
      name: isEnglish ? "House Construction" : "Κατασκευή Σπιτιού",
      description: isEnglish
        ? "New house construction with modern techniques and materials"
        : "Κατασκευή νέου σπιτιού με σύγχρονες τεχνικές και υλικά",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "Κέρκυρα, Ελλάδα" },
      serviceType: "House Construction",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/el/pool-construction#service`,
      name: isEnglish ? "Pool Construction" : "Κατασκευή Πισίνας",
      description: isEnglish
        ? "Pool construction with modern filtration and salt electrolysis options"
        : "Κατασκευή πισινών με σύγχρονα συστήματα φίλτρανσης και επιλογές ηλεκτρόλυσης άλατος",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "Κέρκυρα, Ελλάδα" },
      serviceType: "Pool Construction",
    },
    {
      "@type": "Service",
      "@id": `${SITE_URL}/el/listed-houses#service`,
      name: isEnglish ? "Listed Buildings Restoration" : "Αναστήλωση Διατηρητέων Κτιρίων",
      description: isEnglish
        ? "Specialized restoration of listed and heritage buildings"
        : "Εξειδικευμένη αποκατάσταση διατηρητέων και ιστορικών κτιρίων",
      provider: { "@id": `${SITE_URL}/#organization` },
      areaServed: { "@type": "Place", name: "Κέρκυρα, Ελλάδα" },
      serviceType: "Building Restoration",
    },
  ]

  const schema = {
    "@context": "https://schema.org",
    "@graph": services,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function FAQSchema({
  isEnglish = false,
  items,
}: {
  isEnglish?: boolean
  items?: { question: string; answer: string }[]
}) {
  const defaultFaqs = isEnglish
    ? [
        {
          question: "How much does a house renovation cost in Corfu?",
          answer:
            "The cost of house renovation in Corfu varies depending on the scope of work. Use our free cost calculator to get an estimate. Basic renovations start from approximately €490/m², while premium renovations can cost up to €780/m².",
        },
        {
          question: "How long does a typical renovation take?",
          answer:
            "A typical renovation takes 2-6 months depending on the scope. Bathroom renovations take 2-3 weeks, while full house renovations can take 3-6 months.",
        },
        {
          question: "Do you provide free estimates?",
          answer:
            "Yes, we provide free on-site estimates for all renovation and construction projects in Corfu. Book an appointment through our website or call us directly.",
        },
        {
          question: "What areas do you serve?",
          answer:
            "We serve all areas of Corfu island, including Corfu Town, Kassiopi, Sidari, Paleokastritsa, and surrounding villages.",
        },
      ]
    : [
        {
          question: "Πόσο κοστίζει μια ανακαίνιση σπιτιού στην Κέρκυρα;",
          answer:
            "Το κόστος ανακαίνισης σπιτιού στην Κέρκυρα ποικίλλει ανάλογα με το εύρος των εργασιών. Χρησιμοποιήστε τον δωρεάν υπολογιστή κόστους μας για μια εκτίμηση. Οι βασικές ανακαινίσεις ξεκινούν από περίπου €490/τ.μ., ενώ οι premium ανακαινίσεις μπορούν να φτάσουν τα €780/τ.μ.",
        },
        {
          question: "Πόσο χρόνο διαρκεί μια τυπική ανακαίνιση;",
          answer:
            "Μια τυπική ανακαίνιση διαρκεί 2-6 μήνες ανάλογα με το εύρος. Οι ανακαινίσεις μπάνιου διαρκούν 2-3 εβδομάδες, ενώ οι ολικές ανακαινίσεις σπιτιού μπορεί να διαρκέσουν 3-6 μήνες.",
        },
        {
          question: "Παρέχετε δωρεάν εκτιμήσεις;",
          answer:
            "Ναι, παρέχουμε δωρεάν επιτόπιες εκτιμήσεις για όλα τα έργα ανακαίνισης και κατασκευής στην Κέρκυρα. Κλείστε ραντεβού μέσω της ιστοσελίδας μας ή καλέστε μας απευθείας.",
        },
        {
          question: "Ποιες περιοχές εξυπηρετείτε;",
          answer:
            "Εξυπηρετούμε όλες τις περιοχές της Κέρκυρας, συμπεριλαμβανομένης της Πόλης της Κέρκυρας, της Κασσιόπης, του Σιδαρίου, της Παλαιοκαστρίτσας και των γύρω χωριών.",
        },
      ]

  // Prefer page-specific items when provided; otherwise fall back to the default list
  const faqs = items && items.length > 0 ? items : defaultFaqs

  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function ReviewSchema() {
  const reviews = [
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Μαρία Κ.",
      },
      reviewBody:
        "Εξαιρετική δουλειά στην ανακαίνιση του σπιτιού μας. Επαγγελματισμός και ποιότητα σε κάθε λεπτομέρεια.",
      datePublished: "2024-12-15",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "Γιώργος Π.",
      },
      reviewBody:
        "Κατασκεύασαν την πισίνα μας με άψογο τρόπο. Τήρησαν το χρονοδιάγραμμα και τον προϋπολογισμό.",
      datePublished: "2024-11-20",
    },
    {
      "@type": "Review",
      reviewRating: {
        "@type": "Rating",
        ratingValue: "5",
        bestRating: "5",
      },
      author: {
        "@type": "Person",
        name: "John S.",
      },
      reviewBody:
        "Excellent work on our villa restoration in Corfu. The team was professional and the results exceeded our expectations.",
      datePublished: "2024-10-05",
    },
  ]

  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/#reviews`,
    name: "ΦαιάCon",
    review: reviews,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function PriceRangeSchema({ lang = "el" }: { lang?: string }) {
  const isEnglish = lang === "en"
  const schema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "@id": `${SITE_URL}/${lang}/cost-calculator#pricing`,
    priceCurrency: "EUR",
    eligibleRegion: {
      "@type": "Place",
      name: isEnglish ? "Corfu, Greece" : "Κέρκυρα, Ελλάδα",
    },
    description: isEnglish
      ? "Indicative renovation prices per square metre."
      : "Ενδεικτικές τιμές ανακαίνισης ανά τ.μ.",
    minPrice: "490",
    maxPrice: "780",
    unitText: isEnglish ? "per m²" : "ανά τ.μ.",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function OfferCatalogSchema({ isEnglish = false }: { isEnglish?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "OfferCatalog",
    name: isEnglish ? "FaiaCon Renovation Services" : "Υπηρεσίες Ανακαίνισης ΦαιάCon",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEnglish ? "Bathroom Renovation" : "Ανακαίνιση Μπάνιου",
          description: isEnglish
            ? "Complete bathroom renovation including tiles, plumbing, and fixtures"
            : "Ολοκληρωμένη ανακαίνιση μπάνιου με πλακάκια, υδραυλικά και είδη υγιεινής",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "2530",
          priceCurrency: "EUR",
          unitText: isEnglish ? "per bathroom" : "ανά μπάνιο",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEnglish ? "Kitchen Renovation" : "Ανακαίνιση Κουζίνας",
          description: isEnglish
            ? "Complete kitchen renovation including cabinets, countertops, and appliances"
            : "Ολοκληρωμένη ανακαίνιση κουζίνας με ντουλάπια, πάγκους και ηλεκτρικές συσκευές",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "4030",
          priceCurrency: "EUR",
          unitText: isEnglish ? "per kitchen" : "ανά κουζίνα",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEnglish ? "Flooring Installation" : "Τοποθέτηση Δαπέδων",
          description: isEnglish
            ? "Professional flooring installation with various materials"
            : "Επαγγελματική τοποθέτηση δαπέδων με διάφορα υλικά",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "70",
          priceCurrency: "EUR",
          unitText: isEnglish ? "per m²" : "ανά τ.μ.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: isEnglish ? "Painting Services" : "Υπηρεσίες Βαφής",
          description: isEnglish ? "Interior and exterior painting services" : "Υπηρεσίες εσωτερικής και εξωτερικής βαφής",
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: "55",
          priceCurrency: "EUR",
          unitText: isEnglish ? "per m²" : "ανά τ.μ.",
        },
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function VideoSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Πώς να χρησιμοποιήσετε τον Υπολογιστή Κόστους Ανακαίνισης",
    description:
      "Οδηγίες για τη χρήση του δωρεάν online υπολογιστή κόστους ανακαίνισης της ΦαιάCon",
    thumbnailUrl:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
    uploadDate: "2024-01-01",
    contentUrl: `${SITE_URL}/videos/calculator-tutorial`,
    embedUrl: `${SITE_URL}/videos/calculator-tutorial/embed`,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function HowToSchema({ isEnglish = false }: { isEnglish?: boolean }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: isEnglish ? "How to Estimate Your Renovation Cost" : "Πώς να Υπολογίσετε το Κόστος Ανακαίνισης",
    description: isEnglish
      ? "Use our free online calculator to get an instant estimate for your home renovation project"
      : "Χρησιμοποιήστε τον δωρεάν online υπολογιστή μας για άμεση εκτίμηση του έργου ανακαίνισης σας",
    totalTime: "PT5M",
    estimatedCost: {
      "@type": "MonetaryAmount",
      currency: "EUR",
      value: "0",
    },
    tool: [
      {
        "@type": "HowToTool",
        name: isEnglish ? "Renovation Cost Calculator" : "Υπολογιστής Κόστους Ανακαίνισης",
      },
    ],
    step: [
      {
        "@type": "HowToStep",
        name: isEnglish ? "Enter Property Details" : "Εισάγετε Στοιχεία Ακινήτου",
        text: isEnglish
          ? "Enter the area in square meters, number of bathrooms, kitchens, and rooms"
          : "Εισάγετε το εμβαδόν σε τετραγωνικά μέτρα, αριθμό μπάνιων, κουζινών και δωματίων",
        position: 1,
      },
      {
        "@type": "HowToStep",
        name: isEnglish ? "Select Renovation Categories" : "Επιλέξτε Κατηγορίες Ανακαίνισης",
        text: isEnglish
          ? "Choose from bathroom, kitchen, flooring, electrical, structural, or painting"
          : "Επιλέξτε από μπάνιο, κουζίνα, δάπεδα, ηλεκτρολογικά, δομικά ή βαφή",
        position: 2,
      },
      {
        "@type": "HowToStep",
        name: isEnglish ? "Choose Quality Level" : "Επιλέξτε Επίπεδο Ποιότητας",
        text: isEnglish
          ? "Select basic, mid-range, or premium quality for your renovation"
          : "Επιλέξτε βασική, μεσαία ή premium ποιότητα για την ανακαίνισή σας",
        position: 3,
      },
      {
        "@type": "HowToStep",
        name: isEnglish ? "Get Your Estimate" : "Λάβετε την Εκτίμησή σας",
        text: isEnglish
          ? "Click 'Get Quote' to receive your instant cost estimate"
          : "Κάντε κλικ στο 'Λάβετε Προσφορά' για να λάβετε την άμεση εκτίμηση κόστους",
        position: 4,
      },
    ],
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

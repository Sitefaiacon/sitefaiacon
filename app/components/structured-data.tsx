export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://faiacon.gr/#organization",
    name: "ΦαιάCon - Τεχνική Κατασκευαστική",
    alternateName: "FaiaCon",
    description:
      "Κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα. Υπολογιστής κόστους ανακαίνισης, κατασκευή σπιτιού, ανακαίνιση, πισίνες, διατηρητέα κτίρια.",
    url: "https://faiacon.gr",
    logo: "/logo-faiacon.png",
    image: "/logo-faiacon.png",
    telephone: "+30-26610-XXXXX",
    email: "info@faiacon.gr",
    foundingDate: "1990",
    priceRange: "€€€",
    currenciesAccepted: "EUR",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Κέρκυρα",
      addressLocality: "Κέρκυρα",
      addressRegion: "Κέρκυρα",
      postalCode: "49100",
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
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        opens: "08:00",
        closes: "18:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Saturday",
        opens: "09:00",
        closes: "14:00",
      },
    ],
    sameAs: ["https://www.facebook.com/faiacon", "https://www.instagram.com/faiacon"],
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
      worstRating: "1",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://faiacon.gr/#website",
    name: "ΦαιάCon",
    url: "https://faiacon.gr",
    description: "Τεχνική Κατασκευαστική Εταιρεία Κέρκυρας - Ανακαίνιση, Κατασκευή, Πισίνες",
    publisher: {
      "@id": "https://faiacon.gr/#organization",
    },
    inLanguage: ["el-GR", "en-US"],
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://faiacon.gr/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function RenovationCalculatorSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://faiacon.gr/#renovation-calculator",
    name: "Υπολογιστής Κόστους Ανακαίνισης",
    alternateName: "Renovation Cost Calculator",
    description:
      "Δωρεάν online υπολογιστής για εκτίμηση κόστους ανακαίνισης σπιτιού. Υπολογίστε το κόστος για μπάνιο, κουζίνα, δάπεδα, ηλεκτρολογικά, βαφή και αλλαγή κουφωμάτων.",
    url: "https://faiacon.gr/#renovation-calculator",
    applicationCategory: "UtilityApplication",
    operatingSystem: "All",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "EUR",
      availability: "https://schema.org/InStock",
    },
    provider: {
      "@id": "https://faiacon.gr/#organization",
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
      "@id": "https://faiacon.gr/#house-renovation",
      name: isEnglish ? "Renovation Corfu - House Renovation Services" : "Ανακαίνιση Σπιτιού",
      description: isEnglish
        ? "Professional renovation Corfu services. Complete house renovation including bathroom remodeling, kitchen renovation, flooring installation, and electrical work in Corfu Greece. Expert renovation company with 35+ years experience."
        : "Ολοκληρωμένες υπηρεσίες ανακαίνισης σπιτιού συμπεριλαμβανομένων μπάνιου, κουζίνας, δαπέδων και ηλεκτρολογικών",
      provider: { "@id": "https://faiacon.gr/#organization" },
      areaServed: { "@type": "Place", name: isEnglish ? "Corfu, Greece" : "Κέρκυρα, Ελλάδα" },
      serviceType: isEnglish ? "Renovation Corfu" : "Home Renovation",
    },
    {
      "@type": "Service",
      "@id": "https://faiacon.gr/#house-construction",
      name: isEnglish ? "House Construction" : "Κατασκευή Σπιτιού",
      description: isEnglish
        ? "New house construction with modern techniques and materials"
        : "Κατασκευή νέου σπιτιού με σύγχρονες τεχνικές και υλικά",
      provider: { "@id": "https://faiacon.gr/#organization" },
      areaServed: { "@type": "Place", name: "Κέρκυρα, Ελλάδα" },
      serviceType: "House Construction",
    },
    {
      "@type": "Service",
      "@id": "https://faiacon.gr/#pool-construction",
      name: isEnglish ? "Pool Construction" : "Κατασκευή Πισίνας",
      description: isEnglish
        ? "Luxury pool construction with modern chemical-free systems"
        : "Κατασκευή πολυτελών πισινών με σύγχρονα συστήματα χωρίς χημικά",
      provider: { "@id": "https://faiacon.gr/#organization" },
      areaServed: { "@type": "Place", name: "Κέρκυρα, Ελλάδα" },
      serviceType: "Pool Construction",
    },
    {
      "@type": "Service",
      "@id": "https://faiacon.gr/#listed-buildings",
      name: isEnglish ? "Listed Buildings Restoration" : "Αναστήλωση Διατηρητέων Κτιρίων",
      description: isEnglish
        ? "Specialized restoration of listed and heritage buildings"
        : "Εξειδικευμένη αποκατάσταση διατηρητέων και ιστορικών κτιρίων",
      provider: { "@id": "https://faiacon.gr/#organization" },
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

export function FAQSchema({ isEnglish = false }: { isEnglish?: boolean }) {
  const faqs = isEnglish
    ? [
        {
          question: "How much does renovation in Corfu cost?",
          answer:
            "Renovation Corfu costs vary depending on the scope of work. Use our free renovation cost calculator to get an accurate estimate. Basic renovations in Corfu start from approximately €490/m², while premium renovations can cost up to €780/m². FaiaCon provides transparent pricing for all renovation services in Corfu Greece.",
        },
        {
          question: "What renovation services do you offer in Corfu?",
          answer:
            "FaiaCon offers comprehensive renovation Corfu services including: house renovation, bathroom remodeling, kitchen renovation, flooring installation, electrical work, painting, villa restoration, and listed building renovation. We are the leading renovation company in Corfu with 35+ years of experience.",
        },
        {
          question: "How long does a typical renovation take in Corfu?",
          answer:
            "Renovation timelines in Corfu vary by project scope. Bathroom renovations take 2-3 weeks, kitchen renovations 3-4 weeks, while full house renovations in Corfu can take 3-6 months. FaiaCon ensures quality renovation work within agreed timeframes.",
        },
        {
          question: "Do you provide free renovation estimates in Corfu?",
          answer:
            "Yes, FaiaCon provides free on-site renovation estimates throughout Corfu. Book an appointment through our website or use our online renovation cost calculator for an instant estimate.",
        },
        {
          question: "Which areas in Corfu do you serve for renovations?",
          answer:
            "We provide renovation services across all of Corfu island, including Corfu Town, Kassiopi, Sidari, Paleokastritsa, Gouvia, Dassia, Benitses, and all surrounding villages. No renovation project in Corfu is too far for FaiaCon.",
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
    "@id": "https://faiacon.gr/#reviews",
    name: "ΦαιάCon",
    review: reviews,
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function PriceRangeSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "PriceSpecification",
    "@id": "https://faiacon.gr/#pricing",
    priceCurrency: "EUR",
    eligibleRegion: {
      "@type": "Place",
      name: "Κέρκυρα, Ελλάδα",
    },
    description: "Ενδεικτικές τιμές ανακαίνισης ανά τ.μ.",
    minPrice: "490",
    maxPrice: "780",
    unitText: "ανά τ.μ.",
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
    contentUrl: "https://faiacon.gr/videos/calculator-tutorial",
    embedUrl: "https://faiacon.gr/videos/calculator-tutorial/embed",
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function RenovationsCorfuSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": "https://faiacon.gr/en/renovations-corfu#service",
    name: "Renovations Corfu - Professional Property Renovation Services",
    alternateName: "Corfu Renovations",
    description:
      "Professional renovations in Corfu by FaiaCon. Expert house renovation, villa restoration, bathroom and kitchen remodeling services across Corfu island. 35+ years experience serving international property owners and local residents.",
    url: "https://faiacon.gr/en/renovations-corfu",
    provider: {
      "@type": "LocalBusiness",
      "@id": "https://faiacon.gr/#organization",
      name: "FaiaCon",
      telephone: "+30-698-779-7679",
      email: "info@faiacon.gr",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Corfu",
        addressRegion: "Corfu",
        postalCode: "49100",
        addressCountry: "GR",
      },
    },
    areaServed: [
      { "@type": "City", name: "Corfu Town" },
      { "@type": "Place", name: "Kassiopi, Corfu" },
      { "@type": "Place", name: "Sidari, Corfu" },
      { "@type": "Place", name: "Paleokastritsa, Corfu" },
      { "@type": "Place", name: "Gouvia, Corfu" },
      { "@type": "Place", name: "Dassia, Corfu" },
      { "@type": "Place", name: "Benitses, Corfu" },
      { "@type": "AdministrativeArea", name: "Corfu Island, Greece" },
    ],
    serviceType: [
      "House Renovation",
      "Villa Renovation",
      "Bathroom Renovation",
      "Kitchen Renovation",
      "Property Renovation",
      "Building Restoration",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Renovation Services in Corfu",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "House Renovation Corfu",
            description: "Complete interior and exterior house renovation services in Corfu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Villa Renovation Corfu",
            description: "Luxury villa renovation and restoration in Corfu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Bathroom Renovation Corfu",
            description: "Modern bathroom remodeling services in Corfu",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Kitchen Renovation Corfu",
            description: "Custom kitchen renovation in Corfu",
          },
        },
      ],
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "127",
      bestRating: "5",
    },
  }

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
}

export function RenovationsCorfuFAQSchema() {
  const faqs = [
    {
      question: "How much do renovations cost in Corfu?",
      answer:
        "Renovation costs in Corfu vary based on scope and quality. Basic renovations start from approximately €490 per square meter, while premium finishes can reach €780 per square meter. FaiaCon provides free detailed quotes for all renovation projects in Corfu.",
    },
    {
      question: "Can you manage my Corfu renovation if I live abroad?",
      answer:
        "Yes, FaiaCon specializes in managing renovations for international property owners. We provide comprehensive project management with regular photo updates, video calls, and detailed progress reports. Many of our clients are based in the UK, Germany, and Scandinavia.",
    },
    {
      question: "What renovation services does FaiaCon offer in Corfu?",
      answer:
        "FaiaCon offers complete renovation services in Corfu including: house renovation, villa restoration, bathroom remodeling, kitchen renovation, electrical upgrades, painting, flooring installation, and listed building restoration. We handle projects of all sizes across Corfu island.",
    },
    {
      question: "How long does a typical renovation take in Corfu?",
      answer:
        "Renovation timelines in Corfu depend on project scope. Bathroom renovations take 2-3 weeks, kitchen renovations 3-4 weeks, and full house renovations 3-6 months. FaiaCon provides realistic timelines and keeps you informed throughout the project.",
    },
    {
      question: "Which areas of Corfu do you serve?",
      answer:
        "FaiaCon provides renovation services throughout Corfu island including Corfu Town, Kassiopi, Sidari, Paleokastritsa, Gouvia, Dassia, Benitses, Acharavi, Roda, Agios Gordios, Lefkimmi, and all surrounding villages.",
    },
    {
      question: "Do you provide warranties on renovations in Corfu?",
      answer:
        "Yes, FaiaCon provides a 5-year warranty on workmanship plus manufacturer warranties on all materials and fixtures. We also offer post-renovation maintenance services to keep your Corfu property in excellent condition.",
    },
  ]

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

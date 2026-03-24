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
    logo: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
    image:
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
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
      name: isEnglish ? "House Renovation" : "Ανακαίνιση Σπιτιού",
      description: isEnglish
        ? "Complete house renovation services including bathroom, kitchen, flooring, and electrical work"
        : "Ολοκληρωμένες υπηρεσίες ανακαίνισης σπιτιού συμπεριλαμβανομένων μπάνιου, κουζίνας, δαπέδων και ηλεκτρολογικών",
      provider: { "@id": "https://faiacon.gr/#organization" },
      areaServed: { "@type": "Place", name: "Κέρκυρα, Ελλάδα" },
      serviceType: "Home Renovation",
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

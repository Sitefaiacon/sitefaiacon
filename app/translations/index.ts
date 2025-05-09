// Define translation types for better type safety
export interface Translation {
  nav: {
    home: string
    projects: string
    construction: string
    renovation: string
    pools: string
    appointment: string
  }
  footer: {
    address: string
    phone: string
    email: string
    copyright: string
  }
  home: {
    hero: {
      title: string
      subtitle: string
      cta: string
    }
    services: {
      title: string
      subtitle: string
      items: {
        construction: {
          title: string
          description: string
        }
        renovation: {
          title: string
          description: string
        }
        pools: {
          title: string
          description: string
        }
      }
    }
    about: {
      title: string
      content: string
      cta: string
    }
  }
  // Add more sections as needed
}

// Greek translations
const el: Translation = {
  nav: {
    home: "Αρχική",
    projects: "Έργα",
    construction: "Κατασκευές",
    renovation: "Ανακαινίσεις",
    pools: "Πισίνες",
    appointment: "Ραντεβού",
  },
  footer: {
    address: "Διεύθυνση: Κέρκυρα, Ελλάδα",
    phone: "Τηλέφωνο: +30 123 456 7890",
    email: "Email: info@faiacon.gr",
    copyright: "© 2023 ΦαιάCon. Με επιφύλαξη παντός δικαιώματος.",
  },
  home: {
    hero: {
      title: "Κατασκευές & Ανακαινίσεις Υψηλής Ποιότητας",
      subtitle: "Μετατρέπουμε το όνειρό σας σε πραγματικότητα από το 1990",
      cta: "Επικοινωνήστε μαζί μας",
    },
    services: {
      title: "Οι Υπηρεσίες μας",
      subtitle: "Προσφέρουμε ολοκληρωμένες λύσεις για κάθε κατασκευαστική ανάγκη",
      items: {
        construction: {
          title: "Κατασκευές Κατοικιών",
          description: "Κατασκευάζουμε το σπίτι των ονείρων σας με προσοχή στη λεπτομέρεια",
        },
        renovation: {
          title: "Ανακαινίσεις",
          description: "Αναζωογονούμε τους χώρους σας με σύγχρονες λύσεις και υψηλή αισθητική",
        },
        pools: {
          title: "Κατασκευή Πισίνας",
          description: "Σχεδιάζουμε και κατασκευάζουμε πισίνες που αναβαθμίζουν την ιδιοκτησία σας",
        },
      },
    },
    about: {
      title: "Σχετικά με εμάς",
      content:
        "Η ΦαιάCon είναι μια κορυφαία κατασκευαστική εταιρεία στην Κέρκυρα με πάνω από 30 χρόνια εμπειρίας. Εξειδικευόμαστε σε κατασκευές, ανακαινίσεις και διατηρητέα κτίρια.",
      cta: "Δείτε τα έργα μας",
    },
  },
}

// English translations
const en: Translation = {
  nav: {
    home: "Home",
    projects: "Projects",
    construction: "Construction",
    renovation: "Renovation",
    pools: "Pools",
    appointment: "Appointment",
  },
  footer: {
    address: "Address: Corfu, Greece",
    phone: "Phone: +30 123 456 7890",
    email: "Email: info@faiacon.gr",
    copyright: "© 2023 ΦαιάCon. All rights reserved.",
  },
  home: {
    hero: {
      title: "High-Quality Construction & Renovation",
      subtitle: "Turning your dream into reality since 1990",
      cta: "Contact us",
    },
    services: {
      title: "Our Services",
      subtitle: "We offer comprehensive solutions for every construction need",
      items: {
        construction: {
          title: "House Construction",
          description: "We build your dream home with attention to detail",
        },
        renovation: {
          title: "Renovations",
          description: "We revitalize your spaces with modern solutions and high aesthetics",
        },
        pools: {
          title: "Pool Construction",
          description: "We design and build pools that enhance your property",
        },
      },
    },
    about: {
      title: "About Us",
      content:
        "ΦαιάCon is a leading construction company in Corfu with over 30 years of experience. We specialize in construction, renovations, and listed buildings.",
      cta: "View our projects",
    },
  },
}

// Export all translations
export const translations: Record<string, Translation> = {
  el,
  en,
}

export type Locale = keyof typeof translations

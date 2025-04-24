export const translations = {
  el: {
    nav: {
      home: "Αρχική",
      houseConstruction: "Κατασκευή Σπιτιού",
      houseRenovation: "Ανακαίνιση Σπιτιού",
      listedHouses: "Διατηρητέα Κτίρια",
      poolConstruction: "Κατασκευή Πισίνας",
      panels: "ΦαιάCon Panels",
      appointment: "Κλείστε Ραντεβού",
    },
    // Add more translations as needed
  },
  en: {
    nav: {
      home: "Home",
      houseConstruction: "House Construction",
      houseRenovation: "House Renovation",
      listedHouses: "Listed Houses",
      poolConstruction: "Pool Construction",
      panels: "ΦαιάCon Panels",
      appointment: "Book Appointment",
    },
    // Add more translations as needed
  },
}

export type Locale = keyof typeof translations

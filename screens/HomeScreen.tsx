import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from "react-native"

export function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Image
          source={{
            uri: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Logo%20Faiacon.jpg-kaZkybyRpwiqgDDvjzsFwyihnKWtWi.jpeg",
          }}
          style={styles.logo}
        />
        <Text style={styles.title}>ΦαιάCon</Text>
        <Text style={styles.subtitle}>Τεχνική Κατασκευαστική Κέρκυρας</Text>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Υπηρεσίες</Text>
        <View style={styles.servicesContainer}>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Κατασκευές</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Ανακαινίσεις</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Πισίνες</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.serviceCard}>
            <Text style={styles.serviceTitle}>Διατηρητέα</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Σχετικά με εμάς</Text>
        <Text style={styles.paragraph}>
          Η ΦαιάCon είναι μια κορυφαία τεχνική κατασκευαστική εταιρεία στην Κέρκυρα με εξειδίκευση σε κατασκευές,
          ανακαινίσεις, διατηρητέα κτίρια και πισίνες. Με εμπειρία από το 1990, προσφέρουμε άριστη ποιότητα και
          αξιοπιστία σε όλα μας τα έργα.
        </Text>
      </View>

      <TouchableOpacity style={styles.ctaButton}>
        <Text style={styles.ctaButtonText}>Επικοινωνήστε μαζί μας</Text>
      </TouchableOpacity>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  header: {
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    marginTop: 10,
    color: "#0066cc",
  },
  subtitle: {
    fontSize: 16,
    color: "#666",
    marginTop: 5,
  },
  section: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#333",
  },
  servicesContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceCard: {
    width: "48%",
    backgroundColor: "#f1f5f9",
    borderRadius: 10,
    padding: 20,
    marginBottom: 15,
    alignItems: "center",
  },
  serviceTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#0066cc",
  },
  paragraph: {
    fontSize: 16,
    lineHeight: 24,
    color: "#444",
  },
  ctaButton: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 8,
    margin: 20,
    alignItems: "center",
  },
  ctaButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})

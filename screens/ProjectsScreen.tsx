import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from "react-native"

const projects = [
  {
    id: "1",
    title: "Κατασκευή Βίλας",
    location: "Κέρκυρα",
    image: "https://placeholder.svg?height=200&width=300",
  },
  {
    id: "2",
    title: "Ανακαίνιση Διατηρητέου",
    location: "Παλιά Πόλη",
    image: "https://placeholder.svg?height=200&width=300",
  },
  {
    id: "3",
    title: "Κατασκευή Πισίνας",
    location: "Δασιά",
    image: "https://placeholder.svg?height=200&width=300",
  },
  {
    id: "4",
    title: "Ανακαίνιση Διαμερίσματος",
    location: "Κανόνι",
    image: "https://placeholder.svg?height=200&width=300",
  },
]

export function ProjectsScreen() {
  const renderProject = ({ item }) => (
    <TouchableOpacity style={styles.projectCard}>
      <Image source={{ uri: item.image }} style={styles.projectImage} />
      <View style={styles.projectInfo}>
        <Text style={styles.projectTitle}>{item.title}</Text>
        <Text style={styles.projectLocation}>{item.location}</Text>
      </View>
    </TouchableOpacity>
  )

  return (
    <View style={styles.container}>
      <Text style={styles.pageTitle}>Τα Έργα Μας</Text>
      <FlatList
        data={projects}
        renderItem={renderProject}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.projectsList}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 15,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  projectsList: {
    paddingBottom: 20,
  },
  projectCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow: "hidden",
  },
  projectImage: {
    width: "100%",
    height: 200,
  },
  projectInfo: {
    padding: 15,
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#0066cc",
    marginBottom: 5,
  },
  projectLocation: {
    fontSize: 14,
    color: "#666",
  },
})

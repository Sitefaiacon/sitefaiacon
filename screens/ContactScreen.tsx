"use client"

import { useState } from "react"
import { StyleSheet, Text, View, TextInput, TouchableOpacity, ScrollView, Alert } from "react-native"
import { Ionicons } from "@expo/vector-icons"

export function ContactScreen() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = () => {
    // Εδώ θα προσθέσετε τη λογική αποστολής της φόρμας
    Alert.alert("Επιτυχία", "Το μήνυμά σας στάλθηκε επιτυχώς! Θα επικοινωνήσουμε μαζί σας σύντομα.", [{ text: "OK" }])

    // Καθαρισμός της φόρμας
    setName("")
    setEmail("")
    setPhone("")
    setMessage("")
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.contactInfo}>
        <Text style={styles.pageTitle}>Επικοινωνήστε μαζί μας</Text>

        <View style={styles.infoItem}>
          <Ionicons name="location-outline" size={24} color="#0066cc" style={styles.infoIcon} />
          <View>
            <Text style={styles.infoLabel}>Διεύθυνση</Text>
            <Text style={styles.infoText}>Λεωφόρος Παραλίας 123, Κέρκυρα</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="call-outline" size={24} color="#0066cc" style={styles.infoIcon} />
          <View>
            <Text style={styles.infoLabel}>Τηλέφωνο</Text>
            <Text style={styles.infoText}>+30 2661 012345</Text>
          </View>
        </View>

        <View style={styles.infoItem}>
          <Ionicons name="mail-outline" size={24} color="#0066cc" style={styles.infoIcon} />
          <View>
            <Text style={styles.infoLabel}>Email</Text>
            <Text style={styles.infoText}>info@faiacon.gr</Text>
          </View>
        </View>
      </View>

      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Στείλτε μας μήνυμα</Text>

        <TextInput style={styles.input} placeholder="Ονοματεπώνυμο" value={name} onChangeText={setName} />

        <TextInput
          style={styles.input}
          placeholder="Email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Τηλέφωνο"
          keyboardType="phone-pad"
          value={phone}
          onChangeText={setPhone}
        />

        <TextInput
          style={[styles.input, styles.messageInput]}
          placeholder="Το μήνυμά σας"
          multiline
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
          <Text style={styles.submitButtonText}>Αποστολή</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  contactInfo: {
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  infoItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  infoIcon: {
    marginRight: 15,
  },
  infoLabel: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  infoText: {
    fontSize: 16,
    color: "#666",
  },
  formContainer: {
    padding: 20,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#333",
  },
  input: {
    backgroundColor: "#f1f5f9",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    fontSize: 16,
  },
  messageInput: {
    height: 120,
    textAlignVertical: "top",
  },
  submitButton: {
    backgroundColor: "#0066cc",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  submitButtonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
})

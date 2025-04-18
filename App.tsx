import { StatusBar } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { HomeScreen } from "./screens/HomeScreen"
import { ProjectsScreen } from "./screens/ProjectsScreen"
import { ContactScreen } from "./screens/ContactScreen"
import { Ionicons } from "@expo/vector-icons"

const Tab = createBottomTabNavigator()

function App(): JSX.Element {
  return (
    <NavigationContainer>
      <StatusBar barStyle="dark-content" />
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName

            if (route.name === "Αρχική") {
              iconName = focused ? "home" : "home-outline"
            } else if (route.name === "Έργα") {
              iconName = focused ? "grid" : "grid-outline"
            } else if (route.name === "Επικοινωνία") {
              iconName = focused ? "mail" : "mail-outline"
            }

            return <Ionicons name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: "#0066cc",
          tabBarInactiveTintColor: "gray",
        })}
      >
        <Tab.Screen name="Αρχική" component={HomeScreen} />
        <Tab.Screen name="Έργα" component={ProjectsScreen} />
        <Tab.Screen name="Επικοινωνία" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App

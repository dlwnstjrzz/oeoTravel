import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons, Octicons, Foundation, Feather } from "@expo/vector-icons";
import Home from "./src/component/home";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyHeader } from "./src/component/common/header";
import MapScreen from "./src/component/map";
import { MapInfoContext } from "./src/component/context/mapContext";
import TestImg from "./src/component/map/testimg";

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaProvider>
      <MapInfoContext>
        <NavigationContainer>
          <Tab.Navigator
            screenOptions={({ route }) => ({
              header: ({ navigation, route, options }) => {
                return (
                  <MyHeader
                    title=""
                    style={{
                      backgroundColor: "black",
                      height: 0,

                      justifyContent: "center",
                      marginTop: 0,
                    }}
                  />
                );
              },
              headerStyle: {
                backgroundColor: "transparent",
              },

              tabBarStyle: { backgroundColor: "black", borderRadius: 10 },
              tabBarIcon: ({ focused, color, size }) => {
                let iconName;

                if (route.name === "Home") {
                  iconName = "ios-home-outline";
                  if (!focused) {
                    return <Octicons name="home" size={24} color={color} />;
                  } else {
                    return <Foundation name="home" size={24} color={color} />;
                  }
                  // iconName = focused ? "home" : "ios-information-circle-outline";
                } else if (route.name === "Settings") {
                  iconName = "settings-outline";
                } else if (route.name === "Map") {
                  return <Feather name="map-pin" size={24} color={color} />;
                }

                // You can return any component that you like here!
                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "grey",
              tabBarShowLabel: false,
            })}
          >
            <Tab.Screen name="Home" component={Home} />

            <Tab.Screen name="Map" component={MapScreen} />
            <Tab.Screen name="Settings" component={TestImg} />
          </Tab.Navigator>
        </NavigationContainer>
      </MapInfoContext>
    </SafeAreaProvider>
  );
}

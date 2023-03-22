import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Map } from "./src/pages";
import { Ionicons, Octicons, Foundation, Feather } from "@expo/vector-icons";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MyHeader } from "./src/component";
import { MapInfoContext } from "./src/context/mapContext";

const Tab = createBottomTabNavigator();

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
                } else if (route.name === "Settings") {
                  iconName = "settings-outline";
                } else if (route.name === "Map") {
                  return <Feather name="map-pin" size={24} color={color} />;
                }

                return <Ionicons name={iconName} size={size} color={color} />;
              },
              tabBarActiveTintColor: "white",
              tabBarInactiveTintColor: "grey",
              tabBarShowLabel: false,
            })}
          >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Map" component={Map} />
            <Tab.Screen name="Settings" component={Home} />
          </Tab.Navigator>
        </NavigationContainer>
      </MapInfoContext>
    </SafeAreaProvider>
  );
}

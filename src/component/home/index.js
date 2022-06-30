import { View, StyleSheet, Dimensions, Text, Image } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyHeader } from "../common/header";
import HomeScreen from "./homeScreen";
import Hotels from "./hotels";
import Planes from "./plane";
import Tickets from "./tickets";
import Trains from "./trains";
import TicketDetail from "./ticketDetail";

const Stack = createNativeStackNavigator();
function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Details Screen</Text>
    </View>
  );
}
export default function Home() {
  return (
    <Stack.Navigator
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
      })}
      initialRouteName="home"
    >
      <Stack.Screen
        // options={{ title: "Overview" }}
        name="home"
        component={HomeScreen}
      />
      <Stack.Screen name="Hotels" component={Hotels} />
      <Stack.Screen name="Ticket" component={Tickets} />
      <Stack.Screen name="Airplane" component={Planes} />
      <Stack.Screen name="Train" component={Trains} />
      <Stack.Screen name="TicketDetail" component={TicketDetail} />
    </Stack.Navigator>
  );
}
const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

const styles = StyleSheet.create({});

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { MyHeader } from "../component";
import TicketDetail from "../component/home/TicketDetail";
import { DefaultHome } from "../component/home";
import SelectDate from "../component/home/SelectDate/SelectDate";
import { hotelDate, planeDate, ticketDate, trainDate } from "../mock/docData";

const Stack = createNativeStackNavigator();

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
      <Stack.Screen name="home" component={DefaultHome} />
      <Stack.Screen name="Hotels">
        {(props) => <SelectDate {...props} dates={hotelDate} />}
      </Stack.Screen>
      <Stack.Screen name="Ticket">
        {(props) => <SelectDate {...props} dates={ticketDate} />}
      </Stack.Screen>
      <Stack.Screen name="Airplane">
        {(props) => <SelectDate {...props} dates={planeDate} />}
      </Stack.Screen>
      <Stack.Screen name="Train">
        {(props) => <SelectDate {...props} dates={trainDate} />}
      </Stack.Screen>
      <Stack.Screen name="TicketDetail" component={TicketDetail} />
    </Stack.Navigator>
  );
}

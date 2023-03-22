import { ScrollView, useWindowDimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

export default function TicketDetail({ route }) {
  const { width } = useWindowDimensions();
  const { tickets } = route.params;

  return (
    <ScrollView style={{ marginVertical: 100 }}>
      {tickets.map((ticketURI) => {
        return <AutoHeightImage width={width} source={ticketURI} />;
      })}
    </ScrollView>
  );
}

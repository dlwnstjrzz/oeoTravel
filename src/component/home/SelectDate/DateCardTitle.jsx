import OpenPdf from "react-native-open-pdf";
import { View, StyleSheet, Text } from "react-native";

export default function DateCardTitle({ dateInfo, dayCount }) {
  return (
    <View
      style={{ flexDirection: "column" }}
      onPress={() => {
        console.log(1);
        OpenPdf.open(path);
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 12,
          color: "#acacac",
          marginBottom: 25,
        }}
      >
        day{dayCount + 1}
      </Text>
      <Text
        style={{
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: 50,
          color: "white",
        }}
      >
        {dateInfo}
      </Text>
    </View>
  );
}

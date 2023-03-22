import { View, Text } from "react-native";

export default function ItemCard({ title }) {
  return (
    <View style={{ flexDirection: "column" }}>
      <Text
        style={{
          fontWeight: "bold",
          fontStyle: "italic",
          fontSize: 15,
          color: "white",
        }}
      >
        {title}
      </Text>
    </View>
  );
}

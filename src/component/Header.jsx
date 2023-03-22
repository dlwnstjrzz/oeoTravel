import { View, Text } from "react-native";

export default function MyHeader({ title, style }) {
  return (
    <View style={style}>
      <Text>{title}</Text>
    </View>
  );
}

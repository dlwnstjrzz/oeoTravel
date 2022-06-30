import { View, Text } from "react-native";

function MyHeader({ title, style }) {
  return (
    <View style={style}>
      <Text>{title}</Text>
    </View>
  );
}

export { MyHeader };

import { View } from "react-native";
import Items from "./Items";

export default function CustomCallout() {
  return (
    <View style={{ backgroundColor: "transparent" }}>
      <Items title={"상세 보기"} />
    </View>
  );
}

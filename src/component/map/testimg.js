import { View, useWindowDimensions } from "react-native";
import AutoHeightImage from "react-native-auto-height-image";

export default function TestImg() {
  const { width } = useWindowDimensions();
  return (
    <View style={{ marginVertical: 150 }}>
      <AutoHeightImage
        width={width}
        source={require("../../../assets/ticket/train/frankToUlm.png")}
      />
    </View>
  );
}

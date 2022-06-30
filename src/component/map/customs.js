// import { ListItem, Avatar } from "@rneui/themed";
// import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale
import { Button } from "@rneui/themed";
import Styled from "styled-components/native";
import { View, Text } from "react-native";

export default function CustomCallout() {
  return (
    <CalloutWrapper>
      <Items />
    </CalloutWrapper>
  );
}

const CalloutWrapper = Styled.View`
  background-color: transparent;
`;

export function Items({ onPressHandler }) {
  return (
    <Button
      title={<ItemCard />}
      onPress={onPressHandler}
      titleStyle={{ fontWeight: "700", fontSize: 5 }}
      buttonStyle={{
        borderWidth: 0,
        borderColor: "transparent",
        borderRadius: 10,
        backgroundColor: "#100f0f",

        // height: 50,
        width: 135,
      }}
      containerStyle={{
        width: "auto",
        marginVertical: 2,
      }}
      icon={{
        name: "angle-right",
        type: "font-awesome",
        size: 20,
        color: "white",
      }}
      iconRight
      iconContainerStyle={{ marginLeft: 30 }}
    />
  );
}

function ItemCard() {
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
        상세 일정 보기
      </Text>
    </View>
  );
}

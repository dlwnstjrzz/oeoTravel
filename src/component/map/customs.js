// import { ListItem, Avatar } from "@rneui/themed";
// import TouchableScale from "react-native-touchable-scale"; // https://github.com/kohver/react-native-touchable-scale
import { Button } from "@rneui/themed";
import Styled from "styled-components/native";
import { View, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export function CustomMarker({ dayCount }) {
  return (
    <CustomMarkerWrapper>
      <TextWrapper>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 11,
            color: "white",
          }}
        >
          {` day${dayCount}`}
        </Text>
        <Ionicons name="chevron-forward-outline" size={14} color={"white"} />
      </TextWrapper>
      <Ionicons name="flag-outline" size={27} />
    </CustomMarkerWrapper>
  );
}
const TextWrapper = Styled.View`
backgroundColor: black;
borderRadius: 10;
flex: 1;
flexDirection: row;
justify-content: space-between;
`;
const CustomMarkerWrapper = Styled.View`
  margin-left: 22;
  backgroundColor: transparent;
  flex: 1;
  alignItems: center;
  flexDirection: column;
  `;

export function CustomCallout() {
  return (
    <View style={{ backgroundColor: "transparent" }}>
      <Items title={"상세 보기"} />
    </View>
  );
}

export function Items({ onPressHandler, title }) {
  return (
    <Button
      title={<ItemCard title={title} />}
      onPress={onPressHandler}
      titleStyle={{ fontWeight: "700", fontSize: 5 }}
      buttonStyle={{
        borderWidth: 0,
        borderColor: "transparent",
        borderRadius: 10,
        backgroundColor: "#100f0f",
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

function ItemCard({ title }) {
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

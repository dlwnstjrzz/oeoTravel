import Styled from "styled-components/native";
import { Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function CustomMarker({ dayCount }) {
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

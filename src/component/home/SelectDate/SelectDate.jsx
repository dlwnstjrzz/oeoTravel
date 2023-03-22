import React from "react";
import { ScrollView } from "react-native";
import styled from "styled-components/native";

import { Button } from "@rneui/themed";
import DateCardTitle from "./DateCardTitle";

export default function SelectDate({ dates, navigation }) {
  return (
    <Wrapper>
      <Header>
        <HeaderText>대충 날짜 고르라는 뜻</HeaderText>
      </Header>
      <ContentContainer>
        {dates?.map((info, idx) => {
          return (
            <Button
              title={<DateCardTitle dateInfo={info.date} dayCount={idx} />}
              onPress={() => {
                navigation.navigate("TicketDetail", {
                  tickets: info.ticket,
                });
              }}
              titleStyle={{ fontWeight: "700", fontSize: 18 }}
              buttonStyle={{
                borderWidth: 0,
                borderColor: "transparent",
                borderRadius: 20,
                backgroundColor: "#100f0f",
                height: 150,
              }}
              containerStyle={{
                width: "auto",
                marginHorizontal: 5,
                marginVertical: 10,
              }}
              icon={{
                name: "angle-right",
                type: "font-awesome",
                size: 20,
                color: "white",
              }}
              iconRight
              iconContainerStyle={{ marginLeft: 180, marginBottom: 90 }}
            />
          );
        })}
      </ContentContainer>
    </Wrapper>
  );
}

const Wrapper = styled.View`
  flex: 1;
  background-color: #000000;
  margin-vertical: 0;
`;

const Header = styled.View`
  flex: 0.1;
  margin-horizontal: 10;
  margin-top: 50;
`;

const HeaderText = styled.Text`
  font-size: 30;
  font-weight: 700;
  font-style: italic;
  color: white;
`;

const ContentContainer = styled(ScrollView)`
  flex: 5;
`;

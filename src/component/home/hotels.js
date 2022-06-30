import { View, StyleSheet, Text, ScrollView } from "react-native";
import { dateArr } from "../../mock/date";
import { Button } from "@rneui/themed";

export default function Hotels() {
  return (
    <View style={styles.wrapper}>
      <View style={styles.header}>
        <Text style={styles.headerText}>대충 날짜 고르라는 뜻</Text>
      </View>
      <ScrollView style={styles.contentContainer}>
        {dateArr.map((info, idx) => {
          return (
            <Button
              title={<DateCardTitle dateInfo={info} dayCount={idx} />}
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
      </ScrollView>
    </View>
  );
}

function DateCardTitle({ dateInfo, dayCount }) {
  return (
    <View style={{ flexDirection: "column" }}>
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
        {dateInfo.date}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#000000",
    marginVertical: 0,
  },
  header: {
    flex: 0.1,
    marginHorizontal: 10,
    marginTop: 50,
  },
  headerText: {
    fontSize: 30,
    fontWeight: "700",
    fontStyle: "italic",
    color: "white",
  },
  contentContainer: {
    flex: 5,
  },
});

import { Button } from "@rneui/themed";
import { View, StyleSheet, Dimensions } from "react-native";
import { useId } from "react";
import { buttonArr } from "../../mock/buttons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.homeScreen}>
      <View style={styles.homeButtons}>
        {buttonArr.map((info, idx) => {
          const key = useId();

          return (
            <Button
              title={info.title}
              icon={{
                name: info.icon,
                type: "font-awesome",
                size: 15,
                color: "white",
              }}
              iconContainerStyle={{ marginRight: 10 }}
              titleStyle={{ fontWeight: "700" }}
              buttonStyle={{
                backgroundColor: "rgba(90, 154, 230, 1)",
                borderColor: "transparent",
                borderWidth: 0,
                borderRadius: 30,
                height: 50,
              }}
              containerStyle={{
                width: 200,
                marginHorizontal: 50,
                marginVertical: 10,
              }}
              onPress={() => navigation.navigate(info.title)}
            />
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homeScreen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E3E4E5",
  },
  homeButtons: {
    flex: 3,
    flexDirection: "column",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginVertical: 150,
    backfaceVisibility: "visible",
  },
  fake: {
    flex: 1,
  },
});

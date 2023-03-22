import { Button } from "@rneui/themed";
import ItemCard from "./ItemCard";

export default function Items({ onPressHandler, title }) {
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

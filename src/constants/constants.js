import { Dimensions } from "react-native";

const buttonData = [
  { title: "Hotels", icon: "hotel" },
  { title: "Ticket", icon: "ticket" },
  { title: "Airplane", icon: "plane" },
  { title: "Train", icon: "train" },
];

const GOOGLE_API_KEY = "AIzaSyBWv0jXpMTE0VSY9yEYsfM7MOzjpsK9lQw";

const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = Dimensions.get("window");

export { GOOGLE_API_KEY, SCREEN_HEIGHT, SCREEN_WIDTH, buttonData };

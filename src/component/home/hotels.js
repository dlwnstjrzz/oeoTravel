import SelectDate from "./selectDate";

const hotelDate = [
  { date: "7/4", ticket: [require("../../../assets/ticket/hotel/7-4.jpeg")] },
  { date: "7/6", ticket: [require("../../../assets/ticket/hotel/7-6.jpeg")] },
  { date: "7/7", ticket: [require("../../../assets/ticket/hotel/7-7.jpeg")] },
  { date: "7/8", ticket: [require("../../../assets/ticket/hotel/7-7.jpeg")] },
  { date: "7/9", ticket: [require("../../../assets/ticket/hotel/7-7.jpeg")] },
  { date: "7/10", ticket: [require("../../../assets/ticket/hotel/7-7.jpeg")] },
  { date: "7/16", ticket: [require("../../../assets/ticket/hotel/7-16.jpeg")] },
  { date: "7/19", ticket: [require("../../../assets/ticket/hotel/7-19.jpeg")] },
];

export default function Hotels({ navigation }) {
  return <SelectDate dates={hotelDate} navigation={navigation} />;
}

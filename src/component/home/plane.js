import SelectDate from "./selectDate";

const planeDate = [
  {
    date: "7/7",
    ticket: [
      require("../../../assets/ticket/plane/mTp1.png"),
      require("../../../assets/ticket/plane/mTp1.png"),
      require("../../../assets/ticket/plane/mTp2.png"),
      require("../../../assets/ticket/plane/mTp3.png"),
    ],
  },
  {
    date: "7/13",
    ticket: [require("../../../assets/ticket/plane/gTr.jpeg")],
  },
];

export default function Planes({ navigation }) {
  return <SelectDate dates={planeDate} navigation={navigation} />;
}

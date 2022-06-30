import SelectDate from "./selectDate";

const trainDate = [
  {
    date: "7/5",
    ticket: [require("../../../assets/ticket/train/frankToUlm.png")],
  },

  {
    date: "7/11",
    ticket: [require("../../../assets/ticket/train/parisToInter.png")],
  },
  {
    date: "7/13",
    ticket: [
      require("../../../assets/ticket/train/interToGeneva-1.png"),
      require("../../../assets/ticket/train/interToGeneva-2.png"),
      require("../../../assets/ticket/train/interToGeneva-3.png"),
    ],
  },
  // {date:"7/15", ticket:[]},
  // "7/13",
  // "7/14",
  // "7/15",
  // "716",
  // "7/17",
  {
    date: "7/19",
    ticket: [
      require("../../../assets/ticket/train/lasPeToMilano1.png"),
      require("../../../assets/ticket/train/lasPeToMilano2.png"),
    ],
  },
];

export default function Trains({ navigation }) {
  return <SelectDate dates={trainDate} navigation={navigation} />;
}

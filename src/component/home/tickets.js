import SelectDate from "./selectDate";

const ticketDate = [
  "7/4",
  "7/5",
  "7/6",
  "7/7",
  "7/8",
  "7/9",
  "7/10",
  "7/11",
  "7/12",
  "7/13",
  "7/14",
  "7/15",
  "716",
  "7/17",
  "7/18",
];

export default function Tickets() {
  return <SelectDate dates={ticketDate} />;
}

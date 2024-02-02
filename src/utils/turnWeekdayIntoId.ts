export default function turnWeekdayIntoId(weekday: string) {
  switch (weekday) {
    case "sun":
      return "0";
    case "mon":
      return "1";
    case "tue":
      return "2";
    case "wed":
      return "3";
    case "thu":
      return "4";
    case "fri":
      return "5";
    case "sat":
      return "6";
    default:
      return "7";
  }
}

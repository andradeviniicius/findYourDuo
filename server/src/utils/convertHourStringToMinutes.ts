// 18:00 -> 1800
export default function convertHourStringToMinutes(hourString: String) {
  const [hours, minutes] = hourString.split(":").map(Number);
  const minutesAmount = hours * 60 + minutes;
  return minutesAmount;
}

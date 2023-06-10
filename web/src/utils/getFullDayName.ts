export default function getFullDayName(abbreviatedDay: string): string {
  const daysOfWeek: Record<string, string> = {
    sun: "Sunday",
    mon: "Monday",
    tue: "Tuesday",
    wed: "Wednesday",
    thu: "Thursday",
    fri: "Friday",
    sat: "Saturday",
  };

  return daysOfWeek[abbreviatedDay.toLowerCase()];
}

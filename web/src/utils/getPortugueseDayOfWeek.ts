export default function getPortugueseDayOfWeek(
  englishDayOfWeek: string
): string {
  const daysOfWeek: { [key: string]: string } = {
    sunday: "Domingo",
    monday: "Segunda-feira",
    tuesday: "Terça-feira",
    wednesday: "Quarta-feira",
    thursday: "Quinta-feira",
    friday: "Sexta-feira",
    saturday: "Sábado",
  };

  const lowerCaseDay = englishDayOfWeek.toLowerCase();
  return daysOfWeek[lowerCaseDay] || "Invalid day";
}

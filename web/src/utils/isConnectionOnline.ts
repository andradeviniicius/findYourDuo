import transformDayOfWeekInWords from "./transformDayOfWeekInWords";

export default function isConnectionOnline(
  starthour: string,
  endhour: string,
  daysOfWeek: any[]
) {
  const currentTime = new Date();
  const currentDay = transformDayOfWeekInWords(currentTime.getDay());
  const currentHour = currentTime.getHours();
  const userStartHour = Number(starthour.slice(0, 2));
  const userEndHour = Number(endhour.slice(0, 2));

  if (currentHour < userStartHour || currentHour > userEndHour) {
    return false;
  } else if (daysOfWeek.some((item: any) => item === currentDay)) {
    return true;
  }
}

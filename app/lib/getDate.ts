export default function getDate(selectedDate: Date) {
  const date = new Date(selectedDate);

  const transformNumber = (n: number) => (n < 10 ? `0${n}` : n.toString());

  const dateFormatted = {
    dateObject: date,
    dateRender: {
      year: date.getFullYear().toString(),
      month: transformNumber(date.getMonth() + 1),
      day: transformNumber(date.getDate()),
      hour: transformNumber(date.getHours()),
      minutes: transformNumber(date.getMinutes()),
    },
  };

  return dateFormatted;
}

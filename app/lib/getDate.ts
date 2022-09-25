export default function getDate(selectedDate: Date) {
  const date = new Date(selectedDate);

  const dateFormatted = {
    dateObject: date,
    dateRender: {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      day: date.getDate(),
      hour: date.getHours(),
      minutes: date.getMinutes(),
    },
  };

  return dateFormatted;
}

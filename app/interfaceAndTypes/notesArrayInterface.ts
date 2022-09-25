interface Date {
  year: number;
  month: number;
  day: number;
  hour: number;
  minutes: number;
}

interface NotesArray {
  id: number;
  title: string;
  description: string;
  date: Date;
  status: number;
  picture: string | undefined;
}

export default NotesArray;

interface Date {
  year: string;
  month: string;
  day: string;
  hour: string;
  minutes: string;
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

export class Task {
  id: number;
  title: String;
  details: String;
  date: Date;
  isDone: boolean;

  constructor()
  constructor(title?: String, details?: String, date?: Date)
  constructor(title?: String, details?: String, date?: Date, id?:number){
    this.id = id;
    this.title = title;
    this.details = details;
    this.date = date;
    this.isDone = false;
  }
}

import { Task } from './task';

export class Category {
  name: String;
  tasks: Array<Task> = [];

  constructor()
  constructor(name?: String, tasks?: Array<Task>){
    this.name = name;
    this.tasks = tasks;
  }

  addTask(task: Task){
    this.tasks.push(task);
  }
  deleteTask(task: Task){
    this.tasks.filter( t => t.title == task.title);
  }
}

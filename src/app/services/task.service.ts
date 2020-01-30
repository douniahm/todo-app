import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  public tasksSub = new Subject<Task>();
  public tasks : Observable<Task>= this.tasksSub.asObservable();
  constructor() {
  } 

   addTask(task: any){
     this.tasksSub.next(task);
   }
}

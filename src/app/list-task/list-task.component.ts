import { Component, OnInit } from '@angular/core';
import { TaskService} from '../services/task.service';

@Component({
  selector: 'app-list-task',
  templateUrl: './list-task.component.html',
  styleUrls: ['./list-task.component.css']
})
export class ListTaskComponent implements OnInit {
 tasks = [];

 constructor(private taskService: TaskService) { }

 ngOnInit() {
   this.taskService.tasksSub.subscribe((data) => this.next(data), (error) => this.error(error), () => this.complete());
 }

 ngOnDestroy(){
   this.taskService.tasksSub.unsubscribe();
 }
 onDone(idTask:number){
   this.tasks.find(t => t.id == idTask).isDone = true;
 }

 onUndone(idTask:number){
  this.tasks.find(t => t.id == idTask).isDone = false;
}

 next(task: any) {
   this.tasks.push(task);
 }

 error(err: any) {
   console.log(err);
 }

 complete() {
   console.log("Complete");
 }

}

import { Component } from '@angular/core';
import { TaskService } from '../services/task.service';
import { Task } from '../models/task';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrls: ['./new-task.component.css']
})
export class NewTaskComponent {
  public task : Task = new Task('','',new Date());
  private size : number = 0;
  constructor(private taskService: TaskService) {
  }

  onAddTask(){
    if(this.task.title.length != 0){
      this.task.id = this.size;
      this.taskService.addTask(this.task);
      this.size++;
      this.task = new Task('','',new Date());
      return true;
    }
    return false;
  }
}

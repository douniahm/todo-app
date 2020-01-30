import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {NewTaskComponent} from '../app/new-task/new-task.component'
//import {ListTaskComponent} from '../app/list-task/list-task.component'

const routes: Routes = [
  { path: 'todo', component: NewTaskComponent },
  { path: '**', component: NewTaskComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import {Component, OnInit} from '@angular/core';
import {TaskService} from "./task.service";
import {Task} from "./task";

@Component({
    selector: 'my-priority-app',
    //template: '<h1> {{title}} </h1>',
    template: `
      <div class="container">
          <h1> {{title}} </h1>
          <br />
          
            <div *ngFor="let task of tasks">          
              
              <div *ngIf="task.priority === 1 && task.iscompleted === false" class="container-fluid"> 
                  <button (click)="change_priority(task)" type="button" class="btn btn-danger btn-block form-control">
                      <input (click)="mark_complete(task)" type="checkbox" value="" >
                       {{task.task}}
                   </button>
                </div>
          
             <div *ngIf="task.priority === 2 && task.iscompleted === false" class="container-fluid">
              <button (click)="change_priority(task)" type="button" class="btn btn-warning btn-block">
                  <input type="checkbox" value="">
                 {{task.task}}
              </button>
            </div>
            
             <div *ngIf="task.priority === 3 && task.iscompleted === false" class="container-fluid">
              <button (click)="change_priority(task)" type="button" class="btn btn-info btn-block">
                  <input type="checkbox" value="">
                 {{task.task}}
              </button>
            </div>
            
             <div *ngIf="task.priority === 4 && task.iscompleted === false" class="container-fluid">
              <button (click)="change_priority(task)" type="button" class="btn btn-success btn-block">
                  <input type="checkbox" value="">
                 {{task.task}}
              </button>
            </div>
            
             <div *ngIf="task.priority === 5 && task.iscompleted === false" class="container-fluid">
              <button (click)="change_priority(task)" type="button" class="btn btn-default btn-block">
                  <input type="checkbox" value="">
                 {{task.task}}
              </button>
            </div>
            
          </div>
      </div>
    `,
    providers: [TaskService]
})
export class AppComponent implements OnInit{
  title = "Prioritize Everything!!!";
  tasks: Task[];
  error: any;

  constructor(private taskService: TaskService) { }

  getTasks() {
    this.taskService
      .getTasks()
      .then(tasks => this.tasks = tasks)
      .catch(error => this.error = error);
  }

  ngOnInit() {
    this.getTasks();
  }

  change_priority(task) {
    console.log(task);
    console.log('changing priority');
    var current_priority = task.priority;
    task.priority = current_priority % 5 + 1;
    console.log(task);
    //Update database with changed priority

  }

  mark_complete(task) {
    console.log(task);
    console.log('marking complete');
    task.iscompleted = true;
    console.log(task);

    //Update database to mark task complete
  }

}

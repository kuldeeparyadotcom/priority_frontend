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
            <div class="container-fluid">
              <button type="button" class="btn btn-success btn-block">
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

  constructor(private taskService: TaskService) { }

  getTasks() {
    this.taskService.getTasks().then(tasks => this.tasks = tasks);
  }

  ngOnInit() {
    this.getTasks();
  }

}

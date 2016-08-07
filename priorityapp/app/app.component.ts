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
          
          
           
           <div class="container">
                <div class="row container">
                <input class="col-lg-10" type="text" #newTask
                    (keyup.enter)="addNewTask(newTask.value)"
                     (blur)="addNewTask(newTask.value); newTask.value='' ">
                <div class="col-lg-2">   
                    <button (click)=addNewTask(newTask.value)>Add New Task </button>  
                </div>
                </div>
          </div>

          
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

  new_task: Task;

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


  change_priority(task: Task) {
    console.log('Chaning priority');
    console.log(task);
    task.priority = task.priority % 5 + 1;
    console.log(task);
  }

  mark_complete(task: Task) {
    console.log(task);
    console.log('marking complete');
    task.iscompleted = true;
    console.log(task);

    //Update database to mark task complete
  }

  addNewTask(newTask_task: string) {

    if (newTask_task.length) {

      this.new_task = {
        task: newTask_task,
        user: 'kd',
        priority: 1,
        iscompleted: false
      };

      console.log('adding new task');
      console.log(this.new_task);

      //Add this.new_task to database using http post

    }

  }

}

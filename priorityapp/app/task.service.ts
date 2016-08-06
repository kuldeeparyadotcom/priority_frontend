import {Injectable} from "@angular/core";
import {TASKS} from "./mock-tasks";
import {Headers, Http} from "@angular/http";

import 'rxjs/add/operator/toPromise';
import {Task} from "./task";

@Injectable()
export class TaskService {

  private tasksUrl = 'http://192.168.55.57:3000/tasks/kd';

  constructor(private http: Http) { }

  getTasks() {
    return this.http.get(this.tasksUrl)
      .toPromise()
      .then(response => response.json() as Task[])
      .catch(this.handleError);

  }

  private handleError(error: any) {
    console.error('An error occurred: ', error);
    return Promise.reject(error.message || error);
  }
}

import {Injectable} from "@angular/core";
import {TASKS} from "./mock-tasks";

@Injectable()
export class TaskService {
  getTasks() {
    console.log(Promise.resolve(TASKS));
    return Promise.resolve(TASKS);
  }
}

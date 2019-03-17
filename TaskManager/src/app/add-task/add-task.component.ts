import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TaskService } from '../task.service';
import { ITask } from '../task';


@Component({
  selector: "app-add-task",
  templateUrl: "./add-task.component.html"
})
export class AddTaskComponent implements OnInit {
  task: ITask = {
    "task": "",
    "parentTask": "",
    "priority": "",
    "startDate": "",
    "endDate": "",
    "taskId": null,
    "parentTaskId": null
  };  
  constructor( private router: Router, private taskService: TaskService) { }

  ngOnInit() {

  }

  addTask() {
    this.taskService.addTask(this.task);
    this.router.navigate(['/view-task']);
  }
}

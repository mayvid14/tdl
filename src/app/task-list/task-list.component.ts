import { Component, OnInit } from '@angular/core';
import { Task, TaskServiceService } from '../task-service.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {

  tasks: Task[];
  constructor(private ts: TaskServiceService) {
    this.tasks = ts.getTasks();
  }

  ngOnInit() {
  }

}

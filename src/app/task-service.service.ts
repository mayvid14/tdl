import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {

  constructor() { }

  getTasks() {
    return tasks;
  }

  get(taskString: string) {
    const taskId = +taskString;
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) {
        return tasks[i];
      }
    }
    return null;
  }

  addTask(task: Task) {
    tasks.push(task);
    return tasks;
  }

  updateTask(task: Task) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === task.id) {
        tasks[i].title = task.title;
        tasks[i].desc = task.desc;
        tasks[i].priority = task.priority;
      }
    }
  }

  deleteTask(taskId: number) {
    for (let i = 0; i < tasks.length; i++) {
      if (tasks[i].id === taskId) {
        tasks = tasks.slice(0, i - 1).concat(tasks.slice(i + 1, tasks.length - 1));
      }
    }
  }
}

let count = 0;

export class Task {
  id: number;
  title: string;
  desc: string;
  priority: number;

  constructor() {
    this.id = count + 1;
    count = count + 1;
  }
}

let tasks: Task[];

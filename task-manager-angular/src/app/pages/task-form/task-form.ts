import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-task-form',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './task-form.html',
  styleUrls: ['./task-form.scss']
})
export class TaskForm {
  title: string = '';
  priority: string = 'Medium';

  constructor(private http: HttpClient, private taskService: TaskService) {}

  createTask() {
    const newTask = {
      title: this.title,
      priority: this.priority,
      completed: false
    };
    this.http.post('/api/tasks', newTask).subscribe(() => {
      this.title = '';
      this.priority = 'Medium';
      this.taskService.triggerReload();
    });
  }
}

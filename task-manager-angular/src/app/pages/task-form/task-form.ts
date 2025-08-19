import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

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

  constructor(private http: HttpClient) {}

  createTask() {
    const newTask = {
      title: this.title,
      priority: this.priority,
      completed: false
    };
    // Replace with your backend API URL
    this.http.post('/api/tasks', newTask).subscribe(() => {
      this.title = '';
      this.priority = 'Medium';
      // Optionally, trigger reload in TaskList
    });
  }
}

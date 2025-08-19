import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskForm } from '../task-form/task-form';

interface Task {
  id: number;
  title: string;
  priority: string;
  completed: boolean;
}

@Component({
  selector: 'app-task-list',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, TaskForm],
  templateUrl: './task-list.html',
  styleUrls: ['./task-list.scss']
})
export class TaskList {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filterPriority: string = '';
  filterCompleted: string = '';

  constructor(private http: HttpClient) {
    this.loadTasks();
  }

  loadTasks() {
    // Replace with your backend API URL
    this.http.get<Task[]>('/api/tasks').subscribe(data => {
      this.tasks = data;
      this.applyFilters();
    });
  }

  applyFilters() {
    this.filteredTasks = this.tasks.filter(task => {
      const priorityMatch = this.filterPriority ? task.priority === this.filterPriority : true;
      const completedMatch = this.filterCompleted ? String(task.completed) === this.filterCompleted : true;
      return priorityMatch && completedMatch;
    });
  }
}

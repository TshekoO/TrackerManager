import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TaskForm } from '../task-form/task-form';

import { TaskService } from '../../services/task.service';
import { Subscription } from 'rxjs';

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
export class TaskList implements OnInit, OnDestroy {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  filterPriority: string = '';
  filterCompleted: string = '';
  private reloadSub?: Subscription;

  constructor(private http: HttpClient, private taskService: TaskService) {}

  ngOnInit() {
    this.loadTasks();
    this.reloadSub = this.taskService.reload$.subscribe(() => {
      this.loadTasks();
    });
  }

  ngOnDestroy() {
    this.reloadSub?.unsubscribe();
  }

  loadTasks() {
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

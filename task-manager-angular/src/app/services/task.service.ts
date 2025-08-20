import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiUrl = '/api/tasks'; // Angular will proxy this to .NET backend

  private reloadSubject = new Subject<void>();
  reload$ = this.reloadSubject.asObservable();

  constructor(private http: HttpClient) {}

  getTasks(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  createTask(task: { title: string; priority: string }): Observable<any> {
    return this.http.post(this.apiUrl, task);
  }

  completeTask(id: number): Observable<any> {
    return this.http.put(`${this.apiUrl}/${id}`, {});
  }

    triggerReload(): void {
      this.reloadSubject.next();
    }
}
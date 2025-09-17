import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Todo } from '../todos/models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  http = inject(HttpClient);

  todoItems: Array<{ id: number; title: string; completed: boolean }> = [
    { id: 1, title: 'Learn Angular', completed: false },
    { id: 2, title: 'Build an app', completed: false },
    { id: 3, title: 'Deploy the app', completed: false }
  ];

  constructor() {
    this.getToDosFromAPI();
  }

  getToDosFromAPI() {
    const url = 'https://jsonplaceholder.typicode.com/todos?_limit=5'

    return this.http.get<Array<Todo>>(url);
  }
};
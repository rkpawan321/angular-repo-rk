import { Component, inject, OnInit, signal } from '@angular/core';
import { TodosService } from '../services/todos.service';
import { Todo } from './models/todo';
import { CommonModule } from '@angular/common';
import { catchError } from 'rxjs';

@Component({
  selector: 'app-todos',
  imports: [CommonModule],
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todoItems = signal<Array<Todo>>([]);
  todoService = inject(TodosService);

  ngOnInit(): void {
    this.todoService.getToDosFromAPI().pipe(catchError(error => {
      console.error('Error fetching todos:', error);
      return []; // Return an empty array in case of error
    })).
      subscribe(todos => {
      this.todoItems.set(todos);
      console.log(todos);
    });
  }
}

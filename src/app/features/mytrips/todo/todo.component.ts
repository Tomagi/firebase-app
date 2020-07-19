import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'tg-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.scss']
})
export class TodoComponent implements OnInit {

  @Input() data: Todo;
  constructor() { }

  ngOnInit(): void {
  }

}

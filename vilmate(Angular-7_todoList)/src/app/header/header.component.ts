import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: []
})
export class HeaderComponent {
  @Input() todoList: any[];

  addNewItem(newTodo) {
    newTodo.trim()
      ? this.todoList.push({todo: newTodo, checked: '', disable: false, searching: true})
      : console.log('Todo was not enter');
  }

  search(searchWord) {
    this.todoList.length > 0
      ? this.todoList.forEach((el) => el.searching = el.todo.indexOf(searchWord) != -1)
      : console.log('Your todoList is empty');
  }
}

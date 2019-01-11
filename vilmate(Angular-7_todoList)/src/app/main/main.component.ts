import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: []
})
export class MainComponent implements OnInit, OnDestroy {
  @Input() todoList: any[];

  ngOnInit() {
    this.todoList = localStorage.getItem('userTodoList') || this.todoList;
  };

  ngOnDestroy() {
    localStorage.setItem('userTodoList', this.todoList);
  }

  markItem(index) {
    this.todoList[index].checked === ''
      ? this.todoList[index].checked = 'checked'
      : this.todoList[index].checked = '';
  }

  deleteItem(index) {
    this.todoList.splice(index, 1);
  }

  editItem(index) {
    this.todoList[index].disable === ''
      ? this.todoList[index].disable = 'disable'
      : this.todoList[index].disable = '';
  }

  changeTodoValue(index, newValue) {
    newValue.trim()
      ? this.todoList[index] = {...this.todoList[index], todo: newValue, disable: false}
      : console.log('Todo was not enter');
  }
}

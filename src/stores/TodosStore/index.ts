import { action, computed, observable } from "mobx";
import { all, completed } from "../../contants";
import IndTodo from "../indTodo";
class TodosStore {
  @observable todos: IndTodo[] = [];
  @observable state = all;
  @action
  addtodo = (id: string, todo: string) => {
    this.todos.push(new IndTodo(id, todo));
  };
  @action
  chageState = (curr: string) => {
    this.state = curr;
  };
  @action
  handleCheck = (ind: number) => {
    this.todos[ind].toggleCompletionState();
  };
  @action
  handleTodoDelete = (ind: number) => {
    this.todos.splice(ind, 1);
  };
  @computed
  get filterdTodoData() {
    if (this.state === all) {
      return this.todos;
    } else if (this.state === completed) {
      const result = this.todos.filter((todo) => todo.isCompleted === true);
      return result;
    } else {
      const result = this.todos.filter((todo) => todo.isCompleted === false);
      return result;
    }
  }
}
const store = new TodosStore();
export default store;

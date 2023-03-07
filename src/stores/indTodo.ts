import { action, observable } from "mobx";
class IndTodo {
  @observable isCompleted:boolean = false;
  constructor(public id:string, public todo:string) {
    
  }

  @action.bound
  toggleCompletionState() {
    console.log("In toggle completionstate");
    this.isCompleted = !this.isCompleted;
  }
}

export default IndTodo;
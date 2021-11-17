import { Component } from "react";
import './app.scss';
import Title from '../title/title.js';
import List from '../list/list.js';
import AddItemList from '../add-item-list/add-item-list.js';
import TaskInfo from "../task-info/task-info";

class App extends Component {
  state = {
    data: []
  }

  addTaskToState = (state) => {
    this.setState(({data}) => {
      const dataCopy = [...data];
      const idValue = Date.now();
      dataCopy.push({task: state.task, id: idValue});
 
      return {data: dataCopy};
    });
  }

  deleteTask = (id) => {
    this.setState(({data}) => { 
      return {data: data.filter(item => item.id !== id)};
    });
  }

  editTask = (id, state) => {
    this.setState(({data}) => { 
      const dataCopy = [...data];
      dataCopy.forEach(item => {
        if (item.id === id) {
          item.task = state.task;
        }
      });
      return {data: dataCopy};
    });
  }

  render() {
    const {data} = this.state;
    const counterTasks = this.state.data.length; 
    return (
      <div className="container">
        <Title />
        <TaskInfo counterTasks={counterTasks}/> 
        <List data={data} deleteTask={this.deleteTask} editTask={this.editTask} />
        <AddItemList addTaskToState={this.addTaskToState} />
      </div>
    );
  }
}

export default App;

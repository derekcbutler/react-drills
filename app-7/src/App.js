import React, { Component } from "react";
import "./App.css";
import NewTask from './NewTask';
import List from './List';

export default class App extends Component {
  constructor(){
    super();

    this.state = {
      list: [],
      input: ''
    };
    this.handleAddTask = this.handleAddTask.bind(this);
  }

  handleAddTask(){
    let input = this.state.input;
    this.setState({list: [...this.state.list, input], input: "" });

  }

  handleOnChange = (e) =>{
    this.setState({
      input: e
    })
      
  }
  deleteItem = (i) => {
    let copyState = [...this.state.list]
    copyState.splice(i , 1 ) 
    this.setState({
      list: copyState
    })
  //access index from TODO
  //delete item from state
  //.splice and make copy
  }

  render() {
    console.log(this.state)
    return (
      <div className="App">
        <h1>My To-do List:</h1>
        <NewTask handleAddTask={this.handleAddTask} handleOnChange={this.handleOnChange} input={this.state.input}/>
        <List list={this.state.list} deleteItem={this.deleteItem}/>
      </div>
    );
  }
}


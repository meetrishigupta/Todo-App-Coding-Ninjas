import "./styles.css";
import { Component } from "react";
import { List } from "./List";
import { Form } from "./Form";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [
        { text: "Do the laundry" },
        { text: "Iron the clothes" },
        { text: "Go for a walk" }
      ]
    };
  }

  handleAdd = (text) => {
    this.setState((prev) => ({
      todos: [{ text }, ...prev.todos]
    }));
  };

  handleRemove = (text) => {
    const filteredTodos = this.state.todos.filter((todo) => todo.text !== text);
    this.setState({ todos: filteredTodos });
  };

  render() {
    return (
      <div className="App">
        <span>Todo</span>
        <Form onAdd={this.handleAdd} />
        <List todos={this.state.todos} onRemove={this.handleRemove} />
      </div>
    );
  }
}

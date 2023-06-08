import { Component } from "react";

export class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: ""
    };
  }

  handleChange = (e) => {
    this.setState({
      text: e.target.value
    });
  };

  handleClick = () => {
    this.props.onAdd(this.state.text);
    this.setState({ text: "" });
  };

  render() {
    return (
      <div className="form">
        <input
          onChange={this.handleChange}
          value={this.state.text}
          placeholder="Whats on your mind?"
          required
        />
        <button onClick={this.handleClick}>Add</button>
      </div>
    );
  }
}

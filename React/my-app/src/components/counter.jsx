import React, { Component } from "react";
class Counter extends Component {
  state = {
    value: this.props.value,
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ color: "black" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleClickEvent}
          className="badge badge-secondary badge-sm"
        >
          Increment
        </button>
        <button
          onClick={this.handleClickEvent}
          className="badge badge-danger m-2 badge-sm"
        >
          Delete
        </button>
      </React.Fragment>
    );
  }
  handleClickEvent = () => {
    this.setState({ count: this.state.value + 1 });
  };
  getBadgeClasses() {
    let classes = "badge m-2 badge-sm badge-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

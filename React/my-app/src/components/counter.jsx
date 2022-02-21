import React, { Component } from "react";
class Counter extends Component {
  state = {
    value:this.props.value
  };
  render() {
    return (
      <React.Fragment>
        <span style={{ color: "black" }} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button onClick={this.handleClickEvent} className="btn btn-secondary btn-sm">Increment</button>
        <button onClick={this.handleClickEvent} className="btn btn-danger m-2 btn-sm">Delete</button>
      </React.Fragment>
    );
  }
  handleClickEvent =() =>{
      this.setState({count:this.state.value+1});
  }
  getBadgeClasses() {
    let classes = "btn m-2 btn-sm btn-";
    classes += this.state.value === 0 ? "warning" : "primary";
    return classes;
  }
  formatCount() {
    const { value } = this.state;
    return value === 0 ? "Zero" : value;
  }
}

export default Counter;

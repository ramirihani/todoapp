import React, { Component } from "react";
import "./Todoapp.css";
export default class Todoapp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItem: "",
      list: []
    };
  }
  updateInput = e => {
    this.setState({
      newItem: e.target.value
    });
  };
  addItem = e => {
    e.preventDefault();
    this.setState({
      list: this.state.list.concat({
        task: this.state.newItem,
        complete: false
      }),
      newItem: ""
    });
  };
  deleteItem = i => {
    const list = [...this.state.list];
    const updatedList = list.filter((item, id) => id !== i);
    this.setState({ list: updatedList });
  };
  completeBtn = i => {
    this.setState({
      list: this.state.list.map((el, index) =>
        index === i ? { ...el, complete: !el.complete } : el
      )
    });
  };
  render() {
    return (
      <div className="bigbloc">
        <h1 className="app-title">To-Do APP !</h1>
        <p className="app-title1">Add new To-Do</p>
        <form onSubmit={this.addItem}>
          <input
            type="text"
            value={this.state.newItem}
            onChange={this.updateInput}
            className="input"
            placeholder="Enter a task here"
          />
          <button className="add-btn"> Add</button>
        </form>
        <div>
          {this.state.list.map((item, i) => (
            <div className="view" key={i}>
              <li className="list" className={item.complete ? "complete" : ""}>
                {item.task}{" "}
                <button
                  className="btncomplete"
                  onClick={() => this.completeBtn(i)}
                >
                  {!item.complete ? "complete" : "undo"}
                </button>
                <button
                  className="btndelete"
                  onClick={() => this.deleteItem(i)}
                >
                  delete
                </button>
              </li>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

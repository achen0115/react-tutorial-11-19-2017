import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent, fetchStudents } from "../actions/studentActions";
import Button from "./button";

class App extends Component {
  state = {
    value: ""
  };

  handleChange = e => {
    this.setState({ value: e.target.value });
    // this.state.value = e.target.value; bad!!!
  };

  render() {
    console.log(this.props);
    const { addStudent, fetchStudents } = this.props;
    const { students } = this.props.store;
    return (
      <div className="App">
        <p className="App-intro">Hello World</p>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.firstName}</li>
          ))}
          {/* {students.map((student, index) => {
            return <li key={index}>{student.name}</li>;
          })} */}
          <input value={this.state.value} onChange={this.handleChange} />
          {/* <button
            onClick={() => {
              addStudent(this.state.value); // not a function, it's an obj
            }}
          >
            Click me
          </button> */}
          <Button
            text="Add student"
            handleClick={() => {
              addStudent(this.state.value); // not a function, it's an obj
            }}
          />

          {/* <button onClick={fetchStudents}>fetch</button> */}
          <Button text="fetch" handleClick={fetchStudents} />
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store); // state
  return { store };
};

export default connect(mapStateToProps, { addStudent, fetchStudents })(App);

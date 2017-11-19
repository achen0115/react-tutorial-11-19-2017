import React, { Component } from "react";
import { connect } from "react-redux";
import { addStudent } from "../actions/studentActions";

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
    const { addStudent } = this.props;
    const { students } = this.props.store;
    return (
      <div className="App">
        <p className="App-intro">Hello World</p>
        <ul>
          {students.map((student, index) => (
            <li key={index}>{student.name}</li>
          ))}
          {/* {students.map((student, index) => {
            return <li key={index}>{student.name}</li>;
          })} */}
          <input value={this.state.value} onChange={this.handleChange} />
          <button
            onClick={() => {
              addStudent(this.state.value);
            }}
          >
            Click me
          </button>
        </ul>
      </div>
    );
  }
}

const mapStateToProps = store => {
  console.log(store); // state
  return { store };
};

export default connect(mapStateToProps, { addStudent })(App);

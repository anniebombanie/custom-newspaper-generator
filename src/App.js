import React, {Component, Fragment } from 'react';
import axios from 'axios';
import Newspaper from './Newspaper.js';
import './App.css';

class App extends Component {
  constructor() {
    console.log("constructor called");
    super();
    this.state = {
      userName: "",
      day: null,
      month: null,
      historialFact: "",
      isLoading: true
    };
  }

  // componentDidMount() {
  //   console.log('component mounted');
  // }

  handleChange = e => {
    // store values as variables to use later (so it's cleaner)
    // Target name of element first so we know which one is being changed and then grab its value and set the name = value
    const targetName = e.target.name; // month
    const targetVal = e.target.value; // 11
    console.log(targetVal);
    this.setState({
      //set the state of the whatever is being changed to the associated value
      [targetName]: targetVal
    });
  };

  submitForm = e => {
    //prevent default behaviour of submit button
    e.preventDefault();

    //call API and dynamically insert month and name values from state
    axios({
      url: `http://numbersapi.com/${this.state.month}/${this.state.day}/date`,
      method: "GET"
    }).then(response => {
      this.setState({
        historialFact: response.data,
        isLoading: false
      });
    });
  };

  resetForm = () => {
    //reset all values to original empty state
    this.setState({
      userName: "",
      day: null,
      month: null,
      historialFact: "",
      isLoading: true
    });
  };

  render() {
    return (
      <Fragment>
        <form action="" className="historicalFact">
          <label htmlFor="userName">What is your full name?</label>
          <input
            type="text"
            id="userName"
            name="userName"
            placeholder="Enter your full name here"
            onChange={this.handleChange}
          />
          <legend>When is your birthday?</legend>
          <label htmlFor="month">Month</label>
          <select
            id="month"
            name="month"
            placeholder="day"
            defaultValue={this.state.month}
            onChange={this.handleChange}
          >
            <option value="1">January</option>
            <option value="2">February</option>
            <option value="3">March</option>
            <option value="4">April</option>
            <option value="5">May</option>
            <option value="6">June</option>
            <option value="7">July</option>
            <option value="8">August</option>
            <option value="9">September</option>
            <option value="10">October</option>
            <option value="11">November</option>
            <option value="12">December</option>
          </select>
          <label htmlFor="day">Day</label>
          <input
            type="number"
            min="1"
            max="31"
            id="day"
            name="day"
            placeholder="day"
            defaultValue={this.state.day}
            onChange={this.handleChange}
          />
          {/* ADD THIS LATER WHEN CALLING NYTIMES API <label htmlFor='year'>Day</label>
          <input type='number' min='1900' max='2019' id='year' /> */}
          <button type="submit" onClick={this.submitForm}>
            See my Newspaper
          </button>
        </form>
        <div className="newspaper">
          <Newspaper
            loading={this.state.isLoading}
            fact={this.state.historialFact}
            name={this.state.userName}
          />
        </div>
      </Fragment>
    );
  }
}

export default App;

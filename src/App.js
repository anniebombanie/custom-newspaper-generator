import React, {Component, Fragment } from "react";
import axios from "axios";
import Newspaper from "./Newspaper.js";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      day: "",
      month: "",
      city: "",
      country: "",
      historialFact: "",
      isLoading: true,
      result: false
    };
  }

  // componentDidMount() {
  //   console.log("component mounted");
  // }

  handleChange = e => {
    // store values as variables to use later (so it"s cleaner)
    // Target name of element first so we know which one is being changed and then grab its value and set the name = value
    const targetName = e.target.name; // month
    const targetVal = e.target.value; // 11

    this.setState({
      //set the state of whatever is being changed to the associated value
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
        isLoading: false,
      })
    });
    //change result to true for conditional rendering
    this.setState({
      result: true
    });
  };

  resetForm = () => {
    //reset all values to original empty state
    this.setState({
      userName: "",
      day: "",
      month: "",
      city: "",
      country: "",
      historialFact: "",
      isLoading: true,
      result: false
    });
  };

  render() {
    return (
      <Fragment>
        <form action="" className="historicalFact">
          <label htmlFor="userName">What's your full name?</label>
          <input
            type="text"
            name="userName"
            id="userName"
            placeholder="Enter your full name here"
            value={this.state.userName}
            required
            onChange={this.handleChange}
          />

          <legend>Where were you born?</legend>
          <label htmlFor="city">City</label>
          <input
            type="text"
            name="city"
            id="city"
            placeholder="Enter your City here"
            value={this.state.city}
            required
            onChange={this.handleChange}
          />
          <label htmlFor="country">Country</label>
          <input
            type="text"
            name="country"
            id="country"
            placeholder="Enter your Country here"
            value={this.state.country}
            required
            onChange={this.handleChange}
          />

          <legend>When's your birthday?</legend>
          <label htmlFor="month">Month</label>
          <select
            id="month"
            name="month"
            placeholder="month"
            value={this.state.month}
            required
            onChange={this.handleChange}
          >
            <option>Month</option>
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
            placeholder="Day"
            value={this.state.day}
            required
            onChange={this.handleChange}
          />
          {/* ADD THIS LATER WHEN CALLING NYTIMES API <label htmlFor="year">Day</label>
          <input type="number" min="1900" max="2019" id="year" /> */}
          <button type="submit" onClick={this.submitForm}>
            Get my Newspaper
          </button>
        </form>

        {this.state.result && (
          <div className="newspaper">
            {this.state.isLoading ? (
              <p>Generating your custom newspaper...</p>
            ) : (
              <Newspaper
                fact={this.state.historialFact}
                name={this.state.userName}
                city={this.state.city}
                country={this.state.country}
              />
            )}
            <button type="reset" onClick={this.resetForm}>
              Get Another Newspaper
            </button>
          </div>
        )}
      </Fragment>
    );
  }
}

export default App;

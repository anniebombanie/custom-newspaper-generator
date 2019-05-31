import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }


  render() {
    return (
      <form action="" className="historicalFact">
        <label htmlFor="userName">What's your full name?</label>
        <input
          type="text"
          name="userName"
          id="userName"
          placeholder="Enter your full name here"
          value={this.props.userName}
          required
          onChange={userInput => {
            this.props.validateForm(this.props.userName);
          }}
        />
        <p>{this.props.error}</p>

        <legend>Where were you born?</legend>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter your City here"
          value={this.props.city}
          required
          onChange={userInput => {
            this.props.validateForm(this.props.city);
          }}
        />
        <p>{this.props.error}</p>

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Enter your Country here"
          value={this.props.country}
          required
          onChange={userInput => {
            this.props.validateForm(this.props.country);
          }}
        />
        <p>{this.props.error}</p>

        <legend>When's your birthday?</legend>
        <label htmlFor="month">Month</label>
        <select
          id="month"
          name="month"
          placeholder="month"
          value={this.props.month}
          required
          onChange={userInput => {
            this.props.validateForm(this.props.month);
          }}
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
        <p>{this.props.error}</p>

        <label htmlFor="day">Day</label>
        <input
          type="number"
          min="1"
          max="31"
          id="day"
          name="day"
          placeholder="Day"
          value={this.props.day}
          required
          onChange={userInput => {
            this.props.validateForm(this.props.day);
          }}
        />
        <p>{this.props.error}</p>

        <button
          type="submit"
          onClick={userInput => {
            this.props.validateForm();
          }}
        >
          Get my Newspaper
        </button>
        <p className="error">Please fill in the missing fields!</p>
      </form>
    );
  }
}

export default Form

// onClick={(e) => {this.props.submitForm(e)}}
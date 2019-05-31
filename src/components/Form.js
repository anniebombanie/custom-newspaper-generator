import React, { Component } from 'react';

class Form extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      day: '',
      month: '',
      city: '',
      country: '',
    }
  }

  validateForm = (input) => {
    return {

    }
    const targetName = e.target.name;
    const targetVal = e.target.value; 

    if (input) != '' {
      //proceed
    } else {
      //show error
    }
  }

    handleChange = (e) => {
    //store values as variables to use later (so it's cleaner)
    //target name of element so we know which one is being changed and then grab its value at the same time
    const targetName = e.target.name; // month
    const targetVal = e.target.value; // 11

    this.setState({
      //set the state of whatever is being changed to the associated value
      [targetName]: targetVal,
    });
  };

  submitForm = e => {
    //prevent default behaviour of submit button
    e.preventDefault();
    
    //call API and dynamically insert month and name values from state
    axios({
      url: `http://numbersapi.com/${this.state.month}/${this.state.day}/date`,
      method: 'GET'
    }).then(response => {
      this.setState({
        historialFact: response.data,
        isLoading: false,
      })
    });
    
    //change showResult to true for conditional rendering
    this.setState({
      showForm: false,
      showResult: true,
    });
  };

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
          onChange={(e)=>{this.props.handleChange(e)}}
        />

        <legend>Where were you born?</legend>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter your City here"
          value={this.props.city}
          required
          onChange={(e)=>{this.props.handleChange(e)}}
        />
        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Enter your Country here"
          value={this.props.country}
          required
          onChange={(e)=>{this.props.handleChange(e)}}
        />

        <legend>When's your birthday?</legend>
        <label htmlFor="month">Month</label>
        <select
          id="month"
          name="month"
          placeholder="month"
          value={this.props.month}
          required
          onChange={(e)=>{this.props.handleChange(e)}}
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
          value={this.props.day}
          required
          onChange={(e)=>{this.props.handleChange(e)}}
        />
        <button type="submit" onClick={(e) => {this.props.submitForm(e)}}>
          Get my Newspaper
        </button>
      </form>
    );
  }
}

export default Form
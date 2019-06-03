import React, { Component } from 'react';

class Form extends Component {

  render() {
    return (
      <form action="" onSubmit={this.props.submitForm}>
        <label htmlFor="user-name">What's your full name?</label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="Enter your full name here"
          value={this.props.name}
          onChange={e => {
            this.props.handleChange(e);
          }}
        />
        {this.props.errors.name && (
          <div className="container-error">
            <p>Uh-oh! The apparatus needs your name to start!</p>
          </div>
        )}

        <legend>Where were you born?</legend>
        <label htmlFor="city">City</label>
        <input
          type="text"
          name="city"
          id="city"
          placeholder="Enter your City here"
          value={this.props.city}
          onChange={e => {
            this.props.handleChange(e);
          }}
        />
        {this.props.errors.city && (
          <div className="container-error">
            <p>Zounds! Please tell the apparatus your city of birth!</p>
          </div>
        )}

        <label htmlFor="country">Country</label>
        <input
          type="text"
          name="country"
          id="country"
          placeholder="Enter your Country here"
          value={this.props.country}
          onChange={e => {
            this.props.handleChange(e);
          }}
        />
        {this.props.errors.country && (
          <div className="container-error">
            <p>Uh-oh.. The apparatus requires your birth month to operate!</p>
          </div>
        )}

        <legend>When's your birthday?</legend>
        <label htmlFor="month">Month</label>
        <select
          id="month"
          name="month"
          placeholder="month"
          value={this.props.month}
          onChange={e => {
            this.props.handleChange(e);
          }}
        >
          <option value="">Month</option>
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
        {this.props.errors.month && (
          <div className="container-error">
            <p>Kindly input your country of birth to run the apparatus!</p>
          </div>
        )}

        <label htmlFor="day">Day</label>
        <input
          type="number"
          min="1"
          max="31"
          id="day"
          name="day"
          placeholder="Day"
          value={this.props.day}
          onChange={e => {
            this.props.handleChange(e);
          }}
        />
        {this.props.errors.day && (
          <div className="container-error">
            <p>Zounds! Your birth year is required to continue!</p>
          </div>
        )}

        <label htmlFor="year">Year</label>
        <input
          type="number"
          id="year"
          name="year"
          placeholder="Year"
          value={this.props.year}
          onChange={e => {
            this.props.handleChange(e);
          }}
        />
        {this.props.errors.year && (
          <div className="container-error">
            <p>Uh-oh! Please input your birth day to run the apparatus!</p>
          </div>
        )}

        <input type="submit" value="Get my Newspaper" />

        {Object.values(this.props.errors).some(err => err) && (
          <div className="container-error">
            <p>Zounds! The apparatus needs your missing inputs to run!</p>
          </div>
        )}
      </form>
    );
  }
}

export default Form
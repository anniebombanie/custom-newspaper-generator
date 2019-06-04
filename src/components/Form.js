import React, { Component } from 'react';

class Form extends Component {
  render() {
    return (
      <form action="" onSubmit={this.props.submitForm}>
        <div className="container-name">
          <legend>What's your full name?</legend>
          <div className="container-name-fields">
            <label htmlFor="user-name" className="visually-hidden">Full name</label>
            <input
              type="text"
              name="name"
              id="name"
              placeholder="Full name"
              value={this.props.name}
              tabIndex="1"
              onChange={e => {
                this.props.handleChange(e);
              }}
              onBlur={this.validateFormField}
            />
            {this.props.errors.name && (
              <div className="container-error">
                <p>Great zoots! The apparatus needs your name to start!</p>
              </div>
            )}
          </div>
        </div>

        <div className="container-birthplace">
          <legend>Where were you born?</legend>
          <div className="container-birthplace-fields">
            <div className="inputText">
              <label htmlFor="city" className="visually-hidden">City</label>
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                value={this.props.city}
                tabIndex="1"
                onChange={e => {
                  this.props.handleChange(e);
                }}
                onBlur={this.validateFormField}
              />
              {this.props.errors.city && (
                <div className="container-error">
                  <p>Zounds! Please tell the apparatus your city of birth!</p>
                </div>
              )}
            </div>

            <div className="inputText">
              <label htmlFor="country" className="visually-hidden">Country</label>
              <input
                type="text"
                name="country"
                id="country"
                placeholder="Country"
                value={this.props.country}
                tabIndex="1"
                onChange={e => {
                  this.props.handleChange(e);
                }}
                onBlur={this.validateFormField}
              />
              {this.props.errors.country && (
                <div className="container-error">
                  <p>Uh-oh.. The apparatus needs your country of birth to operate!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="container-DOB">
          <legend>When's your birthday?</legend>
          <div className="container-DOB-fields">
            <div className="selectMonth">
              <label htmlFor="month" className="visually-hidden">Month</label>
              <select
                id="month"
                name="month"
                placeholder="month"
                value={this.props.month}
                tabIndex="1"
                onChange={e => {
                  this.props.handleChange(e);
                }}
                onBlur={this.validateFormField}
              >
                <option value="" disabled>Month</option>
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
                  <p>Zounds! Your birth month is required to continue!</p>
                </div>
              )}
            </div>

            <div className="inputNum">
              <label htmlFor="day" className="visually-hidden">Day</label>
              <input
                type="number"
                min="1"
                max="31"
                id="day"
                name="day"
                placeholder="Day"
                value={this.props.day}
                tabIndex="1"
                onChange={e => {
                  this.props.handleChange(e);
                }}
                onBlur={this.validateFormField}
              />
              {this.props.errors.day && (
                <div className="container-error">
                  <p>Kindly input your birth day to operate the apparatus!</p>
                </div>
              )}
            </div>

            <div className="inputNum">
              <label htmlFor="year" className="visually-hidden">Year</label>
              <input
                type="number"
                id="year"
                name="year"
                placeholder="Year"
                value={this.props.year}
                tabIndex="1"
                onChange={e => {
                  this.props.handleChange(e);
                }}
                onBlur={this.validateFormField}
              />
              {this.props.errors.year && (
                <div className="container-error">
                  <p>Uh-oh! Please input your birth year to run the apparatus!</p>
                </div>
              )}
            </div>
          </div>
        </div>

        <input type="submit" value="Get my Newspaper" tabIndex="1" />
        {Object.values(this.props.errors).some(error => error) && (
          <div className="container-error">
            <p>Zounds! The apparatus requires your missing inputs to run!</p>
          </div>
        )}
      </form>
    );
  }
}

export default Form
import React, {Component, Fragment } from 'react';
import axios from 'axios';
import Form from './components/Form.js'
import Newspaper from './components/Newspaper.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: '',
      day: '',
      month: '',
      city: '',
      country: '',
      historialFact: '',
      newspaperName: ['Times', 'Tribute', 'Star', 'Daily', 'Post', 'Tribune', 'Mirror', 'News', 'Journal', 'Press', 'Chronicle', 'Courier', 'Reporter', 'Herald'],
      isLoading: true,
      showForm: true,
      showResult: false,
    };
  }

  handleChange = (e) => {
    // Store values as variables to use later (so it's cleaner)
    // Target name of element first so we know which one is being changed and then grab its value and set the name = value
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

  resetForm = () => {
    //reset all values to original empty state
    this.setState({
      userName: '',
      day: '',
      month: '',
      city: '',
      country: '',
      historialFact: '',
      newspaperName: ['Times', 'Tribute', 'Star', 'Daily', 'Post', 'Tribune', 'Mirror', 'News', 'Journal', 'Press', 'Chronicle', 'Courier', 'Reporter', 'Herald'],
      isLoading: true,
      showResult: false,
    });
  };

  render() {
    return (
      <Fragment>
        <h1>Custom Newspaper Generator</h1>
        <Form
          userName={this.state.userName}
          day={this.state.day}
          month={this.state.month}
          city={this.state.city}
          country={this.state.country}
          handleChange={this.handleChange}
          submitForm={this.submitForm}
          resetForm={this.resetForm}
        />

        {this.state.showResult && (
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

import React, {Component, Fragment } from 'react';
import axios from 'axios';
import Form from './components/Form.js'
import Newspaper from './components/Newspaper.js';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      historialFact: '',
      isLoading: true,
      showForm: true,
      showResult: false,
    };
  }
  
  getRandomItem = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
  }

  resetForm = () => {
    //reset all values to original empty state
    this.setState({
      userName: '',
      day: '',
      month: '',
      city: '',
      country: '',
      historialFact: '',
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
                getRandomItem={this.getRandomItem}
                newspaperTitle={this.state.newspaperTitle}
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

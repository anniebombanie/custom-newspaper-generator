import React, {Component, Fragment } from 'react';
import axios from 'axios';
import Form from './components/Form.js'
import Newspaper from './components/Newspaper.js';
import './styles/App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      day: "",
      month: "",
      year: "",
      city: "",
      country: "",
      historialFact: "",
      isLoading: true,
      // showForm: true,
      showResult: false,
      // error: '',
    };
  }

  handleChange = (e) => {
    //store values as variables to use later (so it's cleaner)
    //target name of element so we know which one is being changed and then grab its value at the same time
    const targetName = e.target.name;
    const targetVal = e.target.value;

    this.setState({
      //set the state of whatever is being changed to associated value
      [targetName]: targetVal
    });
  };

  // validateForm = (userInput) => {
  //   // get the value of each input
  //   // check if these values are what you want
  //   // if they ALL are, this.submitForm();
  //   // otherwise, showIndividualError()


  //   if (!this.error) {
  //     this.submitForm()
  //   } else {
  //     this.setState({
  //       error: "Please input your full name!"
  //     });
  //   }


    //=================================


    // !this.error
    //   ? this.submitForm()
    //   : (
    //     !this.state.userName
    //     ? this.setState ({
    //       error: 'Please input your full name!'
    //     })
    //     : '',

    //     !this.state.day
    //       ? this.setState({
    //         error: 'Please input a day!'
    //       })
    //       : '',

    //     !this.state.month
    //       ? this.setState({
    //         error: 'Please choose a month!'
    //       })
    //       : '',

    //     !this.state.city
    //       ? this.setState({
    //         error: 'Please input your city of birth!'
    //       })
    //       : '',

    //     !this.state.country
    //       ? this.setState({
    //         error: 'Please input your country of birth!'
    //       })
    //       : '',
    //   )
  // };
  

  submitForm = e => {
    //prevent default behaviour of submit button
    e.preventDefault();

    //call API and dynamically insert month/name values from state
    axios({
      url: `http://numbersapi.com/${this.state.month}/${this.state.day}/date`,
      method: "GET"
    }).then(response => {
      this.setState({
        historialFact: response.data,
        isLoading: false
      });
    });

    //change states for conditional rendering to display result
    this.setState({
      // showForm: false,
      showResult: true
    });
  };

  getRandomItem = arr => {
    //get the value of a random index
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
  };

  resetForm = () => {
    //reset all values
    this.setState({
      userName: "",
      day: "",
      month: "",
      city: "",
      country: "",
      historialFact: "",
      isLoading: true,
      showResult: false
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
          year={this.state.year}
          city={this.state.city}
          country={this.state.country}
          handleChange={this.handleChange}
          // validateForm={this.validateForm}
          // error={this.state.error}
          submitForm={this.submitForm}
          resetForm={this.resetForm}
        />

        {this.state.showResult && (
          <div className="newspaper">
            {this.state.isLoading ? (
              <p>Generating your custom newspaper...</p>
            ) : (
              <Newspaper
                name={this.state.userName}
                city={this.state.city}
                day={this.state.day}
                month={this.state.month}
                year={this.state.year}
                fact={this.state.historialFact}
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

import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header.js'
import Form from './components/Form.js'
import Newspaper from './components/Newspaper.js';
import './styles/App.css';


// Set of validator functions to return boolean
const validateText = text => {
  return !!text.trim().length;
}

const validateDay = day => {
  return false;
};

const validateMonth = month => {
//return result of testing rejex on string
  return false;
};

const validateYear = year => {
  //if userInout doesn't match regex, return false
  return /^\d{4}$/;
};

//mapping form fields to validator functions
const formValidators = {
  name: validateText,
  day: validateDay,
  month: validateMonth,
  year: validateYear,
  city: validateText,
  country: validateText,
};

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      day: "",
      month: "",
      year: "",
      city: "",
      country: "",
      historialFact: "",
      isLoading: true,
      showResult: false,
      errors: {}
    };
  }

  handleChange = (e) => {
    //store values as variables to use later (so it's cleaner)
    //target name of element so we know which one is being changed and then grab its value at the same time
    const targetName = e.target.name;
    const targetVal = e.target.value;

    //Getting validator function from map 
    const validator = formValidators[targetName];
    console.log('VALIDATING')
    this.setState({
      [targetName]: targetVal,
    });

    //after update field, validate the field and see if return false
    if (!validator(targetVal)) {
      //if false, set error form field to true
      this.setState({
        errors: {
          ...this.state.errors,
          [targetName]: true,
        }
      });
    }   
  };

  validateForm = (state) => {
    // get the value of each input
    // check if these values are what you want
    // if they ALL are, this.submitForm();
    // otherwise, showIndividualError()

    // return errors object for whole form
    return {
      name: !validateText(state.name),
      day: !validateDay(state.day),
      month: !validateMonth(state.month),
      year: !validateYear(state.year),
      city: !validateText(state.city),
      country: !validateText(state.country),
    };
  };
  

  submitForm = e => {
    //prevent default behaviour of submit button
    e.preventDefault();

    const resultFormValidation = this.validateForm(this.state);
    console.log(resultFormValidation);
    this.setState({ errors: resultFormValidation });
    // set state.errors to reflect results of validation

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
      name: "",
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
      <div className="wrapper">
        <div className="vignette"></div>
        <Header />
        <Form
          errors={this.state.errors}
          name={this.state.name}
          day={this.state.day}
          month={this.state.month}
          year={this.state.year}
          city={this.state.city}
          country={this.state.country}
          handleChange={this.handleChange}
          submitForm={this.submitForm}
          resetForm={this.resetForm}
        />

        {this.state.showResult && (
          <div>
            {this.state.isLoading ? (
              <p>Generating your custom newspaper...</p>
            ) : (
              <div>
                <Newspaper
                  name={this.state.name}
                  city={this.state.city}
                  day={this.state.day}
                  month={this.state.month}
                  year={this.state.year}
                  fact={this.state.historialFact}
                  country={this.state.country}
                  getRandomItem={this.getRandomItem}
                  newspaperTitle={this.state.newspaperTitle}
                />
                <button type="reset" onClick={this.resetForm}>
                  Another Newspaper
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;

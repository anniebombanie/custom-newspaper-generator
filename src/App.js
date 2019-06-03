import React, {Component} from 'react';
import axios from 'axios';
import Header from './components/Header.js'
import Form from './components/Form.js'
import Newspaper from './components/Newspaper.js';
import './styles/App.css';


//Set of validator functions to return 'true'
const validText = text => {
  //make sure user doesn't type empty spaces
  return !!text.trim().length;
}

const validDay = day => {
  //must input a number between 1-31
  if (typeof(Number(day)) === "number" && day >= 1 && day  <= 31) {
    return true;
  };
};

const validMonth = month => {
  //if month is selected, return true
  return month;
};

const validYear = year => {
  //if userInout doesn't match regex (4 digit number), return false
  const workingYear = /^\d{4}$/.test(year);
  return workingYear;
};

//Map form fields to validator functions
const formValidators = {
  name: validText,
  day: validDay,
  month: validMonth,
  year: validYear,
  city: validText,
  country: validText,
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
    //target name of element so we know which one is being changed and grab its value
    const targetName = e.target.name;
    const targetVal = e.target.value;
    //Getting validator function from map 
    const validator = formValidators[targetName];
    
    this.setState({
      [targetName]: targetVal,
    });

    //after field is updated, validate it and see if it returns false
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
    // return errors object for whole form
    return {
      name: !validText(state.name),
      day: !validDay(state.day),
      month: !validMonth(state.month),
      year: !validYear(state.year),
      city: !validText(state.city),
      country: !validText(state.country),
    };
  };
  

  submitForm = e => {
    //prevent default behaviour of submit button
    e.preventDefault();

    const resultValidateForm = this.validateForm(this.state);
    this.setState({
      //set state.errors to reflect results of validation
      errors: resultValidateForm
    });

    let valid = true

    Object.keys(resultValidateForm).forEach(error => {
      console.log(error);
      if (resultValidateForm[error] === true) {
        valid = false;
      }
    });

    if (valid) {
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
    }  
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
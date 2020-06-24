import React, { Component } from "react";
import axios from "axios";
import Header from "./components/Header.js";
import Intro from "./components/Intro.js";
import Form from "./components/Form.js";
import Newspaper from "./components/Newspaper.js";
import Footer from "./components/Footer.js";
import "./styles/App.css";


//SET OF VALIDATOR FUNCTIONS TO RETURN BOOLEAN (TRUE)
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
  //if userInput doesn't match regex (4 digit number), return false
  const workingYear = /^\d{4}$/.test(year);
  return workingYear;
};

//Map form fields to validator functions
const formFieldValidators = {
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
      // group field values
      // values: {
      //   name: "",
      //   day: "",
      //   month: "",
      //   year: "",
      //   city: "",
      //   country: "",
      // },
      name: "",
      day: "",
      month: "",
      year: "",
      city: "",
      country: "",
      historialFact: "",
      isLoading: true,
      showResult: false,
      errors: {},
    };
  }

  handleChange = e => {
    //target name of element so we know which one is being changed and grab its value
    this.setState({
      [e.target.name]: e.target.value,
      // values: {
      //   // SPREAD or it will over ride alllllll values.
      //   ...this.state.values,
      //   [e.target.name]: e.target.value,
      // }
    });
  };

  getRandomItem = arr => {
    //get the value of a random index
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomItem = arr[randomIndex];
    return randomItem;
  };

  validateFormField = e => {
    //get validator function from key-value object (MAP) (store as variable)
    const validator = formFieldValidators[e.target.name];

    //after field is updated, validate it and see if it returns false
    // if (!validator(e.target.value)) {
    //   //if false, set error form field to true
    //   this.setState({
    //     errors: {
    //       ...this.state.errors,
    //       //if it's value, set to false, if valid, set to true.
    //       [e.target.name]: true,
    //     },
    //   });
    // }

    //React makes synthnic events so after function ends, not garenteed to have access to target anymore. (might have changed) In function so async, we want to make sure we have access to the values at time of invocation. When original function is called.
    const value= e.target.value;
    const name= e.target.name;

     //if using state in setState, then it should be function because you're getting the most recent state at the time it's called because setState is sync and it's not called right away. BEST PRACTICE [So that state doesn't change in between - think radio buttons]
    this.setState((state) => ({
      errors: {
        ...state.errors,
        //if it's valid, set to false (don't show error), if not valid, set to true (opposite) BECAUSE to show an error
        [name]: !validator(value),
      }
    }));
  };

  // validateForm = state => {
  //   // return errors (boolean for fields) object for whole form
  //   return {
  //     name: !validText(state.name),
  //     day: !validDay(state.day),
  //     month: !validMonth(state.month),
  //     year: !validYear(state.year),
  //     city: !validText(state.city),
  //     country: !validText(state.country),
  //   };
  // };

  // submitForm = e => {
  //   //prevent default behaviour of submit button
  //   e.preventDefault();

  //   const resultValidateForm = this.validateForm(this.state);
  //   this.setState( {
  //     //set state.errors to reflect results of validation
  //     errors: resultValidateForm,
  //   });


  validateForm = () => {
    // return errors (boolean for fields) object for whole form (MIGHT NOT ACTUALLY NEED IT IF ONBLUR IS WORKING & FASTER) - ur duplicating stuff- if change up there, must add here. MAKING SURE ALL is up to date (resultValidateForm)

    //alternatively_ BETTER WAY: have the form validate onChange and have the errors show onBlur. What this means is that errors can disappear as soon as valid instead of when user goes out of field
    return {
      name: !validText(this.state.name),
      day: !validDay(this.state.day),
      month: !validMonth(this.state.month),
      year: !validYear(this.state.year),
      city: !validText(this.state.city),
      country: !validText(this.state.country),
    };
  };

  submitForm = e => {
    //prevent default behaviour of submit button
    e.preventDefault();

    const resultValidateForm = this.validateForm();
    this.setState( {
      //set state.errors to reflect results of validation
      errors: resultValidateForm,
    });

    //now we have an object with all fields, so checking if no errors. It's going to be TRUE unless one this is invalid
    // let valid = true;

    // Object.keys(resultValidateForm).forEach(error => {
    //   if (resultValidateForm[error] === true) {
    //     valid = false;
    //   }
    // });

    //have array of booleans and making sure all is false (every is a method that takes a function that returns a boolean). hasError = result of value of each field. If there is an error, we WANT valid = false. Above version without .every or .some will go through EVERY SINGLE THING so it's performance expensive/ .every & .some stops as soon as hits one
    const valid = Object.values(resultValidateForm).every(hasError => (!hasError));

    if (valid) {
      // call API and dynamically insert month/name values from state
     //will wait for everything u put in the [] which are all your different API
      Promise.all([
        axios({
          //use Proxy server to get past CORS
          method: "GET",
          url: "https://proxy.hackeryou.com",
          dataResponse: "json",
          params: {
            reqUrl: `http://numbersapi.com/${this.state.month}/${this.state.day}/date`,
            xmlToJSON: false,
            },
          }),
          // axios({})
      ]).then(([response]) => { //array destructuring (responses) {something like api1response & so on forth}
          this.setState({
            historialFact: response.data, //responses[0].data
            isLoading: false,
          });
        });

      // axios({
      // //use Proxy server to get past CORS
      // method: "GET",
      // url: "https://proxy.hackeryou.com",
      // dataResponse: "json",
      // params: {
      //   reqUrl: `http://numbersapi.com/${this.state.month}/${this.state.day}/date`,
      //   xmlToJSON: false,
      //   },
      // }).then(response => {
      //   this.setState({
      //     historialFact: response.data,
      //     isLoading: false,
      //   });
      // });

      //change states for conditional rendering to display result
      this.setState({
        // showForm: false,
        showResult: true,
      });
    }
  };

  resetForm = () => {
    // const values = {};
    // Object.keys(this.state.values).forEach(key => {values[key] = "")
    // this.setState ({values})

    //reset all values
    this.setState({
      // values: values,
      name: "",
      day: "",
      month: "",
      year: "",
      city: "",
      country: "",
      historialFact: "",
      isLoading: true,
      showResult: false,
    });
  };

  validYear = year => {
    //if userInput doesn't match regex (4 digit number), return false
    const workingYear = /^\d{4}$/.test(year);
    return workingYear;

    // return /^\d{4}$/.test(year);
  }

  render() {
    return (
      <div className="wrapper">
        <div className="vignette" />
        <Header />
        <div className="container-main">
          <Intro />
          {/* Avoid name collisions <Form>
            <Field validate={validDay}></Field>
          </Form> */}
          <Form
            //  if changed to object, pass as one object
            // values={this.state.values}
            name={this.state.name}
            day={this.state.day}
            month={this.state.month}
            year={this.state.year}
            city={this.state.city}
            country={this.state.country}

            errors={this.state.errors}

            handleChange={this.handleChange}
            validateFormField={this.validateFormField}
            submitForm={this.submitForm}
          />
          
        </div>

        {this.state.showResult && (
          <div className="result">
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
                <button type="reset" onClick={this.resetForm} tabIndex="1">
                  Get Another Newspaper
                </button>
              </div>
            )}
          </div>
        )}
        <Footer />
      </div>
    );
  }
}

export default App;
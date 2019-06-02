import React, { Component } from 'react';
import logo from './../assets/cog.svg';
import printingPress from './../assets/printingPress.png';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="containerLogo">
          <img
            src={logo}
            className="logoCog"
            alt="logo: rotating black cog with spanner cut-out in the middle and three lines on either side."
          />
        </div>
        <h1>The Absolutely Amazing Newspaper Apparatus!</h1>
        <p>Hear ye, hear ye!</p>
        <p>Have you ever dreamt of your very own customised newspaper? Well, good news: the age of the machine has made it possible!</p>
        <img src={printingPress} alt='' />
        <p>Fill in your details and our amazing apparatus will do the magic! Prepared to be awed and astounded!</p>
      </header>
    );
  }
}

export default Header
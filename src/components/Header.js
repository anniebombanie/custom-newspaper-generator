import React, { Component } from 'react';
import logo from './../assets/cog.svg';

class Header extends Component {

  render() {
    return (
      <header>
      <div className="logo-lines"></div>
        <img src={logo} className="logo-cog" alt="logo: black cog with spanner cut-out in the middle." />
        <h1>The Absolutely Amazing Newspaper Apparatus</h1>
        <p>Hear ye, hear ye! Have you ever dreamt of your very own customised newspaper? The age of the machine has made it possible! Fill in your details and our amazing apparatus will do the magic! Prepared to be awed and astounded!</p>
      </header>
    )
  }
}

export default Header
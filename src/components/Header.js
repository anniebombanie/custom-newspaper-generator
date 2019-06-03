import React, { Component } from 'react';
import logo from './../assets/cog.svg';

class Header extends Component {

  render() {
    return (
      <header>
        <div className="container-logo">
          <img
            src={logo}
            className="logo-cog"
            alt="logo: rotating black cog with spanner cut-out in the middle."
          />
        </div>
        <h1>The Absolutely Amazing Newspaper Apparatus!</h1>
        <div className="container-line">
          <div />
        </div>
      </header>
    );
  }
}

export default Header
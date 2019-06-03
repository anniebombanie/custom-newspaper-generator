import React, { Component } from 'react';
import logo from './../assets/cog.svg';
import printingPress from './../assets/printing-press.png';

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
        <div className="container-intro-content">
          <p className="hear-ye black italic">Hear ye, hear ye!</p>
          <div>
            <div className="container-txt">
              <p>
                Have you ever dreamt of your very own customised newspaper? Well, good news; the Age of the Machine has made it possible!
              </p>
            </div>
            <div className="container-img">
              <img
                src={printingPress}
                alt="illustration of vintage printing press."
              />
            </div>
            <div className="container-txt">
              <p>
                Fill in your details and our world's first amazing apparatus will do its magic! 
                <span className="bold uppercase">
                   Prepared to be awed and astounded!
                </span>
              </p>
            </div>
          </div>
        </div>
      </header>
    );
  }
}

export default Header
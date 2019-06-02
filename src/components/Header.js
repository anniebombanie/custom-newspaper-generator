import React, { Component } from 'react';
import logo from './../assets/cog.svg';
import printingPress from './../assets/printingPress.png';

class Header extends Component {

  render() {
    return (
      <header>
        <div className='containerLogo'>
          <img src={logo} className='logoCog' alt='logo: rotating black cog with spanner cut-out in the middle.' />
        </div>
        <h1>The Absolutely Amazing Newspaper Apparatus!</h1>
        <div className='containerLine'>
          <div></div>
        </div>
        <p className='black italic'>Hear ye, hear ye!</p>
        <p>Have you ever dreamt of your very own customised newspaper? Well, good news: the Age of the Machine has made it possible!</p>
        <img src={printingPress} alt='illustration of vintage printing press.' />
        <p>Fill in your details and our world's first amazing apparatus will do its magic! <span className='bold uppercase'>Prepared to be awed and astounded!</span></p>
      </header>
    );
  }
}

export default Header
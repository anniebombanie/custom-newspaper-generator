import React, { Component, Fragment } from 'react'

class Newspaper extends Component {
  render() {
    console.log(this.props);

    return (
      <Fragment>
        <h2>The {this.props.city} Times</h2>
        <h3>{this.props.country}'s no.1 Newspaper</h3>
        <div className='historicalFact'>
          <h4>Same Day, Another Year</h4>
          <p>{this.props.fact}</p>
        </div>
        <div className='baby'>
          <h4>World's Cutest Baby Born!</h4>
          <p>Scientists are astounded by the birth of {this.props.name}. "Cutest baby I've ever seen in my life!" gushes a besotted nurse. Parents are doing well.</p>
        </div>
      </Fragment>
    )
  }
}

export default Newspaper
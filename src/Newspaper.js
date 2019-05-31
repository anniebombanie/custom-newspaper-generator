import React, { Component, Fragment } from 'react'

class Newspaper extends Component {
  render() {
    console.log(this.props);

    return (
      <Fragment>
        <h1>The {this.props.city} Times</h1>
        <h3>{this.props.country}'s no.1 Newspaper</h3>
        <div className='historicalFact'>
          <h2>Same Day, Another Year</h2>
          <p>{this.props.fact}</p>
        </div>
        <div className='baby'>
          <h2>World's Cutest Baby Born!</h2>
          <p>Scientists are astounded by the birth of {this.props.name}. Parents are doing well.</p>
        </div>
      </Fragment>
    )
  }
}

export default Newspaper
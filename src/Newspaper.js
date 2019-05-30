import React, { Component, Fragment } from 'react'

class Newspaper extends Component {
  render() {

    return (
      <Fragment>
        {this.props.loading ? (
          <p>Generating your custom Newspaper...</p>
          ) : (
          <div>
            <h1>The Canadian Times</h1>
            <div className='historicalFact'>
              <h2>On this day, Another year</h2>
              <p>Historical Fact Here: {this.props.fact}</p>
            </div>
            <div className='baby'>
              <h2>World's Cutest Baby Born!</h2>
              <p>Scientists are astounded by the birth of {this.props.name}. Parents are doing well.</p>
            </div>
          </div>
          <button type='reset' onClick={this.props.resetForm}>Get Another Newspaper</button>
        )}
      </Fragment>
    )
  }
}

export default Newspaper
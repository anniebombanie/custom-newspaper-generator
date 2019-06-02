import React, {Component} from 'react';
import ad from './../assets/soothsayingAd.svg';

class Newspaper extends Component {
  constructor() {
    super();
    this.state = {
      newspaperTitle: ['Times', 'Tribute', 'Star', 'Daily', 'Post', 'Tribune', 'Mirror', 'News', 'Journal', 'Press', 'Chronicle', 'Courier', 'Reporter', 'Herald', 'Bulletin'],
    }
  }

  render() {
    return (
      <div className='newspaper'>
        <h2><span>The</span> {this.props.city} {this.props.getRandomItem(this.state.newspaperTitle)}</h2>
        <h3>{this.props.country}'s no.1 Newspaper</h3>
        <p>{this.props.day}, {this.props.month}, {this.props.year}</p>
        <div className='historicalFact'>
          <h4>Same Day, Another Year</h4>
          <p>{this.props.fact}</p>
        </div>
        <img src={ad} alt='vintage fortune telling ad.' />
        <div className='baby'>
          <h4>World's Cutest Baby Born!</h4>
          <p>Doctor's are astounded by the birth of {this.props.name}. "Cutest baby I've ever seen in my life!" gushes a besotted nurse. Parents are doing well.</p>
        </div>
      </div>
    )
  }
}

export default Newspaper
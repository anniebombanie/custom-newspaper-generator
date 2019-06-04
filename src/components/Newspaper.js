import React, {Component} from "react";
import ad from "./../assets/soothsaying-ad.svg";

class Newspaper extends Component {
  constructor() {
    super();
    this.state = {
      newspaperTitle: ["Times", "Tribute", "Star", "Daily", "Post", "Tribune", "Mirror", "News", "Journal", "Press", "Chronicle", "Courier", "Reporter", "Herald", "Bulletin"],
    }
  }

  render() {
    return (
      <div className="newspaper">
        <h2><span>The</span> {this.props.city} {this.props.getRandomItem(this.state.newspaperTitle)}</h2>
        <h3 className="uppercase">{this.props.country}’s no.1 Newspaper</h3>
        <div className="title-info-line">
          <p>{this.props.day}.{this.props.month}.{this.props.year}</p>
        </div>
        <div className="container-newspaper-content">
          <div className="container-txt">
            <h4>Same Day, Another Year</h4>
            <p>{this.props.fact}</p>
          </div>
          <div className="container-img">
            <img src={ad} alt="vintage fortune telling ad." />
          </div>
          <div className="container-txt">
            <h4>World’s Cutest Baby Born!</h4>
            <p>Doctors are astounded by the birth of {this.props.name}. <span className="italic">"Cutest baby I’ve ever seen in my life!"</span> gushes a besotted nurse. Parents are doing well.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Newspaper
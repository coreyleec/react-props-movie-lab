import React, { Component } from 'react';
import zero from '../assets/stars/0-stars.png'
import one from '../assets/stars/1-stars.png'
import two from '../assets/stars/2-stars.png'
import three from '../assets/stars/3-stars.png'
import four from '../assets/stars/4-stars.png'
import five from '../assets/stars/5-stars.png'

const imgMapper = {0: zero, 1: one, 2: two, 3: three, 4: four, 5: five}
// translates the numeric value of the sting variable attatched to asset location representing a star rating 
export default class CardBack extends Component {

  generateRatingElement = () => {
    if (this.props.IMDBRating !== null) { //if rating is strictly inequal to the absense of an object aka if the rating is present
			return <img src={imgMapper[this.props.IMDBRating]} alt=""/>; // return and image with a source
		}
		return <h4>No Rating Found</h4>;
	
    // implement meeeee! See the readme for instructions
    
  }



  
  render() {
    return (
      <div className="card-back">
        <h3 className="title">{this.props.title}</h3>
        <span />
        {this.generateRatingElement()} 
        <img className="rating"/>
        <span />
        <h5 className="genres">{this.props.genres.join(', ')}</h5>
      </div>
    )
  }
}

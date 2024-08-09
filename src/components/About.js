import React from "react";
import {Box, Button, Grid, GridItem, Image} from "@chakra-ui/react";
import "../styles/about.css";

import restaurant1 from '../assets/restaurantchefB.jpg';
import restaurant2 from '../assets/restaurant.jpg';

const About = () => {
  return (    
      <div className="about" >
        <div className="containerAbout" >        
          <div className="aboutText">
            <h1 className="titleBigAbout">Little Lemon</h1>
            <h2 className="subTitleAbout">Chicago</h2>
            <h6 className="textAbout">
              We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist. 
              Nestled in the heart of bustling Chicago, Little Lemon is where modern 
              flair meets cozy nostalgia. Our diverse, artisanal menu.
              Whether you're seeking a romantic dinner, a family meal, or a relaxed atmosphere with friends, Little Lemon is your ideal culinary destination. 
              Find us in the heart of Chicago for an unforgettable experience.
             </h6>
             </div>
          <div>
          <Image  className="aboutImg img2" src={restaurant2}  />
            <Image  className="aboutImg img1" src={restaurant1}  />
          </div>
        </div>
        
      </div>
    
  );
};
export default About;

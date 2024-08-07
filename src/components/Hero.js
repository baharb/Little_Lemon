import React from "react";
import {Box, Button, Grid, GridItem, Image} from "@chakra-ui/react";
import "../styles/Hero.css";

import restaurantImg from '../assets/restauranfood.jpg';

const Hero = () => {
  return (    
      <hero className="hero" >
        <div className="containerHero" >        
          <div className="heroText">
            <h1 className="titleBig">Little Lemon</h1>
            <h2 className="subTitle">Chicago</h2>
            <h6 className="text">We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist. </h6>
            <h6 className="button">
              Reserve a Table
            </h6>
          </div>
          <div>
            <Image  className="heroImg"
            src={restaurantImg} 
            
            />
          </div>
        </div>
        
      </hero>
    
  );
};
export default Hero;

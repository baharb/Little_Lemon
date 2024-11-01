import React from "react";
import {Box, Button, Grid, GridItem, Image} from "@chakra-ui/react";
import "../styles/Hero.css";

import restaurantImg from '../assets/restauranfood.jpg';

const Hero = () => {
  return (    
      <div className="hero" >
        <div className="containerHero" >        
          <div className="heroText">
            <h1 className="titleBig">Little Lemon</h1>
            <h2 className="subTitle">Chicago</h2>
            <h6 className="text">We are a family owned mediterranean restaurant, focused on traditional recipes served with a modern twist. </h6>
            <h6 className="button">
              <a href="/booking">Reserve a Table</a>
            </h6>
          </div>
          <div>
            <Image  className="heroImg"
            src={restaurantImg} 
            
            />
          </div>
        </div>
        
      </div>
    
  );
};
export default Hero;

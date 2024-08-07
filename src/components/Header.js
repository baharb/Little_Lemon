import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import { Box, Grid, GridItem, Image, Center } from "@chakra-ui/react";
import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import logoImage from '../assets/Logo.svg';
import "../styles/Header.css";

const Header = () => {
  // const headerRef = useRef(null);

  
  return (
      <>
          <nav className="container">
            <ul>
                <li ><Image src={logoImage} /></li>
                <li ><Link to="/" className="nav-item">Homepage</Link></li>
                <li ><Link to="/about" className="nav-item">About</Link></li>
                <li ><Link to="/highlights" className="nav-item">Menu</Link></li>
                <li ><Link to="/booking" className="nav-item">Reservations</Link></li>
                <li ><Link to="/highlights" className="nav-item">Order Online</Link></li>
                <li ><Link to="/highlights" className="nav-item">Login</Link></li>
            </ul>
	        </nav>
          
          </>
  );
};

export default Header;

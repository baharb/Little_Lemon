import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";
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
                <li className={({ isActive }) => (isActive ? 'active' : '')}>
                  <Image src={logoImage} />
                </li>
                <li className={({ isActive }) => (isActive ? 'active' : '')}>
                <NavLink to="/" >Homepage</NavLink></li>
                <li className={({ isActive }) => (isActive ? 'active' : '')}>
                <a href="#about">About</a></li>
                <li className={({ isActive }) => (isActive ? 'active' : '')}>
                <a href="#highlight">Menu</a></li>
                <li className={({ isActive }) => (isActive ? 'active' : '')}>
                <NavLink to="/booking" >Reservations</NavLink></li>
                <li className="none">
                <a href="#">Order Online</a></li>
                <li>
                <a href="#">Login</a></li>
            </ul>
	        </nav>
          
          </>
  );
};

export default Header;

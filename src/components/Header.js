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
    <Center
      position="fixed"
      top={0}
      left={0}
      right={0}
      backgroundColor="#fff"
      maxWidth="850px" margin="0 auto"  height={"20%"}
      className="headerCenter"
    >
          <nav>
            <Grid gap="5" templateColumns='repeat(8, 1fr)' templateRows='repeat(1, 1fr)'>
                <GridItem className="gridItem" colSpan={2}><Image src={logoImage} /></GridItem>
                <GridItem className="gridItem" colSpan={1}><Link to="/" className="nav-item">Homepage</Link></GridItem>
                <GridItem colSpan={1}><Link to="/about" className="nav-item">About</Link></GridItem>
                <GridItem colSpan={1}><Link to="/highlights" className="nav-item">Contact</Link></GridItem>
                <GridItem colSpan={1}><Link to="/highlights" className="nav-item">Contact</Link></GridItem>
                <GridItem colSpan={1}><Link to="/highlights" className="nav-item">Contact</Link></GridItem>
                <GridItem colSpan={1}><Link to="/highlights" className="nav-item">Contact</Link></GridItem>
            </Grid>
	        </nav>
          <Routes> 
            <Route path="/" element={""}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/highlights" element={<Highlights />}></Route>
          </Routes>
    </Center>
  );
};

export default Header;

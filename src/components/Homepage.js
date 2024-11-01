import '../App.css';
import { ChakraProvider, Grid, Box, GridItem } from "@chakra-ui/react";
import Header from "./Header";
import About from "./About";
import Hero from "./Hero";
import Highlights from "./Highlights";
import Testimonials from "./Testimonials";
// import About from "./components/About";
import Footer from "./Footer";

function Homepage() {
  return (
    <ChakraProvider>
        <main>
       
        <Grid
          templateAreas={`"header"
                          "hero"
                          "highlights"
                          "testimonials"
                          "about"
                          "footer"`}
          
          gridTemplateColumns={'repeat(1,1fr)'}
          gap='1'
          minHeight="100vh"
          
        >
          <GridItem  id="header">
            <Header />
          </GridItem> 
          <GridItem  id="hero">
            <Hero />
          </GridItem> 
          <GridItem  id="highlight">
            <Highlights />
          </GridItem> 
          <GridItem  id="testimonial">
            <Testimonials />
          </GridItem> 
          <GridItem id="about">
            <About />
          </GridItem>
          <GridItem  id="footer">
            <Footer />
          </GridItem>          
        </Grid>
        </main>
    </ChakraProvider>

  );
}

export default Homepage;

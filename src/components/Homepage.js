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
          <GridItem area={'header'}>
            <Header />
          </GridItem> 
          <GridItem area={'hero'}>
            <Hero />
          </GridItem> 
          <GridItem area={'highlights'}>
            <Highlights />
          </GridItem> 
          <GridItem area={'testimonials'}>
            <Testimonials />
          </GridItem> 
          <GridItem area={'about'}>
            <About />
          </GridItem>
          <GridItem  area={'footer'}>
            <Footer />
          </GridItem>          
        </Grid>
        </main>
    </ChakraProvider>

  );
}

export default Homepage;

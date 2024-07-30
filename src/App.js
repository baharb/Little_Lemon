import './App.css';
import { ChakraProvider, Grid, Box, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
// import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
        <main>
        <Grid
          templateAreas={`"header"
                          "footer"`}
          gridTemplateRows={'20% 80%'}
          gridTemplateColumns={'repeat(1,1fr)'}
          gap='1'
          minHeight="100vh"
        >
          <GridItem area={'header'}>
          <Header />
          </GridItem>
          <GridItem  area={'footer'}>
          <Footer />
          </GridItem>          
        </Grid>
        </main>
    </ChakraProvider>

  );
}

export default App;

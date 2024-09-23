import './App.css';
import { ChakraProvider, Grid, Box, GridItem } from "@chakra-ui/react";
import Header from "./components/Header";
import { Routes, Route, Link } from "react-router-dom";
import About from "./components/About";
import Homepage from "./components/Homepage";
import Highlights from "./components/Highlights";
import BookingPage from "./components/BookingPage";
import ConfirmedBooking from "./components/ConfirmedBooking";
import Testimonials from "./components/Testimonials";
// import About from "./components/About";
import Footer from "./components/Footer";

function App() {
  return (
    <ChakraProvider>
        <main>
        <Routes> 
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/about" element={<About />}></Route>
            <Route path="/highlights" element={<Highlights />}></Route>
            <Route path="/booking" element={<BookingPage />}></Route>
            <Route path="/confirmedBooking" element={<ConfirmedBooking />}></Route> 
        </Routes>
       </main>
    </ChakraProvider>

  );
}

export default App;

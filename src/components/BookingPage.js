import React, { useEffect } from "react";
import {Box, Grid, GridItem} from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";
// import fetchAPI from api;

const BookingPage = () => {

  const initialState = {
    availableTimes: [17,18,19,20,21],
    selectedDate: null,
 }


  const [availableTimes, setAvailableTimes] = useState(initialState);

  const selectedDate = "";
  const [isFormSubmitted, setIsFormSubmitted] = useState(false)

  // function fetchAPI(date) {
  //   console.log("dateee:"+date)
  //   const apiUrl = `https://raw.githubusercontent.com/courseraap/capstone/main/api.js?date=${date}`;
  
  //   return fetch(apiUrl)
  //     .then((response) => {
  //       console.log(response)
  //       response.json()})
  //     .then((data) => {
  //       console.log("timessss: "+data)
  //       return data.availableTimes;
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching available times:", error);
  //       throw error;
  //     });
  // }

  function updateTimes (selectedDate) {    
    if(selectedDate != ""){
      const today = new Date(selectedDate);

      fetchAPI(selectedDate)
        .then((availableTimes) => {
          console.log("availableTi: " + availableTimes)
          // Update the booking form with the available times
          const timeSelect = document.getElementById("resTime");
          console.log(timeSelect)
          timeSelect.innerHTML = "";
          // availableTimes = availableTimes
          availableTimes.forEach((time) => {
            const option = document.createElement("option");
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
            return availableTimes
          });
        })
        .catch((error) => {
          console.error("Error fetching available times:", error);
        });
        
        }
  }

  const reducer = (state, action) => {
    console.log("reducer: "+action.type+"-"+action.payload)
    switch(action.type){
      case "UPDATE_TIMES":
        return updateTimes(action.payload);
      default:
        return state;
    }
  }

  const [state, dispatchDate] = useReducer(reducer,availableTimes);
  
  const handleSumbit = (e) => {
    e.preventDefault();
    setIsFormSubmitted(true)
  }
  return (
    <Box>
      <BookingForm 
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        dispatchDate={dispatchDate} 
        handleDateChange = {(selectedDate) => dispatchDate({type: "UPDATE_TIMES", payload: selectedDate})}
        state={state}
        onFormSubmit={handleSumbit} />
    </Box>
  );
};
export default BookingPage;

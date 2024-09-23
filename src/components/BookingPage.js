import React, { useEffect } from "react";
import {Box, Grid, GridItem} from "@chakra-ui/react";
import BookingForm from "./BookingForm";
import { useReducer, useState } from "react";
import {fetchAPI, submitAPI} from "../api";
import { useNavigate } from 'react-router-dom';

const BookingPage = () => {
  const navigate = useNavigate();
  const initializeTimes = ["17:00", "18:00", "19:00", "20:00", "21:00", "22:00"];

  const updateTimesF = (state, action) => {
    console.log(action.payload + "----"+ action.payload)
    return fetchAPI(new Date(action.payload));
  }

  const [state, dispatch] = useReducer(updateTimesF,initializeTimes);
  
  const dispatchDate = (selectedDate) => {
    dispatch({ type: 'UPDATE_SELECTED_DATE', payload: selectedDate });
  };

  const submitForm = (values) => {
    // e.preventDefault();
    submitAPI(values);
    console.log("trueeeee")
    navigate("/confirmedBooking")
    // setIsFormSubmitted(true)
  }
  
  return (
    <Box>
      <BookingForm state={state} 
      dispatchDate={dispatchDate}
      submitForm={submitForm} />
      {/* <BookingForm 
        availableTimes={availableTimes}
        setAvailableTimes={setAvailableTimes}
        dispatchDate={dispatchDate} 
        handleDateChange = {(selectedDate) => dispatchDate({type: "UPDATE_TIMES", payload: selectedDate})}
        state={state}
        resDate={selectedDate}
        onFormSubmit={handleSumbit} />*/}
    </Box> 
  );
};
export default BookingPage;
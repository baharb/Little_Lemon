import React, { useState } from "react";
import "../styles/booking.css";
import { useFormik, Form, Field, ErrorMessage } from "formik";
import * as Yup from 'yup';
import {
  FormErrorMessage,
  FormControl,
  FormLabel,
  Input
} from "@chakra-ui/react";

const BookingForm = (
    { 
      dispatchDate,
      state,
      submitForm,
    }) => {
  
  const formik = useFormik({
    initialValues: {
      name: "",
      resDate: "",
      resTime: "17:00",
      occasion: "Birthday",
      guests: 1
    },
    onSubmit: (values) => {
      submitForm(values);      
    },
    validationSchema: Yup.object().shape({
      resDate: Yup.string().required('Reservation Date is required'),
      guests: Yup.number().min(1).max(10).required("Guests' number is required"),
      name: Yup.string().required("Name is required"),
      // Add more fields and validation rules as needed
    }),
  });


  const handleDateSelection = (event) =>{
    const selectedDate = event.target.value;
    // resDate = selectedDate
    // console.log(event.target.value);
    //   formik.values.resDate+"-"+formik.values.resTime
    // )
    formik.handleChange(event);
    
    dispatchDate(selectedDate)
  }

  return (
    <div className="bookingForm">
      <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
        <fieldset>
        <h2 className="subTitle">Book Now</h2>
          <div className="field">
          <FormControl isInvalid={formik.errors.name && formik.touched.name}>

            <FormLabel htmlFor="name">First name & Last name</FormLabel>
            <Input 
              id="name" 
              name="name"
              data-testid="name"
              type="input" 
              onChange={formik.handleChange}              
              onBlur={formik.handleBlur}               
              // {...formik.getFieldProps("resDate")}
              aria-label="Enter your name"
              required
              />      
              <FormErrorMessage>
                  {(formik.errors.name && formik.touched.name) ?
                    (
                      formik.errors.name
                    ) : ""}
              </FormErrorMessage>
            </FormControl>
          </div>
          <div className="field">
          <FormControl isInvalid={formik.errors.resDate && formik.touched.resDate}>

            <FormLabel htmlFor="resDate">Choose date</FormLabel>
            <Input 
              id="resDate" 
              name="resDate"
              data-testid="resDate"
              type="date" 
              onChange={handleDateSelection}              
              onBlur={formik.handleBlur} 
              
              aria-label="Enter your reservation date"              
              // {...formik.getFieldProps("resDate")}
              required
              />      
              <FormErrorMessage>
                  {(formik.errors.resDate && formik.touched.resDate) ?
                    (
                      formik.errors.resDate
                    ) : ""}
              </FormErrorMessage>
            </FormControl>
          </div>
          
          <div className="field">
          <FormControl isInvalid={formik.errors.resTime && formik.touched.resTime}>

            <FormLabel htmlFor="resTime" {...formik.getFieldProps("resTime")}>Choose time</FormLabel>
            <select 
              id="resTime"  
              name="resTime" 
              data-testid="resTime"
              onChange={formik.handleChange}              
              onBlur={formik.handleBlur}
              value={formik.values.resTime}
              aria-label="Enter your reservation time"
              required>
                 {state && state.map(time => (<option key={time}>{time}</option>))}
            </select>
           
           
    
            <FormErrorMessage>
                  {(formik.errors.resTime && formik.touched.resTime) ?
                    (
                      formik.errors.resTime
                    ) : ""}
            </FormErrorMessage>
            </FormControl>
          </div>
      
          <div className="field">
          <FormControl isInvalid={formik.errors.guests && formik.touched.guests}>

            <FormLabel htmlFor="guests">Number of guests</FormLabel>
            <Input type="number" 
              name="guests"
              placeholder="1" 
              min="1" 
              max="10" 
              id="guests" 
              value={formik.values.guests}
              aria-label="Enter your number of guests"
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              required/>
               <FormErrorMessage>
                  {(formik.errors.guests && formik.touched.guests) ?
                    (
                      formik.errors.guests
                    ) : ""}
            </FormErrorMessage>
              </FormControl>
          </div>

          <div className="field">
          <FormControl isInvalid={formik.errors.occasion && formik.touched.occasion}>

            <FormLabel htmlFor="occasion">Occasion</FormLabel>
            <select id="occasion" 
             name="occasion"
             value={formik.values.occasion}
              onChange={formik.handleChange}              
              onBlur={formik.handleBlur}              
              aria-label="Select your occasion"
              >
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
            <FormErrorMessage>
                  {(formik.errors.occasion && formik.touched.occasion) ?
                    (
                      formik.errors.occasion
                    ) : ""}
            </FormErrorMessage>
            </FormControl>
          </div>

          <div className="field buttonField">
            <button type="submit" id="submit" className="button"
            
            aria-label="Submit your reservation" 
            disabled={!(formik.values.resDate && 
                        formik.values.resTime && 
                        formik.values.guests && 
                        formik.values.occasion &&
                        !formik.errors.guests)}>
              Make Your reservation
              </button>
          </div>
        </fieldset>
      </form>
    </div>



  );
};
export default BookingForm;

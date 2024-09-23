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
      availableTimes,
      setAvailableTimes,
      dispatchDate,
      state,
      submitForm,
      isFormSubmitted,
    }) => {

  // const [formValues, setFormValues] = useState({
  //   resDate: resDate !== "" ? resDate: "",
  //   resTime: "",
  //   guests: 1,
  //   occasion: "Birthday",
  //   disabled: true,
  // });
  
  const formik = useFormik({
    initialValues: {
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
      // Add more fields and validation rules as needed
    }),
  });




  // const handleOnChange = (e) =>{     
  //   setFormValues({
  //     ...formValues,
  //     [e.target.name]: e.target.value,
  //     // disabled: (formValues.guests >= 1 && formValues.resTime != "")
  //   });
  //   console.log([e.target.name]+"-"+ e.target.value)
  //   console.log((formValues.guests >= 1) +"---"+(formValues.resTime))
  // }

  const handleDateSelection = (event) =>{
    const selectedDate = event.target.value;
    // resDate = selectedDate
    console.log("dateeee:"+formik.values.guests +"-"+formik.values.occasion+"-"+
      formik.values.resDate+"-"+formik.values.resTime
    )
    formik.handleChange(event);
    
    dispatchDate(selectedDate)
  }

  // const handleDateChange = (event) => {
  //   const newDate = event.target.value;
  //   formik.handleChange(event); // Call Formik's handleChange method to update the form field value
  //   updateTimes(newDate);
  // };

  return (
    <div className="bookingForm">
      <form onSubmit={(e) => { e.preventDefault(); formik.handleSubmit(e)}}>
        <fieldset>
        <h2 className="subTitle">Book Now</h2>
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

import React, { useState } from "react";
import "../styles/booking.css";

const BookingForm = (
    { 
      availableTimes,
      setAvailableTimes,
      dispatchDate,
      state,
      handleDateChange,
      onFormSubmit,
      isFormSubmitted,
    }) => {

  const [formValues, setFormValues] = useState({
    resDate: "",
    guests: 1,
    occasion: "Birthday",
  });
 

  const handleOnChange = (e) =>{     
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    });
  }

  const handleDateSelection = (event) =>{
    const selectedDate = event.target.value;
    console.log("dateeee:"+event.target.value)
    handleDateChange(selectedDate)
  }

  return (
    <div className="bookingForm">
      <form onSubmit={onFormSubmit}>
        <fieldset>
        <h2 className="subTitle">Book Now</h2>
          <div className="field">
            <label htmlFor="resDate">Choose date</label>
            <input id="resDate" 
              data-testid="resDate"  
              name="resDate" 
              type="date" onChange={handleDateSelection} />           
          </div>
      
          <div className="field">
            <label htmlFor="resTime">Choose time</label>
            <select id="resTime"  
              name="resTime" 
              data-testid="resTime"
              onChange={handleOnChange}
              value={formValues.resTime}>
             
              
            </select>           
          </div>
      
          <div className="field">
            <label htmlFor="guests">Number of guests</label>
            <input type="number" 
              name="number"
              placeholder="1" 
              min="1" 
              max="10" 
              id="guests" 
              value={formValues.guests}
              onChange={handleOnChange}/>
          </div>

          <div className="field">
            <label htmlFor="occasion">Occasion</label>
            <select id="occasion" 
             name="occasion"
             value={formValues.occasion}
              onChange={handleOnChange}>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
            </select>
          </div>

          <div className="field buttonField">
            <button type="submit" data-testId="submit" id="submit" className="button">Make Your reservation</button>
          </div>
        </fieldset>
      </form>
    </div>



  );
};
export default BookingForm;

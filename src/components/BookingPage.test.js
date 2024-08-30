import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';

test('Booking page test: ', () => {

    render(<BookingPage  />);
    const date = screen.getByTestId("resDate"); 
    fireEvent.change(date, { target: { value: "2023-06-12" } });
    const timeOptions = screen.getByTestId('resTime');
    expect(timeOptions.length).toBeGreaterThanOrEqual(1);
   
    const btn = screen.getByTestId("submit");
    fireEvent.click(btn);
    
})
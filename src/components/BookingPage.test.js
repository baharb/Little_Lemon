import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import BookingPage from './BookingPage';
import { MemoryRouter } from 'react-router-dom';

test('Booking page test: ', () => {
    render(
        <MemoryRouter>
            <BookingPage  />
        </MemoryRouter>
    );
    // const date = screen.getByTestId("resDate"); 
    // fireEvent.change(date, { target: { value: "2023-06-12" } });
    // const timeOptions = screen.getByTestId('resTime');
    // expect(timeOptions.length).toBeGreaterThanOrEqual(1);
   
    const btn = screen.getByTestId("submit");
    fireEvent.click(btn);
    
})
import React from "react";
import { render, screen } from "@testing-library/react";
import BookingForm from './BookingForm';

test('Renders the BookingForm heading', () => {
    const mockOnFormSubmit = jest.fn()
    const availableTimes = [12,13,14,15,16,17];
    render(<BookingForm 
      availableTimes={availableTimes}
      selectedDate={""}
      onFormSubmit={mockOnFormSubmit}
    />);
    const headingElement = screen.getByText("Choose date");
    expect(headingElement).toBeInTheDocument();
})
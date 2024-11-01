import React, {act} from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useFormik } from 'formik';
import { MemoryRouter } from 'react-router-dom';
import BookingForm from './BookingForm';
import BookingPage from './BookingPage';


test('should handle form field changes', () => {
  const handleDateSelection = jest.fn();
  const dispatchDate = jest.fn();
  const { getByLabelText } = render(
    <MemoryRouter>
      <BookingFormTest dispatchDate={dispatchDate} />
    </MemoryRouter>);
  

  const nameInput = getByLabelText('First name & Last name'); // Replace 'Name' with the label text of your form field
  const date = getByLabelText('Choose date');
  const time = getByLabelText('Choose time');
  const occasion = getByLabelText('Occasion');
  const guests = getByLabelText('Number of guests');

  act(() => {
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(occasion, { target: { value: 'Anniversary' } });
    fireEvent.change(guests, { target: { value: '3' } });
    // fireEvent.change(date, { target: { value: '2024-10-13' } });
    // fireEvent.change(time, { target: { value: '17:00' } });
  })
  
  // expect(handleDateSelection).toHaveBeenCalled();
  // expect(dispatchDate).toHaveBeenCalled();
  expect(nameInput.value).toBe('John Doe');
  expect(occasion.value).toBe('Anniversary');
  expect(guests.value).toBe('3');
  // expect(time.value).toBe("17:00");
});

const BookingFormTest = (dispatchDate) => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return (
    <BookingForm handleChange={formik.handleChange} dispatchDate={dispatchDate} />
  );
};
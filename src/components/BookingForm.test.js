import React, {act} from 'react';
import { render, fireEvent } from '@testing-library/react';
import { useFormik } from 'formik';

import BookingForm from './BookingForm';
import { dispatchDate } from './BookingPage';


test('should handle form field changes', () => {
  const { getByLabelText } = render(<BookingFormTest />);
  const handleDateSelection = jest.fn();
  const dispatchDate = jest.fn();

  const nameInput = getByLabelText('First name & Last name'); // Replace 'Name' with the label text of your form field
  const date = getByLabelText('Choose date');
  const time = getByLabelText('Choose time');

  act(() => {
    fireEvent.change(nameInput, { target: { value: 'John Doe' } });
    fireEvent.change(date, { target: { value: '2024-10-13' } });
    fireEvent.change(time, { target: { value: '17:00' } });
  })
  
  // expect(handleDateSelection).toHaveBeenCalled();
  // expect(dispatchDate).toHaveBeenCalled();
  expect(nameInput.value).toBe('John Doe');
  // expect(time.value).toBe("17:00");
});

const BookingFormTest = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return (
    <BookingForm handleChange={formik.handleChange} dispatchDate={dispatchDate} />
  );
};
import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/booking.css'

export default function ConfirmedBooking() {
  return (
    <>
      <main className='bookingForm'>
        <p className='subTitle'>Congratulations!</p>
        <p className='text'>You have successfully booked a spot at Little Lemon Restuarant.</p>
        <div className='field buttonField'>
        <button className='button'><Link to="/">Go Back Home</Link></button>
        </div>
      </main>
    </>
  )
}
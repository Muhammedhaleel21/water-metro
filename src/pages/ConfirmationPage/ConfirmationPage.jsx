import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import './ConfirmationPage.css'
import { useLocation } from 'react-router-dom'

function ConfirmationPage() {

    const location = useLocation()
    const { bookingData, route } = location.state || {}

  return (
    <>
        <Navbar />

        <div className="confirmation-container">
            <h1 className="confirmation-title">Confirm Your Booking</h1>

            <div className="booking-details">
                <div className="detail-card">
                    <h3>Route</h3>
                    <p>{route}</p>
                </div>

                <div className="detail-card">
                    <h3>Date & Time</h3>
                    <p>{bookingData?.date} at {bookingData?.time}</p>
                </div>

                <div className="detail-card">
                    <h3>Passengers</h3>
                    <p>{bookingData?.adults} Adults, {bookingData?.children} Children</p>
                </div>

                <div className="detail-card">
                    <h3>Total Amount</h3>
                    <p className="amount">₹{(bookingData?.adults * 50) + (bookingData?.children * 25)}</p>
                </div>
            </div>

            <button className="print-ticket-btn">
                Print Ticket
            </button>
        </div>

        <Footer/>
    </>
  )
}

export default ConfirmationPage
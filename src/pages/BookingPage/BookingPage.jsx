import React, {useState} from 'react'
import { useLocation, useNavigate, } from 'react-router-dom'
import './BookingPage.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function BookingPage() {

    const location = useLocation();
    const navigate = useNavigate();
    const selectedRoute = location.state?.route || "Selected Route"

    const [formData, setFormData] = useState({
    source: '',
    destination: '',
    date: '',
    adults: 1,
    children: 0,
    payment: 'card'
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

   const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/confirm', { state: { bookingData: formData, route: selectedRoute } })
  }

  return (
    <>
        <Navbar />

        <div className="booking-container">
            <h1 className="booking-title">Book Your Journey</h1>

            <form className="booking-form" onSubmit={handleSubmit}>
                 <div className="form-row">

                    <div className="form-group">
                        <label>Source Terminal</label>
                        <select name="source" value={formData.source} onChange={handleChange} required>
                          <option value="">Select Source</option>
                          <option value="Vytilla">Vytilla</option>
                          <option value="Fort Kochi">Fort Kochi</option>
                          <option value="Kakkanad">Kakkanad</option>
                          <option value="Vypin">Vypin</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Destination Terminal</label>
                        <select name="destination" value={formData.destination} onChange={handleChange} required>
                          <option value="">Select Destination</option>
                          <option value="Vytilla">Vytilla</option>
                          <option value="Fort Kochi">Fort Kochi</option>
                          <option value="Kakkanad">Kakkanad</option>
                          <option value="Vypin">Vypin</option>
                        </select>
                    </div>
                 </div>

                 <div className="form-row">
                    <div className="form-group">
                        <label>Date</label>
                        <input 
                          type="date" 
                          name="date" 
                          value={formData.date} 
                          onChange={handleChange} 
                          required 
                        />
                    </div>

                    <div className="form-group">
                        <label>Time</label>
                        <input 
                          type="time" 
                          name="time" 
                          value={formData.time} 
                          onChange={handleChange} 
                          required 
                        />
                    </div>
                 </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Adults</label>
                        <select name="adults" value={formData.adults} onChange={handleChange}>
                          <option value={1}>1 Adult</option>
                          <option value={2}>2 Adults</option>
                          <option value={3}>3 Adults</option>
                          <option value={4}>4 Adults</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Children</label>
                        <select name="children" value={formData.children} onChange={handleChange}>
                          <option value={0}>0 Children</option>
                          <option value={1}>1 Child</option>
                          <option value={2}>2 Children</option>
                          <option value={3}>3 Children</option>
                        </select>
                    </div>
                </div>

                <div className="form-group">
                    <label>Payment Method</label>
                    <select name="payment" value={formData.payment} onChange={handleChange}>
                      <option value="card">Credit/Debit Card</option>
                      <option value="upi">UPI</option>
                      <option value="wallet">Digital Wallet</option>
                    </select>
                </div>

                <div className="price-summary">
                    <h3>Price Summary</h3>
                    <p>Adults (₹50 each): ₹{formData.adults * 50}</p>
                    <p>Children (₹25 each): ₹{formData.children * 25}</p>
                    <p className="total">Total: ₹{(formData.adults * 50) + (formData.children * 25)}</p>
                </div>

                <button type="submit" className="confirm-pay-btn">
                    Confirm & Pay
                </button>

            </form>
        </div>

        <Footer />
    </>
  )
}

export default BookingPage
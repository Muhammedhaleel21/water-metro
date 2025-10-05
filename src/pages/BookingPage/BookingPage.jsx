import React, {useState} from 'react'
import { useLocation, useNavigate, } from 'react-router-dom'
import './BookingPage.css'
import Navbar from '../../components/Navbar/Navbar';
import Footer from '../../components/Footer/Footer';

function BookingPage() {

    const location = useLocation();
    const navigate = useNavigate();

    const routeData = location.state || {}
    const selectedRoute = routeData.route || "Select Route"
    const autoSource = routeData.source || ""
    const autoDestination = routeData.destination || ""


    const getTodayDate = () => {
      const today = new Date()
      const day = String(today.getDate()).padStart(2, '0')
      const month = String(today.getMonth() + 1).padStart(2, '0') // Months are 0-based
      const year = today.getFullYear()
      return `${day}-${month}-${year}`
    }

    const formatDateForInput = (dateString) => {
      if (!dateString) return ''
      const [day, month, year] = dateString.split('-')
      return `${year}-${month}-${day}`
    }

    const formatDateFromInput = (dateString) => {
      if (!dateString) return ''
      const [year, month, day] = dateString.split('-')
      return `${day}-${month}-${year}`
    }



    const scheduledTimes = [
      "06:00", "07:30", "09:00", "10:30", 
      "12:00", "13:30", "15:00", "16:30", "18:00", "19:30"
    ]

    const [formData, setFormData] = useState({
    source: autoSource,
    destination: autoDestination, 
    date: getTodayDate(),
    time: scheduledTimes[0],
    adults: 1,
    children: 0,
    payment: 'card'
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    
    if (name === 'date') {
      setFormData({
        ...formData,
        [name]: formatDateFromInput(value)
      })
    } else {
      setFormData({
        ...formData,
        [name]: value
      })
    }
  }

   const handleSubmit = (e) => {
    e.preventDefault()
    navigate('/confirm', { 
      state: { 
        bookingData: formData, 
        route: selectedRoute 
      } 
    })
  }

  const handleNumberChange = (e) => {
    const { name, value } = e.target
    const numValue = Math.max(0, parseInt(value) || 0)
    
    setFormData({
      ...formData,
      [name]: numValue
    })
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
                        <select name="source" value={formData.source} onChange={handleChange} required disabled={!!autoSource}>
                          <option value="">Select Source</option>
                          <option value="Vytilla">Vytilla</option>
                          <option value="Fort Kochi">Fort Kochi</option>
                          <option value="Kakkanad">Kakkanad</option>
                          <option value="Vypin">Vypin</option>
                          <option value="Bolgatty">Bolgatty</option>
                          <option value="High Court">High Court</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label>Destination Terminal</label>
                        <select name="destination" value={formData.destination} onChange={handleChange} required disabled={!!autoSource}>
                          <option value="">Select Destination</option>
                          <option value="Vytilla">Vytilla</option>
                          <option value="Fort Kochi">Fort Kochi</option>
                          <option value="Kakkanad">Kakkanad</option>
                          <option value="Vypin">Vypin</option>
                          <option value="Bolgatty">Bolgatty</option>
                          <option value="High Court">High Court</option>
                        </select>
                    </div>
                 </div>

                 <div className="form-row">
                    <div className="form-group">
                        <label>Date</label>
                        <input 
                          type="date" 
                          name="date" 
                          value={formatDateForInput(formData.date)} 
                          onChange={handleChange} 
                          required
                          min={formatDateForInput(getTodayDate())} 
                        />
                    </div>

                    <div className="form-group">
                        <label>Time</label>
                        <select name="time" value={formData.time} onChange={handleChange} required>
                          {scheduledTimes.map((time, index) => (
                            <option key={index} value={time}>
                              {time}
                            </option>
                          ))}
                        </select>
                    </div>
                 </div>

                <div className="form-row">
                    <div className="form-group">
                        <label>Adults</label>
                        <input 
                          type="number" 
                          name="adults" 
                          value={formData.adults}
                          onChange={handleNumberChange}
                          min="1"
                          max="10"
                          required
                        />
                    </div>

                    <div className="form-group">
                        <label>Children</label>
                        <input 
                          type="number" 
                          name="children" 
                          value={formData.children}
                          onChange={handleNumberChange}
                          min="0"
                          max="10"
                          required
                        />
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
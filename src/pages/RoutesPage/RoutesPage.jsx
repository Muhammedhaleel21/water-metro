import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import './RoutesPage.css'
import Footer from '../../components/Footer/Footer';

function RoutesPage() {

  const navigate = useNavigate();

  const routes = [
    { id: 1, name: "Vytilla → Fort Kochi", source: "Vytilla", destination: "Fort Kochi", duration: "23 mins" },
    { id: 2, name: "Kakkanad → Vytilla", source: "Kakkanad", destination: "Vypin", duration: "28 mins" },
    { id: 3, name: "Vytilla → Bolgatty", source: "Vytilla", destination: "Bolgatty", duration: "15 mins" },
    { id: 4, name: "High Court → Vypin", source: "High Court", destination: "Vypin", duration: "20 mins" }
  ]

  const handleBookNow = (route) => {
    navigate('/booking', { 
      state: { 
        route: route.name,
        source: route.source,
        destination: route.destination
      } 
    })
  }

  return (
    <>
      <Navbar/>

      <div className="routes-container">
        <h1 className="routes-title">WaterMetro Routes</h1>

        <div className="routes-list">
          {routes.map(route => (
            <div key={route.id} className="route-card">
              <div className="route-info">
                <h3 className="route-name">{route.name}</h3>
                <p className="route-duration">Duration: {route.duration}</p>
              </div>
              <button
                className='book-btn'
                onClick={() => handleBookNow(route)}
              >
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>

      <Footer />
        
    </>
  )
}

export default RoutesPage
import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NewsCard from '../../components/NewsCard/NewsCard'
import './HomePage.css'
import {useNavigate} from 'react-router-dom'
import TerminalList from '../../components/Terminals/TerminalList'
import Footer from '../../components/Footer/Footer'


function HomePage() {

  const navigate = useNavigate();

  const handleTerminalSelect = (terminal) => {
    navigate('/terminal', {state : {selectedTerminal: terminal} });
  }

  return (
    <>
        <Navbar />
        <div className='background-image'></div>
        <div className='cta-section'>
          <h1>Experience Kochi's Water Metro</h1>
          <button className='cta-button' onClick={() => navigate('/route')}>Explore Routes</button>
        </div>
        <NewsCard />
        <TerminalList onSelect={handleTerminalSelect} />
        <Footer />
    </>
  )
}

export default HomePage
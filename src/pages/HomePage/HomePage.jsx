import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import NewsCard from '../../components/NewsCard/NewsCard'
import './HomePage.css'
import {useNavigate} from 'react-router-dom'


function HomePage() {

  const navigate = useNavigate();

  return (
    <>
        <Navbar />
        <div className='background-image'></div>
        <div className='cta-section'>
          <h1>Experience Kochi's Water Metro</h1>
          <button className='cta-button' onClick={() => navigate('/route')}>Explore Routes</button>
        </div>
        <NewsCard />
    </>
  )
}

export default HomePage
import React from 'react'
import 'Home.css';

// Components
import Header from '../Header/Header';
import Band from '../Band/Band';

const Home = () => {
  return (
    <div className="Home">
      <Header />
      {res.forEach(band => {
        <Band 
          key={band.id} 
          name={band.name} 
          genre={band.genre} 
        />
      })}
  </div>
  )
}

export default Home;
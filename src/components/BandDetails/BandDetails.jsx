import React from 'react'
import './BandDetails.css';

import Band from '../Band/Band';

const BandDetails = props => {
  <div className="BandDetails">
    <header>
      <Band name={props.name} year={props.year} country={props.country} />
    </header>
    <main>
      <div className="Band-albums">
      <h2>Albums</h2>
        {props.albums}  
      </div>  
    </main>
    <footer>
      <div className="Band-members">
        <h2>Members</h2>
        {props.members}
      </div>
    </footer>
  </div> 
}
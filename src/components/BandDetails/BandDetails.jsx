import React from 'react'
import './BandDetails.css';

// Components
import Band from '../Band/Band';

const BandDetails = props => {
  return (
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
  );
}

export default BandDetails;
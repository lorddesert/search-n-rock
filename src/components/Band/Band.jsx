import React from 'react'
import './Band.css';


const Band = props => {
  // Fetch the albums of the band, show the loader and then render.
  if(props.inBandDetails)
    return (
      <div className='Band inBandDetails'>
        <main >
          {/* <hgroup> */}
            <h1 className='Band-name'>{props.band.name}</h1>
            <h2>{props.band.country}</h2>
            <h2>{props.band.year}</h2>
          {/* </hgroup> */}
          <div className='genre'>{props.band.genreCode}</div>
        </main>
      </div>
    );
  else
    return (
      <div className='Band' onClick={() => props.setSelectedBand(props.band.name)}>
        <main>
          <hgroup>
            <h1 className='Band-name'>{props.band.name}</h1>
            <h2>{props.band.country}</h2>
          </hgroup>
          <div className='genre'>{props.band.genreCode}</div>
        </main>
      </div>
    );
}

export default Band;

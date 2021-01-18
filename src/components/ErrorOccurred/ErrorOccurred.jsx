import React from 'react';
import './ErrorOccurred.css';

// Components
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const ErrorOccurred = props => {
  return ( 
    <div className="ErrorOccurred">
      <h1>Upss!!</h1>
      <h2>An error has Occurred!</h2>
      <p>{props.error}</p>
      <PrimaryButton value='Return home' action={() => {
          props.setSearchError(''); 
          props.setBands(null);
      } } />
    </div>
  )

}

export default ErrorOccurred;
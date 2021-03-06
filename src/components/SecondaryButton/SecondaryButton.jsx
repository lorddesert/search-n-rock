import React from 'react'
import './SecondaryButton.css';

const SecondaryButton = props => {
  return (
    <div id={props.id? props.id : ''}  className="SecondaryButton" onClick={props.action}>
      {props.value}
    </div>
  );
} 

export default SecondaryButton;
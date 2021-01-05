import React from 'react'
import 'SecondaryButton.css';

const SecondaryButton = props => {
  <div className="SecondaryButton" onClick={props.action}>
    {props.value}
  </div>
} 

export default SecondaryButton;
import React from 'react'
import 'PrimaryButton.css';

const PrimaryButton = props => {
  return (
    <div className="PrimaryButton" onClick={props.action}>
      {props.value}
    </div>
  );
}

export default PrimaryButton;
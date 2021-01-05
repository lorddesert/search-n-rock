import React from 'react';
import './Form.css';

const Form = props => {
  return (
    <div className='Form'>
      <label htmlFor='email'></label>
      <h2>Email</h2>
      <input type='email' id='email' placeHolder='example@hotmail.com'/>
      <h2>Password</h2>
      <label htmlFor='password'></label>
      <input type='password' id='password'/>
      <p id='err-msg'></p>
      {props.children}
    </div>
  );
}

export default Form;
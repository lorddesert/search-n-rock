import React, { useState, useEffect } from 'react';
import './Login.css';
import firebase from 'firebase';

// Components
import Form from '../Form/Form';
import Header from '../Header/Header';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

// Scripts
import { login, register } from '../scripts/auth';

const Login = props => {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  // useEffect(() => {
  //   document.addEventListener('keyup', e => {
  //     if(e.key === 'Enter')
  //       if(!showRegisterForm) {
  //         document.getElementById('Login').click();
  //       } else { 
  //         document.getElementById('Register').click();
  //       }


  //   })
  // })

  const auth = firebase.auth();  

    return(
      <div className='Login'>
        {/* Without menu */}
        <div className='background-wrapper'></div>
        <Header />
        <div className='phrase'>
          Find what you want, <strong>listen what you <span className='highlighted'>like</span></strong>
        </div>
        <Form>
          {!showRegisterForm ? 
            <div className='actions-container'>
              <PrimaryButton 
                id='Login'
                value='Login' 
                action={() => {
                  login(auth, props.setShowLogin);
                  
                  }}
                />
              <p onClick={() => setShowRegisterForm(!showRegisterForm)}><strong>Don't have an account?</strong></p>
            </div>
          :
            <div className='actions-container'>
              <PrimaryButton
                id='Register' 
                value='Register' 
                action={() => {
                  register(auth, props.setShowLogin);
                }} 
              />
              <p onClick={() => setShowRegisterForm(!showRegisterForm)}><strong>Already have an account?</strong></p>
            </div>

          }
        </Form> 
    </div>
    );
}

export default Login;
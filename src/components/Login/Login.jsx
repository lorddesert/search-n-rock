import React from 'react';
import './Login.css';

// Components
import Form from '../Form/Form';
import Header from '../Header/Header';
import PrimaryButton from '../PrimaryButton/PrimaryButton';

const Login = () => {
    return(
      <div className='Login'>
        {/* Without menu */}
        <div className='background-wrapper'></div>
        <Header />
        <Form>
          <PrimaryButton value='Log in' />
        </Form> 
    </div>
    );
}

export default Login;
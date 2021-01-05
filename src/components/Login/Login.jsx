import React from 'react';
import './Login.css';

// Components
import Form from '../Form/Form';
import Header from '../Header/Header';

const Login = () => {
    return(
      <div className="Login">
        {/* Without menu */}
        <div className="background-wrapper"></div>
        <Header />
        <Form />
    </div>
    );
}

export default Login;
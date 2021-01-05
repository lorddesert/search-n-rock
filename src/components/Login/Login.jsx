import React from 'react';
import './Login.css';

// Components
import Form from '../Form/Form';

const Login = () => {
    <div className="Login">
        {/* Without menu */}
        <div className="background-wrapper"></div>
        <Header />
        <Form action={login} />
    </div>
}

export default Login;
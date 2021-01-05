import React from 'react';
import './Header.css';

// Components
import Menu from '../Menu/Menu';

const Header = props => {
  return (
    <div className="Header">
      <main>
        <h1>Search n' <strong>Rock</strong></h1>
        {props.enableMenu && 
          <Menu />
        }
      </main>
    </div>
  );
}

export default Header;
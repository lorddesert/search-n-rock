import React from 'react';
import './Header.css';

// Components
import Menu from '../Menu/Menu';

const Header = props => {
  return (
    <div className={`Header ${props.enableMenu && 'inHome'}`}>
      <main>
        <h1 onClick={() => {
          props.setSelectedBand(false);
          props.setShowCreateBand(false);
          props.setBands(false);
          props.setSearchError && props.setSearchError('');
          props.setShowEditBand && props.setShowEditBand(false);
        }} >
          Search n' <strong className='highlighted'>Rock</strong>
        </h1>
        {props.enableMenu && 
          <Menu
            setSearchError={props.setSearchError}
            setSelectedBand={props.setSelectedBand} 
            setShowLogin={props.setShowLogin}
            setShowCreateBand={props.setShowCreateBand}
            setBands={props.setBands}
            setShowEditBand={props.setShowEditBand}
          />
        }
      </main>
    </div>
  );
}

export default Header;
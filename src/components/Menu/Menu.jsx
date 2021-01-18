import React from 'react';
import './Menu.css';
import menuImg from './resources/menu.svg';

const handleEvent = () => {
  const menuOptions = document.getElementById('menuOptions');

  menuOptions.classList.toggle('display-Menu-options');

  // } else {
  //   menuOptions.style.display = 'block';

  //   setTimeout(() => {
  //     menuOptions.classList.toggle('display-Menu-options');
  //   }, 50);
}

const Menu = props => {
  return (
    <div className='Menu' onClick={handleEvent}>
      <img src={menuImg} alt='menu' style={{cursor: 'pointer'}} />
      <div className='Menu-options' id='menuOptions'>
        <ul>
          <li onClick={() => {
            props.setSelectedBand('');
            props.setShowCreateBand(false);
            props.setBands(false);
            props.setSearchError && props.setSearchError('');
            props.setShowEditBand && props.setShowEditBand(false);
            }}>Home</li>
          <li onClick={() => {
            props.setShowLogin(true);
            }} className='Logout'>Logout</li>
        </ul>
      </div>
    </div>
  );
}

export default Menu;
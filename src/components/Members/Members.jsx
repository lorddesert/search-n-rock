import React from 'react'
import 'Members.css';
import backgroundSvg from './resources/background-svg';


const Members = props => {
  return ( 
    <div className="Members">
      <img src={backgroundSvg} alt="background svg"/>
      <main>
        {props.members.forEach(member => {
          <div className="Member">
            {member}
          </div>
        })}
      </main>
    </div>
  );
}

export default Members;
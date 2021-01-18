import React from 'react';
import './Member.css';

const Member = props => {
  return (
    <div className="Member">
      <p>{props.member}</p>
    </div>
  );
}

export default Member;
import React from 'react';
import 'Result.css';

const Result = props => {
  return (
    <div className="Result">
      {props.children}
    </div>
  );
}

export default Result;
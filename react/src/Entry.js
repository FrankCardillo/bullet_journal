import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Entry = (props) => {
  return(
    <div>
    <li className={props.type} key={props.id}>{props.body}</li>
    <button type="button" onClick={props.handleButtonClick}>Delete</button>
    </div>
  );
};

export default Entry;

import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Entry = (props) => {
  return(
    <li className={props.type} key={props.id}>{props.body}</li>
  );
};

export default Entry;

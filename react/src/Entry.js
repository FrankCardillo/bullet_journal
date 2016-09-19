import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Entry = (props) => {
  return(
    <li className={props.entryType} key={props.id}>{props.entryBody}</li>
  );
};

export default Entry;

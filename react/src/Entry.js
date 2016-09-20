import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Entry = (props) => {
  return(
    <div>
    <p className={props.type} key={props.id}>{props.body}</p>
    <button type="button" onClick={props.handleEditButtonClick}>Edit</button>
    <button type="button" onClick={props.handleDeleteButtonClick}>Delete</button>
    </div>
  );
};

export default Entry;

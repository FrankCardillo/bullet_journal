import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';

const Entry = (props) => {
  return(
    <div className="main-entry-container row">
      <div className="small-9 column entry-text-container">
        <p className={props.type} key={props.id}>{props.content}</p>
      </div>
      <div className="small-3 column center">
        <div>
          <button type="button" onClick={props.handleEditButtonClick} className="all-buttons entry-buttons">Edit</button>
        </div>
        <div>
          <button type="button" onClick={props.handleDeleteButtonClick} className="all-buttons entry-buttons">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default Entry;

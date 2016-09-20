import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


const AddEntry = (props) => {
  return (
        <form onSubmit={props.handleFormSubmit}>
          <input
            type="text"
            placeholder="type"
            value={props.type}
            onChange={props.handleTypeChange}
          />
          <input
            type="text"
            placeholder="your entry"
            value={props.body}
            onChange={props.handleBodyChange}
          />
          <input type="submit" value="Add To List" />
        </form>
  );
}

  export default AddEntry;

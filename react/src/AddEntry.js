import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


const AddEntry = (props) => {
  return (
        <form onSubmit={props.handleFormSubmit}>
          <input
            type="text"
            placeholder="your entry"
            value={props.name}
            onChange={props.handleChange}
          />
          <input type="submit" value="Add To List" />
        </form>
  );
}

  export default AddEntry;

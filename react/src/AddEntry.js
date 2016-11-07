import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';


const AddEntry = (props) => {
  return (
        <form onSubmit={props.handleFormSubmit} className="form-container">
          <div className="row">
            <div className="small-12 column">
              <input
                type="text"
                placeholder="type"
                value={props.type}
                onChange={props.handleTypeChange}
                className="entry-fields"
              />
            </div>
            <div className="small-12 column">
              <input
                type="text"
                placeholder="your entry"
                value={props.body}
                onChange={props.handleBodyChange}
                className="entry-fields"
              />
            </div>
            <div className="small-12 column">
              <input type="submit"
                value="Add To List"
                className="all-buttons"
              />
            </div>
          </div>
        </form>
  );
}

  export default AddEntry;

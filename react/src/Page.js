import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';


const Page = (props) => {
  let entries = props.entries.map(entry => {
    const { id, type, body } = entry;
    let onButtonClick = () => props.handleButtonClick(id);
    return (
      <Entry
        key={id}
        type={type}
        body={body}
        handleButtonClick={onButtonClick}
      />
    );
  });

  return (
    <ul>
      {entries}
    </ul>
  );
};

export default Page;

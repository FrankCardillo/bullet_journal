import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';


const Page = (props) => {
  let entries = props.entries.map(entry => {
    const { id, entry_type, content } = entry;
    let onDeleteButtonClick = () => props.handleDeleteButtonClick(id);
    let onEditButtonClick = () => props.handleEditButtonClick(id);
    return (
      <Entry
        key={id}
        type={entry_type}
        content={content}
        handleDeleteButtonClick={onDeleteButtonClick}
        handleEditButtonClick={onEditButtonClick}
      />
    );
  });

  return (
    <div>
      {entries}
    </div>
  );
};

export default Page;

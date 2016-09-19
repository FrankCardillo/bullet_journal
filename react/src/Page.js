import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Entry from './Entry';


const Page = (props) => {
  let entries = props.data.map( entry => {
    return <Entry key={entry.id} entryType={entry.type} entryBody={entry.body} />
  });
    return (
      <ul>
        {entries}
      </ul>
    );
};

export default Page;

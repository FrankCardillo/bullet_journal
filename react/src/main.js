import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import UserJournal from './UserJournal';

$(function() {
  ReactDOM.render(
    <UserJournal />,
    document.getElementById('app')
  );
});

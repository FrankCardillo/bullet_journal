import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import UserJournal from './UserJournal';

document.addEventListener("DOMContentLoaded", function(event) {
    ReactDOM.render(
      <UserJournal />,
      document.getElementById('app')
    );
});

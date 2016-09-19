import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AddEntry from './AddEntry';
import Page from './Page';

class UserJournal extends React.Component {
  constructor() {
    super();
    this.state = {data: [
      {id: 1, type: "immediate", body: "Hello World"},
      {id: 2, type: "note", body: "Hello World"},
      {id: 3, type: "task", body: "Hello World"}
    ]}
  }

  render() {
    return (
      <div>
        <AddEntry />
        <Page data={this.state.data}/>
      </div>
    );
  }
}


export default UserJournal;

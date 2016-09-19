import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import AddEntry from './AddEntry';
import Page from './Page';

class UserJournal extends React.Component {
  constructor() {
    super();

    this.state = {
      entries: [],
      body: '',
      type: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let newGrocery = {
      id: Date.now(),
      name: this.state.name
    };
    let newGroceries = [...this.state.groceries, newGrocery];
    this.setState({
      groceries: newGroceries,
      name: ''
    });

    $.ajax({
        type: "POST",
        url: '/api/groceries',
        contentType: 'application/json',
        data: JSON.stringify({'grocery': {'name': this.state.name}})
    })
    .done((data) => {
      let newGrocery = {
        id: data.id,
        name: this.state.name
      };
      let newGroceries = [...this.state.groceries, newGrocery];
      this.setState({
        groceries: newGroceries,
        name: ''
      });
    });
  }

  handleBodyChange(event) {
    let newBody = event.target.value;
    this.setState({ body: newBody });
  }

  handleTypeChange(event) {
    let newType = event.target.value;
    this.setState({ type: newType });
  }

  render() {
    return (
      <div>
        <AddEntry
          handleFormSubmit={this.handleFormSubmit}
          handleBodyChange={this.handleBodyChange}
          handleTypeChange={this.handleTypeChange}
          type={this.state.type}
          body={this.state.body}
        />
        <Page entries={this.state.entries} />
      </div>
    );
  }
}


export default UserJournal;

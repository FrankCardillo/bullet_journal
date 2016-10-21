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
      content: '',
      entry_type: '',
      user_id: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);

  }

  componentDidMount() {
    $.getJSON('/api/v1/entries.json', (response) => {
      this.setState({ entries: response[0] })
      this.setState({ user_id: response[1] })
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: '/api/v1/entries',
      type: 'POST',
      data: {
        entry: {content: this.state.content, user_id: this.state.user_id, entry_type: this.state.entry_type}
      },
      dataType: 'json'
    }).done(
      $.getJSON('/api/v1/entries.json', (response) => {
        this.setState({ entries: response[0] })
      })
    )
  }

  handleBodyChange(event) {
    let newBody = event.target.value;
    this.setState({ content: newBody });
  }

  handleTypeChange(event) {
    let newType = event.target.value;
    this.setState({ entry_type: newType });
  }

  handleDeleteButtonClick(id) {
    $.ajax({
      url: '/api/v1/entries/' + id,
      method: 'DELETE'
    }).done(
      $.getJSON('/api/v1/entries.json', (response) => {
        this.setState({ entries: response[0] })
      })
    );
  }

  handleEditButtonClick(id) {
    var newEntries = this.state.entries;
    var editedEntry;
    for (var i = 0; i < newEntries.length; i++) {
      if (newEntries[i].id === id) {
        var editPrompt = prompt("Temporary Edit Feature. Edit your entry:", newEntries[i].content);
        newEntries[i].content = editPrompt;
        editedEntry = newEntries[i].content;
      }
    }
    $.ajax({
      url: '/api/v1/entries/' + id,
      type: 'PATCH',
      data: {
        entry: {content: editedEntry, user_id: this.state.user_id}
      },
      dataType: 'json'
    }).done(
      $.getJSON('/api/v1/entries.json', (response) => {
        this.setState({ entries: response[0] })
      })
    )
  }

  render() {
    return (
      <div>
        <AddEntry
          handleFormSubmit={this.handleFormSubmit}
          handleBodyChange={this.handleBodyChange}
          handleTypeChange={this.handleTypeChange}
          type={this.state.entry_type}
          body={this.state.content}
        />
        <Page
          entries={this.state.entries}
          handleDeleteButtonClick={this.handleDeleteButtonClick}
          handleEditButtonClick={this.handleEditButtonClick}
        />
      </div>
    );
  }
}


export default UserJournal;

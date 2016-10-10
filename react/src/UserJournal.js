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
      type: '',
      page_id: ''
    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleBodyChange = this.handleBodyChange.bind(this);
    this.handleTypeChange = this.handleTypeChange.bind(this);
    this.handleDeleteButtonClick = this.handleDeleteButtonClick.bind(this);
    this.handleEditButtonClick = this.handleEditButtonClick.bind(this);

  }

  componentDidMount() {
    $.getJSON('/api/v1/pages/1.json', (response) => {
      this.setState({ entries: response })
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    $.ajax({
      url: '/api/v1/pages/1/entries',
      type: 'POST',
      data: {
        entry: {content: this.state.content, page_id: 1}
      },
      dataType: 'json'
    }).done(
      $.getJSON('/api/v1/pages/1.json', (response) => {
        this.setState({ entries: response })
      })
    )
  }

  handleBodyChange(event) {
    let newBody = event.target.value;
    this.setState({ content: newBody });
  }

  handleTypeChange(event) {
    let newType = event.target.value;
    this.setState({ type: newType });
  }

  handleDeleteButtonClick(id) {
    $.ajax({
      url: '/api/v1/pages/1/entries/' + id,
      method: 'DELETE'
    }).done(
      $.getJSON('/api/v1/pages/1.json', (response) => {
        this.setState({ entries: response })
      })
    );
  }

  handleEditButtonClick(id) {
    let newEntries = this.state.entries;
    for (var i = 0; i < newEntries.length; i++) {
      if (newEntries[i].id === id) {
        var editPrompt = prompt("Temporary Edit Feature. Edit your entry:");
        newEntries[i].content = editPrompt;
      }
    }
    this.setState({entries: newEntries});
  }

  render() {
    return (
      <div>
        <AddEntry
          handleFormSubmit={this.handleFormSubmit}
          handleBodyChange={this.handleBodyChange}
          handleTypeChange={this.handleTypeChange}
          type={this.state.type}
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

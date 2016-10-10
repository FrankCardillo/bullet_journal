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
    $.getJSON('/api/v1/pages/1/entries.json', (response) => {
      this.setState({ entries: response })
    });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    let newEntry = {
      id: Date.now(),
      page_id: ,
      content: this.state.content,
      type: this.state.type
    };
    let newEntries = [...this.state.entries, newEntry];
    this.setState({
      entries: newEntries,
      content: '',
      type: ''
    });
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
    let newEntries = this.state.entries.filter(entry => {
      return entry.id !== id;
    });
    this.setState({ entries: newEntries });
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

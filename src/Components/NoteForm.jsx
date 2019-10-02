import React, { Component } from 'react';
import '../ComponentStyles/noteForm.css';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state={
      newNoteContent: ''
    };

    this.handleUserInput = this.handleUserInput.bind(this);
    this.writeNote = this.writeNote.bind(this);
  }

  // When the user input changes, set the newNoteContent
  // to the value of what's in the input box
  handleUserInput(e) {
    this.setState({
      newNoteContent: e.target.value // the value of the text input 
    })
  }

  writeNote() {
    // call a method that sets the noteContent for a note to
    // the value of the input
    this.props.addNote(this.state.newNoteContent);

    // set newNoteContent back to an empty string
    this.setState({ 
      newNoteContent: '',
    })
  }

  render() {
    return(
      <div className="form-wrapper">
        <input className="note-input"
        placeholder="Write a note..." 
        value={this.state.newNoteContent}
        onChange={this.handleUserInput}/>
        <button className="note-button"
        onClick={this.writeNote}>Add Note</button>
      </div>
    )
  }
}

export default NoteForm;
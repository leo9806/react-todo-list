import React, { Component } from 'react';
import '../ComponentStyles/note.css';
import PropTypes from 'prop-types';

class Note extends Component {
  constructor(props) {
    super(props);
    this.noteContent = props.noteContent; 
    this.noteID = props.noteID;

    this.handleRemoveNote = this.handleRemoveNote.bind(this);
  }

  handleRemoveNote(id) {
    console.log("removed");
    this.props.removeNote(id);
  }

  render(props) {
    return (
      <div className="note fade-in">
        <span className="close-btn" 
          onClick={() => this.handleRemoveNote(this.noteID)}>
            &times;
          </span>
        <p className="note-content">{this.noteContent}</p>
      </div>
    );
  }
}

Note.propTypes = {
  noteContent: PropTypes.string
}

export default Note;
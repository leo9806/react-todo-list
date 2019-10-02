import React, { Component } from 'react';
import Note from './Components/Note';
import NoteForm from './Components/NoteForm';
import firebase from './config/config'; 
import 'firebase/database';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    //this.app = firebase.initializeApp(DB_CONFIG);
    this.db = firebase.database().ref().child('notes'); // referencing the firebase database

    // set up the react state of the components 
    this.state = {
      notes: []
    }

    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);
  }

  componentDidMount() {
    const previousNotes = this.state.notes;

    // DataSnapshot
    this.db.on('child_added', snap => {
      previousNotes.push({
        id: snap.key, // unique id provided by firebase
        noteContent: snap.val().noteContent,
      });

      this.setState({
        notes: previousNotes
      });
    });

    this.db.on('child_removed', snap => {
      for (let i = 0; i < previousNotes.length; i++){
        if (previousNotes[i].id === snap.key) {
          previousNotes.splice(i, 1);
        }
      }

      this.setState({
        notes: previousNotes
      });
    })
  }

  addNote(note) {
    this.db.push().set({ noteContent: note });
  }

  removeNote(noteID) {
    this.db.child(noteID).remove();
  }

  render() {
    return (
      <div className="notes-wrapper">
        <div className="notes-header">
          <div className="heading">TODO List</div>
        </div>
        <div className="notes-body">
          {
            this.state.notes.map((note) => {
              return (
                <Note noteContent={note.noteContent} 
                  noteID={note.id} 
                  key={note.id} 
                  removeNote={this.removeNote}/>
              )
            })
          }
        </div>
        <div className="notes-footer">
          <NoteForm addNote={this.addNote}/>
        </div>
      </div>
    );
  }
}

export default App;

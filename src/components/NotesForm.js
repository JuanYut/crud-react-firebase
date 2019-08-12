import React, { useState } from 'react';
import * as firebase from 'firebase';
import './notesForm.css'

// * Custom Hook
import useInput from  '../hooks/useInput';

const createNote = (theTitle, theNote) => {
  if (theTitle !== '' && theNote !== '') {
    firebase.database().ref('notes').push({
      title: theTitle,
      note: theNote
    })
  }
}

function NotesForm() {
  const title = useInput('title')
  const note = useInput('note')

  return (
    <section className="noteform">
      <h3>Create New Note</h3>
 
      <div className="form-group">
        <label htmlFor="noteform-title">Title</label>
        <input type="text" id="noteform" name="noteform-title" {...title} />
      </div>

      <div className="form-group">
        <label htmlFor="noteform-note">Note</label>
        <textarea name="noteform-note" id="noteform-note" {...note} />
      </div>
      
      <button onClick={() => {createNote(title.value, note.value)}} >Create Note</button>
    </section>
  )
}

export default NotesForm
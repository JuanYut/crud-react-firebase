import React, { useState, useEffect } from 'react';
import * as firebase from 'firebase';
import './notes.css'

// * My Helpers
import { listenForChangeFirebase } from '../helper/listenForChangeFirebase'

function Notes() {
  const [notes, setNotes] = useState([])

  useEffect(() => {
    getValues()
  }, [])

  const getValues = async () => {
    firebase.database().ref('notes').on('child_added', snapshot => {
      let noteFromFB = {
        id: snapshot.key,
        title: snapshot.val().title,
        note: snapshot.val().note
      }
      setNotes((currentState) => ([...currentState, noteFromFB]))
    })
  }
  
  const removeNote = (id) => {
    firebase.database().ref('notes').child(id).remove()
    window.location.reload() // temporal solution.
  }
  
  console.log(notes)
  return(
    <section className="notes-wrapper">
      <h3>Notes</h3>
      <div className="notes">
        { notes.map((note, index) => (
          <div className="note" key={ index }>
            <div className="note-title">
              <h3>{ note.title }</h3>
              <div className="remove" onClick={ () => { removeNote(note.id) } }>X</div>
            </div>
            <div className="note-content">
              <p>{ note.note }</p>
            </div>
          </div>
        )) }
      </div>
    </section>
  )
}

export default Notes
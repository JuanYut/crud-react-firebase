import * as firebase from 'firebase';

export const listenForChangeFirebase = () => {
  let notes = []
  firebase.database().ref('notes').on('child_added', snapshot => {
    let noteFromFB = {
      id: snapshot.key,
      title: snapshot.val().title,
      note: snapshot.val().note
    }
    notes.push(noteFromFB)
  })
  console.log(notes)
  return notes
}
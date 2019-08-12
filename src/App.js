import React, { useState } from 'react';
import * as firebase from 'firebase';

// * My components
import Header from './components/Header'
import NotesForm from './components/NotesForm'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NotesForm />
      </main>
    </div>
  );
}

export default App;
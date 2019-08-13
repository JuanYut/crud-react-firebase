import React from 'react';

// * My components
import Header from './components/Header'
import NotesForm from './components/NotesForm'
import Notes from './components/Notes'

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NotesForm />
        <Notes />
      </main>
    </div>
  );
}

export default App;
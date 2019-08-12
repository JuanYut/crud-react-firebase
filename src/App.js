import React, { useState } from 'react';
import * as firebase from 'firebase';

import Header from './components/Header'

const useContador = (inicial) => {
  const [contador, setContador] = useState(inicial)
  const incrementar = () => { setContador(contador + 1) }
  return { contador, incrementar }
}

function App() {
  const { contador, incrementar } = useContador(0)

  return (
    <div className="App">
      <Header/>
      <p> { contador } </p>
      <button onClick={incrementar}> Incrementar </button>
    </div>
  );
}

export default App;
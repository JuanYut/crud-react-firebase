import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import * as firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBw64Whq52tXm4hncnohCdrIhHZh5haPzA",
  authDomain: "crud-app-61e48.firebaseapp.com",
  databaseURL: "https://crud-app-61e48.firebaseio.com",
  projectId: "crud-app-61e48",
  storageBucket: "",
  messagingSenderId: "555802411829",
  appId: "1:555802411829:web:feae97404f436980"
};
firebase.initializeApp(firebaseConfig);

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
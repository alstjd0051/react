import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import PersonContext from './contexts/PersonContext';

const Persons = [
  { id: 0, name: 'miin_sseong', age: 26 },
  { id: 1, name: 'tyler', age: 25 },
]

ReactDOM.render(
  <React.StrictMode>
    <PersonContext.Provider value={Persons}>
      <App />
    </PersonContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

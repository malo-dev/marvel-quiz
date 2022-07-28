import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/App';
import Firebase,{ FirebaseContext }  from './components/Firebase';

import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <FirebaseContext.Provider value={new Firebase()}>
        <App />
    </FirebaseContext.Provider>
   
  </BrowserRouter>
);

reportWebVitals();

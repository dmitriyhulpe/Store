import React, { createContext, StrictMode} from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import DeviceStorage from './storage/DeviceStorage';
import UserStorage from './storage/UserStorage'
import './style.css'

export const Context = createContext(null)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <Context.Provider value={{
      user: new UserStorage(),
      device: new DeviceStorage()
    }}>
    <App></App>
    </Context.Provider>
  </StrictMode>
);
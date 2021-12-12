import React from 'react';
import DocumentMeta from 'react-document-meta';
import { StoreContext, RootStore } from './stores/StoreContext';

import Security from './components/Security.jsx'

import logo from './logo.svg';
import './App.css';


export default class App extends React.Component  {
  render() {
    const meta = {
      title: 'Caelus',
      description: 'SC Hangar Manager',
      neta: {
        viewport: 'initial-scale=1, width=device-width'
      }
    };

    return (
      <DocumentMeta {...meta}>
        <StoreContext.Provider value={ new RootStore() }>
          <div className="App">
            <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <Security />
            </header>
          </div>
        </StoreContext.Provider>
      </DocumentMeta>
    );
  }
}

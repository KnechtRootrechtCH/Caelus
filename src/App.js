import React from 'react';
import DocumentMeta from 'react-document-meta';
import { useMediaQuery } from 'react-responsive'
import { StoreContext, RootStore } from './stores/StoreContext';
import { BrowserRouter } from "react-router-dom";

import { Router } from './components/Router.jsx'

import './App.css';

const store = new RootStore();

export default function App() {
    const meta = {
      title: 'Caelus',
      description: 'SC Hangar Manager',
      neta: {
        viewport: 'initial-scale=1, width=device-width'
      }
    };

    const systemPrefersDark = useMediaQuery(
      {
        query: '(prefers-color-scheme: dark)',
      },
      undefined,
    );

    store.theme.setDarkMode(systemPrefersDark);
    store.theme.applyTheme();

    console.log("Initializing Caelus…");
    return (
      <DocumentMeta {...meta}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <StoreContext.Provider value={ store }>
          <BrowserRouter>
            <Router/>
          </BrowserRouter>
        </StoreContext.Provider>
      </DocumentMeta>
    );
}

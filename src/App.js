import React from 'react';
import DocumentMeta from 'react-document-meta';
import { useMediaQuery } from 'react-responsive'
import { StoreContext, RootStore } from './stores/StoreContext';

import { Root } from './components/Root.jsx'

import './App.css';


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

    return (
      <DocumentMeta {...meta}>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <StoreContext.Provider value={ new RootStore(systemPrefersDark) }>
          <Root/>
        </StoreContext.Provider>
      </DocumentMeta>
    );
}

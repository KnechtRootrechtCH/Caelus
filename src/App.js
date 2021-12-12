import DocumentMeta from 'react-document-meta';

import logo from './logo.svg';
import './App.css';

function App() {

  const meta = {
    title: 'Caelus',
    description: 'SC Hangar Manager',
    neta: {
      viewport: 'initial-scale=1, width=device-width'
    }
  }

  return (
    <DocumentMeta {...meta}>
      <div className="App">
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    </DocumentMeta>
  );
}

export default App;

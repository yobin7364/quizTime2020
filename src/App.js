import React from 'react';
import './App.css';
import { Cards } from "./components/Cards";
import { GlobalProvider } from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Cards />
    </GlobalProvider>
  );
}

export default App;

import React from 'react';
import { BrowserRouter } from 'react-router-dom';


// styling
import './App.css';

// components
import Menu from './menu/Menu';

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Menu/>

      </div>
    </BrowserRouter>
  );
}

export default App;

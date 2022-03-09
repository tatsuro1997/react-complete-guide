import React, { useState } from 'react';

import Button from './components/UI/Button/Button'
import './App.css';

function App() {
  const [showParagraph, setShowParagraph] = useState(false);

  console.log("APP RUNNING");

  const togglrParagraphHandler = () => {
    setShowParagraph(prevShowParagraph => !prevShowParagraph);
  };

  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p>This is new!</p>}
      <Button onClick={togglrParagraphHandler}>Show Paragraph!</Button>
    </div>
  );
}

export default App;

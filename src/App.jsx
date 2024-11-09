import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import GamePage from './components/GamePage.jsx';
import HomePage from './components/HomePage.jsx';

function App() {
  const [winningScore, setWinningScore] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage setWinningScore={setWinningScore} />} />
        <Route path="/game" element={<GamePage winningScore={winningScore} />} />
      </Routes>
    </Router>
  );
}

export default App;
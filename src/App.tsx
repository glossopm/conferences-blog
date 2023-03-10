import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MarkdownRenderer from './MarkdownRenderer';
import TalkList from './TalkList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talks/:slug" element={<MarkdownRenderer />} />
        <Route path="/talks" element={<TalkList />} />
      </Routes>
    </Router>
  );
}

export default App;

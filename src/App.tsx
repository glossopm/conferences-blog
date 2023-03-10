import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './Home';
import MarkdownRenderer from './MarkdownRenderer';
import TalkList from './TalkList';

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talks/:slug" element={<MarkdownRenderer />} />
        <Route path="/talks" element={<TalkList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;

import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Talk from './pages/Talk';
import TalkList from './pages/TalkList';
import Layout from './components/Layout';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talks/:slug" element={<Talk />} />
          <Route path="/talks" element={<TalkList />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;

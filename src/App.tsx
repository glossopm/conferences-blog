import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Talk from './pages/Talk';
import Layout from './components/Layout';
import ListByConference from './components/ListByConference';

function App() {
  return (
    <HashRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talks/:slug" element={<Talk />} />
          <Route path="/workshops/:slug" element={<Talk />} />
          <Route path="/talks" element={<ListByConference folder="talks" />} />
          <Route path="/workshops" element={<ListByConference folder="workshops" />} />
        </Routes>
      </Layout>
    </HashRouter>
  );
}

export default App;

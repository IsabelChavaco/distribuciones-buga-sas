import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import CatalogPage from './pages/CatalogPage';
import Contact from './components/Contact';

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<CatalogPage />} />
        <Route path="/contacto" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

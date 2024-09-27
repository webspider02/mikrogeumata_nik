import React from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import Menu from './components/Menu';
import './index.css'

function App() {
  return (
    <HashRouter>
      <Header />

      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/menu" exact element={<Menu />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/about" exact element={<About />} />
      </Routes>

      <Footer />
    </HashRouter>
  )
}

export default App;

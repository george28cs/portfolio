import React, { Fragment } from 'react';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import '../styles/index.css';
import '../styles/App.css';
import Background from '../containers/Background';
import About from '../pages/About';
const App = () => {
  
  return (
    <Fragment>
      <Background />
      <div className="content">
        <BrowserRouter>
          <Header />
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
};

export default App;

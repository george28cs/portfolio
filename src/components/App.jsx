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
              <Route path="/portfolio" element={<Home />} />
              <Route path="/portfolio/projects" element={<Projects />} />
              <Route path="/portfolio/contact" element={<Contact />} />
              <Route path="/portfolio/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Fragment>
  );
};

export default App;

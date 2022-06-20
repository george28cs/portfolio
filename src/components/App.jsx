import React, { Fragment } from 'react';
import Footer from './Footer';
import { BrowserRouter, Routes, Route, HashRouter } from 'react-router-dom';
import Header from './Header';
import Home from '../pages/Home';
import Contact from '../pages/Contact';
import Projects from '../pages/Projects';
import NotFound from './NotFound';
import '../styles/index.css';
import '../styles/App.css';
import Background from '../containers/Background';
import About from '../pages/About';
import brackgroundImg from '../images/bg.jpg';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

const App = () => {
  const initialState = useInitialState()
  return (
    <AppContext.Provider value={initialState}>
    <Fragment>
      <Background />
      <div className="content">
        <img className='background-img' src={brackgroundImg} alt="backound-img" />
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path="/portfolio" element={<Home />} />
            <Route exact path="/portfolio/projects" element={<Projects />} />
            <Route exact path="/portfolio/contact" element={<Contact />} />
            <Route exact path="/portfolio/about" element={<About />} />
            <Route path='*' element={<NotFound />}/>
          </Routes>
          <Footer />
        </BrowserRouter>
      </div>
    </Fragment>
    </AppContext.Provider>
  );
};

export default App;

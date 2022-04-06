import React, { Fragment } from 'react';
import Footer from './Footer';
import Header from './Header';
import Main from './Main';
import '../styles/index.css';
import Background from '../containers/Background';
const App = () => {
  return (
    <Fragment>
      <Background />
      <div className="content">
        <Header />
        <Main />
      </div>
    </Fragment>
  );
};

export default App;

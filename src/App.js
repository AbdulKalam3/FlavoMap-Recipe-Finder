import './App.css';
import React from 'react';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Main from './components/main.js';

function App() {
  return (
    <>
    <div className="header">
      <Header />
    </div>
    <div className="content">
      <Main />
    </div>
    <div className="footer">
      <Footer />
    </div>
    </>
  );
}


export default App;

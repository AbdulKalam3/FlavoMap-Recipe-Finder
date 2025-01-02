import './App.css';
import Footer from './components/footer.js';
import Header from './components/header.js';
import Main from './components/main.js';
import AdComponent from './components/AdComponent'; 

function App() {
  return (
    <>
    <div className="header">
      <Header />
    </div>
    <div className="content">
      <Main />
      
    </div>
    <div>
    <AdComponent />
    </div>
    <div className="footer">
      <Footer />
    </div>
    </>
  );
}


export default App;

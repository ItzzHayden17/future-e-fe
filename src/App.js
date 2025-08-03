import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import About from './pages/About/About';
import { useState } from 'react';
function App() {

  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(false);

  function handlePageChange(page) {
    setLoading(true);
    setActivePage(page);
        setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  function renderPage(page) {
    
      switch (page) {
    case 'home':
      return <Home />;
    case 'about-us':
      return <About />;
    case 'contact-us':
      return <Contact />;
    }


  }
  return (
    <div className="App">

      <LoadingScreen />
      {loading && <LoadingScreen />}
      <Navbar onClick={handlePageChange}/>
      {renderPage(activePage)}
    </div>
  );
}

export default App;

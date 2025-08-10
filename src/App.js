import './App.css';
import Home from './pages/Home/Home';
import Contact from './pages/Contact/Contact';
import Navbar from './components/Navbar/Navbar';
import LoadingScreen from './components/LoadingScreen/LoadingScreen';
import About from './pages/About/About';
import { useState, useEffect } from 'react';
import Construction from './pages/Construction/Construction';
import Cookies from 'js-cookie';
import axios from 'axios';
import serverUrl from './serverUrl';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [underConstruction,setUnderConstruction] = useState(false);

  useEffect(() => {
    axios.get(`${serverUrl}/under-construction`).then(response => {
      if (response.data.underConstruction) {
        setUnderConstruction(true);
      } else {
        setUnderConstruction(false);
      }
      
    })
  },[])

  useEffect(() => {
    try {
      if (Cookies.get('isLoggedIn') === 'true') {
        setIsLoggedIn(true);
        
      }else{
        setIsLoggedIn(false);
      }
    } catch (error) {
      console.error("Cookie check failed", error);
    }
  }, []); // only runs once on mount

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
      default:
        return null;
    }
  }

  return (
    <div className="App">


      {underConstruction ? <>
      
          {isLoggedIn ? <>
          <LoadingScreen />
          {loading && <LoadingScreen />}
          <Navbar onClick={handlePageChange} />
          {renderPage(activePage)}
        </>:<>
        <Construction/> </>}
      
      </> 
      : 
      <>
        <LoadingScreen />
          {loading && <LoadingScreen />}
          <Navbar onClick={handlePageChange} />
          {renderPage(activePage)}
      
      
      </>}

      
    </div>
  );
}

export default App;

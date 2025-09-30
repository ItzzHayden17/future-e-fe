import './HomeDirectory.css';
import Home from '../Home/Home';
import Contact from '../Contact/Contact';
import Navbar from '../../components/Navbar/Navbar';
import LoadingScreen from '../../components/LoadingScreen/LoadingScreen';
import About from '../About/About';
import { useState, useEffect } from 'react';
import Construction from '../Construction/Construction';
import Cookies from 'js-cookie';
import axios from 'axios';
import serverUrl from '../../serverUrl';
import Mobile from '../Mobile/Mobile';
import WhatWeOffer from '../WhatWeOffer/WhatWeOffer';
import Documents from '../Documents/Documents';

function HomeDirectory() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [underConstruction,setUnderConstruction] = useState();
  const [isMobile, setIsMobile] = useState(false);

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

useEffect(() => {
  function checkStandalone() {
    if (
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true
    ) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  checkStandalone(); // initial check

  // Listen for changes (some browsers support this)
  const handler = (e) => checkStandalone();
  window.matchMedia("(display-mode: standalone)").addEventListener("change", handler);

  return () => {
    window.matchMedia("(display-mode: standalone)").removeEventListener("change", handler);
  };
}, []);
  

  const [activePage, setActivePage] = useState('home');
  const [loading, setLoading] = useState(false);

  function handlePageChange(page) {
    setLoading(true);
    setActivePage(page);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }

  function handleAboutButton() {
    handlePageChange('about-us');
    renderPage(activePage)
  }

  function handleContactButton(){
    handlePageChange('contact-us');
    renderPage(activePage)
  }

  function renderPage(page) {
    switch (page) {
      case 'home':
        return <Home handleAboutButton={handleAboutButton}  handleContactButton={handleContactButton}/> ;
      case 'about-us':
        return <About handleContactButton={handleContactButton}/>;
      case 'contact-us':
        return <Contact />;
      case 'what-we-offer':
        return <WhatWeOffer />; 
        case 'documents':
        return <Documents />; 
      default:
        return null;
    }
  }

  return (
    <div className="HomeDirectory">
      {underConstruction ? <>
      
          {isLoggedIn ? <>

          {isMobile ? <>
          <Mobile />
          </> 
          : 
          <>
          <LoadingScreen />
          {loading && <LoadingScreen />}
          <Navbar activePage={activePage} onClick={handlePageChange} />
          {renderPage(activePage)}
          </> }

        </>:<>
        <Construction/> </>}
      
      </> 
      : 
      <>

      {isMobile ? <>
        <Mobile />
      </> : <>
              <LoadingScreen />
          {loading && <LoadingScreen />}
          <Navbar activePage={activePage} onClick={handlePageChange} />
          {renderPage(activePage)}
      </>}

      

      </>} 

      
    </div>
  );
}

export default HomeDirectory;

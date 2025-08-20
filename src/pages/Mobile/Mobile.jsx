import React,{useEffect,useState} from 'react'
import Login from './pages/Login/Login'
import Claims from './pages/Claims/Claims'
import Cookies from 'js-cookie'


const Mobile = () => {

const [isLoggedInWithCompany, setIsLoggedInWithCompany] = useState(false);


useEffect(()=>{

    try {
        if (Cookies.get('isLoggedInWithCompany')) {
        // User is logged in, you can redirect or show the claims page
        setIsLoggedInWithCompany(true);
        } 
    } catch (error) {
        console.error("Cookie check failed", error);
    }
})


  return (
    <>

    {isLoggedInWithCompany ? <Claims/> : <Login/>}
    </>
  )
}

export default Mobile
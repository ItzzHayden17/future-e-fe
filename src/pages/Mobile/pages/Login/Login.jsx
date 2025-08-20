import "./Login.css"
import React from 'react'
import serverUrl from "../../../../serverUrl"
import axios from "axios";
import Cookies from 'js-cookie';

const Login = () => {

  function handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData(e.target); // grabs data from the form that triggered submit

    const data = {
      companyName: formData.get('companyName'),
      password: formData.get('password'),
    };

    console.log('Submitting:', data);

    axios.post(`${serverUrl}/login`, data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(res => {
      
      if (res) {
        Cookies.set('isLoggedInWithCompany', JSON.stringify(data)); // Store company name in cookies
        window.location.reload(); // Reload the page to reflect the login state
        
      } else {
        alert('Login failed');
      }
    })
    .catch(err => {
      console.error('Login error:', err);
    });
  }

  return (
    <div className="Login">
        <img src="assets/black_logo_with_text.png" alt="Login Logo" width={"150px"} />
        <p>Claims portal</p>
        <form method="post" onSubmit={handleSubmit}>
        <label>Company name</label>
        <input placeholder="Enter your Company name" type="text" name="companyName" ></input>
        <label>Password</label>
        <input placeholder="Password" type="password" name="password"></input>
        <button>Log in</button>
        </form>
    </div>
  )
}

export default Login
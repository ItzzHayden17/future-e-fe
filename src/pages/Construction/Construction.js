import './Construction.css'
import React from 'react'
import Cookies from 'js-cookie';
import serverUrl from '../../serverUrl';
import axios from 'axios';
const Construction = (props) => {

    const [loginDetails, setLoginDetails] = React.useState({ username: '', password: '' });

    function handleChange(e) {
        const { name, value } = e.target;
        setLoginDetails({
            ...loginDetails,
            [name]: value
        });
        console.log(`Changed ${name} to: ${value}`);
    }

    function handleSubmit(e) {
  e.preventDefault();

  const formData = new FormData(e.target); // grabs data from the form that triggered submit

  const data = {
    username: formData.get('username'),
    password: formData.get('password'),
  };

  console.log('Submitting:', data);
axios.post(`${serverUrl}/login-admin`, data, {
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(res => {
  if (res.data.success) {
    Cookies.set('isLoggedIn', 'true', { expires: 7 });
    window.location.reload(); // or set state
  } else {
    alert('Login failed');
  }
})
.catch(err => {
  console.error('Login error:', err);
});

    
}

  return (
    <div className='Construction'>
        <img src='/assets/black_logo_with_text_edit.png'></img>

        <h1>We are currently under construction</h1>
        <p>Owner ? Log in :</p>
        <form method='POST' action={`${serverUrl}/login-admin`} onSubmit={handleSubmit}> 
            <input type='text' name="username" placeholder='Username' onChange={handleChange}></input>
            <input type='password'name="password"  placeholder='password' onChange={handleChange}></input>
            <button>Log in</button>
        </form>
    </div>
  )
}

export default Construction
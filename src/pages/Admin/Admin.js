import React ,{useState,useEffect}from 'react'
import './Admin.css'
import axios from 'axios'
import Cookies from 'js-cookie'
import serverUrl from '../../serverUrl'
import AddOrEdit from '../../components/AddOrEdit/AddOrEdit'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'


const Admin = () => {

  const [admin,setAdmin] = useState(false)
  const [search,setSearch] = useState("")
  const [data,setData] = useState([])
  const [filteredData,setFilteredData] = useState([])
  const [selectedCompany,setSelectedCompany] = useState(null)
  const [addOrEditMode,setAddOrEditMode] = useState(null) //null , add , edit
  const [resetData,setResetData] = useState(false)
  const [loading,setLoading] = useState(false)

  useEffect(()=>{
   const admin = Cookies.get("isLoggedIn")
   if(admin){
    setAdmin(true)
   }
   
  },[])


  useEffect(()=>{
    const data = axios.get(`${serverUrl}/companies`)
  .then(res => {
    setData(res.data)
    setFilteredData(res.data)
  }
  ).catch(err => console.error(err));
  },[resetData])


  function handleSubmit(e) {
    e.preventDefault();
    // Handle admin login logic here
    console.log('Admin login submitted');
    
   const formData =  new FormData(e.target)

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

  function handleSearch(e){

    const value = e.target.value;
    setSearch(value)
    

    const filteredData = data.filter(company =>
      company.companyName.toLowerCase().includes(value.toLowerCase()))

      setFilteredData(filteredData)
    

  }

  function handleAddOrEdit(e,company){
    const name = e.target.name;
    if(name === 'add'){
      setAddOrEditMode('add')
      setSelectedCompany(null)
    }else{
      setSelectedCompany(company)
      setAddOrEditMode('edit')
      console.log(company);
    }
  }

  
    function handleCloseModal(){
      setAddOrEditMode(null)
    }

    function handleDelete(id){
      setLoading(true)
      console.log(id);
      axios.post(`${serverUrl}/delete/${id}`).then((res)=>{
        console.log(res.data);
        setResetData(!resetData)
        setLoading(false)
      }).catch((err)=>{
        alert("Error deleting company, please try again.")
        setLoading(false)
      })
      
    }
  return (
    <div className='Admin'>
      {loading && <LoadingSpinner/>}
      {/* Simple log in form for admin: */}

      {admin ? 
      <>
      <nav className='admin-nav'>
        <div className='header'>
          <img src='/assets/white_e_logo.png' alt='Logo' className='Admin-logo' height={"90px"} />
          <h1>Admin panel</h1>
        </div>
        <div className='search-bar'>
          <img src='/assets/search-icon.png'></img>
          <input placeholder='Search' name='search' type='text' onChange={handleSearch} value={search}></input>
        </div>
      </nav>
      <div className='display-columns'>
        <div className='header'>
          <h3>Company name</h3>
          <button onClick={handleAddOrEdit} name='add'>Add</button>
        </div>
        {filteredData.map((company)=>{
          return(
            <div className='company'>
              <p>{company.companyName}</p>
              <p>{company.policyNumber}</p>
              
              <div className='info'><img src='/assets/mdi_auto-towing.png' height={"25px"}></img> {company.towingServiceNumber} <button onClick={(e)=>{handleDelete(company.id)}} >Delete</button> <button onClick={(e) => handleAddOrEdit(e,company)} name='edit' value={company}>Edit</button></div>
            </div>
          )
        })}

        {addOrEditMode && <AddOrEdit mode={addOrEditMode} company={selectedCompany} onClick={handleCloseModal} onSucces={(e) =>{setResetData("")}}/>}

      </div>
      </>
      :
      <>
      <form className='Admin-login-form' onSubmit={handleSubmit}>
      <input type="text" placeholder='Username' name='username'></input>
      <input type='password' placeholder='Password' name='password'></input>
      <button >Log in</button>
      </form>
      </>}


    </div>
  )
}

export default Admin
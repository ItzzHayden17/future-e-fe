import React ,{useState} from 'react'
import './AddOrEdit.css'
import serverUrl from '../../serverUrl'
import axios from 'axios'

const AddOrEdit = (props) => {

 const [company,setCompany] = useState(props.company)

    function handleCloseModal(e){
        props.onClick(e)
    }

    function handleChange(e){
        const {name,value} = e.target
        setCompany((prev)=>({
            ...prev,
            [name]:value
        }))
    }
  return (
    <div className='AddOrEdit'>

        <div className='form'>
            <p onClick={handleCloseModal}>X</p>
            {props.mode === 'add' && <>
        <h1>Add a Company</h1>
        <form method='POST' action={`${serverUrl}/add-company`}>
            <label>Company name</label>
            <input placeholder='Company name'></input>

            <label>Password</label>
            <input placeholder='Password'></input>
            
            <label>Confirm Password</label>
            <input placeholder='Confirm Password'></input>

            <label>Towing service number</label>
            <input placeholder='Company name'></input>

            <button>Add</button>
        </form>
        </>}
        {props.mode === 'edit' && (
  <>
    <h1>Edit Company</h1>
    <form onSubmit={(e) => {
      e.preventDefault();
      console.log("Updated company:", company);
      axios.put(`${serverUrl}/edit-company`, company)
        .then(res => props.onClose())
        .catch(err => console.error(err));
    }}>
      <label>Company name</label>
      <input 
        name="companyName"
        placeholder="Company name"
        value={company.companyName || ""}
        onChange={handleChange}
      />

      <label>Password</label>
      <input 
        type="password"
        name="password"
        placeholder="Password"
        value={company.password || ""}
        onChange={handleChange}
      />
      
      <label>Confirm Password</label>
      <input 
        type="password"
        name="confirmPassword"
        placeholder="Confirm Password"
        onChange={handleChange}
      />

      <label>Towing service number</label>
      <input 
        name="towingServiceNumber"
        placeholder="Towing service number"
        value={company.towingServiceNumber || ""}
        onChange={handleChange}
      />

      <button type="submit">Save Changes</button>
    </form>
  </>
)}

        </div>
    </div>
  )
}

export default AddOrEdit
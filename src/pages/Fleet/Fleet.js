import React, { useEffect } from 'react'
import './Fleet.css'
import axios from 'axios'
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner'
import serverUrl from '../../serverUrl'
import Cookies from 'js-cookie';

const Fleet = () => {
    const [loading,setLoading] = React.useState(false)
    const [loggedIn,setLoggedIn] = React.useState(false)
    const [fleet,setFleet] = React.useState([])
    const [vehicleToEdit,setVehicleToEdit] = React.useState(null)
    const [showAddPopup, setShowAddPopup] = React.useState(false);

const [newVehicle, setNewVehicle] = React.useState({
  make: "",
  model: "",
  regNumber: "",
  sumInsured: "",
  typeOfCover: "TPO"
});


    function handleSubmit(e) {
        setLoading(true)
        e.preventDefault()
        const formData = new FormData(e.target); // grabs data from the form that triggered submit

        const data = {
        username: formData.get('username'),
        password: formData.get('password'),
        };
        
        axios.post(`${serverUrl}/fleet-login`,{data}).then((data)=>{
            if (data.status === 200) {
                Cookies.set("fleetOwner",JSON.stringify(data.data.username))
                setLoggedIn(true)
            }
        })
        
        setLoading(false)
    }

    useEffect(()=>{
        try {
            if (Cookies.get("fleetOwner")) {
                setLoggedIn(true)
            }

        } catch (error) {
            console.log(error);
        }

        if (loggedIn) {
            const username = JSON.parse(Cookies.get("fleetOwner") )
            axios.get(`${serverUrl}/fleet-data`,username).then((data)=>{
                setFleet(data.data);
            })

        }
    },[loggedIn])


    function editVehicle(e) {
        setVehicleToEdit(e);
    }

    function saveVehicle(e) {
        setLoading(true)
        try {
                axios.post(`${serverUrl}/edit-vehicle`,vehicleToEdit).then((data)=>{
                if (data.status === 200) {
                    setVehicleToEdit(null);
                    setLoading(false)
                    window.location.reload();
                }
        })
        } catch (error) {
            console.log(error);
        }

         setLoading(false)
    }

    const handleChange = (field, value) => {
  setVehicleToEdit({
    ...vehicleToEdit,
    [field]: value
  });
};

function deleteVehicle(e) {
    setLoading(true)
    axios.post(`${serverUrl}/delete-vehicle`,e).then((data)=>{
        if (data.status === 200) {
            setLoading(false)
            window.location.reload();
        }})
}

function addVehicle() {
    setLoading(true);

    axios.post(`${serverUrl}/add-vehicle`, newVehicle)
        .then((data) => {
            if (data.status === 200) {
                setShowAddPopup(false);

                setNewVehicle({
                    make: "",
                    model: "",
                    regNumber: "",
                    sumInsured: "",
                    typeOfCover: "TPO"
                });

                window.location.reload();
            }
        })
        .catch((error) => {
            console.error(error);
        })
        .finally(() => {
            setLoading(false);
        });
}
  return (
    
    <div className='Fleet'>
        <div className='navbar'>
            <button onClick={() => setShowAddPopup(true)}>
  Add Vehicle
</button>
        </div>
        {loading && <LoadingSpinner/>}
        {loggedIn ? 
        <>
        <h1>Hello, {JSON.parse(Cookies.get("fleetOwner"))}</h1>
         {fleet.map((vehicle) => (
        <div className="" key={vehicle.id}>
          {vehicleToEdit && vehicleToEdit.id === vehicle.id ? (
            <div className="fleet-entry">
              <input
  type="text"
  value={vehicleToEdit.make}
  onChange={(e) => handleChange("make", e.target.value)}
/>

<input
  type="text"
  value={vehicleToEdit.model}
  onChange={(e) => handleChange("model", e.target.value)}
/>

<input
  type="text"
  value={vehicleToEdit.regNumber}
  onChange={(e) => handleChange("regNumber", e.target.value)}
/>
              <button onClick={()=>{saveVehicle(vehicle)}}>Save</button>
              <button onClick={() => deleteVehicle(vehicle)}>Delete</button>
            </div>
          ) : (
            <div className="fleet-entry">
              <p>{vehicle.make}</p>
              <p>{vehicle.model}</p>
              <p>{vehicle.regNumber}</p>
              <p>R{vehicle.sumInsured}</p>
              <p>{vehicle.typeOfCover}</p>

              <button onClick={() => editVehicle(vehicle)}>
                Edit
              </button>
            </div>
          )}
        </div>
      ))}
        </> : <>
      <img src='assets/black_logo_with_text.png' width={150} height={150}></img>
      <h1>Fleet Management</h1>
      <form className='Admin-login-form' onSubmit={handleSubmit}>
      <input type="text" placeholder='Username' name='username'></input>
      <input type='password' placeholder='Password' name='password'></input>
      <button >Log in</button>
      </form>
        </>}

        {showAddPopup && (
  <div className="popup-overlay">
    <div className="popup">
      <h2>Add Vehicle</h2>

      <input
        type="text"
        placeholder="Make"
        value={newVehicle.make}
        onChange={(e) =>
          setNewVehicle({
            ...newVehicle,
            make: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Model"
        value={newVehicle.model}
        onChange={(e) =>
          setNewVehicle({
            ...newVehicle,
            model: e.target.value
          })
        }
      />

      <input
        type="text"
        placeholder="Registration Number"
        value={newVehicle.regNumber}
        onChange={(e) =>
          setNewVehicle({
            ...newVehicle,
            regNumber: e.target.value
          })
        }
      />

      <input
        type="number"
        placeholder="Sum Insured"
        value={newVehicle.sumInsured}
        onChange={(e) =>
          setNewVehicle({
            ...newVehicle,
            sumInsured: e.target.value
          })
        }
      />

      <select
        value={newVehicle.typeOfCover}
        onChange={(e) =>
          setNewVehicle({
            ...newVehicle,
            typeOfCover: e.target.value
          })
        }
      >
        <option value="TPO">TPO</option>
        <option value="Full Comp">Full Comp</option>
      </select>

      <button onClick={addVehicle}>Save</button>
      <button onClick={() => setShowAddPopup(false)}>
        Cancel
      </button>
    </div>
  </div>
)}
    </div>
  )
}

export default Fleet
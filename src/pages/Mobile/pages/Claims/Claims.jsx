import React ,{useState} from 'react'
import './Claims.css'
import serverUrl from "../../../../serverUrl"
const Claims = () => {

    const [claim, setClaim] = useState(false);



    function handleSubmitClaim() {
        // Logic to submit the claim
        setClaim(true);
        // You can add more logic here, like sending data to a server
    }

  return (
    <div className='Claims'>
      {/* Implement a logout button maybe? */}
        {claim ? 
        <>
        <img src={"/assets/black_logo_with_text.png"} alt="Claims" width={"100px"} className='logo' />
        <h1>WeBuyCars</h1>
        <h3>Incident information</h3>

        <form method="post" action={`${serverUrl}/claims`}>
        <label>Company name</label>
        <input placeholder="Enter your Company name" type="text" ></input>
        <label>Password</label>
        <input placeholder="Password" type="password"></input>
                <label>Company name</label>
        <input placeholder="Enter your Company name" type="text" ></input>
        <label>Password</label>
        <input placeholder="Password" type="password"></input>
                <label>Company name</label>
        <input placeholder="Enter your Company name" type="text" ></input>
        <label>Password</label>
        <input placeholder="Password" type="password"></input>
                <label>Company name</label>
        <input placeholder="Enter your Company name" type="text" ></input>
        <label>Password</label>
        <input placeholder="Password" type="password"></input>

        <button>Submit</button>
        </form>
        
        </> 
        :
        <>
        <img src={"/assets/black_logo_with_text.png"} alt="Claims" width={"100px"} className='logo' />
        <h1>WeBuyCars</h1> {/*get actually name in cookie} */}
        <h3>What to do if you have a motor accident:</h3>
        <ul>
            <li><img src='assets/mdi_check-bold.png'></img>Stop immediately and stay calm</li>
            <li><img src='assets/icomoon-free_cross.png'></img>Do not admit or accept liablity</li>
        </ul>

        <a href='tel:0814385555'><img src='assets/mdi_auto-towing.png'></img><p>0814385555</p> </a>

        <button onClick={handleSubmitClaim}>Submit a Claim</button>
        </>}
    </div>
  )
}

export default Claims
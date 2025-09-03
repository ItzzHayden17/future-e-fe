import React, { useEffect, useRef, useState } from 'react';
import './Claims.css';
import serverUrl from "../../../../serverUrl";
import Cookies from 'js-cookie';
import SignatureCanvas from "react-signature-canvas";

const Claims = () => {
  const [claim, setClaim] = useState(false);
  const [company, setCompany] = useState("");
  const [imageURL, setImageURL] = useState(null);

  const sigCanvas = useRef(null);

  useEffect(() => {
    const companyCookie = Cookies.get('isLoggedInWithCompany');
    if (companyCookie) setCompany(JSON.parse(companyCookie));
  }, []);

  // Merge background image and signature sketch
  function getMergedImage() {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 300;

    const ctx = canvas.getContext("2d");

    // Draw background image first
    const background = new Image();
    background.src = "/assets/accident-diagram.png";
    background.onload = () => {
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      // Draw signature/sketch on top
      const sketch = new Image();
      sketch.src = sigCanvas.current.toDataURL("image/png");
      sketch.onload = () => {
        ctx.drawImage(sketch, 0, 0, canvas.width, canvas.height);

        // Get combined image as base64
        const combinedURL = canvas.toDataURL("image/png");
        setImageURL(combinedURL);
        console.log("Merged image URL:", combinedURL);
      };
    };
  }

  function handleSubmitForm() {
    setClaim(!claim);
  }

  return (
    <div className='Claims'>
      <button className='logout' onClick={() => { Cookies.remove("isLoggedInWithCompany"); window.location.reload(); }}>Logout</button>

      {claim ?
        <>
          <img src={"/assets/black_logo_with_text.png"} alt="Claims" width={"100px"} className='logo' />
          <h1>{company.companyName}</h1>
          <h3>Incident information</h3>

          <form method="post" action={`${serverUrl}/claims`}>

            <label>DATE, TIME, AND PLACE OF ACCIDENT</label>
            <input placeholder="2025/04/01,12:00,Silverton Pretoria" type="text" name="date_time_place" />

            <label>OTHER VEHICLE(S) DETAILS – MAKE(S), COLOUR(S) AND REGISTRATION NUMBER(S)</label>
            <input placeholder="OTHER VEHICLE(S) DETAILS" type="text" name="desc_other_vehicle" />

            <label>OTHER DRIVER(S) DETAILS – NAME(S), SURNAME(S), ADDRESS(ES), PHONE NUMBER(S),ID NUMBER(S)</label>
            <input placeholder="OTHER DRIVER(S) DETAILS" type="text" name="other_driver_details" />

            <label>OWNER DETAILS (ONLY IF THE DRIVER IS NOT THE OWNER) – NAME, ADDRESS, PHONE NUMBER</label>
            <input placeholder="OWNER DETAILS" type="text" name="owner_details" />

            <label>INSURANCE COMPANY(IES) – WITH WHICH THE OTHER VEHICLE(S) IS/ARE INSURED?</label>
            <input placeholder="INSURANCE COMPANY" type="text" name="insurance_company_of_other_driver" />

            <label>NAME AND CONTACT DETAILS OF ANY WITNESS(ES)</label>
            <input placeholder="Witness contact details" type="text" name="witness_contact_details" />

            <label>NAME AND STATION OF THE POLICE/TRAFFIC OFFICER – IF PRESENT</label>
            <input placeholder="Police officer details" type="text" name="police_officer_details" />

            <label>GIVE A SHORT DESCRIPTION OF THE ACCIDENT</label>
            <input placeholder="Description" type="text" name="accident_description" />

            <label>UPLOAD A SKETCH OF THE ACCIDENT (OPTIONAL)</label>
            <input type="hidden" name="accident_sketch" value={imageURL || ""} />

            <div style={{ position: "relative", width: "100%", height: 250 }}>
              {/* Background image */}
              <img
                src="/assets/accident-diagram.png"
                alt="background"
                style={{
                  width: "100%",
                  height: 250,
                  position: "relative",
                  top: 0,
                  left: 0,
                  zIndex: 0,
                   objectFit: "cover"
                }}
              />

              {/* Drawing canvas */}
              <SignatureCanvas
                ref={sigCanvas}
                penColor="red"
                backgroundColor="transparent"
                canvasProps={{
                  height: 250,
                  width:"fit-content",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    height:250
                  },
                }}
                onEnd={getMergedImage} // merge sketch with background
              />
            </div>
            <button
              type="button"
              onClick={() => {
                sigCanvas.current.clear();
                setImageURL(null); // reset merged image too
              }}
            >
              Reset Sketch
            </button>

            <button type="button" onClick={handleSubmitForm}>Cancel</button>
            <button type="submit">Submit</button>
            <input type="hidden" name="companyName" value={company.companyName} />
            <input type="hidden" name="companyName" value={company.policyNumber} />
          </form>
        </>
        :
        <>
          <img src={"/assets/black_logo_with_text.png"} alt="Claims" width={"100px"} className='logo' />
          <h1>{company.companyName}</h1>
          <p>{company.policyNumber}</p>
          <h3>What to do if you have a motor accident:</h3>
          <ul className='instructions'>
            <li><img src='assets/mdi_check-bold.png' alt="check" />Stop immediately and stay calm</li>
            <li><img src='assets/icomoon-free_cross.png' alt="cross" />Do not admit or accept liability</li>
          </ul>

          <a href={`tel:${company.towingServiceNumber}`} >
            <img src='assets/mdi_auto-towing-black.png' alt="towing" />
            <p>{company.towingServiceNumber}</p>
          </a>

          <button onClick={handleSubmitForm}>Submit a Notification</button>
        </>
      }
    </div>
  );
}

export default Claims;

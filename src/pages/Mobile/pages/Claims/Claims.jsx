import React, { useEffect, useRef, useState } from 'react';
import './Claims.css';
import serverUrl from "../../../../serverUrl";
import Cookies from 'js-cookie';
import SignatureCanvas from "react-signature-canvas";

const Claims = () => {
  const [claim, setClaim] = useState(false);
  const [company, setCompany] = useState("");
  const [imageURL, setImageURL] = useState(null);
  const [selectedImages, setSelectedImages] = useState([]);

  const sigCanvas = useRef(null);

  let now = new Date();
  let time = now.toLocaleTimeString();
  let date = now.toLocaleDateString();

  useEffect(() => {
    const companyCookie = Cookies.get('isLoggedInWithCompany');
    if (companyCookie) setCompany(JSON.parse(companyCookie));
  }, []);

  // Handle multiple image files
  function handleImageUpload(e) {
    setSelectedImages([...e.target.files]);
  }

  // Merge background image and sketch signature
  function getMergedImage() {
    const canvas = document.createElement("canvas");
    canvas.width = 400;
    canvas.height = 300;

    const ctx = canvas.getContext("2d");

    const background = new Image();
    background.src = "/assets/accident-diagram.png";
    background.onload = () => {
      ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

      const sketch = new Image();
      sketch.src = sigCanvas.current.toDataURL("image/png");
      sketch.onload = () => {
        ctx.drawImage(sketch, 0, 0, canvas.width, canvas.height);

        const combinedURL = canvas.toDataURL("image/png");
        setImageURL(combinedURL);
      };
    };
  }

  function handleSubmitForm() {
    setClaim(!claim);
  }

  // FINAL CLAIM SUBMISSION (MULTIPART FORM)
  function submitClaim(e) {
    e.preventDefault();

    const formData = new FormData();

    // Append text fields
    formData.append("date_time", `${time} ${date}`);
    formData.append("place", e.target.place.value);
    formData.append("desc_other_vehicle", e.target.desc_other_vehicle.value);
    formData.append("other_driver_details", e.target.other_driver_details.value);
    formData.append("owner_details", e.target.owner_details.value);
    formData.append("insurance_company_of_other_driver", e.target.insurance_company_of_other_driver.value);
    formData.append("witness_contact_details", e.target.witness_contact_details.value);
    formData.append("police_officer_details", e.target.police_officer_details.value);
    formData.append("accident_description", e.target.accident_description.value);
    formData.append("companyName", company.companyName);

    // Append merged sketch (still base64)
    if (imageURL) {
      formData.append("accident_sketch", imageURL);
    }

    // Append multiple uploaded images
    selectedImages.forEach((img) => {
      formData.append("images", img);
    });

    fetch(`${serverUrl}/claims`, {
      method: "POST",
      body: formData // multipart/form-data automatically
    })
      .then(res => res.text())
      .then(data => {
        if (data == 200) {
          window.location.href = "/";
        }
      })
      .catch(err => console.error(err));
  }

  return (
    <div className='Claims'>
      <button className='logout' onClick={() => { Cookies.remove("isLoggedInWithCompany"); window.location.reload(); }}>Logout</button>

      {claim ? (
        <>
          <img src={"/assets/black_logo_with_text.png"} alt="Claims" width={"100px"} className='logo' />
          <h1>{company.companyName}</h1>
          <h3>Incident information</h3>

          <form onSubmit={submitClaim}>

            <label>DATE, TIME</label>
            <input type="text" name="date_time" value={`${time} ${date}`} readOnly />

            <label>PLACE OF ACCIDENT</label>
            <input type="text" placeholder='PLACE OF ACCIDENT' name="place" />

            <label>OTHER VEHICLE(S) DETAILS</label>
            <input placeholder="OTHER VEHICLE(S) DETAILS" type="text" name="desc_other_vehicle" />

            <label>OTHER DRIVER(S) DETAILS</label>
            <input placeholder="OTHER DRIVER(S) DETAILS" type="text" name="other_driver_details" />

            <label>OWNER DETAILS</label>
            <input placeholder="OWNER DETAILS" type="text" name="owner_details" />

            <label>THIRD PARTY - INSURANCE COMPANY DETAILS</label>
            <input placeholder="INSURANCE COMPANY" type="text" name="insurance_company_of_other_driver" />

            <label>NAME AND CONTACT DETAILS OF ANY WITNESS(ES)</label>
            <input placeholder="Witness contact details" type="text" name="witness_contact_details" />

            <label>SAPS DETAILS / CASE NUMBER</label>
            <input placeholder="Police officer details" type="text" name="police_officer_details" />

            <label>DESCRIPTION OF THE ACCIDENT</label>
            <input placeholder="Description" type="text" name="accident_description" />

            <label>OPTIONAL EXTRA IMAGES (PHOTOS)</label>
            <input type="file" name="images" multiple accept="image/*" onChange={handleImageUpload} />

            <label>ACCIDENT SKETCH (OPTIONAL)</label>

            <div style={{ position: "relative", width: "100%", height: 250 }}>
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
              <SignatureCanvas
                ref={sigCanvas}
                penColor="red"
                backgroundColor="transparent"
                canvasProps={{
                  height: 250,
                  width: "100%",
                  style: {
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                  },
                }}
                onEnd={getMergedImage}
              />
            </div>

            <button type="button" onClick={() => { sigCanvas.current.clear(); setImageURL(null); }}>
              Reset Sketch
            </button>

            <button type="button" onClick={handleSubmitForm}>Cancel</button>
            <button type="submit">Submit</button>
          </form>
        </>
      ) : (
        <>
          <img src={"/assets/black_logo_with_text.png"} alt="Claims" width={"100px"} className='logo' />
          <h1>{company.companyName}</h1>
          <p className='policy-header'>Policy number : {company.policyNumber}</p>

          <button onClick={handleSubmitForm}>Submit a Notification</button>
        </>
      )}
    </div>
  );
};

export default Claims;

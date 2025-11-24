import React, { useState } from "react";
import "./AddOrEdit.css";
import serverUrl from "../../serverUrl";
import axios from "axios";

const AddOrEdit = (props) => {
  const [company, setCompany] = useState(props.company);

  function handleCloseModal(e) {
    props.onClick(e);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setCompany((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // ---------------------------
  // RENDER
  // ---------------------------
  return (
    <div className="AddOrEdit">
      <div className="form">
        <p onClick={handleCloseModal}>X</p>

        {/* ---------------------- ADD MODE ---------------------- */}
        {props.mode === "add" && (
          <>
            <h1>Add a Company</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target); // IMPORTANT

                axios
                  .post(`${serverUrl}/add-company`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                  .then(() => window.location.reload())
                  .catch((err) => console.error(err));
              }}
            >
              <label>Company name</label>
              <input placeholder="Company name" name="companyName" />

              <label>Password</label>
              <input placeholder="Password" name="password" type="password" />

              <label>Confirm Password</label>
              <input placeholder="Confirm Password" type="password" />

              <label>Towing service number</label>
              <input placeholder="Number" type="number" name="towingNumber" />

              <label>Policy number</label>
              <input placeholder="Policy number" type="text" name="policyNumber" />

              <label>Claim form</label>
              <input type="file" name="file" />

              <button>Add</button>
            </form>
          </>
        )}

        {/* ---------------------- EDIT MODE ---------------------- */}
        {props.mode === "edit" && (
          <>
            <h1>Edit Company</h1>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);

                axios
                  .post(`${serverUrl}/edit-company`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                  })
                  .then(() => window.location.reload())
                  .catch((err) => console.error(err));
              }}
            >
              <input type="hidden" name="id" value={company.id} />

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
                name="towingNumber"
                placeholder="Towing service number"
                value={company.towingServiceNumber || ""}
                onChange={handleChange}
              />

              <label>Policy number</label>
              <input
                name="policyNumber"
                placeholder="Policy number"
                value={company.policyNumber || ""}
                onChange={handleChange}
              />
              <h6>Current claim form: {company.claimFormUrl ? (<a href={company.claimFormUrl} target="_blank" rel="noopener noreferrer">View Document</a>) : ("No document uploaded")}</h6>
              <label>Claim form (upload new)</label>
              <input type="file" name="file" />

              <button type="submit">Save Changes</button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default AddOrEdit;

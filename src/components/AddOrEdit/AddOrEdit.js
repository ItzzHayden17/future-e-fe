import React, { useState } from "react";
import "./AddOrEdit.css";
import serverUrl from "../../serverUrl";
import axios from "axios";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const AddOrEdit = (props) => {
  const [company, setCompany] = useState(props.company || {});
  const [loading, setLoading] = useState(false);

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

  // Helper to convert FormData to object & remove empty/undefined fields
  const formDataToObject = (formData) => {
    const obj = {};
    formData.forEach((value, key) => {
      if (value !== undefined && value !== "" && value !== null) {
        obj[key] = value;
      }
    });
    return obj;
  };

  return (
    <div className="AddOrEdit">
      {loading && <LoadingSpinner />}
      <div className="form">
        <p onClick={handleCloseModal}>X</p>

        {/* ---------------------- ADD MODE ---------------------- */}
        {props.mode === "add" && (
          <>
            <h1>Add a Company</h1>

            <form
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);

                const formData = new FormData(e.target);

                try {
                  await axios.post(`${serverUrl}/add-company`, formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                  });
                  window.location.reload();
                } catch (err) {
                  console.error(err);
                  alert("Error adding company, please try again.");
                  setLoading(false);
                }
              }}
            >
              <label>Company name</label>
              <input placeholder="Company name" name="companyName" />

              <label>Password</label>
              <input placeholder="Password" name="password" type="password" />

              <label>Confirm Password</label>
              <input placeholder="Confirm Password" name="confirmPassword" type="password" />

              <label>Towing service number</label>
              <input placeholder="Number" type="number" name="towingServiceNumber" />

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
              onSubmit={async (e) => {
                e.preventDefault();
                setLoading(true);

                const formData = new FormData(e.target);
                const data = formDataToObject(formData);

                try {
                  await axios.post(`${serverUrl}/edit-company`, data, {
                    headers: { "Content-Type": "multipart/form-data" },
                  });
                  window.location.reload();
                } catch (err) {
                  console.error(err);
                  alert("Error saving changes, please try again.");
                  setLoading(false);
                }
              }}
            >
              <input type="hidden" name="id" value={company.id || ""} />

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

              <label>Policy number</label>
              <input
                name="policyNumber"
                placeholder="Policy number"
                value={company.policyNumber || ""}
                onChange={handleChange}
              />

              <h6>
                Current claim form:{" "}
                {company.claimFormUrl ? (
                  <a href={company.claimFormUrl} target="_blank" rel="noopener noreferrer">
                    View Document
                  </a>
                ) : (
                  "No document uploaded"
                )}
              </h6>

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

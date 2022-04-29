import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addData } from "../Action/Action";
import "./Step1.css";
const Step1 = (props) => {
  const dispatch = useDispatch();
  const [inputData, Setinputdata] = useState({
    fname: "",
    lname: "",
    email: "",
    country: "",
    street: "",
    city: "",
    state: "",
    zip: "",
  });

  // ----------------------form onChange function logic----------
  const inputDataChange = (e) => {
    Setinputdata({ ...inputData, [e.target.name]: e.target.value });
  };

  // ---------sending data to store---------
  const sendDatatoRedux = (e) => {
    e.preventDefault();
    let new_data = {
      fname: inputData.fname,
      lname: inputData.lname,
      email: inputData.email,
      country: inputData.country,
      street: inputData.street,
      city: inputData.city,
      state: inputData.state,
      zip: inputData.zip,
    };
    console.log(new_data);
    dispatch(addData(new_data));
  };
  return (
    <>
      <div>Step1</div>
      {/* -------------i did not use validtion and did not focus on css so many bugs in my code----- sorrrry----- */}
      <form>
        <div className="form-div">
          <div className="step1-maindiv">
            <div className="mb-3">
              <label className="form-label">First name</label>
              <input
                type="text"
                name="fname"
                className="form-control"
                value={inputData.fname}
                onChange={(e) => inputDataChange(e)}
              />
            </div>
            <div className="mt-4 mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                name="email"
                className="form-control"
                value={inputData.email}
                onChange={(e) => inputDataChange(e)}
              />
            </div>
          </div>
          <div className="step1-maindiv">
            <div className="mb-3">
              <label className="form-label">Last name</label>
              <input
                type="text"
                name="lname"
                className="form-control"
                value={inputData.lname}
                onChange={(e) => inputDataChange(e)}
              />
            </div>
            <label className="form-label mt-1">Country/Region</label>

            <select
              className="form-select"
              aria-label="Default select example"
              name="country"
              onChange={(e) => inputDataChange(e)}
              value={inputData.country}
            >
              <option value="select">Select Country</option>
              <option value="india">India</option>
              <option value="united state">United State</option>
              <option value="nepal">Nepal</option>
              <option value="japan">Japan</option>
              <option value="koria">Koria</option>
              <option value="shri lanka">Shri Lanka</option>
            </select>
          </div>
        </div>
        <div className="m-4">
          <label className="form-label">Street address</label>
          <input
            type="text"
            name="street"
            className="form-control"
            value={inputData.street}
            onChange={(e) => inputDataChange(e)}
          />
        </div>
        <div className="address-div">
          <div className="m-4">
            <label className="form-label">City</label>
            <input
              type="text"
              name="city"
              className="form-control"
              value={inputData.city}
              onChange={(e) => inputDataChange(e)}
            />
          </div>
          <div className="m-4">
            <label className="form-label">State/Province</label>
            <input
              type="text"
              name="state"
              className="form-control"
              value={inputData.state}
              onChange={(e) => inputDataChange(e)}
            />
          </div>
          <div className="m-4">
            <label className="form-label">Zip/Postal</label>
            <input
              type="number"
              name="zip"
              className="form-control"
              value={inputData.zip}
              onChange={(e) => inputDataChange(e)}
            />
          </div>
        </div>
        <div className=" my-btn-class">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={(e) => {
              props.StepChange();
              sendDatatoRedux(e);
            }}
          >
            Next
          </button>
        </div>
      </form>
    </>
  );
};

export default Step1;

import React from "react";
import { useSelector } from "react-redux";
import "./Step3.css";
const Step3 = (props) => {
  // ----------getting data from store for displying i feched only one data
  let mystate = useSelector((state) => state.formReducer.allDetails[0]);
  return (
    <>
      <div>Step3</div>
      <div>
        <div className="step3-info-div">
          <h4>Application Information</h4>

          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nemo,
            debitis.
          </p>
        </div>
        <div className="step3-info-div2">
          <b>Name : </b>
          <h6> {mystate.fname + " " + mystate.lname}</h6>
        </div>
        <div className="step3-info-div2">
          <b>Email : </b>
          <h6> {mystate.email}</h6>
        </div>
        <div className="step3-info-div2">
          <b>Country : </b>
          <h6> {mystate.country}</h6>
        </div>
        <div className="step3-info-div2">
          <b>State : </b>
          <h6> {mystate.state}</h6>
        </div>
        <div className="step3-info-div2">
          <b>city : </b>
          <h6> {mystate.city}</h6>
        </div>
        <div className="step3-info-div2">
          <b>Street : </b>
          <h6> {mystate.street}</h6>
        </div>
        <div className="step3-info-div2">
          <b>Zip/Postal : </b>
          <h6> {mystate.zip}</h6>
        </div>
        <div className="step3-btn-div">
          <button className="btn btn-primary" onClick={props.StepBack}>
            Back
          </button>
          <button className="btn btn-primary" onClick={props.StepChange}>
            Finish
          </button>
        </div>
      </div>
    </>
  );
};

export default Step3;

import React, { useState } from "react";
import "./Step2.css";

const Step2 = (props) => {
  const [checke, SetCheked] = useState();
  const chekboxChange = (e) => {
    SetCheked(e.target.value);
  };
  return (
    <>
      <div>Step2</div>

      <div className="step2-main-div">
        <h4>By Email</h4>

        <div className="form-check">
          <input
            className="form-check-input"
            name="comment"
            type="checkbox"
            onChange={(e) => {
              chekboxChange(e);
            }}
            value="get notified when someone posts a comment"
          />
          <label className="form-check-label">Coments</label>
          <p>get notified when someone posts a comment</p>
        </div>

        <div className="form-check">
          <input
            className="form-check-input"
            name="posts"
            type="checkbox"
            onChange={(e) => {
              chekboxChange(e);
            }}
            value="get notified when a candidates applies for a job"
          />
          <label className="form-check-label">Candidates</label>
          <p>get notified when a candidates applies for a job</p>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            name="offers"
            type="checkbox"
            onChange={(e) => {
              chekboxChange(e);
            }}
            value="get notified when a candidates accepts or regects an offer"
          />
          <label className="form-check-label">Offers</label>
          <p>get notified when a candidates accepts or regects an offer</p>
        </div>
        <h3>Push Notification</h3>
        <p>These are deliverd via SMS to your mobile phone</p>
        <div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label">Everything</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">Same as email</label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
            />
            <label className="form-check-label">No Push Notification</label>
          </div>
        </div>
        <div className="step2-btn-div">
          <button className="btn btn-primary" onClick={props.StepBack}>
            Back
          </button>
          <button className="btn btn-primary" onClick={props.StepChange}>
            Next
          </button>
        </div>
      </div>
    </>
  );
};

export default Step2;

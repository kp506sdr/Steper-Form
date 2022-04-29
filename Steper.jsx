import React from "react";
import "./Steper.css";
const Steper = ({ step }) => {
  return (
    // this is simple steper logic
    <>
      <div className={step >= 4 ? "hide" : "steper-main-div"}>
        <div className={step >= 1 ? "d1" : ""}>
          <h2>
            <i className="fa-solid fa-circle-check" />
          </h2>
        </div>
        <div className={step >= 2 ? "d1" : ""}>
          <h2>
            <i className="fa-solid fa-circle-check" />
          </h2>
        </div>
        <div className={step >= 3 ? "d1" : ""}>
          <h2>
            <i className="fa-solid fa-circle-check" />
          </h2>
        </div>
      </div>
    </>
  );
};

export default Steper;

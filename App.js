import React, { useState } from "react";
import "./App.css";
import Finish from "../src/component/Finish";
import Step1 from "../src/component/Step1";
import Step2 from "../src/component/Step2";
import Step3 from "../src/component/Step3";
import Steper from "../src/component/steps/Steper";
function App() {
  // --------------steper strat-------------------------
  const [step, Setstep] = useState(1);
  const StepChange = () => {
    Setstep(step + 1);
  };
  const StepBack = () => {
    Setstep(step - 1);
  };
  // ------------ steper end----------------------------
  return (
    <>
      <div className="main-app-div">
        {/* ------------prop passed in steper component */}
        <div className="first-div">
          <Steper step={step} />
        </div>
        {/* page navigation using state */}
        <div className="second-div">
          {step === 1 && <Step1 StepChange={StepChange} />}
          {step === 2 && <Step2 StepChange={StepChange} StepBack={StepBack} />}
          {step === 3 && <Step3 StepChange={StepChange} StepBack={StepBack} />}
          {step === 4 && <Finish />}
        </div>
      </div>
    </>
  );
}

export default App;

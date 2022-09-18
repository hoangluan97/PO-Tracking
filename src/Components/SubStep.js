import React, { useState } from "react";

function SubStep({ stepArray, poStep, step, updatePoStep }) {
  const [isChecked, setIsChecked] = useState(
    Array(step.subStep.length).fill(true)
  );
  const subStepContent = stepArray.docs.filter(
    (data) => data.id === step.nameStep
  );
  const subStepIndex = poStep.findIndex(
    (value) => value.nameStep === step.nameStep
  );
  const handleOnchange = (e, index) => {
    const { value, checked } = e.target;
    if (checked) {
      let subStepArray = [...poStep[subStepIndex].subStep, value];
      console.log(subStepIndex);

      updatePoStep((step) =>
        step.map((obj, idx) => {
          if (idx === subStepIndex) return { ...obj, subStep: subStepArray };
        })
      );
      let checkStatus = [...isChecked];
      checkStatus[index] = true;
      setIsChecked(checkStatus);
    } else {
      let subStepArray = poStep[subStepIndex].subStep.filter(
        (subStep) => subStep !== value
      );
      console.log(subStepIndex);

      updatePoStep((step) =>
        step.map((obj, idx) => {
          if (idx === subStepIndex) {
            return { ...obj, subStep: subStepArray };
          } else {
            return { ...obj };
          }
        })
      );

      let checkStatus = [...isChecked];
      checkStatus[index] = false;
      setIsChecked(checkStatus);
    }
  };
  console.log(poStep);

  return subStepContent[0].data().subStep.map((step, index) => (
    <div key={index}>
      <input
        type="checkbox"
        id={step}
        key={index}
        value={step}
        checked={isChecked[index]}
        onChange={(e) => handleOnchange(e, index)}
      />
      <label htmlFor={step}>{step}</label>
    </div>
  ));
}

export default SubStep;

import React, { useState } from "react";

function CheckList({
  stepArray,
  updatePoStep,
  poStep,
  isChecked,
  updateIsChecked,
}) {
  const handleOnchange = (e, index) => {
    const { value, checked } = e.target;
    if (checked) {
      updatePoStep((step) => [
        ...step,
        { nameStep: value, subStep: stepArray?.docs[index].data().subStep },
      ]);

      let checkStatus = [...isChecked];
      checkStatus[index] = true;
      updateIsChecked(checkStatus);
    } else {
      updatePoStep((step) => step.filter((arr) => arr.nameStep !== value));
      let checkStatus = [...isChecked];
      checkStatus[index] = false;
      updateIsChecked(checkStatus);
    }
  };
  const checkListContent = stepArray?.docs?.map((step, index) => (
    <div key={step.id}>
      <input
        type="checkbox"
        className="mr-2"
        id={step.id}
        value={step.id}
        checked={isChecked[index]}
        onChange={(e) => handleOnchange(e, index)}
      />
      <label htmlFor={step.id}>{step.id}</label>
      <br />
    </div>
  ));
  return (
    <div>
      <form>{checkListContent}</form>
    </div>
  );
}

export default CheckList;

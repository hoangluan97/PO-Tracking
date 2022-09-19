import { MinusCircleIcon } from "@heroicons/react/24/solid";
import { deleteDoc, doc } from "firebase/firestore";
import React from "react";
import { db } from "../FirebaseConfig";

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
  const handleDeleteStep = (name) => {
    console.log(name.id);
    deleteDoc(doc(db, "Process", name.id));
  };
  const checkListContent = stepArray?.docs?.map((step, index) => (
    <div key={step.id} className="flex">
      <input
        type="checkbox"
        className="mr-2"
        id={step.id}
        value={step.id}
        checked={isChecked[index]}
        onChange={(e) => handleOnchange(e, index)}
      />
      <label htmlFor={step.id}>{step.id}</label>
      <MinusCircleIcon
        onClick={() => handleDeleteStep(step)}
        className="w-4 ml-2"
      />
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

import React from "react";
import StepBoard from "./StepBoard";
import { db } from "../FirebaseConfig";
import { deleteDoc, doc, setDoc, updateDoc } from "firebase/firestore";
function POPlan({ poInformation }) {
  let currentIndex = poInformation
    ?.data()
    .process.findIndex(
      (value) => value.nameStep === poInformation?.data().currentStep
    );
  console.log(poInformation.data());

  const handleNextStep = () => {
    console.log(poInformation?.data().currentStep);
    currentIndex = currentIndex + 1;
    if (currentIndex < poInformation?.data().process.length) {
      updateDoc(doc(db, "Plan", poInformation.id), {
        currentStep: poInformation?.data().process[currentIndex].nameStep,
      });
    } else {
      setDoc(doc(db, "WareHouse", poInformation.id), poInformation.data());

      deleteDoc(doc(db, "Plan", poInformation.id));
    }
  };
  const handlePreviousStep = () => {
    if (currentIndex > 0) {
      currentIndex = currentIndex - 1;
      updateDoc(doc(db, "Plan", poInformation.id), {
        currentStep: poInformation?.data().process[currentIndex].nameStep,
      });
    }
  };
  return (
    <div className="flex items-center justify-around space-x-3 rounded-md border-2 border-green-400 min-h-[120px] bg-white w-[100%]">
      <div className="min-w-fit w-[100px] flex items-center justify-center">
        <p>{poInformation?.id}</p>
      </div>
      <div className="w-[60%] border-x border-green-500">
        <StepBoard
          poStep={poInformation?.data().process}
          currentStep={poInformation?.data().currentStep}
        />
      </div>
      <div className="flex space-x-2 items-center p-1 w-[20%]">
        <button
          className="border min-h-fit text-[13px] font-medium rounded-md w-24 h-12 bg-green-500 text-white"
          onClick={handleNextStep}
        >
          Chuyển bước
        </button>
        <button
          className="border min-h-fit text-[13px] font-medium rounded-md w-24 h-12 bg-green-500 text-white"
          onClick={handlePreviousStep}
        >
          Trở về
        </button>
      </div>
    </div>
  );
}

export default POPlan;

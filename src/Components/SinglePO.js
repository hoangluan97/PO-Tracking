import React from "react";
import StepBoard from "./StepBoard";
import { db } from "../FirebaseConfig";
import { doc, updateDoc } from "firebase/firestore";
function SinglePO({ poInformation }) {
  const currentIndex = poInformation
    ?.data()
    .process.findIndex(
      (value) => value.nameStep === poInformation?.data().currentStep
    );
  const handleNextStep = () => {
    if (currentIndex + 1 < poInformation?.data().process.length)
      updateDoc(doc(db, "PO", poInformation.id), {
        currentStep: poInformation?.data().process[currentIndex + 1].nameStep,
      });
  };
  const handlePreviousStep = () => {
    if (currentIndex > 0)
      updateDoc(doc(db, "PO", poInformation.id), {
        currentStep: poInformation?.data().process[currentIndex - 1].nameStep,
      });
  };
  return (
    <div className="flex items-center justify-around space-x-3 rounded-md border-2 border-green-400 min-h-[120px] bg-white w-[820px]">
      <div className="min-w-fit w-[100px] flex items-center justify-center">
        <p>{poInformation?.id}</p>
      </div>
      <div className="w-[60%] border-x border-green-500">
        <StepBoard
          poStep={poInformation?.data().process}
          currentStep={poInformation?.data().currentStep}
        />
      </div>
      <div className="flex space-x-2 items-center p-3">
        <button
          className="border min-h-fit text-[15px] font-medium rounded-md w-24 h-12 bg-green-500 text-white"
          onClick={handleNextStep}
        >
          Bước tiếp theo
        </button>
        <button
          className="border min-h-fit text-[15px] font-medium rounded-md w-24 h-12 bg-green-500 text-white"
          onClick={handlePreviousStep}
        >
          Bước trước
        </button>
      </div>
    </div>
  );
}

export default SinglePO;

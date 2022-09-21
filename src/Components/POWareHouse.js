import React from "react";
import StepBoard from "./StepBoard";
import { db } from "../FirebaseConfig";
import { deleteDoc, doc } from "firebase/firestore";
function POWareHouse({ poInformation }) {
  const handledDelete = () => {
    deleteDoc(doc(db, "WareHouse", poInformation.id));
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
          onClick={handledDelete}
        >
          xóa
        </button>
      </div>
    </div>
  );
}

export default POWareHouse;

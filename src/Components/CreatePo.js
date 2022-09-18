import React, { useContext, useEffect, useState } from "react";
import CheckList from "./CheckList";
import StepBoard from "./StepBoard";
import { db } from "../FirebaseConfig";
import { doc, serverTimestamp, setDoc } from "firebase/firestore";
import { Context } from "../App";

function CreatePo() {
  const { POvalue, stepArray } = useContext(Context);
  const [poStep, setPoStep] = useState([]);
  const [poName, setPoName] = useState("");
  const [isChecked, setIsChecked] = useState([]);
  useEffect(() => {
    if (stepArray) {
      setIsChecked(Array(stepArray.docs?.length).fill(false));
    }
  }, [stepArray]);
  const handleConfirm = () => {
    if (poStep && poName) {
      setDoc(doc(db, `PO/${poName}`), {
        process: poStep,
        currentStep: poStep[0].nameStep,
        createdAt: serverTimestamp(),
      });
      alert("Tạo PO thành công");
      setPoName("");
      setPoStep([]);
      setIsChecked(Array(stepArray?.docs?.length).fill(false));
    } else if (!poStep.length || !poName.length) {
      alert("Nhập đầy đủ các thông tin cần thiết");
    }
  };
  return (
    <div className="mt-8 flex flex-col justify-start items-center space-y-4 w-full">
      <div className="space-y-4 border-2 p-4 rounded-lg bg-white">
        <form
          action=""
          className=" flex space-x-3 items-center text-green-500 text-[16px] font-medium"
        >
          <label htmlFor="name">Tên PO</label>
          <input
            className="border-2 rounded-lg focus:outline-green-300 px-2 py-1 text-black text-[15px] font-normal"
            required
            type="text"
            value={poName}
            onChange={(e) => setPoName(e.target.value)}
          />
          <button
            type="submit"
            className="border-2 rounded-lg p-1 text-white bg-green-500"
            onClick={handleConfirm}
          >
            Xác nhận
          </button>
        </form>
        <CheckList
          stepArray={stepArray}
          updatePoStep={setPoStep}
          poStep={poStep}
          isChecked={isChecked}
          updateIsChecked={setIsChecked}
        />
      </div>

      <div className="min-h-fit min-w-fit border-2 border-green-500 flex justify-center items-center bg-white rounded-lg p-2">
        <StepBoard
          stepArray={stepArray}
          poStep={poStep}
          updatePoStep={setPoStep}
        />
      </div>
    </div>
  );
}

export default CreatePo;

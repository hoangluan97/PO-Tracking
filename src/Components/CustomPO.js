import { MinusCircleIcon, PlusCircleIcon } from "@heroicons/react/24/solid";
import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../FirebaseConfig";
function CustomPO() {
  const [subStepNumber, setSubStepNumber] = useState([""]);
  const [stepName, setStepName] = useState("");
  const handleAddNewStep = () => {
    setSubStepNumber((prev) => [...prev, ""]);
  };
  const handleDeleteStep = (index) => {
    let subStep = [...subStepNumber];
    subStep.splice(index, 1);
    setSubStepNumber(subStep);
  };
  const handleOnchangeSubStep = (e, index) => {
    let subStep = [...subStepNumber];
    subStep[index] = e.target.value;
    setSubStepNumber(subStep);
  };

  const handleConfirmStep = () => {
    if (stepName) {
      setDoc(doc(db, "Process", stepName), {
        subStep: subStepNumber,
      });
      setStepName("");
      setSubStepNumber([""]);
      alert("Bạn cập nhật thành công");
    } else {
      alert("Hãy nhập tên bước");
    }
  };

  let newStep = subStepNumber.map((step, index) => (
    <div key={index} className="flex space-x-2">
      <input
        type="text"
        value={step}
        onChange={(e) => handleOnchangeSubStep(e, index)}
        className="border focus:outline-green-400 px-2 rounded-md h-7"
      />
      <MinusCircleIcon
        className="w-5 cursor-pointer"
        onClick={() => handleDeleteStep(index)}
      />
    </div>
  ));
  return (
    <div className="mt-8 flex flex-col justify-start items-center space-y-4 w-full">
      <p className="text-[25px] font-bold">Tạo bước</p>
      <form className="space-y-3">
        <div className="flex flex-col">
          <label htmlFor="" className="text-green-600 font-medium text-[17px]">
            Tên bước:
          </label>
          <input
            type="text"
            className="border rounded-md w-60 h-8 focus:outline-green-400 px-2"
            value={stepName}
            onChange={(e) => setStepName(e.target.value)}
          />
        </div>
        <p className="text-green-600 font-medium text-[17px]">Tên bước phụ:</p>
        {newStep}
        <div
          onClick={handleAddNewStep}
          className="rounded px-1 border-2 border-green-500 flex space-x-1 max-w-fit bg-white cursor-pointer"
        >
          <PlusCircleIcon className="w-5 cursor-pointer" />
          <p>Thêm</p>
        </div>
      </form>
      <button
        onClick={handleConfirmStep}
        className="border-2 rounded-md p-1 bg-green-500 text-white border-green-500 text-[18px] font-medium"
      >
        Xác nhận
      </button>
    </div>
  );
}

export default CustomPO;

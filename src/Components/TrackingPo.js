import React, { useState, useContext, useEffect } from "react";
import SinglePO from "./SinglePO";
import { Context } from "../App";

function TrackingPo() {
  const { POvalue, stepArray } = useContext(Context);
  const [poData, setPoData] = useState([]);
  const [sortingType, setSortingType] = useState("");
  useEffect(() => {
    if (POvalue) {
      setPoData(POvalue?.docs);
    }
  }, [POvalue]);

  useEffect(() => {
    if (poData) {
      poContent = poData?.map((po) => (
        <SinglePO key={po.id} poInformation={po} />
      ));
    }
  }, [poData]);

  // useEffect(() => {
  //   let poContentfilter = POvalue.docs?.filter(
  //     (value) => value.data().currentStep === sortingType
  //   );
  //   setPoData(poContentfilter);
  // }, [sortingType]);

  let poContent = poData?.map((po) => (
    <SinglePO key={po.id} poInformation={po} />
  ));
  console.log(poData);
  if (sortingType) {
    let poContentfilter = POvalue.docs?.filter(
      (value) => value.data().currentStep === sortingType
    );
    poContent = poContentfilter.map((po) => (
      <SinglePO key={po.id} poInformation={po} />
    ));
  }

  const initialState = Array(stepArray?.docs.length).fill("");
  initialState.unshift("underline");
  const [activeLink, setActiveLink] = useState(initialState);

  const handleOnlick = (index) => {
    const activeArr = Array(stepArray.docs.length + 1).fill("");
    activeArr[index] = "underline";
    setActiveLink(activeArr);
  };
  return (
    <div className="mt-4 flex grow justify-around w-[80%] min-w-[900px]">
      <div className="flex flex-col space-y-3 items-center w-full">
        <p className="text-[25px] font-bold">Danh sách</p>
        <div className="flex flex-col space-y-3 w-[90%]">{poContent}</div>
      </div>
      <div className="space-y-3 border-2 border-green-500 p-2 rounded-md w-fit min-w-[150px] h-fit mt-14">
        <p className="font-bold">Lọc theo</p>
        <p
          className={"cursor-pointer w-fit " + activeLink[0]}
          onClick={() => {
            setSortingType("");
            handleOnlick(0);
          }}
        >
          Tất cả
        </p>
        {stepArray?.docs?.map((type, index) => (
          <p
            key={type.id}
            className={"cursor-pointer w-fit " + activeLink[index + 1]}
            onClick={() => {
              handleOnlick(index + 1);
              setSortingType(type.id);
            }}
          >
            {type.id}
          </p>
        ))}
      </div>
    </div>
  );
}

export default TrackingPo;

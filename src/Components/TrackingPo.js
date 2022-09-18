import { collection } from "firebase/firestore";
import React, { useState, useContext, useEffect } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../FirebaseConfig";
import SinglePO from "./SinglePO";
import { Context } from "../App";

function TrackingPo() {
  const { POvalue, stepArray } = useContext(Context);
  const [poData, setPoData] = useState([]);
  const [sortingType, setSortingType] = useState("");
  const [searchValue, setSearchValue] = useState("");
  console.log(sortingType);
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

  let poContent = poData?.map((po) => (
    <SinglePO key={po.id} poInformation={po} />
  ));

  if (sortingType) {
    console.log(sortingType);
    let poContentfilter = POvalue.docs?.filter(
      (value) => value.data().currentStep === sortingType
    );
    poContent = poContentfilter.map((po) => (
      <SinglePO key={po.id} poInformation={po} />
    ));
    //     .map((po) => <SinglePO key={po.id} poInformation={po} />);
    // console.log(sortingType);
  }
  // const handleSearch = (e) => {
  //   e.preventDefault();
  //   let poContentfilter = POvalue.docs.filter((value) =>
  //     value.id.includes(searchValue)
  //   );
  //   setPoData(poContentfilter);
  //   poContent = poContentfilter.map((po) => (
  //     <SinglePO key={po.id} poInformation={po} />
  //   ));
  // };
  const initialState = Array(stepArray.docs.length).fill("");
  initialState.unshift("underline");
  const [activeLink, setActiveLink] = useState(initialState);

  const handleOnlick = (index) => {
    const activeArr = Array(stepArray.docs.length + 1).fill("");
    console.log(activeArr);
    activeArr[index] = "underline";
    setActiveLink(activeArr);
  };
  return (
    <div className="space-x-10 mt-4 flex grow justify-around pr-20">
      <div className="flex flex-col space-y-3 items-center">
        <p className="text-[25px] font-bold">Danh sách</p>
        <div className="flex flex-col space-y-3">{poContent}</div>
      </div>
      <div className="space-y-3 fixed top-20 right-14 border-2 border-green-500 p-2 rounded-md">
        <p className="font-bold">Lọc theo</p>
        <p
          className={"cursor-pointer min-w-fit " + activeLink[0]}
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
            className={"cursor-pointer  min-w-fit " + activeLink[index + 1]}
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

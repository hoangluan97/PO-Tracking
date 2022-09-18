import React, { useContext, useState, useEffect } from "react";
import SinglePO from "./SinglePO";
import { Context } from "../App";

function Plan() {
  const { POvalue, stepArray } = useContext(Context);
  const [poData, setPoData] = useState([]);

  let poContent = poData.map((po) => (
    <SinglePO key={po.id} poInformation={po} />
  ));
  //   useEffect(() => {
  //     poContent = poData.map((po) => <SinglePO key={po.id} poInformation={po} />);
  //   }, [poData]);
  const [searchValue, setSearchValue] = useState("");
  const handleSearch = (e) => {
    e.preventDefault();
    let poContentfilter = POvalue.docs?.filter((value) =>
      value.id.includes(searchValue)
    );
    setPoData(poContentfilter);
    console.log(poData);
    // poContent = poData.map((po) => <SinglePO key={po.id} poInformation={po} />);
  };
  return (
    <div className="mt-5 ml-5 h-[120px]">
      <form className="space-x-3">
        <input
          type="text"
          className="border-2 rounded-md border-green-500 focus:outline-none px-2 w-60"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button
          className="rounded bg-green-500 text-white font-medium p-1"
          onClick={(e) => handleSearch(e)}
        >
          Tìm kiếm
        </button>
      </form>
      <div className="space-y-3 mt-3">{poContent}</div>
    </div>
  );
}

export default Plan;

import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const initialState = Array(3).fill("");
  initialState.unshift("underline");
  console.log(initialState);
  const [activeLink, setActiveLink] = useState(initialState);

  const handleOnlick = (index) => {
    const activeArr = Array(4).fill("");
    activeArr[index] = "underline";
    setActiveLink(activeArr);
  };
  return (
    <div className="flex justify-start items-center flex-col text-white w-[250px] border h-screen bg-green-600 fixed top-0 left-0">
      <p className="my-10  text-[30px] font-bold">Chức năng</p>
      <div className="flex flex-col text-[22px] font-bold space-y-4">
        <div>
          <Link
            className={activeLink[0]}
            onClick={() => handleOnlick(0)}
            to="/"
          >
            Tạo PO
          </Link>
        </div>
        <Link
          className={activeLink[1]}
          onClick={() => handleOnlick(1)}
          to="/tracking"
        >
          Theo dõi PO
        </Link>
        <Link
          className={activeLink[2]}
          onClick={() => handleOnlick(2)}
          to="/custom"
        >
          Tạo Bước
        </Link>
        <Link
          className={activeLink[3]}
          onClick={() => handleOnlick(3)}
          to="/plan"
        >
          Kế hoạch
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

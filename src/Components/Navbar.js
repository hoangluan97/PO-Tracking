import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const initialState = Array(5).fill("");
  initialState.unshift("underline");
  const [activeLink, setActiveLink] = useState(initialState);

  const handleOnlick = (index) => {
    const activeArr = Array(6).fill("");
    activeArr[index] = "underline";
    setActiveLink(activeArr);
  };
  return (
    <div className=" justify-center items-center  text-white w-screen border h-16 bg-green-600 fixed top-0 left-0 flex">
      {/* <p className="my-10  text-[30px] font-bold">Chức năng</p> */}
      <div className="flex text-[18px] justify-center font-medium space-x-4">
        <div>
          <Link
            className={activeLink[0]}
            onClick={() => handleOnlick(0)}
            to="/PO-Tracking"
          >
            Tạo PO
          </Link>
        </div>
        <Link
          className={activeLink[1]}
          onClick={() => handleOnlick(1)}
          to="/PO-Tracking/tracking"
        >
          Theo dõi PO
        </Link>
        <Link
          className={activeLink[2]}
          onClick={() => handleOnlick(2)}
          to="/PO-Tracking/custom"
        >
          Tạo Quy Trình
        </Link>
        <Link
          className={activeLink[3]}
          onClick={() => handleOnlick(3)}
          to="/PO-Tracking/plan"
        >
          Sản xuất
        </Link>
        <Link
          className={activeLink[4]}
          onClick={() => handleOnlick(4)}
          to="/PO-Tracking/work"
        >
          Kế hoạch
        </Link>
        <Link
          className={activeLink[5]}
          onClick={() => handleOnlick(5)}
          to="/PO-Tracking/ware"
        >
          Kho
        </Link>
      </div>
    </div>
  );
}

export default Navbar;

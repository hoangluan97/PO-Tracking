import React, { useContext } from "react";
import { Context } from "../App";

function SortingBoard({ updateSortingType }) {
  const stepArray = useContext(Context);

  return (
    <div className="fixed top-5 right-4 border-2 ">
      <p>Lọc theo</p>
      {stepArray.docs.map((type) => (
        <p
          key={type.id}
          onClick={() => {
            updateSortingType(() => type.id);
            console.log(type);
          }}
        >
          {type}
        </p>
      ))}
      <p onClick={updateSortingType("")}>TẤT CẢ</p>
    </div>
  );
}

export default SortingBoard;

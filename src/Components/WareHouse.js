import { collection } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../FirebaseConfig";
import POWareHouse from "./POWareHouse";

function WareHouse() {
  const [PlanData, loading, error] = useCollection(collection(db, "WareHouse"));
  const [Plan, setPlan] = useState([]);

  useEffect(() => {
    if (PlanData && !loading) {
      setPlan(PlanData.docs);
    }
  }, [PlanData]);
  const PlanContent = Plan.map((data, index) => (
    <POWareHouse poInformation={data} key={index} />
  ));
  return <div className="w-[80%] mt-5 space-y-4">{PlanContent}</div>;
}

export default WareHouse;

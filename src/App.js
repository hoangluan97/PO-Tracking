import "./App.css";
import { Outlet } from "react-router-dom";
import React from "react";
import Navbar from "./Components/Navbar";
import { useCollection } from "react-firebase-hooks/firestore";
import { collection } from "firebase/firestore";
import { db } from "./FirebaseConfig";

// const stepArray = ["Prepare", "Confirm", "Sorting", "Shipping", "Transport"];
export const Context = React.createContext(null);
function App() {
  const [POvalue, loadingPO, errorPO] = useCollection(collection(db, "PO"));

  const [stepArray, loading, error] = useCollection(collection(db, "Process"));
  return (
    <Context.Provider value={{ POvalue, stepArray }}>
      <div className="flex space-x-5 bg-gray-200 h-fit min-h-screen pt-16 min-w-[1000px]">
        <Navbar />
        <Outlet />
      </div>
    </Context.Provider>
  );
}

export default App;

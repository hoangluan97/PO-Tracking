import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreatePo from "./Components/CreatePo";
import TrackingPo from "./Components/TrackingPo";
import CustomPO from "./Components/CustomPO";
import Plan from "./Components/Plan";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<CreatePo />} />
          <Route path="tracking" element={<TrackingPo />} />
          <Route path="custom" element={<CustomPO />} />
          <Route path="plan" element={<Plan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

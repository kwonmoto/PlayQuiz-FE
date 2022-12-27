import React from "react";
import { Route, Routes } from "react-router-dom";
import "./styles/App.css";
import Login from "./pages/Login";
import ReadSet from "./pages/ReadSet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/read" element={<ReadSet />} />
      </Routes>
    </div>
  );
}

export default App;

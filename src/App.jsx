import React from "react";
import { Route, Routes } from "react-router-dom";
import ".styles/App.css";
import PageLogin from "./pages/PageLogin";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<PageLogin />} />
      </Routes>
    </div>
  );
}

export default App;

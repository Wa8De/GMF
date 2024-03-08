import { useState } from "react";
import "./App.css";
import Home from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GoogleAuth from "./pages/GoogleAuth/GoogleAuth";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/googleAuth" element={<GoogleAuth />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

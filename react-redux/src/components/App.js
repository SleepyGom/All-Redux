import React from "react";
import {BrowserRouter as Router, Route, Routes, BrowserRouter} from "react-router-dom";
import Detail from "../routes/Detail";
import Home from "../routes/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/:id" element={<Detail/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Apple from "./components/Apple/Apple";
import Main from "./components/Main/Main";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}></Route>
      </Routes>
      
      <div className="design-info">
      <Routes>
        <Route path="/" element={<Sidebar />}></Route>
      </Routes>
      <Routes>
        <Route path="/" element={<Main />}></Route>
      </Routes>
        
      </div>
      <Routes>
        <Route path="/apple" element={<Apple />} exact></Route>
      </Routes>
    </div>
  );
};

export default App;

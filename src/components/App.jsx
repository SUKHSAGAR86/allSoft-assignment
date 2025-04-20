import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./LoginPage";
import Admin from "./Admin";
import FileSearch from "./FileSearch";
import FileUpload from "./FileUpload";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/search" element={<FileSearch />} />
      <Route path="/upload" element={<FileUpload />} />
    </Routes>
  );
};

export default App;

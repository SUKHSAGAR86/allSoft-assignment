
import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import Admin from "./Admin";
import FileSearch from "./FileSearch";
import FileUpload from "./FileUpload";

const App = () => {
  const [user, setUser] = useState(localStorage.getItem("login_details"));

  useEffect(() => {
    const handleStorageChange = () => {
      setUser(localStorage.getItem("login_details"));
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.rmoveEventListener("storage", handleStorageChange);
  }, []);

  return (
      <Routes>
        {!user ? (
          <Route path="*" element={<LoginPage />} />
        ) : (
          <>
            <Route path="/admin" element={<Admin />} />
            <Route path="/search" element={<FileSearch />} />
            <Route path="/upload" element={<FileUpload />} />
            {/* <Route path="*" element={<Navigate to="/admin" />} /> */}
          </>
        )}
      </Routes>

  );
};

export default App;

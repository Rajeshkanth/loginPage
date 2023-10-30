import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignUpPage from "./components/SignUpPage";
import Dashboard from "./components/Dashboard";
import { createContext, useEffect, useState } from "react";

export const myContext = createContext({});
function App() {
  const [SignUpDetails, setSignUpDetails] = useState([]);
  useEffect(() => {
    console.log(SignUpDetails);
  }, [SignUpDetails]);
  return (
    <myContext.Provider value={{ SignUpDetails, setSignUpDetails }}>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </myContext.Provider>
  );
}

export default App;

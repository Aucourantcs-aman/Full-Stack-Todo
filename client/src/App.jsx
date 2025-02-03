import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global/Header";
import SignUp from "./main/SignUp";
import SignIn from "./main/SignIn";
import Todo from "./main/Todo";

function App() {
  const authenticated = true;
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={authenticated ? <Todo /> : <SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

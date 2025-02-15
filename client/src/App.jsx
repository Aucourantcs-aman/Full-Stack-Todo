import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global/Header";
import Todo from "./main/Todo";
import Form from "./main/Form";
import Cookies from "js-cookie";

function App() {
  const [user, setUser] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      setUser(true); // User is logged in
    } else {
      setUser(false); // No token, user is not logged in
    }
  }, []); // Runs once when the component mounts

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={user ? <Todo /> : <Form />} />
        <Route path="/user/:userId" element={<Todo />} />
      </Routes>
    </Router>
  );
}

export default App;

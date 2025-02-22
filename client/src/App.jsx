import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global/Header";
import Todo from "./main/Todo";
import Form from "./main/Form";
import Cookies from "js-cookie";
import { useDispatch, useSelector } from "react-redux";
import { setUser } from "./redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  // const [user, setUser] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const token = Cookies.get("token");
    if (token) {
      dispatch(setUser({ user: true, token })); // User is logged in
    }
  }, [dispatch]);

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

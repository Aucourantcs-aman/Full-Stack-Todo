import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global/Header";
import Todo from "./main/Todo";
import Form from "./main/Form";

function App() {
  const [user, setuser] = useState(true);
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [inputValue, setinputValue] = useState("");

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={user ? <Todo /> : <Form />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

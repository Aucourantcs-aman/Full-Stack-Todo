import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./global/Header";
import Todo from "./main/Todo";
import Form from "./main/Form";

function App() {
  const authenticated = true;
  const [user, setuser] = useState({});
  const [loading, setloading] = useState(false);
  const [error, seterror] = useState(false);
  const [inputValue, setinputValue] = useState("");

  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={authenticated ? <Todo /> : <Form />} />
          <Route path="/form" element={<Form />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

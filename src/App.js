import "./App.css";
import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";
import Write from "./Write";
import Signup from "./Signup";
import Login from "./Login";
import {useDispatch} from 'react-redux'
import { logincheckDB } from "./redux/moduels/user";

function App() {

  const dispatch = useDispatch();
  const localStoragetokenCheck = localStorage.getItem("token");
  React.useEffect(() => {
    if (localStoragetokenCheck) {
      dispatch(logincheckDB());
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/write" element={<Write />} />
        <Route path="/write/:id" element={<Write />} />
        <Route path="/post/:id" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

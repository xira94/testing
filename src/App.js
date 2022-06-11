import "./App.css";
import {  Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";
import Header from "./Header";
import Write from "./Write";
import Signup from "./Signup"
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
        <Route path='/signup' element={<Signup/>}></Route>
    <Route path='/login' element={<Login/>}></Route>
    <Route path='/write' element={<Write/>}></Route>
      </Routes>
    </div>
  );



export default App;

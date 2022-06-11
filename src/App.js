import "./App.css";
import { Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Detail from "./Detail";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/detail" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

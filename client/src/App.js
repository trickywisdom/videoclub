import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import MoviesForm from "./Components/MoviesForm"

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<MoviesForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

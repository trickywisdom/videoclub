import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/Signup' element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;

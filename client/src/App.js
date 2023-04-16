import "./App.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Signup from "./Components/Signup";
import Login from "./Components/Login";
import MoviesForm from "./Components/MoviesForm"
import AuthWrapper from "./Components/AuthWrapper";
import Comingsoon from "./Components/Comingsoon";
import Moviequotes from "./Components/Moviequotes";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route element={<AuthWrapper />}>
          <Route
            path="/"
            element={
              <>
                <Moviequotes />
                <MoviesForm />
                <Comingsoon />
              </>
            }
          />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;

import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AdminHome from "./pages/AdminHome";
import Home from "./pages/Home";
import LecturerHome from "./pages/LecturerHome";
import AddModule from "./components/AddModule";
import ViewModules from "./components/ViewModules";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/adminHome" element={<AdminHome />} />
          <Route path="/home" element={<Home />} />
          <Route path="/lecHome" element={<LecturerHome />} />
          <Route path="/addModule" element={<AddModule />} />
          <Route path="/viewModules" element={<ViewModules />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

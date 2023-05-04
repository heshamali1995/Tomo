import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./sass/style.scss";
// Components
import Navbar from "./components/Shared/Navbar/Navbar";
import Hero from "./pages/Hero/Hero";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Program from "./pages/Program/Program";

const App = () => {
  return (
    <div className="app" dir="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/program" element={<Program />} />
        </Routes>
      </BrowserRouter>
      {/*       <Navbar />
      <Hero /> */}
    </div>
  );
};

export default App;

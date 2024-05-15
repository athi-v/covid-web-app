import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutUs from "./pages/aboutus/AboutUs";
import HomePage from "./pages/home/HomePage";
import Dashboard from "./pages/dashboard/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;

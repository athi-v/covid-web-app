import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus/AboutUs';
import HomePage from './pages/home/HomePage';
import Dashboard from './pages/dashboard/Dashboard';
import Statistics from './pages/dashboard/Statistics';
import Diagnostics from './pages/dashboard/Diagnostics';

function App() {
    return (
        <Router>
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/about-us' element={<AboutUs />} />
                <Route path='/dashboard' element={<Dashboard />} />
                <Route path='/statistics' element={<Statistics />} />
                <Route path='/diagnostics' element={<Diagnostics />} />
            </Routes>
        </Router>
    );
}

export default App;

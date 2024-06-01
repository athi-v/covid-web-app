import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AboutUs from './pages/aboutus/AboutUs';
import HomePage from './pages/home/HomePage';
import Dashboard from './pages/dashboard/Dashboard';
import Statistics from './pages/dashboard/Statistics';
import Diagnostics from './pages/dashboard/Diagnostics';
import CountryDetails from './pages/dashboard/CountryDetails';
import { AuthContextProvider } from './context/AuthContext';
import { ProtectedRoute } from './provider/ProtectedRoute';

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                    <Route path='/' element={<HomePage />} />
                    <Route
                        path='/about-us'
                        element={
                            <ProtectedRoute>
                                <AboutUs />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/dashboard'
                        element={
                            <ProtectedRoute>
                                <Dashboard />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/statistics'
                        element={
                            <ProtectedRoute>
                                <Statistics />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/diagnostics'
                        element={
                            <ProtectedRoute>
                                <Diagnostics />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path='/statistics/:country_id'
                        element={<CountryDetails />}
                    />
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}

export default App;

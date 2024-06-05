import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Dashboard from './pages/dashboard/Dashboard';
import Statistics from './pages/dashboard/Statistics';
import CountryDetails from './pages/dashboard/CountryDetails';
import { AuthContextProvider } from './context/AuthContext';
import { ProtectedRoute } from './provider/ProtectedRoute';
import ErrorPage from './pages/error/ErrorPage';

function App() {
    return (
        <AuthContextProvider>
            <Router>
                <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='*' element={<ErrorPage />} />

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
                        path='/statistics/:country_id'
                        element={
                            <ProtectedRoute>
                                <CountryDetails />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </AuthContextProvider>
    );
}

export default App;

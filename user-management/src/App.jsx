import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Users from './components/Users';
import Signup from './components/Signup'; // Import Signup
import Login from './components/Login';   // Import Login
import ResetPassword from './components/ResetPassword'; // Import ResetPassword

function App() {
    return (
        <Router>
            <div>
                <h2>Welcome to TaskMan73</h2>
                <Routes>
                    <Route path="/users" element={<Users />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/reset-password" element={<ResetPassword />} />
                    <Route path="/" element={<h2>Home Page</h2>} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;

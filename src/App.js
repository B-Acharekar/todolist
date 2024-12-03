import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Component/LandingPage/LandingPage";
import Home from "./Component/Home/Home";
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;

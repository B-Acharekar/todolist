import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from "./Component/LandingPage/LandingPage";
import Home from "./Component/Home/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        
      </Routes>
    </Router>
  );
}

export default App;

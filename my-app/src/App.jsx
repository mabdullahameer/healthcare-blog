import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';       // Adjust the import path
import About from './pages/about';     // Adjust the import path
import Dashboard from './pages/dashboard'; // Adjust the import path
import Projects from './pages/projects';   // Adjust the import path
import SignIn from './pages/signin';      // Adjust the import path
import SignUp from './pages/signup';      // Adjust the import path

function App() { // Fixed function name here
  return (
    <Router>
      <Routes> {/* Make sure Routes wraps all Route components */}
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="projects" element={<Projects />} />
        <Route path="signin" element={<SignIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
    </Router>
  );
}

export default App;

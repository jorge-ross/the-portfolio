import './App.css'
import { HashRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Home from './routes/home';
import Portfolio from './routes/portfolio';
import ProjectDetail from './routes/project-detail';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="projects" element={<Portfolio />} />
        <Route path="projects/:id" element={<ProjectDetail />} />
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </Router>
  );
}

export default App

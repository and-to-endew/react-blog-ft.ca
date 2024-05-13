import Gallery from './components/Gallery/Gallery';
import Blog from './components/Blog/Blog';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar">
          <Link to="/gallery"><button className="nav-button">Gallery</button></Link>
          <Link to="/blog"><button className="nav-button">Blog</button></Link>
        </nav>
        <Routes>
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

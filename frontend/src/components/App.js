import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';

import { Route, Routes, useLocation } from 'react-router-dom';

import Home from './pages/home/Home';
import Join from './pages/join/Join';
import About from './pages/about/About';
import Donate from './pages/donate/Donate';
import TopNav from './TopNav';
import Footer from './Footer';

function App() {
  const location = useLocation();
  const isNotHome = location.pathname !== '/';

  return (
    <div className="App" style={{ position: 'relative' }}>
      <TopNav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/join" element={<Join />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/donate" element={<Donate />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;

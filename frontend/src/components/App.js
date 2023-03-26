import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';

import Home from './Home';
import TopNav from './TopNav';

function App() {
  const theme = 'dark';
  return (
    <div className="App">
      <TopNav theme />
      <Routes>
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

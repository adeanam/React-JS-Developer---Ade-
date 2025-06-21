import { lazy } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/home_page'));
//import './App.css'

export const App = () => {
  return (
      <Router>
          <Routes>
              <Route path="/" element={<HomePage />} />
          </Routes>
      </Router>
  );
}

export default App;


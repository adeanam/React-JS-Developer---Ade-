import { lazy } from 'react'
import { Route, Routes } from 'react-router-dom';
const HomePage = lazy(() => import('./pages/home_page'));
import './App.css'

export const App = () => {
  return (
      <Routes>
          <Route path="/" element={<HomePage />} />
      </Routes>
  );
}

export default App;


import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GamesPage from './pages/GamesPage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hry" element={<GamesPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
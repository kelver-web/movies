import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './pages/Home';
import Movie from './pages/Movie'
import Search from './pages/Search'

import './App.css'
import 'bootstrap/dist/css/bootstrap.css';

import NavbarNav from './components/Navbar';

function App() {


  return (
    <>
      <Router>
        <NavbarNav />
        <Routes>
          <Route>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/search" element={<Search />} />
          </Route>
        </Routes>
      </Router>
    </>
  )
}

export default App

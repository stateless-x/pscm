
import './App.css';
import {Routes, Route} from 'react-router-dom'
import NavBar from "./components/NavBar";
import Home from './pages/Home'
import Contact from './pages/Contact';
function App() {
  return (
    <>
      <header>
        <NavBar />
      </header>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Routes>
      <footer>
        {/* to be added */}
      </footer>
    </>
  )
}

export default App

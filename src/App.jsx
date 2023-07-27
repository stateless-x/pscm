
import './App.css';
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Contact from './pages/Contact';
function App() {
  return (
    <>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/contact-us' element={<Contact />} />
        {/* <Route path='*' element={<NotFound/>} /> */}
      </Routes>
    </>
  )
}

export default App

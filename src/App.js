import {
  BrowserRouter,
  Route, 
  Routes } from 'react-router-dom';
import Home from './pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import About from './pages/About/About';
import Products from './pages/Products/Products';
import Contact from './pages/Contact/Contact';
import Footer from './components/Footer/Footer';



function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Home' element={<Home />} />
        <Route path='/About' element={<About />} />
        <Route path='/Products' element={<Products />} />
        <Route path='/Contact' element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
};
export default App;
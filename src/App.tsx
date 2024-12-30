// import './App.css';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        {/* <Route path='*' element={<NotFound />} /> */}
      </Routes>
      <Footer />
    </>
  );
}

export default App;

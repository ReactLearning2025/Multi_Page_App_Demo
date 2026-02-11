
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

function App() {
  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans antialiased overflow-x-hidden selection:bg-blue-500 selection:text-white">
      <Navbar />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 transition-colors duration-500">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Impact from './pages/Impact';
import Community from './pages/Community';
import Contact from './pages/Contact';
import OurFamily from './pages/OurFamily';
import Volunteer from './pages/Volunteer';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingDonateButton from './components/FloatingDonateButton';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-gray-50 min-h-screen text-gray-900">
        <Navbar />
        <main className="pt-20 md:pt-24 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/community" element={<Community />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/our-family" element={<OurFamily />} />
            <Route path="/volunteer" element={<Volunteer />} />
          </Routes>
        </main>
        <Footer />
        <FloatingDonateButton />
      </div>
    </Router>
  );
}

export default App;
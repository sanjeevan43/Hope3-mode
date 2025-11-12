import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Programs from './pages/Programs';
import Impact from './pages/Impact';
import SuccessStories from './pages/SuccessStories';
import Events from './pages/Events';
import StudentProjects from './pages/StudentProjects';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div className="font-sans antialiased bg-gray-50 min-h-screen text-gray-900">
        <Navbar />
        <main className="pt-20 md:pt-24 pb-16">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/programs" element={<Programs />} />
            <Route path="/impact" element={<Impact />} />
            <Route path="/success-stories" element={<SuccessStories />} />
            <Route path="/events" element={<Events />} />
            <Route path="/student-projects" element={<StudentProjects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
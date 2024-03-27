import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';
import Footer from './components/Footer';


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;

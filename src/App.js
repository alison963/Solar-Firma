import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import Services from './components/Services';
import Projects from './components/Projects';

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Projects />
    </div>
  );
}

export default App;

import './App.css';
import Footer from './components/Footer';
import Nav from './components/Nav';
import About from './pages/About';
import Contact from './pages/Contact';
import Family from './pages/Family';
import Intro from './pages/Intro';
import Naked from './pages/Naked';

function App() {
  return (
    <div className="App">
      <Nav />
      <Intro />
      <About />
      <Naked />
      <Family />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;

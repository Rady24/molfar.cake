import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import WorksSlider from './components/WorksSlider';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <WorksSlider />
      <Contact />
    </>
  );
}

export default App;

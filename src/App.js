import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About';
import WorksSlider from './components/WorksSlider';
import Contact from './components/Contact';
import { Helmet } from 'react-helmet';
import Photo1 from '../assets/1.jpg';

function App() {
  return (
    <>
    <Helmet>
        <title>Molfar.cake</title>
        <meta name="description" content="A confectioner's website offering handmade, artisanal sweets and baked goods" />
        <meta property="og:title" content="Molfare.cake" />
        <meta property="og:description" content="A confectioner's website offering handmade, artisanal sweets and baked goods" />
        <meta property="og:image" content={Photo1} />
      </Helmet>
      <Navbar />
      <Home />
      <About />
      <WorksSlider />
      <Contact />
    </>
  );
}

export default App;

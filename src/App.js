import Navbar from './components/Navbar';
import Aboutme from './components/Projects'
import GitHub from './components/GitHub'
import Hero from './components/Hero'
import About from './components/About';
import './App.css';


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Aboutme />
      <GitHub />
      <About/>
    </>
  );
}

export default App;

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Methodology from './components/Methodology';
import Research from './components/Research';
import Education from './components/Education';
import Access from './components/Access';
import Legal from './components/Legal';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import './components/Common.css';

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Methodology />
        <Research />
        <Education />
        <Access />
        <Legal />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default App;

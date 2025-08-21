
import { useEffect, useRef, useState } from 'react';
import './App.css';
import { AboutMe, Experience, Footer, Plane, Projects, Services, Contact } from './components';
import Hero from './components/Hero';

function App() {

  const [scrollPosition, setScrollPosition] = useState(0);
  const wrapperRef = useRef(null);
   useEffect(() => {
    const handleScroll = () => {
      if (wrapperRef.current) {
        setScrollPosition(wrapperRef.current.scrollTop);
      }
    };

    const wrapperElement = wrapperRef.current;
    if (wrapperElement) {
      wrapperElement.addEventListener('scroll', handleScroll);
    }

    return () => {
      if (wrapperElement) {
        wrapperElement.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);
  

   return (
      <div className='relative wrapper' ref={wrapperRef}>
        <Hero scrollPosition={scrollPosition}/>
        <div className='sky-gradient z-30' id='about-me'>
          <AboutMe />
        </div>
        <div className='w-full bg-gray-950 z-30' id='experience'>
          <Experience />
        </div>
        <div className='w-full z-30 bg-theme' id='projects'>
          <Projects />
        </div>
        <div className='w-full bg-gray-950 z-30' id='services'>
          <Services />
        </div>
        <div className='w-full bg-theme z-30'>
          <Contact />
        </div>
        <div className="w-full z-30 bg-gray-950">
          <Footer />
        </div>
      </div>
  );
}

export default App

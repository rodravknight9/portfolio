
import './App.css';
import { AboutMe, Experience, Footer, Plane, Projects, Services, Contact } from './components';
import Hero from './components/Hero';

function App() {

   return (
    <div className='w-full h-screen'>
      <div>
        <Hero />
      </div>
      {/* <Plane />  */}
      <div className='sky-gradient z-30' id='about-me'>
        <AboutMe />
      </div>
      <div className='w-full bg-gray-950' id='experience'>
        <Experience />
      </div>
      <div className='w-full' id='projects'>
        <Projects />
      </div>
      <div className='w-full bg-gray-950' id='services'>
        <Services />
      </div>
      <div className='w-full'>
        <Contact />
      </div>
      <div className="w-full bg-gray-950">
        <Footer />
      </div>
    </div>
  );
}

export default App

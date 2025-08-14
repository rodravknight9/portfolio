
import './App.css';
import { AboutMe, Experience, Footer, Plane, Projects, Services, Contact } from './components';

function App() {

   return (
    <div className='w-full h-screen'>
      <Plane />
      <div className='sky-gradient' id='about-me'>
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

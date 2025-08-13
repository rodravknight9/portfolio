
import './App.css'
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Plane from './components/Plane';
import { Projects } from './components/Projects';

function App() {

   return (
    <div className='w-full h-screen'>
      <Plane />
      <div className='sky-gradient'>
        <AboutMe />
      </div>
      <div className='w-full bg-gray-950'>
        <Experience />
      </div>
      <div className='w-full'>
        <Projects />
      </div>
    </div>
  );
}

export default App

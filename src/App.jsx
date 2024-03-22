import { BrowserRouter } from 'react-router-dom';
import { About, Contact, Hero, Navbar, Tech, Works, StarsCanvas, SocialBar } from './components';


const App = () => {
  return (
    <BrowserRouter>
    <SocialBar />
    <div className='relative z-0 bg-primary'>
      <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center relative'>
        <Navbar/>
        <Hero />
        <div className='absolute inset-x-0 bottom-0 h-16 gradient-overlay'></div>
      </div>
          <About />
          <Tech />
          <Works />
          <div className='relative z-0'>
            <Contact />
            <StarsCanvas />
          </div>
      </div>
    </BrowserRouter>
  )
};


export default App

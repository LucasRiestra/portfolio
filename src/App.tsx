import { FC, useRef, RefObject, useEffect } from 'react'
import Navbar from './components/navbar/navbar'
import Experience from './components/experience/experience';
import Projects from './components/projects/projects';
import Skills from './components/skills/skills';
import Contact from './components/contact/contact';
import About from './components/about/about';
import Footer from './components/footer/footer';
import { BrowserRouter as Router } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './index.css'
import 'aos/dist/aos.css';
import AOS from 'aos';



const App: FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  const projectsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);

  const scrollToRef = (ref: RefObject<HTMLElement>) => {
    if (ref.current) {
      const top = ref.current.getBoundingClientRect().top + window.pageYOffset - (window.innerHeight * 0.07);
      window.scrollTo({ top, behavior: 'smooth' });
    }
  }

  const lastScrollTop = useRef(0);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });


    function handleScroll() {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        
        AOS.refreshHard();
      } else {
        
        AOS.refreshHard(); 
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    }

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };

  }, []);

  return (
    <Router>
        <Navbar scrollToRef={scrollToRef} experienceRef={experienceRef} projectsRef={projectsRef} skillsRef={skillsRef} contactRef={contactRef} aboutRef={aboutRef} />
        <div ref={experienceRef}><Experience /></div>
        <div ref={projectsRef}><Projects /></div>
        <div ref={skillsRef}><Skills /></div>
        <div ref={contactRef}><Contact /></div>
        <div ref={aboutRef}><About /></div>
        <Footer />
    </Router>
  )
}

export default App
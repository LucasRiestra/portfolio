import { Link } from 'react-router-dom';
import './navbar.css';

type NavbarProps = {
    scrollToRef: (ref: React.RefObject<HTMLElement>) => void;
    experienceRef: React.RefObject<HTMLElement>;
    projectsRef: React.RefObject<HTMLElement>;
    skillsRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
  };

const Navbar = ({ scrollToRef, experienceRef, projectsRef, skillsRef, contactRef, aboutRef } : NavbarProps) => {
    return (
        <nav className="navbar">
        <div className="container-navbar">
            <Link to="/experience" className="experience" onClick={() => scrollToRef(experienceRef)}>Experiencia</Link>
            <Link to="/projects" className="projects" onClick={() => scrollToRef(projectsRef)}>Proyectos</Link>
            <Link to="/skill" className="skills" onClick={() => scrollToRef(skillsRef)}>Skills</Link>
            <Link to="/contact" className="contact" onClick={() => scrollToRef(contactRef)}>Contacto</Link>
            <Link to="/about" className="about" onClick={() => scrollToRef(aboutRef)}>Sobre Mí</Link>
        </div>
        </nav>
    );
}

export default Navbar;
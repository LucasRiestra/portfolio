import './experience.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Experience = () => {
    return (
        <section>
        <div className='experience-grid'>
            <div className='profile-picture'>
                <img src='/assets/profile.jpg' alt='profile' />
                <div className='linkedin-icon'>
                    <a href='https://www.linkedin.com/in/lucasriestra/' target='_blank' rel='noreferrer'>
                <div className='icon'>
                    <FaLinkedin size='2em' />
                </div>
                </a>
                <a href='https://github.com/LucasRiestra' target='_blank' rel='noreferrer'>
                <div className='icon'>
                    <FaGithub size='2em' />
                </div>
                </a>
        </div>
            </div>
            <div className='experience-information'>
                <h1 className='title'>Hola! soy Lucas Riestra!</h1>
                <br />
                <h3 className='subtitle'>Desarrollador full-stack, nacido en Caracas, Venezuela, viviendo en España. Mi carrera en desarrollo web está en constante evolución. Especializándome tanto en Front-end como Back-end, me enfoco en el diseño web, crear interfaces atractivas, desarrollar lógica y funcionalidades eficientes para paginas web y aplicaciones. Recientemente he terminado un master de software development en "Assembler Institute of Technology", donde he adquirido la experiencia de un desarrollador full-stack en todos los aspectos.</h3>

            </div>
        </div>
   </section>
    );
}

export default Experience;
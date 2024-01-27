import { useTranslation } from 'react-i18next';
import './experience.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';
import '../../../i18n';
import { FlagIcon } from 'react-flag-kit';
import { useState } from 'react';


const Experience = () => {
    const { t, i18n } = useTranslation();
    const [opacity, setOpacity] = useState(1);

    const changeLanguage = (lng: string | undefined) => {
        setOpacity(0.5);
        localStorage.setItem('opacity', '0.5');
        setTimeout(() => {
            i18n.changeLanguage(lng);
            setOpacity(1);
            localStorage.setItem('opacity', "1");
        }, 500);
    };

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
                <hr />
                <div className='flag-icon' onClick={() => changeLanguage('es')}>
                <FlagIcon code="ES"/>
                </div>
                <div className='flag-icon' onClick={() => changeLanguage('en')}>
                <FlagIcon code="US"/>
                </div>
        </div>
            </div>
            <div className='experience-information'>
                <h1 className='title' style={{ opacity: opacity, transition: 'opacity 0.5s' }}>{t("title")}</h1>
                <br />
                <h3 className='subtitle'style={{ opacity: opacity, transition: 'opacity 0.5s' }}>{t("subtitle")}</h3>

            </div>
        </div>
   </section>
    );
}

export default Experience;
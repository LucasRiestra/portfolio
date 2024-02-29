import Slider from "react-slick";
import { Link } from "react-router-dom";
import "./projects.css";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";

const Projects = () => {
    const { t } = useTranslation();
    const [opacity, setOpacity] = useState(localStorage.getItem('opacity') || 1);

    useEffect(() => {
        const interval = setInterval(() => {
            const opacityValue = localStorage.getItem('opacity');
            if (opacityValue) {
                setOpacity(opacityValue);
            }
        }, 500);

        return () => clearInterval(interval);
    }, []);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };

    return (
        <section className="projects">
            <h1 className="title-projects" data-aos="fade-right" style={{ opacity: opacity }}>{t("my Projects")}</h1>
            <article className="project-cards">
                <div className="project-card1" data-aos="fade-right">
                    <a href='https://sonus-music.vercel.app/' target='_blank' rel='noreferrer'>
                        <h2 className="project-title">SONUS (spotify-clone)</h2>
                    </a>
                    <Link to={"https://sonus-music.vercel.app"} target="_blank">
                    <Slider {...settings} className="slider">
                        <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999478/PortfolioIMGs/Captura_de_pantalla_2024-01-23_092905_tq9ktu.png" alt="project" className="project-image" />
                        <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999476/PortfolioIMGs/Captura_de_pantalla_2024-01-23_093233_xd2coj.png" alt="project" className="project-image" />
                        <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999477/PortfolioIMGs/Captura_de_pantalla_2024-01-23_093143_pgluka.png" alt="project" className="project-image"/>
                        </Slider>
                    </Link>
                    <p className="project-description">{t("descriptionSonus")}</p>
                </div>
                <div className="project-card2" data-aos="fade-right">
                    <a href='https://e-commerce-sand-phi.vercel.app/' target='_blank' rel='noreferrer'>
                        <h2 className="project-title">LaCaie-Vintage (e-commerce)</h2>
                    </a>
                    <Link to={"https://e-commerce-sand-phi.vercel.app/"} target="_blank">
                    <Slider {...settings} className="slider">
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999478/PortfolioIMGs/Captura_de_pantalla_2024-01-23_092951_vlfvqt.png" alt="project" className="project-image"/>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999477/PortfolioIMGs/Captura_de_pantalla_2024-01-23_093036_fe9q1b.png" alt="project" className="project-image"/>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999478/PortfolioIMGs/Captura_de_pantalla_2024-01-23_093104_vcblvo.png" alt="project" className="project-image"/>
                    </Slider>
                    </Link>

                    <p className="project-description">{t("descriptionE-commerce")}</p>
                </div>
                <div className="project-card3" data-aos="fade-right">
                    <a href='https://moviehub-next-js.vercel.app/' target='_blank' rel='noreferrer'>
                        <h2 className="project-title">CineXpress (MovieHub-project)</h2>
                    </a>
                    <Link to={"https://moviehub-next-js.vercel.app/"} target="_blank">
                    <Slider {...settings} className="slider">
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999476/PortfolioIMGs/Captura_de_pantalla_2024-01-23_093548_txukud.png" alt="project" className="project-image"/>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999476/PortfolioIMGs/Captura_de_pantalla_2024-01-23_093800_qkla6n.png" alt="project" className="project-image"/>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999476/PortfolioIMGs/Captura_de_pantalla_2024-01-23_093616_hyihta.png" alt="project" className="project-image"/>
                    </Slider>
                    </Link>
                    
                    <p className="project-description">{t("descriptionMovieHub")}</p>
                </div>
                <div className="project-card3" data-aos="fade-right">
                    <a href='https://luduscocktailsparty.netlify.app/' target='_blank' rel='noreferrer'>
                        <h2 className="project-title">Cocktails App (search-cocktails-project)</h2>
                    </a>
                    <Link to={"https://luduscocktailsparty.netlify.app/"} target="_blank">
                    <Slider {...settings} className="slider">
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1709195968/PortfolioIMGs/Captura_de_pantalla_2024-02-29_093458_cogmol.png" alt="project" className="project-image"/>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1709195968/PortfolioIMGs/Captura_de_pantalla_2024-02-29_093623_lclj2c.png" alt="project" className="project-image"/>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1709195968/PortfolioIMGs/Captura_de_pantalla_2024-02-29_093841_cf3t0y.png" alt="project" className="project-image"/>
                    </Slider>
                    </Link>
                    
                    <p className="project-description">{t("descriptionCocktailsApp")}</p>
                </div>
            </article>
        </section>
    )
}

export default Projects;
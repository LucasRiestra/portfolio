import { useTranslation } from "react-i18next";
import "./about.css"

const About = () => {
    const { t } = useTranslation();
    return (
        <section className="about-section" data-aos="fade-right">
            <h1 className="about-title">{t("aboutMe")}</h1>
            <div className="about-grid">
                <div className="about-information">
                    <p className="about-text">
                        {t("aboutMeParagraph")}
                    </p>
                </div>
            </div>
        </section>
    )}

export default About;
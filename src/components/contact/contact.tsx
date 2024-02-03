import "./contact.css"
import { useTranslation } from "react-i18next";

const Contact = () => {
    const { t } = useTranslation();
    return (
        <section className="contact-section" data-aos="fade-right">
            <h1 className="contact-title">{t("contactMe")}</h1>
            <div className="contact-grid">
                <div className="contact-information">
                    <h3>Email: Lucas.riestra94@gmail.com</h3>
                    <h3>Linkedin: <a href="https://www.linkedin.com/in/lucasriestra/">https://www.linkedin.com/in/lucasriestra/</a></h3>
                </div>
            </div>
        </section>
    )}

export default Contact;
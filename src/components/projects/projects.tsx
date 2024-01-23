import "./projects.css";

const Projects = () => {
    return (
        <section>
            <h1 className="title-projects">See my Projects</h1>
            <article className="project-cards">
                <div className="project-card1">
                    <a href='https://sonus-music.vercel.app/' target='_blank' rel='noreferrer'>
                        <h2 className="project-title">SONUS (spotify-clone)</h2>
                    </a>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999478/PortfolioIMGs/Captura_de_pantalla_2024-01-23_092905_tq9ktu.png" alt="project" className="project-image" />
                    <p className="project-description">Sonus es una avanzada aplicación de reproductor de música basada en web, con un cliente creado utilizando React con TypeScript y un servidor desarrollado con NodeJS, Prisma, y una base de datos construida en MongoDB. Con una encantadora combinación de características, Sonus se presenta como tu compañero musical definitivo, permitiéndote sumergirte en el mundo de la música. ¡Vamos a explorar lo que Sonus tiene para ofrecer!</p>
                </div>
                <div className="project-card2">
                    <a href='https://e-commerce-sand-phi.vercel.app/' target='_blank' rel='noreferrer'>
                        <h2 className="project-title">LaCaie-Vintage (e-commerce)</h2>
                    </a>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999478/PortfolioIMGs/Captura_de_pantalla_2024-01-23_092951_vlfvqt.png" alt="project" className="project-image" />
                    <p className="project-description">LaCaie Vintage es una plataforma de comercio electrónico de ropa vintage, donde puedes embarcarte en un viaje a través de décadas de estilo, comprar de manera eficiente y redescubrir clásicos de la moda que nunca pasan de moda. 🎉
                    Esta plataforma está diseñada con Figma y construida sobre una combinación de tecnologías modernas, incluyendo React, TypeScript, HTML5 y CSS3. Hemos aprovechado las capacidades de estas herramientas para crear una experiencia de compra fluida y agradable. </p>
                </div>
                <div className="project-card3">
                    <a href='https://moviehub-next-js.vercel.app/' target='_blank' rel='noreferrer'>
                        <h2 className="project-title">CineXpress (MovieHub-project)</h2>
                    </a>
                    <img src="https://res.cloudinary.com/dtqgzojs3/image/upload/v1705999476/PortfolioIMGs/Captura_de_pantalla_2024-01-23_093548_txukud.png" alt="project" className="project-image" />
                    <p className="project-description">CineXpress te permite guardar tus películas favoritas con detalles como nombre, foto, score personalizado y género. Explora tus películas con esta aplicación construida en Next.js con TypeScript, con el frontend desplegado en Vercel y el backend en Railway. Todo el diseño fue realizado primeramente con Figma. El backend esta desarrollado con Node.js y Prisma, ademas utiliza una base de datos en MongoDB para almacenar la información. ¡Disfruta de la magia del cine con CineXpress!</p>
                </div>
            </article>
        </section>
    )
}

export default Projects;
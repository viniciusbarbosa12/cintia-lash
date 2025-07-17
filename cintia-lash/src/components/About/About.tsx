import "./About.css";

import cintia from "../../assets/principal.png"; // substitua pela imagem certa

const About = () => {
  return (
    <section className="about-container">
      <div className="about-card">
        <img src={cintia} alt="Cintia Andrade" className="about-image" />
        <div className="about-text">
          <h2>Cintia Andrade</h2>
          <p>
            Especialista em extensão de cílios, apaixonada por realçar a beleza
            natural com leveza, cuidado e perfeição em cada fio. Atendimento
            humanizado, técnicas atualizadas e um olhar sempre marcante.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;

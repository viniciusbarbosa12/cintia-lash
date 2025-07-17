import "./Services.css";

const services = [
  {
    title: "Fio a Fio",
    description: "Cílios naturais e delicados, aplicados fio por fio.",
  },
  {
    title: "Volume Russo",
    description: "Olhar marcante com leques volumosos e leves.",
  },
  {
    title: "Híbrido",
    description: "Mistura do clássico com o volume: equilíbrio perfeito.",
  },
  {
    title: "Manutenção",
    description: "Renovação e alinhamento dos fios após aplicação.",
  },
  {
    title: "Remoção",
    description: "Remoção segura e profissional das extensões.",
  },
  {
    title: "Lash Lifting",
    description:
      "Curvatura natural dos cílios sem extensão, realçando o olhar com seus próprios fios.",
  },
];

const Services = () => {
  return (
    <section className="services">
      <h2>Serviços</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

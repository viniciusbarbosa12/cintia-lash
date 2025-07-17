import "./Services.css";

const services = [
  {
    title: "Fio a Fio Clássico",
    description:
      "Uma técnica extremamente natural e clássica.\nAplicação: R$170,00\nManutenção: R$100,00 (até 25 dias)",
  },
  {
    title: "Volume Brasileiro (Preto e Marrom)",
    description:
      "Técnica versátil com resultado natural ou volumoso.\nAplicação: R$170,00\nManutenção: R$100,00 (até 30 dias)",
  },
  {
    title: "Volume Egípcio (4D)",
    description:
      "Volume maior com leveza e elegância.\nAplicação: R$180,00\nManutenção: R$110,00 (até 30 dias)",
  },
  {
    title: "Fox Eyes (Preto e Marrom)",
    description:
      "Tendência com resultado natural e marcante.\nAplicação: R$190,00\nManutenção: R$120,00 (até 30 dias)",
  },
  {
    title: "Lash Lifting",
    description:
      "Curvatura dos cílios naturais (sem extensão).\nAplicação: R$110,00\nDuração: 1 a 3 meses (não precisa manutenção)",
  },
  {
    title: "Reposição (até 10 dias)",
    description:
      "Retoca fios perdidos até 10 dias da aplicação.\nValor: R$60,00",
  },
  {
    title: "Remoção",
    description: "Remoção profissional segura.\nValor: R$60,00",
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
            {service.description.split("\n").map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;

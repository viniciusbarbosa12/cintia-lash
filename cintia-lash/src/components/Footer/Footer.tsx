import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>Agende seu horário:</p>
      <a
        className="btn"
        href="https://wa.me/553588741047"
        target="_blank"
        rel="noopener noreferrer"
      >
        Chamar no WhatsApp
      </a>
      <p>
        <a
          href="https://instagram.com/cintiaandrade.lash"
          target="_blank"
          rel="noopener noreferrer"
          className="text-insta"
        >
          @cintiaandradelash
        </a>
      </p>
    </footer>
  );
};

export default Footer;

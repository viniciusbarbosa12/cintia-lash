import "./App.css";
import "./FloatingButton.css";

import About from "./components/About/About.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Gallery from "./components/Gallery/Gallery.tsx";
import Header from "./components/Header/Header.tsx";
import Services from "./components/Services/Services.tsx";

function App() {
  return (
    <div>
      <Header />
      <About />
      <Services />
      <Gallery />
      <Footer />
      <a
        href="https://wa.me/553588741047"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg"
          alt="WhatsApp"
          style={{ width: "28px", marginTop: "16px" }}
        />
      </a>
    </div>
  );
}

export default App;

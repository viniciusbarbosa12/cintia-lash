import "./Header.css";

import logo from "../../assets/logo2.jpg";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="Cintia Andrade Logo" className="logo" />
    </div>
  );
};

export default Header;

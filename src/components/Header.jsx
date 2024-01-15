import Logo from "../image/logo.png";
import LogoRight from "../image/logoright.png";
import "../components/Header.css";
const Header = ({ title }) => {
  return (
    <nav>
      <img className="logo" src={Logo} alt="logo" />

      <a className="websiteName" href="/">
        {title}
        <img className="logo-right" src={LogoRight} alt="" />
      </a>
    </nav>
  );
};
export default Header;

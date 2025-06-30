import { CgProfile } from "react-icons/cg";
import { SiCodecrafters } from "react-icons/si";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li className="nav-link">
          <a className="link" href="/">
            <div className="link-div">
              <CgProfile />
            </div>
          </a>
          <p className="link-text">About</p>
        </li>
        <li className="nav-link">
          <a className="link" href="/">
            <div className="link-div">
              <SiCodecrafters />
            </div>
          </a>
          <p className="link-text">Skills</p>
        </li>
        <li className="nav-link">
          <a className="link" href="/">
            <div className="link-div">
              <PiProjectorScreenChartLight />
            </div>
          </a>
          <p className="link-text">Projects</p>
        </li>
        <li className="nav-link">
          <a className="link" href="/">
            <div className="link-div">
              <FaRegPaperPlane />
            </div>
          </a>
          <p className="link-text"> Contact</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

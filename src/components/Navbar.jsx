import { CgProfile } from "react-icons/cg";
import { SiCodecrafters } from "react-icons/si";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { FaRegPaperPlane } from "react-icons/fa";

const navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">Logo</div>
      <ul className="nav-links">
        <li className="nav-link">
          <a href="">
            <CgProfile />
            <p className="link-text">About</p>
          </a>
        </li>
        <li className="nav-link">
          <a href="">
            <SiCodecrafters />
            <p className="link-text">Skills</p>
          </a>
        </li>
        <li className="nav-link">
          <a href="">
            <PiProjectorScreenChartLight />
            <p className="link-text">Projects</p>
          </a>
        </li>
        <li className="nav-link">
          <a href="">
            <FaRegPaperPlane />
            <p className="link-text"> Contact</p>
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default navbar;

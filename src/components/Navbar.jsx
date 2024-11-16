import { FaLinkedin, FaGithub, FaInstagram, FaTwitter } from "react-icons/fa"; // Ensure you have installed and imported react-icons
import logo from "../assets/logo.webp";

function Navbar() {
  return (
    <>
      <nav className="flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
          <a href="/" aria-label="Home">
            <img
              src={logo}
              className="mx-2"
              width={180}
              height={250}
              alt="logo"
            />
          </a>
        </div>
        <div className="m-8 flex items-center justify-center gap-4 text-2xl">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

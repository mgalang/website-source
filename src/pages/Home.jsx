import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <div className="container">
      <img
        src="/photo.jpg"
        alt="Your Name"
        className="profile-image"
      />
      <h1>Marc Galang</h1>
      <p className="title">Software Architect</p>

      <div className="social-links">
        <a href="https://github.com/mgalang" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.linkedin.com/in/marcgalang" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
        <a href="https://www.instagram.com/marcgalang_/" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
      </div>

      <Link to="/about" className="about-link">
        About Me
      </Link>
    </div>
  );
}

export default Home;
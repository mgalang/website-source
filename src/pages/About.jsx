import { Link } from 'react-router-dom';

function About() {
  return (
    <div className="container">
      <h1>About Me</h1>
      <div className="about-content">
        <p>
        Hello! I’m Marc, a Software Architect based in Finland. I specialize in designing, developing, and optimizing innovative, scalable, and secure web solutions across diverse platforms, languages, and technologies.</p>

        <p>With over 12 years of experience, I have a proven track record of solving complex challenges, leading cross-functional teams, and mentoring talent to deliver high-impact projects. I’m passionate about aligning technical solutions with business objectives, ensuring both efficiency and measurable results.</p>

        <p>I strive to deliver forward-thinking, user-centric solutions that empower organizations to succeed in a digital-first world.</p>
      </div>
      <Link to="/" className="home-link">
        Back to Home
      </Link>
    </div>
  );
}

export default About;
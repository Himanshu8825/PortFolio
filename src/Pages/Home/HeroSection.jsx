export default function HeroSection() {
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hey, I'm Suraj Verma</p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Web Developer
          </h1>
          <p className="hero--section-description">
            Hi, I'm Suraj Verma.
            <br /> A passionate MERN Stack Developer based in Delhi, India. 📍
          </p>
        </div>

        <div className="social_icons">
          <a
            href="https://www.linkedin.com/in/suraj-verma-1b9244242/"
            className="container-ancher"
            target="_blank"
          >
            <i class="fa-brands fa-linkedin"></i>
          </a>
          <a
            href="https://github.com/Himanshu8825"
            className="container-ancher"
            target="_blank"
          >
            <i class="fa-brands fa-github"></i>
          </a>
          <a
            href="https://drive.google.com/file/d/1yWqhQd4kwf8k6PukxAkzr1xVVwX7Jkgb/view?usp=drive_link"
            target="_blank"
          >
            <button className="button" id="extra">
              Resume
            </button>
          </a>
        </div>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero22.png" alt="Hero Section" />
      </div>
    </section>
  );
}

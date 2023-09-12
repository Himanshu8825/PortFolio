export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/AboutMe.png"  alt="About Me" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <h1 className="skills-section--heading">About Me</h1>
          <p className="hero--section-description">
            <span>
              A dedicated FullStack Developer based in Delhi, India 📍
            </span>
          </p>
          <p className="hero--section-description">
            I am a MERN stack web developer and C++ programmer with experience
            in building and deploying scalable and performant web applications.
            I am proficient in all aspects of the MERN stack, including MongoDB,
            Express, React, and Node.js. I am also proficient in C++, and I am
            familiar with other programming languages such as Java, Python, and
            JavaScript.
          </p>
        </div>
      </div>
    </section>
  );
}

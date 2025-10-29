import Image from "next/image";

export default function AboutSection({ skills }) {
  return (
    <div className="d-flex flex-md-row flex-column justify-content-center mt-5 px-md-3">
      <div className="col-12 col-md-5">
        <Image
          className="profileImage"
          src="/img/burhanuddin-main.jpg"
          alt="Burhanuddin Chitalwala portrait"
          width={640}
          height={640}
          priority
        />
      </div>
      <div className="col-12 col-md-7 px-md-4 mt-4 mt-md-0" id="aboutMe">
        <h1>What I Do...</h1>
        <ul>
          <li className="fs-4">
            I am an aspiring Software Developer with a strong foundation in
            Java and a deep interest in the transformative fields of Machine
            Learning (ML) and Artificial Intelligence (AI).
          </li>
          <li className="fs-4">
            Passionate about solving complex problems, I thrive on exploring
            innovative solutions and continuously expanding my skill set to
            stay at the forefront of technology.
          </li>
          <li className="fs-4">
            Whether it&apos;s building robust applications or diving into
            intelligent algorithms, I am eager to contribute and grow in the
            ever-evolving world of software development.
          </li>
          <li className="fs-4">
            &quot;Every once in a while, a new technology, an old problem, and a
            great idea turn into an innovation.&quot;
            <span className="fst-italic fw-normal"> - Dean Kamen</span>
          </li>
        </ul>

        <div className="skills" id="skills">
          <h1 className="cardheadingSkills">Skills</h1>
          {skills.map((skill) => (
            <Image
              key={skill.title}
              className="skill"
              title={skill.title}
              src={skill.src}
              alt={skill.alt}
              width={50}
              height={50}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

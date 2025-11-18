import Image from "next/image";

export default function AboutSection({ skills }) {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-start lg:items-start justify-center items-center text-center gap-4 p-3">
      <div className="w-full lg:w-1/3 flex lg:justify-start lg:items-start justify-center items-center p-2 lg:p-4">
        <Image
          className=""
          src="/img/burhanuddin-main.jpg"
          alt="Burhanuddin Chitalwala portrait"
          width={640}
          height={640}
        />
      </div>
      <div className="w-full lg:w-2/3 flex flex-col justify-start text-start gap-2 lg:gap-8">
        <div className="mt-4 md:mt-0">
          <h1>What I Do...</h1>
          <div className="text-md md:text-xl md:w-[90%]">
            <p>
              I am a Full-Stack Software Developer driven by a deep passion for
              building intelligent, scalable systems that merge creativity with
              engineering precision. With hands-on experience across Next.js,
              React, and Android (Kotlin) ecosystems, I’ve delivered impactful,
              AI-integrated products from in-car voice assistants powered by
              LLMs to Next.js-based AdTech platforms serving global-scale
              audiences. What excites me most is the intersection of software
              craftsmanship and innovation where clean architecture meets
              problem-solving with purpose. I believe great engineering is not
              just about writing efficient code, but designing systems that
              scale, adapt, and inspire. Over the years, I’ve learned why
              foundational principles like modularity, reusability, and
              maintainability aren’t just best practices, they’re the building
              blocks of long-term innovation. Beyond code, I’m committed to
              sharing insights and learning openly, contributing to the
              developer community through thought leadership and collaboration.
              My approach is always solution-first and scalable, guided by
              curiosity, discipline, and the belief that the right blend of
              technology and empathy can transform how people interact with the
              digital world.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-2 lg:gap-4 justify-center items-center lg:items-start">
          <h2>Skills</h2>
          <div className="flex flex-wrap justify-start gap-2 sm:gap-4">
            {skills.map((skill) => (
              <Image
                key={skill.title}
                className="w-12 h-12 sm:w-20 sm:h-20 object-cover hover:scale-110 transition-all duration-300"
                title={skill.title}
                src={skill.src}
                alt={skill.alt}
                width={75}
                height={75}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

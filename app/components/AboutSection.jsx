import Image from "next/image";

export default function AboutSection({ skills }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 md:gap-8 justify-center text-center">
      <div className="">
        <Image
          className=""
          src="/img/burhanuddin-main.jpg"
          alt="Burhanuddin Chitalwala portrait"
          width={640}
          height={640}
          priority
        />
      </div>
      <div className="flex col-span-2 flex-col justify-start text-start gap-2 md:gap-8">
        <div className="mt-4 md:mt-0">
          <h1 className="text-2xl md:text-3xl font-semibold">What I Do...</h1>
          <div className="text-md md:text-xl md:w-[90%]">
            I am a Full-Stack Software Developer driven by a deep passion for
            building intelligent, scalable systems that merge creativity with
            engineering precision. With hands-on experience across Next.js,
            React, and Android (Kotlin) ecosystems, I’ve delivered impactful,
            AI-integrated products from in-car voice assistants powered by LLMs
            to Next.js-based AdTech platforms serving global-scale audiences.
            What excites me most is the intersection of software craftsmanship
            and innovation where clean architecture meets problem-solving with
            purpose. I believe great engineering is not just about writing
            efficient code, but designing systems that scale, adapt, and
            inspire. Over the years, I’ve learned why foundational principles
            like modularity, reusability, and maintainability aren’t just best
            practices, they’re the building blocks of long-term innovation.
            Beyond code, I’m committed to sharing insights and learning openly,
            contributing to the developer community through thought leadership
            and collaboration. My approach is always solution-first and
            scalable, guided by curiosity, discipline, and the belief that the
            right blend of technology and empathy can transform how people
            interact with the digital world.
          </div>
        </div>
        <div className="flex flex-col gap-2 md:gap-4">
          <h1 className="text-xl md:text-2xl font-semibold">Skills</h1>
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

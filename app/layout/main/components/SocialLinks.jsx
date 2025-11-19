import Image from "next/image";
import Link from "next/link";

export default function SocialLinks({ links }) {
  return (
    <div className="w-full flex flex-col justify-center items-center text-center">
      <h1>Let&apos;s Connect!</h1>
      <div className="w-[80%] md:w-[40%] flex justify-around text-center">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="text-center "
          >
            <div>
              <Image
                src={link.icon}
                alt={`${link.label} icon`}
                width={60}
                height={60}
                className="w-12 h-12 md:w-20 md:h-20"
              />
            </div>
            <div>
              <p className="text-lg">{link.label}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

import Image from "next/image";

export default function SocialLinks({ links }) {
  return (
    <div className="social-icons d-flex flex-column justify-content-center align-items-center w-100 mt-5 px-md-3">
      <div className="contactForm text-center text-md-start rounded w-100 ps-3" id="contactForm">
        <h1>Let&apos;s Connect!</h1>
      </div>
      <div className="socialMedia d-flex justify-content-center align-items-center w-100 mt-4" id="socialMedia">
        <div className="socialIcons d-flex gap-4">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="text-center"
            >
              <div>
                <Image
                  src={link.icon}
                  alt={`${link.label} icon`}
                  width={60}
                  height={60}
                  className="social-icon"
                />
              </div>
              <div>
                <p>{link.label}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

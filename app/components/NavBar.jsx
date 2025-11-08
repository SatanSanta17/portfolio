import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className="w-full md:sticky top-0 flex flex-col md:flex-row justify-between items-start md:items-center px-4 py-3">
      <h1 className="text-2xl md:text-5xl font-bold">Burhanuddin Chitalwala</h1>
      <Link href="/docs/resume.pdf" target="_blank">
        <div className="flex text-xs md:text-base items-center gap-2 border-2 border-black rounded-full py-2 px-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <Image
            src="/img/file.svg"
            alt="Resume"
            width={16}
            height={16}
            className="w-4 h-4 md:w-5 md:h-5"
          />
          <span>Resume</span>
        </div>
      </Link>
    </div>
  );
}


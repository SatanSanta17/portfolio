import Image from "next/image";
import Link from "next/link";
export default function NavBar() {
  return (
    <div className="w-full sm:sticky top-0 flex flex-col sm:flex-row justify-between items-start sm:items-center px-4 py-3">
      <h1 className="text-2xl sm:text-5xl font-bold">Burhanuddin Chitalwala</h1>
      <Link href="/docs/resume.pdf" target="_blank">
        <div className="flex text-xs sm:text-base items-center gap-2 border-2 border-black rounded-full py-2 px-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
          <Image
            src="/img/file.svg"
            alt="Resume"
            width={16}
            height={16}
            className="w-4 h-4 sm:w-5 sm:h-5"
          />
          <span>Resume</span>
        </div>
      </Link>
    </div>
  );
}


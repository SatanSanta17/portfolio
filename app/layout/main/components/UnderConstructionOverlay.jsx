"use client";

import Link from "next/link";

export default function UnderConstructionOverlay({
  resumeHref = "/docs/resume.pdf",
  contactHref = "mailto:burhanuddinchital25151@gmail.com",
}) {
  return (
    <div className="fixed inset-0 z-50 flex flex-col items-center justify-center gap-6 bg-slate-950/95 px-6 text-center text-white backdrop-blur-md">
      <div className="flex flex-col gap-4 md:gap-6">
        <span className="text-sm uppercase tracking-[0.4em] text-slate-300">
          coming soon
        </span>
        <h1 className="text-4xl font-bold md:text-6xl text-white">Under Construction</h1>
        <p className="mx-auto max-w-md text-base text-slate-200 md:max-w-xl md:text-lg">
          I’m rebuilding this experience to make it sharper, faster, and more
          personal. In the meantime, feel free to reach out or grab my resume.
        </p>
      </div>

      <div className="flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4 md:w-auto">
        <Link
          href={contactHref}
          className="w-full rounded-full bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-900 transition duration-200 hover:bg-white sm:w-auto"
        >
          Get In Touch
        </Link>
        <Link
          href={resumeHref}
          target="_blank"
          className="w-full rounded-full border border-white/40 px-6 py-3 text-sm font-semibold text-white transition duration-200 hover:border-white hover:bg-white/10 sm:w-auto"
        >
          View Resume
        </Link>
      </div>
    </div>
  );
}
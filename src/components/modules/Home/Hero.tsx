import Image from "next/image";
import {
  FaDownload,
  FaUser,
  FaCode,
  FaBriefcase,
  FaGraduationCap,
} from "react-icons/fa";

import { personalInfo } from "./../../../lib/data/personalInfo";
import Contact from "./Contact";

type HeroProps = {
  personal: typeof personalInfo;
};

const Hero = ({ personal }: HeroProps) => {
  return (
    <>
      {/* Hero Section */}
      <section
        id="intro"
        className="pt-28 flex items-center justify-center bg-slate-900 relative overflow-hidden"
        style={{ minHeight: "100dvh" }}
      >
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-sky-500/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 z-10 relative">
          <div className="flex flex-col justify-center items-center">
            <div className="max-w-3xl w-full">
              <div className="flex flex-col md:flex-row justify-between items-center relative">
                <div className="text-left w-full md:w-3/4">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-sky-400 font-medium mb-3">
                    Hello, I&apos;m
                  </p>

                  <h1 className="text-6xl sm:text-7xl lg:text-8xl font-bold text-white mb-4">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 to-indigo-500">
                      {personal.name}
                    </span>
                  </h1>

                  <h2 className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mb-6">
                    {personal.title}
                  </h2>

                  <div className="flex flex-wrap gap-4 my-6">
                    <a
                      href="#about"
                      className="px-8 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg flex items-center gap-2"
                    >
                      About Me <FaUser />
                    </a>

                    <a
                      href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view?usp=sharing"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-8 py-3 bg-slate-800 text-gray-200 font-medium rounded-lg border border-slate-700 hover:bg-slate-700 flex items-center gap-2"
                    >
                      Resume <FaDownload />
                    </a>
                  </div>
                </div>

                {/* Scroll Indicator */}
                <div className="hidden md:flex flex-col items-center justify-center h-full my-auto">
                  <a
                    href="#about"
                    className="flex flex-col items-center text-slate-400 hover:text-sky-400 transition-colors"
                  >
                    <span className="text-lg font-medium mb-2">
                      Scroll Down
                    </span>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="text-sky-400"
                    >
                      <path
                        d="M12 5V19M12 19L19 12M12 19L5 12"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-slate-800 relative overflow-hidden"
      >
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-sky-700/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-indigo-700/5 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4 relative inline-block">
              <span className="relative z-10">About Me</span>
              <span className="absolute bottom-1 left-0 w-full h-3 bg-sky-600/20 -z-10 transform -rotate-1"></span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Get to know more about me, my background, and what I do.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Image */}
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden border-4 border-slate-700 shadow-xl">
                <Image
                  src={personal.image}
                  alt={`About ${personal.name}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-40"></div>
              </div>
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-sky-500/30 rounded-lg z-0"></div>
            </div>

            {/* Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">
                {personal.title}
              </h3>

              {personal.bio.map((p, i) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed">
                  {p}
                </p>
              ))}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <FaCode className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">Web Development</h4>
                    <p className="text-gray-400 text-sm">
                      Modern & responsive apps
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <FaBriefcase className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      {personal.projects}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      Delivered successfully
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center">
                    <FaGraduationCap className="text-sky-400" />
                  </div>
                  <div>
                    <h4 className="text-white font-medium">
                      {personal.education.degree}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {personal.education.university}
                    </p>
                  </div>
                </div>
              </div>

              <a
                href="#contact"
                className="inline-block px-8 py-3 mt-6 bg-gradient-to-r from-sky-600 to-indigo-600 text-white font-medium rounded-lg shadow-lg"
              >
                Let&apos;s Talk
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Info Preview */}

      <section id="hero" className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          {/* Left: Intro */}
          <div>
            <h1 className="text-5xl font-bold mb-4">
              Hi, I&apos;m <span className="text-sky-400">Md Shamim</span>
            </h1>
            <p className="text-lg text-gray-400 mb-6">
              A passionate full-stack developer focused on building modern web
              applications with great user experiences.
            </p>
            <a
              href="#contact"
              className="inline-block px-6 py-3 bg-gradient-to-r from-sky-600 to-indigo-600 rounded-lg text-white font-semibold hover:from-sky-500 hover:to-indigo-500 transition-all duration-300"
            >
              Get In Touch
            </a>
          </div>

          {/* Right: Contact Info Card */}
          <div className="mt-10 md:mt-0">
            <Contact />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

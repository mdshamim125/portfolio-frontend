"use client";

import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 border-t border-slate-800/50">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1 - About */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Image
                  src="https://i.ibb.co/6BDDyvD/portfolio.png"
                  alt="Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 rounded-md shadow-lg border border-sky-500/30"
                />

                <div className="absolute -inset-0.5 rounded-md bg-gradient-to-r from-sky-400 to-indigo-500 opacity-30 blur-sm"></div>
              </div>
              <div>
                <h3 className="font-bold bg-clip-text text-transparent bg-gradient-to-r from-sky-400 to-indigo-400">
                  Md Shamim
                </h3>
                <p className="text-xs text-gray-400">Full Stack Developer</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Passionate about creating modern, responsive web applications with
              clean code and exceptional user experiences.
            </p>
          </div>

          {/* Column 2 - Links */}
          <div className="space-y-4">
            <h3 className="text-white font-medium mb-3">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <a
                href="#intro"
                className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
              >
                Home
              </a>
              <a
                href="#skills"
                className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
              >
                Skills
              </a>
              <Link
                href="/projects"
                className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
              >
                Projects
              </Link>
              <a
                href="#education"
                className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
              >
                Education
              </a>
              <a
                href="#contact"
                className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
              >
                Contact
              </a>
              <a
                href="https://drive.google.com/file/d/1jIIiNBmAZvSmOPnSfg2JrhCjNKOw_To_/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Column 3 - Contact */}
          <div className="space-y-4">
            <h3 className="text-white font-medium mb-3">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-sky-400" />
                <a
                  href="mailto:cse12005038brur@gmail.com"
                  className="text-gray-400 hover:text-sky-400 transition-colors text-sm"
                >
                  cse12005038brur@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-sky-400" />
                <span className="text-gray-400 text-sm">
                  Rangpur, Bangladesh
                </span>
              </div>
            </div>

            <div className="flex space-x-3 mt-6">
              <a
                href="https://github.com/mdshamim125"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg text-gray-400 hover:text-white hover:-translate-y-1 transition-all"
              >
                <FaGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/md-shamim125"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg text-gray-400 hover:text-blue-400 hover:-translate-y-1 transition-all"
              >
                <FaLinkedin size={18} />
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=100028692487641&locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-800 p-2 rounded-lg text-gray-400 hover:text-blue-500 hover:-translate-y-1 transition-all"
              >
                <FaFacebook size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="border-t border-slate-800/50 mt-10 pt-6 flex flex-col items-center justify-center text-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} Md Shamim. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

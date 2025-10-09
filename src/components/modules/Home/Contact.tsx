import {
  FaEnvelope,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaServer,
} from "react-icons/fa";
import { personalInfo } from "@/lib/data/personalInfo";

const Contact = () => {
  return (
    <div className="rounded-xl border border-gray-800 bg-gray-800/50 p-8 backdrop-blur-sm shadow-lg transform transition-all duration-500 hover:shadow-blue-900/20">
      <div className="mb-8 border-b border-gray-700 pb-6">
        <div className="flex items-center mb-3">
          <div>
            <h3 className="text-2xl font-bold text-white">
              {personalInfo.name}
            </h3>
            <p className="text-gray-300 flex items-center space-x-2 mt-1">
              <span className="bg-gradient-to-r from-sky-400 to-indigo-500 text-transparent bg-clip-text font-bold">
                {personalInfo.title}
              </span>
            </p>
          </div>
        </div>
        <p className="text-gray-400 text-sm leading-relaxed">
          Specialized in building modern, high-performance web applications with
          React, Node.js, and MongoDB.
        </p>
      </div>

      <div>
        <h3 className="text-xl font-bold text-white mb-6 flex items-center">
          <FaServer className="mr-3 text-sky-400" />
          Contact Information
        </h3>

        <div className="space-y-6">
          <div className="flex items-start group">
            <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg group-hover:bg-sky-900/50 transition-colors duration-300">
              <FaMapMarkerAlt className="text-sky-400" />
            </div>
            <div className="ml-4">
              <h4 className="text-gray-300 font-medium">Location</h4>
              <p className="text-gray-400 mt-1">
                {personalInfo.contact.location}
              </p>
            </div>
          </div>

          <div className="flex items-start group">
            <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg group-hover:bg-sky-900/50 transition-colors duration-300">
              <FaEnvelope className="text-sky-400" />
            </div>
            <div className="ml-4">
              <h4 className="text-gray-300 font-medium">Email</h4>
              <a
                href={`mailto:${personalInfo.contact.email}`}
                className="text-gray-400 mt-1 hover:text-sky-400 transition-colors block"
              >
                {personalInfo.contact.email}
              </a>
            </div>
          </div>

          <div className="flex items-start group">
            <div className="flex-shrink-0 bg-gray-700 p-3 rounded-lg group-hover:bg-sky-900/50 transition-colors duration-300">
              <FaPhoneAlt className="text-sky-400" />
            </div>
            <div className="ml-4">
              <h4 className="text-gray-300 font-medium">Phone</h4>
              <a
                href={`tel:${personalInfo.contact.phone}`}
                className="text-gray-400 mt-1 hover:text-sky-400 transition-colors block"
              >
                {personalInfo.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Social Icons */}
        <div className="mt-8">
          <h4 className="text-gray-300 font-medium mb-4 flex items-center">
            Connect with me
            <span className="ml-2 h-px bg-gradient-to-r from-sky-500/40 to-transparent flex-grow"></span>
          </h4>
          <div className="flex space-x-4">
            <a
              href={personalInfo.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-lg text-gray-400 hover:text-white hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <FaGithub size={20} />
            </a>
            <a
              href={personalInfo.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-lg text-gray-400 hover:text-blue-400 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href={personalInfo.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 p-3 rounded-lg text-gray-400 hover:text-blue-500 hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg"
            >
              <FaFacebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

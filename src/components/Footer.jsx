import React from "react";
import { SiLinkedin, SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full">
      <footer className=" pt-5 pb-10 font-bold flex items-center justify-center gap-4">
        <p className="text-white text-lg ">Developed by BaltazarGC</p>
        <a
          className="text-blue-700 bg-white rounded"
          href="https://www.linkedin.com/in/baltazargc"
          target="_blank"
          rel="noreferrer"
        >
          <SiLinkedin className="text-2xl" />
        </a>
        <a
          className="text-gray-700 bg-white rounded-full "
          href="https://github.com/BaltazarG"
          target="_blank"
          rel="noreferrer"
        >
          <SiGithub className="text-3xl p-1" />
        </a>
        <a
          href="https://baltazargc.vercel.app/"
          className="text-white "
          target="_blank"
          rel="noreferrer"
        >
          <FiExternalLink className="text-3xl p-1" />
        </a>
      </footer>
    </div>
  );
};

export default Footer;

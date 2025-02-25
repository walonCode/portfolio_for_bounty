import { Github, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 text-center">
      <div className="container mx-auto flex flex-col items-center gap-3">
        {/* Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/walonCode"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-400 transition duration-300"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://linkedin.com/in/walonjalloh"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition duration-300"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://twitter.com/walon_lamin"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition duration-300"
          >
            <Twitter className="w-6 h-6" />
          </a>
        </div>

        {/* Copyright Text */}
        <p className="text-sm text-gray-400">
          &copy; {new Date().getFullYear()} <b className="text-white font-extrabold">WJ</b>. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

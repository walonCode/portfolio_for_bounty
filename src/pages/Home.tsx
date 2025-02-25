import { Link } from "react-router-dom";
import { Briefcase, Mail } from "lucide-react";

const HomePage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-blue-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 text-center p-6">
      {/* Hero Section */}
      <div className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-10 max-w-2xl text-gray-800 dark:text-white">
        <h1 className="text-5xl font-extrabold mb-4">Welcome to <b>WJ</b></h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-6">
          Showcasing my skills, experience, and projects. Let's build something great together!
        </p>

        {/* CTA Buttons */}
        <div className="flex space-x-4 justify-center">
          <Link
            to="/projects"
            className="flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:scale-105"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            View Projects
          </Link>
          <Link
            to="/contact"
            className="flex items-center px-6 py-3 bg-gray-800 text-white font-medium rounded-lg shadow-lg hover:bg-gray-900 transition transform hover:scale-105"
          >
            <Mail className="w-5 h-5 mr-2" />
            Contact Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

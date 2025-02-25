import { User, Code, Sparkles } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center p-6">
      {/* Header with Icon */}
      <div className="flex items-center gap-3 mb-4">
        <User className="w-10 h-10 text-blue-600 dark:text-blue-400" />
        <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">
          About <b>WJ</b>
        </h1>
      </div>

      {/* Description */}
      <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl">
        <span className="inline-flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-yellow-500" />
          Passionate Developer
        </span>{" "}
        with expertise in modern web technologies. I specialize in creating{" "}
        <span className="inline-flex items-center gap-2">
          <Code className="w-5 h-5 text-green-500" />
          high-performance web applications
        </span>
        , focusing on **clean design, efficiency, and user experience**.
      </p>

      {/* Extra Styling */}
      <div className="mt-6 w-24 h-1 bg-blue-600 dark:bg-blue-400 rounded-full"></div>
    </div>
  );
};

export default AboutPage;

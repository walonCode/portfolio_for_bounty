import { Mail, MessageSquare, User } from "lucide-react";

const ContactPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 dark:bg-gray-900 text-center p-6">
      {/* Header */}
      <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">Contact Me</h1>
      <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
        Feel free to reach out via the form below.
      </p>

      {/* Contact Form */}
      <form className="w-full max-w-md bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg backdrop-blur-md">
        {/* Name Input */}
        <div className="relative mb-4">
          <User className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Email Input */}
        <div className="relative mb-4">
          <Mail className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
          />
        </div>

        {/* Message Input */}
        <div className="relative mb-4">
          <MessageSquare className="absolute left-3 top-3 text-gray-400 dark:text-gray-500 w-5 h-5" />
          <textarea
            placeholder="Your Message"
            className="w-full p-3 pl-10 border border-gray-300 dark:border-gray-700 rounded-lg bg-gray-100 dark:bg-gray-700 focus:ring-2 focus:ring-blue-500 outline-none"
            rows={4}
          />
        </div>

        {/* Submit Button */}
        <button className="w-full px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default ContactPage;

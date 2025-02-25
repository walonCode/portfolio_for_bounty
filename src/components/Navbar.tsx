import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, User, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white p-4 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-widest flex items-center space-x-2">
          <span className="text-blue-500">WJ</span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <NavItem to="/" icon={<Home size={20} />} text="Home" />
          <NavItem to="/about" icon={<User size={20} />} text="About" />
          <NavItem to="/projects" icon={<Briefcase size={20} />} text="Projects" />
          <NavItem to="/contact" icon={<Mail size={20} />} text="Contact" />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden focus:outline-none"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-gray-800 py-4 flex flex-col space-y-4 items-center">
          <NavItem to="/" icon={<Home size={20} />} text="Home" onClick={() => setIsOpen(false)} />
          <NavItem to="/about" icon={<User size={20} />} text="About" onClick={() => setIsOpen(false)} />
          <NavItem to="/projects" icon={<Briefcase size={20} />} text="Projects" onClick={() => setIsOpen(false)} />
          <NavItem to="/contact" icon={<Mail size={20} />} text="Contact" onClick={() => setIsOpen(false)} />
        </div>
      )}
    </nav>
  );
};

// Reusable Nav Item Component
const NavItem = ({ to, icon, text, onClick }: { to: string; icon: React.ReactNode; text: string; onClick?: () => void }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="flex items-center space-x-2 text-lg hover:text-blue-400 transition"
    >
      {icon}
      <span>{text}</span>
    </Link>
  );
};

export default Navbar;

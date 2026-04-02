import { useState } from "react";
import {
  Menu,
  X,
  Phone,
  Mail,
  Facebook,
  Instagram,
  MessageSquare,
} from "lucide-react";
import logo from "../assets/princegrouplogo-removebg-preview.png";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "#" },
    { name: "Tickets", href: "#tickets" },
    { name: "Services", href: "#services" },
    { name: "Branch", href: "#branch" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-50">
      {/* Top Contact Bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="container mx-auto px-4 py-2 flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-1">
              <Phone className="w-4 h-4" />
              <span>+91 9488781044 or +91 7339165572</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="w-4 h-4" />
              <span>ps.ravi1044@gmail.com</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-blue-300 transition">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-pink-300 transition">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="#" className="hover:text-green-300 transition">
              <MessageSquare className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gradient-to-r from-blue-800 to-green-600 text-white shadow-lg">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center">
            <img
              src={logo}
              alt="MusicFest Logo"
              className="h-12 filter brightness-150"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="px-4 py-2 font-semibold rounded-lg hover:bg-white/10 transition-all"
              >
                {item.name}
              </a>
            ))}
            <button
              className="ml-4 px-6 py-2 bg-green-500 hover:bg-green-600 font-bold rounded-lg transition-all"
              href="#tickets"
            >
              Live Concerts
            </button>
          </nav>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsMenuOpen(true)}
            className="md:hidden p-2 rounded-md text-white hover:bg-blue-700 transition"
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-blue-900/95 z-50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6">
            <div className="flex justify-between items-center mb-8">
              <img
                src="https://via.placeholder.com/150x50?text=MusicFest"
                alt="MusicFest Logo"
                className="h-10"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-full hover:bg-blue-800 transition"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="px-4 py-3 text-xl font-medium rounded-lg hover:bg-white/10 transition"
                >
                  {item.name}
                </a>
              ))}

              <button
                onClick={() => setIsMenuOpen(false)}
                className="mt-6 px-6 py-3 bg-green-500 hover:bg-green-600 font-bold rounded-lg transition-all text-lg"
                href="#tickets"
              >
                Buy Tickets
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;

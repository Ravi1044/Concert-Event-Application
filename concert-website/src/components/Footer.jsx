import { Button, IconButton } from "@mui/material";
import { Facebook, Instagram, WhatsApp } from "@mui/icons-material";
import logo from "../assets/princegrouplogo-removebg-preview.png";

const Footer = () => {
  return (
    <footer id="contact" className="bg-blue-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <img
              src={logo}
              alt="Concert Logo"
              className="h-12 mb-4 filter brightness-150"
            />
            <p className="text-blue-200 mb-4">
              Experience the magic of live music with us. Creating unforgettable
              moments since 2014.
            </p>
            <div className="flex space-x-4">
              <IconButton
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-green-300 transition"
              >
                <Facebook fontSize="large" />
              </IconButton>
              <IconButton
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-green-300 transition"
              >
                <Instagram fontSize="large" />
              </IconButton>
              <IconButton
                href="#"
                aria-label="WhatsApp"
                className="text-white hover:text-green-300 transition"
              >
                <WhatsApp fontSize="large" />
              </IconButton>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#tickets"
                  className="text-blue-200 hover:text-white transition"
                >
                  Tickets
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-blue-200 hover:text-white transition"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-blue-200 hover:text-white transition"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-blue-200 hover:text-white transition"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>123 Event Avenue, Kallakurichi, India - 606209</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+91 9488781044 or +91 7339165572</span>
              </li>
              <li className="flex items-start">
                <svg
                  className="h-6 w-6 mr-2 text-green-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>ps.ravi1044@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Newsletter</h3>
            <p className="text-blue-200 mb-4">
              Subscribe for updates about upcoming events and exclusive offers
            </p>
            <form className="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-2 rounded focus:outline-none focus:ring-2 focus:ring-green-500 text-gray-800"
              />
              <Button
                type="submit"
                variant="contained"
                color="success"
                className="w-full"
              >
                Subscribe
              </Button>
            </form>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-6 text-center text-blue-300">
          <p>
            &copy; {new Date().getFullYear()} Concert Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

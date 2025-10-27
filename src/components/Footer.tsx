import { MapPin, Phone, Mail, Facebook, Linkedin, Instagram } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div>
            <div className="mb-4">
              <img
                src="/images/MAGIGO TRADING COMPANY-02.jpg"
                alt="Magigo Trading Company Logo"
                className="h-12 w-24"
              />
            </div>
            <p className="text-sm text-gray-300">
              Providing sustainable development solutions to communities in Malawi and the region.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/what-we-do" className="text-gray-300 hover:text-white transition-colors">
                  What We Do
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <Phone className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>+265 881 626 484</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>mtc@magigomw.com</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                <span>Green Corner Trading Center, Blantyre, Malawi</span>
              </li>
            </ul>
          </div>

          {/* Subsidiaries */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Subsidiaries</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Magigo Hardware</li>
              <li>Magigo Systems</li>
              <li>Seah Farms</li>
              <li>Magigo Mobile Money</li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="transition-colors">
                <Facebook className="h-6 w-6" style={{ color: '#1877F2' }} />
              </a>
              <a href="#" className="transition-colors">
                <Linkedin className="h-6 w-6" style={{ color: '#0077B5' }} />
              </a>
              <a href="#" className="transition-colors">
                <Instagram className="h-6 w-6" style={{ background: 'linear-gradient(45deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Magigo Trading Company. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { getImageUrl } from "@/lib/imageUtils";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const location = useLocation();

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const currentScrollY = window.scrollY;
          const scrollDifference = Math.abs(currentScrollY - lastScrollY);
          
          // Only react to significant scroll movements for smoother behavior
          if (scrollDifference > 5) {
            // Show navbar when scrolling up or at the very top
            if (currentScrollY < lastScrollY || currentScrollY < 20) {
              setIsVisible(true);
            } 
            // Hide navbar when scrolling down after a threshold
            else if (currentScrollY > lastScrollY && currentScrollY > 80) {
              setIsVisible(false);
              setIsOpen(false); // Close mobile menu when hiding
            }
            
            setLastScrollY(currentScrollY);
          }
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/what-we-do" },
    { name: "Careers", path: "/careers" },
    { name: "Contact", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 z-50 w-full bg-white transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      <div className="container mx-auto px-9">
        <div className="flex h-22 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={getImageUrl("images/MAGIGO-TRADING-COMPANY-02.jpg")} 
              alt="Magigo Trading Company Logo"
              className="h-24 w-auto object-contain"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 flex-1 justify-end">
            {navLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                <Button
                  variant="ghost"
                  className={`text-sm font-medium transition-colors px-3 py-1.5 ${
                    isActive(link.path)
                      ? "bg-primary/10 text-primary hover:bg-primary/20"
                      : "text-gray-700 hover:text-primary hover:bg-primary/5"
                  }`}
                >
                  {link.name}
                </Button>
              </Link>
            ))}
            <Link to="/contact">
              <Button className="bg-white hover:bg-gray-50 text-gray-900 font-semibold shadow-md" style={{ border: '1.3px solid hsl(var(--primary))' }}>
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 ml-auto"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-200 animate-slide-in">
            <div className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                >
                  <Button
                    variant="ghost"
                    className={`w-full justify-start text-sm font-medium ${
                      isActive(link.path)
                        ? "bg-primary/10 text-primary"
                        : "text-gray-700 hover:text-primary hover:bg-primary/5"
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-white hover:bg-gray-50 text-gray-900 font-semibold" style={{ border: '1.3px solid hsl(var(--primary))' }}>
                    Get Started
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;

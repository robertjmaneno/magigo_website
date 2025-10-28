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
    { name: "What We Do", path: "/what-we-do" },
    { name: "Newsletter", path: "/newsletter" },
    { name: "Contact Us", path: "/contact" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className={`fixed top-0 z-50 w-full bg-primary shadow-lg transition-all duration-500 ease-out ${
      isVisible ? 'translate-y-0 opacity-100' : '-translate-y-full opacity-0'
    }`}>
      {/* Top Contact Bar */}
      <div className="bg-primary">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={getImageUrl("images/MAGIGO-TRADING-COMPANY-02.jpg")} 
                alt="Magigo Trading Company Logo"
                className="h-14 w-auto object-contain bg-white rounded px-1 py-2 shadow-sm"
              />
            </Link>
            <div className="hidden md:flex flex-col gap-1 text-primary-foreground/90 text-sm">
              <a href="tel:+265881626484" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="h-3 w-3" />
                <span>+265 881 626 484</span>
              </a>
              <a href="mailto:mtc@magigomw.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="h-3 w-3" />
                <span>mtc@magigomw.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Separator Line */}
      <div className="mx-8 md:mx-16 lg:mx-24 xl:mx-32">
        <div className="h-px bg-white opacity-50"></div>
      </div>

      {/* Main Navigation Bar with Logo */}
      <div className="bg-primary/95 backdrop-blur supports-[backdrop-filter]:bg-primary/90">
        <div className="container mx-auto px-8 md:px-16 lg:px-24 xl:px-32">
          <div className="flex h-20 items-center justify-between">
            {/* Desktop Navigation - moved to the left */}
            <div className="hidden md:flex items-center space-x-2">
              {navLinks.map((link) => (
                <Link key={link.path} to={link.path}>
                  <Button
                    variant="ghost"
                    className={`text-sm font-medium transition-colors px-3 py-1.5 ${
                      isActive(link.path)
                        ? "bg-primary-foreground/10 text-primary-foreground hover:bg-primary-foreground/20"
                        : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                    }`}
                  >
                    {link.name}
                  </Button>
                </Link>
              ))}
            </div>

            {/* CTA Button - moved to the right */}
            <div className="hidden md:block">
              <Link to="/contact">
                <Button 
                  className="bg-white hover:bg-gray-100 text-primary font-semibold shadow-md"
                >
                  Request a Quote
                </Button>
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 text-primary-foreground"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isOpen && (
            <div className="md:hidden py-4 border-t border-primary-foreground/10 animate-slide-in">
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
                          ? "bg-primary-foreground/10 text-primary-foreground"
                          : "text-primary-foreground/80 hover:text-primary-foreground hover:bg-primary-foreground/10"
                      }`}
                    >
                      {link.name}
                    </Button>
                  </Link>
                ))}
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground font-semibold mt-2">
                    Request a Quote
                  </Button>
                </Link>
              </div>
              {/* Mobile Contact Info */}
              <div className="flex flex-col gap-3 mt-4 pt-4 border-t border-primary-foreground/10 text-primary-foreground/90 text-sm">
                <a href="tel:+265881626484" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Phone className="h-4 w-4" />
                  <span>+265 881 626 484</span>
                </a>
                <a href="mailto:mtc@magigomw.com" className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                  <Mail className="h-4 w-4" />
                  <span>mtc@magigomw.com</span>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

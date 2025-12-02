import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const slides = [
  {
    title: "Building Sustainable Communities",
    description: "Providing comprehensive development solutions across Malawi",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80",
    button1: "Get a Quote Now",
    button2: "More Info",
  },
  {
    title: "Let's build together",
    description: "Quality building, plumbing, electrical and hardware materials available instore and online.",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80",
    button1: "Get a Quote Now",
    button2: "More Info",
  },
  {
    title: "Complete IT Solutions",
    description: "Innovative technology services for individuals and enterprises",
    image: "images/s3 (2).jpg",
    button1: "Get a Quote Now",
    button2: "More Info",
  },
  {
    title: "Farm fresh products",
    description: "Wholesome foods at your door step.",
    image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?w=1200&q=80",
    button1: "Get a Quote Now",
    button2: "More Info",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen bg-primary overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="container mx-auto px-4 py-20 h-full flex items-center pt-32">
            <div className="grid lg:grid-cols-2 gap-12 items-center w-full">
              {/* Text Content */}
              <div className="space-y-8 animate-fade-in">
                <div className="space-y-4">
                  <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-lg md:text-xl text-white/90 leading-relaxed">
                    {slide.description}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/contact">
                    <Button size="lg" className="text-primary-foreground font-semibold shadow-lg px-8 py-4 text-lg" style={{ backgroundColor: '#10d243' }}>
                      {slide.button1}
                    </Button>
                  </Link>
                  <Link to="/about">
                    <Button size="lg" variant="outline" className="border-white text-primary bg-white hover:bg-gray-100 px-8 py-4 text-lg font-medium">
                      {slide.button2}
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Image Content */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-96 md:h-[420px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg"
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-6 w-6 text-gray-700" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors shadow-lg"
        aria-label="Next slide"
      >
        <ChevronRight className="h-6 w-6 text-gray-700" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? "w-8 bg-primary" : "w-2 bg-gray-300"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

import { Building2, Cpu, Sprout, Wallet } from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import SubsidiaryCard from "@/components/SubsidiaryCard";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getImageUrl, getBackgroundImageStyle } from "@/lib/imageUtils";

const Home = () => {
  const clientsAndPartners = [
    "images/Partners/Ekhaya logo.png",
    "images/Partners/nbm_plc_logo.png",
    "images/Partners/nbs-bank.png",
    "images/Partners/nyasa.png",
    "images/Partners/mac.png",
    "images/Partners/saf.png",
    "images/Partners/standard.png",
    "images/Partners/portland-cement-logo-hauxin-malawi.png",
    "images/Partners/premanade medical centre logo.png",
    "images/Partners/Tiyende logo.png",
    "images/Partners/logo.svg",
    "images/Partners/eco-logo-svg.svg",
    "images/Partners/shayoma.svg",
    "images/Partners/tnm-logo-1.0dd9a10.svg",
    "images/Partners/total.svg",
    "images/Partners/FDHLogo.webp",
  ];

  const subsidiaries = [
    {
      title: "Magigo Hardware",
      description: "Wholesale and retail of building, plumbing, electrical and hardware materials.",
      icon: Building2,
      details: [
        "Online ordering and delivery services",
        "Home building consultancy",
        "3 locations: Green Corner, Chileka, and Airwing",
        "Mobile money services",
        "Agency banking solutions",
        "Digital payment solutions",
        "Financial accessibility services",
      ],
    },
    {
      title: "Magigo Systems",
      description: "Complete range of IT solutions for individuals and enterprises.",
      icon: Cpu,
      details: [
        "IT Service Management",
        "Computer Sales & Accessories",
        "Managed IT Services",
        "Web Services",
        "Data Analytics",
        "Software Development",
      ],
    },
    {
      title: "Seah Farms",
      description: "Agricultural production and dairy products manufacturing.",
      icon: Sprout,
      details: [
        "Dairy products: Yoghurt, Cream, Cheese",
        "Peanut Butter & Fortified Flour",
        "Farm produce: Maize, groundnuts, beans",
        "Irrigation equipment & services",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroCarousel />

      {/* About Section */}
      <section className="pt-16 md:pt-20 pb-8 md:pb-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center animate-fade-in">
            <div className="text-left">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground tracking-tight">
                Magigo Trading Company
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 text-justify">
                Magigo Trading Company (MTC) exists to provide sustainable development solutions to
                communities in Malawi and the region by providing access to products and services for
                development. These products and services range from construction, information &
                technology, agriculture and real estate. MTC strives to become an effective and
                efficient business contributing to the development and sustenance of communities
                through provision of various services and products.
              </p>
              <Link to="/about">
                <Button size="lg" variant="outline">
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div>
              <img
                src={getImageUrl("images/trading_company.jpg")}
                alt="Magigo Trading Company"
                className="w-full h-auto max-h-80 object-contain rounded-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subsidiaries Section */}
      <section className="pt-2 md:pt-4 pb-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground tracking-tight">
              Our Subsidiaries
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              MTC operates through three specialized subsidiaries, each dedicated to serving
              specific market needs with excellence.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {subsidiaries.map((subsidiary, index) => (
              <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <SubsidiaryCard {...subsidiary} />
              </div>
            ))}
          </div>

          <div className="text-center mt-16">
            <Link to="/what-we-do">
              <Button size="lg" variant="outline">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Clients & Partners Section */}
      <section className="pt-16 md:pt-20 pb-16 md:pb-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Our Clients & Partners
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Trusted by leading organizations and collaborating with industry leaders across Malawi and the region.
            </p>
          </div>
          <div className="relative overflow-hidden">
            <div className="flex animate-scroll">
              {/* First set of logos */}
              {clientsAndPartners.map((logo, index) => (
                <div
                  key={`first-${index}`}
                  className="flex-shrink-0 mx-4 flex items-center justify-center"
                >
                  <img
                    src={getImageUrl(logo)}
                    alt={`Client/Partner ${index + 1}`}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
              {/* Duplicate set for seamless loop */}
              {clientsAndPartners.map((logo, index) => (
                <div
                  key={`second-${index}`}
                  className="flex-shrink-0 mx-4 flex items-center justify-center"
                >
                  <img
                    src={getImageUrl(logo)}
                    alt={`Client/Partner ${index + 1}`}
                    className="h-20 w-auto object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cover bg-center bg-no-repeat text-white relative" style={getBackgroundImageStyle("images/join_cont01.avif")}>
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Get in touch with our team to learn how we can support your development needs.
          </p>
          <Link to="/contact">
            <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100">
              Contact Us
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;

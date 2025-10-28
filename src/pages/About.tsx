import { Target, Eye, Heart, ArrowRight } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getImageUrl, getBackgroundImageStyle } from "@/lib/imageUtils";

const About = () => {
  const values = [
    "Customer Centricity",
    "Innovation",
    "Quality",
    "Prudence",
    "Fairness",
    "Integrity",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-cover bg-center bg-no-repeat text-white relative flex items-end justify-center pb-16 md:pb-20" style={getBackgroundImageStyle("images/ready_to_work_with_us.jpg")}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container mx-auto px-4 text-center relative z-10 w-full flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">About Us</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Building a sustainable future for communities across Malawi and beyond
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <img
                src={getImageUrl("images/main_image_one.png")}
                alt="Magigo Trading"
                className="w-5/6 h-auto mx-auto"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl md:text-4xl font-bold mb-8">WHO WE ARE</h2>
              <div className="space-y-6 text-muted-foreground">
                <p className="text-lg leading-relaxed">
                  Magigo Trading Inc. Limited trading as Magigo Trading, is a Malawian owned company
                  that commenced its operations in 2010 with provision of IT services through its
                  division of Magigo Systems and later in 2016 started trading in agricultural
                  produce.
                </p>
                <p className="text-lg leading-relaxed">
                  In 2019, Magigo moved to retail of building, plumbing, electrical and hardware
                  materials through its division of Magigo Hardware in Green Corner, Blantyre. We
                  later opened two more branches in 2021 in Chileka, Blantyre and in 2023 in Area 58
                  (Airwing Fourways), Lilongwe.
                </p>
                <p className="text-lg leading-relaxed">
                  In 2023 created a subsidiary, Seah Farms which produces various dairy products
                  including yoghurt, cream, cheese. We produce various farm produce including maize,
                  ground nuts, soya beans and rear dairy cows and poultry.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision, Mission, Values */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <Card className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-border group">
              <CardHeader className="pb-3 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ border: '1.5px solid #B4A04C', backgroundColor: '#ffffff' }}>
                  <Eye className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary" />
                </div>
                <CardTitle className="text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-primary">Vision</CardTitle>
              </CardHeader>
              <CardContent className="pt-1">
                <p className="text-base leading-relaxed text-gray-600">
                  To become an effective and efficient business that provides products and services
                  for development of sustainable communities in Malawi and the region.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-border group">
              <CardHeader className="pb-3 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ border: '1.5px solid #B4A04C', backgroundColor: '#ffffff' }}>
                  <Target className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary" />
                </div>
                <CardTitle className="text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-primary">Mission</CardTitle>
              </CardHeader>
              <CardContent className="pt-1">
                <p className="text-base leading-relaxed text-gray-600">
                  To innovate various sustainable solutions for communities within Malawi and the
                  region.
                </p>
              </CardContent>
            </Card>

            <Card className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-border group">
              <CardHeader className="pb-3 flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110" style={{ border: '1.5px solid #B4A04C', backgroundColor: '#ffffff' }}>
                  <Heart className="h-8 w-8 text-primary transition-colors duration-300 group-hover:text-primary" />
                </div>
                <CardTitle className="text-xl font-medium mb-2 transition-colors duration-300 group-hover:text-primary">Values</CardTitle>
              </CardHeader>
              <CardContent className="pt-1">
                <ul className="space-y-2 text-sm text-gray-600">
                  {values.map((value, index) => (
                    <li key={index} className="flex items-start transition-all duration-300 group-hover:translate-x-1">
                      <span className="text-primary mr-2 transition-transform duration-300 group-hover:scale-110 font-medium">•</span>
                      <span className="leading-relaxed">{value}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Management Section */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Management Team</h2>
            
            {/* CEO - Top Level */}
            <div className="flex justify-center mb-12">
              <Card className="max-w-sm h-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-border group">
                <CardContent className="pt-6">
                  <div className="text-center">
                    <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                      <img
                        src={getImageUrl("images/Team/professional-young-man-stockcake.jpg")}
                        alt="Robert Magigo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">Robert Magigo</h3>
                    <p className="text-primary font-medium text-sm mb-2">Chief Executive Officer</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">Founder and CEO, leading the company's vision and strategic direction with over 15 years of industry experience.</p>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Management Team */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-6">
              {[
                {
                  name: "Sarah Nkosi",
                  position: "Chief Operating Officer",
                  image: "/images/Team/portrait-business-woman-arms-crossed-city-travel-job-career-opportunity-employee-face-confident-happy-professional-outdoor-entrepreneur-expert-consultant-r.jpg",
                  bio: "Leading strategic direction and business operations."
                },
                {
                  name: "David Zulu",
                  position: "Chief Financial Officer",
                  image: "/images/Team/Linkedin-Headshot-Corporate-Look-Natural-Backdrop.-Photo-by-Orlando-Sydney-orlandosydney.com-OS1_3856.jpg",
                  bio: "Overseeing financial planning and risk management."
                },
                {
                  name: "Grace Phiri",
                  position: "Chief Technology Officer",
                  image: "/images/Team/Top-17-Professional-Headshot-Examples-For-Men-Women-1.webp",
                  bio: "Managing technology and innovation initiatives."
                },
                {
                  name: "Michael Banda",
                  position: "Chief Marketing Officer",
                  image: "/images/Team/professional-photographer-01.webp",
                  bio: "Leading brand strategy and market development."
                }
              ].map((member, index) => (
                <Card key={index} className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-border group">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-24 h-24 rounded-full overflow-hidden mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={getImageUrl(member.image)}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-lg font-semibold mb-1 transition-colors duration-300 group-hover:text-primary">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-2">{member.position}</p>
                      <p className="text-muted-foreground text-xs leading-relaxed">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Board Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Board</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: "John Banda",
                  position: "Chairman",
                  image: "/images/Team/professional-young-man-stockcake.jpg",
                  bio: "Experienced business leader with over 20 years in corporate governance."
                },
                {
                  name: "Mary Chisi",
                  position: "Board Member",
                  image: "/images/Team/warm-friendly-beautiful-cheerful-african-american-executive-business-woman-isolated-white-background-beautiful-female-african-167982803.webp",
                  bio: "Expert in financial management and strategic planning."
                },
                {
                  name: "Peter Mponda",
                  position: "Board Member",
                  image: "/images/Team/dark-blonde-bearded-man-crosses-his-hands-chest-posing-black-shirt_8353-1116.jpg",
                  bio: "Specialist in operations and business development."
                },
                {
                  name: "Elizabeth Nkhoma",
                  position: "Board Member",
                  image: "/images/Team/LinkedIn-professional-headshot.jpg",
                  bio: "Expert in corporate strategy and stakeholder relations."
                }
              ].map((member, index) => (
                <Card key={index} className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-border group">
                  <CardContent className="pt-6">
                    <div className="text-center">
                      <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
                        <img
                          src={getImageUrl(member.image)}
                          alt={member.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="text-xl font-semibold mb-2 transition-colors duration-300 group-hover:text-primary">{member.name}</h3>
                      <p className="text-primary font-medium text-sm mb-2">{member.position}</p>
                      <p className="text-muted-foreground text-sm leading-relaxed">{member.bio}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">COMPANY HISTORY TIMELINE</h2>
            <p className="text-lg text-muted-foreground italic">The threads of our past woven for the future.</p>
          </div>
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
              {[
                { 
                  year: "2010", 
                  event: "Founded Magigo Trading with IT services",
                  description: "Commenced operations with provision of IT services through our division of Magigo Systems, establishing our foundation in technology solutions."
                },
                { 
                  year: "2016", 
                  event: "Expanded into agricultural produce trading",
                  description: "Diversified our business portfolio by entering the agricultural sector, trading in various farm produce and connecting farmers to markets."
                },
                { 
                  year: "2019", 
                  event: "Opened first Magigo Hardware store in Green Corner",
                  description: "Moved into retail of building, plumbing, electrical and hardware materials in Green Corner, Blantyre, serving the construction industry."
                },
                { 
                  year: "2021", 
                  event: "Opened Chileka branch",
                  description: "Expanded our hardware operations with a second branch in Chileka, Blantyre, increasing our reach and customer service capabilities."
                },
                { 
                  year: "2023", 
                  event: "Opened Lilongwe branch and launched Seah Farms",
                  description: "Further expanded with our third branch in Area 58 (Airwing Fourways), Lilongwe, and created Seah Farms subsidiary producing dairy products and farm produce."
                },
              ].map((milestone, index) => (
                <div key={index} className="relative">
                  <div
                    className="animate-fade-in"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="h-full transition-all duration-300 group rounded-lg p-6 bg-white">
                      <div className="text-center mb-4">
                        <div className="w-16 h-16 rounded-full flex items-center justify-center text-gray-800 font-bold text-sm mx-auto mb-4" style={{ border: '0.5px solid #B4A04C', backgroundColor: '#ffffff' }}>
                          {milestone.year}
                        </div>
                      </div>
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-3 transition-colors duration-300 group-hover:text-primary">{milestone.event}</h3>
                        <p className="text-muted-foreground leading-relaxed">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Arrow for progression - hidden on last card and on mobile */}
                  {index < 4 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 transform -translate-y-1/2 z-10">
                      <div className="w-6 h-6 rounded-full flex items-center justify-center" style={{ border: '0.5px solid #B4A04C', backgroundColor: '#ffffff' }}>
                        <ArrowRight className="h-3 w-3 text-gray-600" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section - Work With Us */}
      <section className="py-16 md:py-24 bg-cover bg-center bg-no-repeat text-white relative" style={getBackgroundImageStyle("images/ready_to_work_with_us.jpg")}>
        <div className="absolute inset-0 bg-black/70"></div>
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

export default About;

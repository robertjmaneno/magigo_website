import { Briefcase, MapPin, Clock } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getBackgroundImageStyle } from "@/lib/imageUtils";

const Careers = () => {
  const openPositions = [
    {
      title: "Hardware Sales Associate",
      department: "Magigo Hardware",
      location: "Blantyre / Lilongwe",
      type: "Full-time",
      description: "Join our retail team to help customers find the right building and hardware materials.",
    },
    {
      title: "Software Developer",
      department: "Magigo Systems",
      location: "Blantyre",
      type: "Full-time",
      description: "Develop innovative software solutions for our clients across various industries.",
    },
    {
      title: "IT Support Specialist",
      department: "Magigo Systems",
      location: "Lilongwe",
      type: "Full-time",
      description: "Provide technical support and IT service management for enterprise clients.",
    },
    {
      title: "Farm Manager",
      department: "Seah Farms",
      location: "Rural Malawi",
      type: "Full-time",
      description: "Oversee daily farm operations and coordinate agricultural production activities.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-32 md:py-40 bg-cover bg-center bg-no-repeat text-white relative flex items-end justify-center pb-16 md:pb-20"
        style={getBackgroundImageStyle("https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1200&q=80")}
      >
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container mx-auto px-4 text-center relative z-10 w-full flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">Join Our Team</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Build your career with Magigo Trading Company and be part of our mission to empower communities
            </p>
          </div>
        </div>
      </section>

      {/* Why Join Us Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Work With Us?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We offer a dynamic work environment with opportunities for growth and development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Professional Growth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Access to training programs and career advancement opportunities across our subsidiaries
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Competitive Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Attractive compensation packages, health benefits, and employee welfare programs
                </p>
              </CardContent>
            </Card>

            <Card className="text-center shadow-card hover:shadow-card-hover transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-xl">Meaningful Impact</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">
                  Contribute to building sustainable communities and making a difference in Malawi
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities across our subsidiaries
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{position.title}</h3>
                      <p className="text-primary font-medium mb-3">{position.department}</p>
                      <p className="text-muted-foreground mb-4">{position.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4" />
                          <span>{position.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Clock className="h-4 w-4" />
                          <span>{position.type}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Briefcase className="h-4 w-4" />
                          <span>{position.department}</span>
                        </div>
                      </div>
                    </div>
                    <div className="md:ml-4">
                      <Link to="/contact">
                        <Button className="bg-primary hover:bg-primary-hover text-primary-foreground">
                          Apply Now
                        </Button>
                      </Link>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <Link to="/contact">
            <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground">
              Submit Your CV
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Careers;

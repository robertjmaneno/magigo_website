import { Calendar } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const newsletterStories = [
    {
      title: "Digital Transformation in Malawi's Construction Industry",
      description: "Exploring how technology is revolutionizing building practices and supply chain management in Malawi's growing construction sector."
    },
    {
      title: "Sustainable Agriculture: The Future of Farming in Malawi",
      description: "Latest innovations in irrigation technology and sustainable farming practices that are transforming agricultural productivity across the region."
    },
    {
      title: "IT Solutions Driving Business Growth in East Africa",
      description: "How modern IT infrastructure and digital services are enabling businesses to scale and compete in the rapidly evolving East African market."
    }
  ];

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Successfully subscribed to our newsletter!");
      setEmail("");
    } catch (error) {
      toast.error("Failed to subscribe. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-cover bg-center bg-no-repeat text-white relative flex items-end justify-center pb-16 md:pb-20" style={{backgroundImage: 'url("/images/ready_to_work_with_us.jpg")'}}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container mx-auto px-4 text-center relative z-10 w-full flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">NEWS & INSIGHTS</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Stay updated with the latest developments, insights, and innovations from Magigo Trading Limited
            </p>
          </div>
        </div>
      </section>

      {/* Newsletter Features */}
      <section className="py-8 md:py-12 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <Card className="shadow-card">
              <CardHeader>
                <CardTitle className="text-center">Subscribe Now</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <form onSubmit={handleSubscribe} className="space-y-6">
                  <div>
                    <Input
                      type="email"
                      placeholder="Enter your email address"
                      className="w-full"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={isLoading}
                    />
                  </div>
                  <Button
                    type="submit"
                    className="w-full bg-primary hover:bg-primary-hover"
                    disabled={isLoading}
                  >
                    {isLoading ? "Subscribing..." : "Subscribe to Newsletter"}
                  </Button>
                </form>
                <p className="text-sm text-muted-foreground text-center">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Recent Newsletters Preview */}
      <section className="pt-8 md:pt-12 pb-16 md:pb-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Recent Newsletters</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Catch up on our latest newsletters and insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsletterStories.map((story, index) => (
              <Card key={index} className="h-full shadow-card hover:shadow-card-hover transition-all duration-300 animate-border group">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-110" style={{ border: '1.5px solid #B4A04C', backgroundColor: '#ffffff' }}>
                      <Calendar className="h-5 w-5 text-primary transition-colors duration-300 group-hover:text-primary" />
                    </div>
                    <span className="text-sm text-muted-foreground">
                      {new Date().toLocaleDateString('en-US', {
                        day: 'numeric',
                        month: 'long',
                        year: 'numeric'
                      })}
                    </span>
                  </div>
                  <CardTitle className="text-lg font-medium transition-colors duration-300 group-hover:text-primary">{story.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    {story.description}
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Work With Us Section */}
      <section className="py-16 md:py-24 bg-cover bg-center bg-no-repeat text-white relative" style={{backgroundImage: 'url("/images/ready_to_work_with_us.jpg")'}}>
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

export default Newsletter;
import { Building2, Cpu, Sprout, MapPin, Wallet, Hammer, Wrench, Zap, Truck, Home, Smartphone, Landmark, Package, Wheat, Droplets } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getBackgroundImageStyle, getImageUrl } from "@/lib/imageUtils";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-cover bg-center bg-no-repeat text-white relative flex items-end justify-center pb-16 md:pb-20" style={getBackgroundImageStyle("images/join_cont01.avif")}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container mx-auto px-4 text-center relative z-10 w-full flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">What We Do</h1>
            <p className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
              Comprehensive solutions across hardware, technology, and agriculture
            </p>
          </div>
        </div>
      </section>

      {/* Overview Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Through our three specialized subsidiaries, we provide comprehensive services across
              multiple sectors, serving individuals, businesses, and communities throughout Malawi.
            </p>
          </div>

          <Tabs defaultValue="hardware" className="max-w-6xl mx-auto">
            <TabsList className="grid w-full grid-cols-1 md:grid-cols-4 h-auto">
              <TabsTrigger value="hardware" className="py-3">
                <Building2 className="mr-2 h-4 w-4" />
                Magigo Hardware
              </TabsTrigger>
              <TabsTrigger value="systems" className="py-3">
                <Cpu className="mr-2 h-4 w-4" />
                Magigo Systems
              </TabsTrigger>
              <TabsTrigger value="farms" className="py-3">
                <Sprout className="mr-2 h-4 w-4" />
                Seah Farms
              </TabsTrigger>
              <TabsTrigger value="mobile" className="py-3">
                <Wallet className="mr-2 h-4 w-4" />
                Magigo Mobile Money
              </TabsTrigger>
            </TabsList>

            <TabsContent value="hardware" className="mt-8">
              <Card className="shadow-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={getImageUrl("images/Magigo Hardware Logo Redraw-01.jpg")} 
                        alt="Magigo Hardware Logo" 
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Magigo Hardware</CardTitle>
                      <CardDescription className="text-base">
                        Your one-stop shop for all building and construction needs
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Products & Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { icon: "images/services/Building materials.png", title: "Building materials" },
                        { icon: "images/services/plumbing-supplies-isometric-icon_9206-13072.avif", title: "Plumbing supplies" },
                        { icon: "images/services/Electrical materials.avif", title: "Electrical materials" },
                        { icon: "images/services/Hardware tools.avif", title: "Hardware tools" },
                        { icon: "images/services/Online ordering & delivery.png", title: "Online ordering & delivery" },
                        { icon: "images/services/Home building consultancy.png", title: "Home building consultancy" },
                        { icon: Smartphone, title: "Mobile money services" },
                        { icon: Landmark, title: "Agency banking" },
                      ].map((service, index) => (
                        <Card key={index} className="bg-white">
                          <CardContent className="p-4 text-center">
                            {typeof service.icon === 'string' ? (
                              <img 
                                src={getImageUrl(service.icon)} 
                                alt={service.title} 
                                className="h-8 w-8 mx-auto mb-2 object-contain" 
                              />
                            ) : (
                              <service.icon className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                            )}
                            <p className="text-sm font-medium">{service.title}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3 flex items-center">
                      <MapPin className="h-5 w-5 mr-2 text-primary" />
                      Locations
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {[
                        {
                          name: "Green Corner",
                          location: "Blantyre",
                          phone: "+265 883 626 484 / 882 626 484",
                          email: "mhgc@magigomw.com",
                        },
                        {
                          name: "Chileka",
                          location: "Blantyre",
                          phone: "+265 886 626 484",
                          email: "mhclk@magigomw.com",
                        },
                        {
                          name: "Airwing (Area 58)",
                          location: "Lilongwe",
                          phone: "+265 880 626 484",
                          email: "mhawg@magigomw.com",
                        },
                      ].map((shop, index) => (
                        <Card key={index} className="bg-secondary/50">
                          <CardHeader className="pb-3">
                            <CardTitle className="text-base">{shop.name}</CardTitle>
                            <CardDescription className="text-sm">{shop.location}</CardDescription>
                          </CardHeader>
                          <CardContent className="text-sm space-y-1">
                            <p className="text-muted-foreground">{shop.phone}</p>
                            <p className="text-muted-foreground">{shop.email}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="systems" className="mt-8">
              <Card className="shadow-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={getImageUrl("images/Magigo Systems Logo2.png")} 
                        alt="Magigo Systems Logo" 
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Magigo Systems</CardTitle>
                      <CardDescription className="text-base">
                        Complete IT solutions for the modern world
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          icon: Cpu,
                          title: "IT Service Management",
                          description: "Professional IT infrastructure management and support",
                        },
                        {
                          icon: Cpu,
                          title: "Computer Sales",
                          description: "Latest computers and accessories for all needs",
                        },
                        {
                          icon: Cpu,
                          title: "Managed IT Services",
                          description: "Comprehensive IT management for enterprises",
                        },
                        {
                          icon: Cpu,
                          title: "IT Consultancy",
                          description: "Expert guidance for your technology decisions",
                        },
                        {
                          icon: Cpu,
                          title: "Custom Solutions",
                          description: "Tailored IT solutions for unique requirements",
                        },
                        {
                          icon: Cpu,
                          title: "Web Services",
                          description: "Website development and digital solutions",
                        },
                        {
                          icon: Cpu,
                          title: "Data Analytics",
                          description: "Transform your data into actionable insights",
                        },
                        {
                          icon: Cpu,
                          title: "Retail",
                          description: "Computer accessories and peripherals",
                        },
                      ].map((service, index) => (
                        <Card key={index} className="bg-secondary/50">
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                              <service.icon className="h-6 w-6 text-gray-500" />
                              <CardTitle className="text-base">{service.title}</CardTitle>
                            </div>
                            <CardDescription className="text-sm">
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="farms" className="mt-8">
              <Card className="shadow-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={getImageUrl("images/SEAH Farms.jpg")} 
                        alt="Seah Farms Logo" 
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Seah Farms</CardTitle>
                      <CardDescription className="text-base">
                        Quality agricultural products and services
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Dairy Products</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { icon: Package, title: "Yoghurt" },
                        { icon: Package, title: "Cream" },
                        { icon: Package, title: "Cheese" },
                        { icon: Package, title: "Fresh Milk" },
                      ].map((product, index) => (
                        <Card key={index} className="bg-white">
                          <CardContent className="p-4 text-center">
                            <product.icon className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                            <p className="text-sm font-medium">{product.title}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Other Products</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                      {[
                        { icon: Package, title: "Peanut Butter" },
                        { icon: Package, title: "Fortified Flour" },
                        { icon: Package, title: "Maize Flour" },
                        { icon: Package, title: "Soya Products" },
                      ].map((product, index) => (
                        <Card key={index} className="bg-white">
                          <CardContent className="p-4 text-center">
                            <product.icon className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                            <p className="text-sm font-medium">{product.title}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Farm Produce</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { icon: Wheat, title: "Maize" },
                        { icon: Wheat, title: "Ground nuts" },
                        { icon: Wheat, title: "Beans" },
                        { icon: Wheat, title: "Pigeon peas" },
                        { icon: Sprout, title: "Bananas" },
                        { icon: Wheat, title: "Soya beans" },
                      ].map((produce, index) => (
                        <Card key={index} className="bg-white">
                          <CardContent className="p-4 text-center">
                            <produce.icon className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                            <p className="text-sm font-medium">{produce.title}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Irrigation Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                      {[
                        { icon: Droplets, title: "Irrigation equipment supply" },
                        { icon: Wrench, title: "Professional installation services" },
                        { icon: Wrench, title: "Ongoing maintenance and support" },
                      ].map((service, index) => (
                        <Card key={index} className="bg-white">
                          <CardContent className="p-4 text-center">
                            <service.icon className="h-8 w-8 mx-auto mb-2 text-gray-500" />
                            <p className="text-sm font-medium">{service.title}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="mt-8">
              <Card className="shadow-card">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div className="flex-shrink-0">
                      <img 
                        src={getImageUrl("images/MAGIGO-TRADING-COMPANY-02.jpg")} 
                        alt="Magigo Trading Company Logo" 
                        className="h-24 w-auto object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-2">Magigo Mobile Money</CardTitle>
                      <CardDescription className="text-base">
                        Comprehensive financial services and digital payment solutions
                      </CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          icon: Smartphone,
                          title: "Mobile Banking",
                          description: "Secure mobile banking services for convenient transactions",
                        },
                        {
                          icon: Landmark,
                          title: "Agency Banking",
                          description: "Accessible banking services through authorized agents",
                        },
                        {
                          icon: Smartphone,
                          title: "Digital Payments",
                          description: "Fast and secure digital payment solutions",
                        },
                        {
                          icon: Smartphone,
                          title: "Money Transfers",
                          description: "Quick and reliable money transfer services",
                        },
                        {
                          icon: Smartphone,
                          title: "Bill Payments",
                          description: "Convenient bill payment and utility services",
                        },
                        {
                          icon: Smartphone,
                          title: "Financial Inclusion",
                          description: "Making financial services accessible to all communities",
                        },
                      ].map((service, index) => (
                        <Card key={index} className="bg-secondary/50">
                          <CardHeader>
                            <div className="flex items-center gap-3 mb-2">
                              <service.icon className="h-6 w-6 text-gray-500" />
                              <CardTitle className="text-base">{service.title}</CardTitle>
                            </div>
                            <CardDescription className="text-sm">
                              {service.description}
                            </CardDescription>
                          </CardHeader>
                        </Card>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA Section - Work With Us */}
      <section className="py-16 md:py-24 bg-cover bg-center bg-no-repeat text-white relative" style={getBackgroundImageStyle("images/join_cont01.avif")}>
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

export default WhatWeDo;

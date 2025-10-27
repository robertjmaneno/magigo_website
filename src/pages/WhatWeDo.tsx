import { Building2, Cpu, Sprout, MapPin, Wallet } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const WhatWeDo = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-cover bg-center bg-no-repeat text-white relative flex items-end justify-center pb-16 md:pb-20" style={{backgroundImage: 'url("/images/ready_to_work_with_us.jpg")'}}>
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
                <CardHeader>
                  <CardTitle className="text-2xl">Magigo Hardware</CardTitle>
                  <CardDescription className="text-base">
                    Your one-stop shop for all building and construction needs
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Products & Services</h3>
                    <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Building materials
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Plumbing supplies
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Electrical materials
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Hardware tools
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Online ordering & delivery
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Home building consultancy
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Mobile money services
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Agency banking
                      </li>
                    </ul>
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
                <CardHeader>
                  <CardTitle className="text-2xl">Magigo Systems</CardTitle>
                  <CardDescription className="text-base">
                    Complete IT solutions for the modern world
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: "IT Service Management",
                          description: "Professional IT infrastructure management and support",
                        },
                        {
                          title: "Computer Sales",
                          description: "Latest computers and accessories for all needs",
                        },
                        {
                          title: "Managed IT Services",
                          description: "Comprehensive IT management for enterprises",
                        },
                        {
                          title: "IT Consultancy",
                          description: "Expert guidance for your technology decisions",
                        },
                        {
                          title: "Custom Solutions",
                          description: "Tailored IT solutions for unique requirements",
                        },
                        {
                          title: "Web Services",
                          description: "Website development and digital solutions",
                        },
                        {
                          title: "Data Analytics",
                          description: "Transform your data into actionable insights",
                        },
                        {
                          title: "Retail",
                          description: "Computer accessories and peripherals",
                        },
                      ].map((service, index) => (
                        <Card key={index} className="bg-secondary/50">
                          <CardHeader>
                            <CardTitle className="text-base">{service.title}</CardTitle>
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
                <CardHeader>
                  <CardTitle className="text-2xl">Seah Farms</CardTitle>
                  <CardDescription className="text-base">
                    Quality agricultural products and services
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Dairy Products</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Yoghurt
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Cream
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Cheese
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Fresh Milk
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Other Products</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Peanut Butter
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Fortified Flour
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Maize Flour
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Soya Products
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Farm Produce</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-muted-foreground">
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Maize
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Ground nuts
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Beans
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Pigeon peas
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Bananas
                      </div>
                      <div className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Soya beans
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold mb-3">Irrigation Services</h3>
                    <ul className="space-y-2 text-muted-foreground">
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Irrigation equipment supply
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Professional installation services
                      </li>
                      <li className="flex items-start">
                        <span className="text-primary mr-2">•</span>
                        Ongoing maintenance and support
                      </li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mobile" className="mt-8">
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="text-2xl">Magigo Mobile Money</CardTitle>
                  <CardDescription className="text-base">
                    Comprehensive financial services and digital payment solutions
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold mb-3">Services</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {[
                        {
                          title: "Mobile Banking",
                          description: "Secure mobile banking services for convenient transactions",
                        },
                        {
                          title: "Agency Banking",
                          description: "Accessible banking services through authorized agents",
                        },
                        {
                          title: "Digital Payments",
                          description: "Fast and secure digital payment solutions",
                        },
                        {
                          title: "Money Transfers",
                          description: "Quick and reliable money transfer services",
                        },
                        {
                          title: "Bill Payments",
                          description: "Convenient bill payment and utility services",
                        },
                        {
                          title: "Financial Inclusion",
                          description: "Making financial services accessible to all communities",
                        },
                      ].map((service, index) => (
                        <Card key={index} className="bg-secondary/50">
                          <CardHeader>
                            <CardTitle className="text-base">{service.title}</CardTitle>
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
    </div>
  );
};

export default WhatWeDo;

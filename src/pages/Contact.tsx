import { useState } from "react";
import { MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { toast } from "react-toastify";
import { getBackgroundImageStyle } from "@/lib/imageUtils";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Validation
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Please enter your email address");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    if (!formData.subject.trim()) {
      toast.error("Please enter a subject");
      return;
    }

    if (!formData.message.trim()) {
      toast.error("Please enter your message");
      return;
    }

    setIsLoading(true);

    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-32 md:py-40 bg-cover bg-center bg-no-repeat text-white relative flex items-end justify-center pb-16 md:pb-20" style={getBackgroundImageStyle("images/ready_to_work_with_us.jpg")}>
        <div className="absolute inset-0 bg-black/75"></div>
        <div className="container mx-auto px-4 text-center relative z-10 w-full flex justify-center">
          <div className="max-w-4xl text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">Contact Us</h1>
            <p className="text-lg md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
              Get in touch with our team - we're here to help
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
                <p className="text-muted-foreground mb-8">
                  Have a question or need assistance? Reach out to us through any of the following
                  channels, and our team will respond promptly.
                </p>
              </div>

              {/* Headquarters */}
              <Card className="shadow-card min-h-[320px]">
                <CardHeader>
                  <CardTitle>Magigo Head Quarters</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-start">
                    <Phone className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Phone</p>
                      <p className="text-muted-foreground">+265 881 626 484</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Mail className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Email</p>
                      <p className="text-muted-foreground">mtc@magigomw.com</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <MapPin className="h-5 w-5 mr-3 mt-1 text-primary flex-shrink-0" />
                    <div>
                      <p className="font-medium">Address</p>
                      <p className="text-muted-foreground">
                        P.O. Box 293, Mpemba
                        <br />
                        Off M1 to Chikwawa
                        <br />
                        Green Corner Trading Center
                        <br />
                        Blantyre, Malawi
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Branch Locations */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Branch Locations</h3>
                <div className="space-y-4">
                  {[
                    {
                      name: "Green Corner Shop",
                      phone: "+265 883 626 484 / 882 626 484",
                      email: "mhgc@magigomw.com",
                      location: "Blantyre",
                    },
                    {
                      name: "Chileka Shop",
                      phone: "+265 886 626 484",
                      email: "mhclk@magigomw.com",
                      location: "Blantyre",
                    },
                    {
                      name: "Airwing Shop",
                      phone: "+265 880 626 484",
                      email: "mhawg@magigomw.com",
                      location: "Lilongwe",
                    },
                  ].map((branch, index) => (
                    <Card key={index} className="bg-secondary/30">
                      <CardHeader className="pb-3">
                        <CardTitle className="text-base">{branch.name}</CardTitle>
                        <CardDescription>{branch.location}</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-1 text-sm">
                        <p className="text-muted-foreground">{branch.phone}</p>
                        <p className="text-muted-foreground">{branch.email}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="space-y-8">
              <Card className="shadow-card h-fit">
                <CardHeader>
                  <CardTitle>Send Us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form id="contact-form" onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="text-sm font-medium mb-2 block">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Your name"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="text-sm font-medium mb-2 block">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="your.email@example.com"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="text-sm font-medium mb-2 block">
                        Subject *
                      </label>
                      <Input
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        placeholder="How can we help?"
                        disabled={isLoading}
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="text-sm font-medium mb-2 block">
                        Message *
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        placeholder="Tell us more about your inquiry..."
                        rows={6}
                        disabled={isLoading}
                      />
                    </div>

                    <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                      {isLoading ? "Sending..." : "Send Message"}
                    </Button>
                  </form>
                </CardContent>
              </Card>

              {/* Map */}
              <div className="h-[25rem] md:h-[29rem] rounded-lg overflow-hidden shadow-card">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.123456789012!2d35.0168!3d-15.7861!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1863c4b8b8b8b8b%3A0x1234567890abcdef!2sGreen%20Corner%20Trading%20Center%2C%20Blantyre%2C%20Malawi!5e0!3m2!1sen!2smw!4v1634567890123!5m2!1sen!2smw&q=Green+Corner+Trading+Center+Blantyre+Malawi"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Magigo Head Quarters - Green Corner Trading Center, Blantyre, Malawi"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="pt-4 md:pt-6 pb-16 md:pb-24 bg-background">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Title */}
              <div>
                <h2 className="text-4xl md:text-5xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-muted-foreground text-lg">
                  Find answers to common questions about our products and services
                </p>
              </div>

              {/* Right Column - FAQ Cards */}
              <Accordion type="single" collapsible className="space-y-4">
                <AccordionItem value="item-1" className="border border-black rounded-sm shadow-card bg-white px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="text-lg font-medium">What products do you offer?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We offer a comprehensive range of agricultural inputs, construction materials, and general merchandise.
                    Our product portfolio includes fertilizers, seeds, pesticides, cement, steel products, and various
                    consumer goods to meet the diverse needs of our customers.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-2" className="border border-black rounded-sm shadow-card bg-white px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="text-lg font-medium">Do you provide delivery services?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we provide reliable delivery services across Malawi. Our logistics team ensures timely and
                    safe delivery of your orders to your specified location. Delivery charges may apply depending on
                    the location and order size.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-3" className="border border-black rounded-sm shadow-card bg-white px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="text-lg font-medium">What are your payment terms?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We accept various payment methods including cash, bank transfers, and mobile money payments.
                    For bulk orders, we offer flexible payment terms. Please contact our sales team for specific
                    payment arrangements and credit terms.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-4" className="border border-black rounded-sm shadow-card bg-white px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="text-lg font-medium">Do you offer bulk discounts?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    Yes, we offer competitive pricing and bulk discounts for large quantity orders. Our pricing
                    structure is designed to provide value to both small and large-scale customers. Contact us
                    for a customized quote based on your requirements.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-5" className="border border-black rounded-sm shadow-card bg-white px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="text-lg font-medium">What is your return policy?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    We stand behind the quality of our products. If you receive damaged or incorrect items,
                    please contact us within 7 days of delivery. We will arrange for returns, replacements,
                    or refunds as appropriate. All returns must be in original packaging.
                  </AccordionContent>
                </AccordionItem>

                <AccordionItem value="item-6" className="border border-black rounded-sm shadow-card bg-white px-6">
                  <AccordionTrigger className="text-left hover:no-underline py-4">
                    <span className="text-lg font-medium">How can I place an order?</span>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-4">
                    You can place an order by visiting any of our branch locations, calling our headquarters,
                    or using the contact form above. Our sales representatives will assist you in selecting
                    the right products and processing your order efficiently.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-cover bg-center bg-no-repeat text-white relative" style={getBackgroundImageStyle("images/ready_to_work_with_us.jpg")}>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Work With Us?</h2>
          <p className="text-lg mb-8 text-white/90 max-w-2xl mx-auto">
            Get in touch with our team to learn how we can support your development needs.
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-primary hover:bg-gray-100" onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}>
            Send Message
          </Button>
        </div>
      </section>
    </div>
  );
} 

export default Contact;

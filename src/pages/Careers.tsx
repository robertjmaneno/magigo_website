import { Briefcase, MapPin, Clock, Upload, X } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { getBackgroundImageStyle } from "@/lib/imageUtils";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "react-toastify";

const Careers = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedPosition, setSelectedPosition] = useState<string>("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    coverLetter: "",
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isGeneralCVModalOpen, setIsGeneralCVModalOpen] = useState(false);
  const [generalCVData, setGeneralCVData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [generalCVFile, setGeneralCVFile] = useState<File | null>(null);
  const openPositions = [
    {
      title: "Hardware Sales Associate",
      department: "Magigo Hardware",
      location: "Blantyre / Lilongwe",
      type: "Full-time",
      description: "Join our retail team to help customers find the right building and hardware materials.",
      dueDate: "December 31, 2025",
    },
    {
      title: "Software Developer",
      department: "Magigo Systems",
      location: "Blantyre",
      type: "Full-time",
      description: "Develop innovative software solutions for our clients across various industries.",
      dueDate: "January 15, 2026",
    },
    {
      title: "IT Support Specialist",
      department: "Magigo Systems",
      location: "Lilongwe",
      type: "Full-time",
      description: "Provide technical support and IT service management for enterprise clients.",
      dueDate: "January 10, 2026",
    },
    {
      title: "Farm Manager",
      department: "Seah Farms",
      location: "Rural Malawi",
      type: "Full-time",
      description: "Oversee daily farm operations and coordinate agricultural production activities.",
      dueDate: "December 20, 2025",
    },
  ];

  const handleApplyClick = (positionTitle: string) => {
    setSelectedPosition(positionTitle);
    setIsModalOpen(true);
    setCurrentStep(1);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setCurrentStep(1);
    setFormData({ name: "", email: "", phone: "", coverLetter: "" });
    setSelectedFile(null);
  };

  const handleNextStep = () => {
    if (!formData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    setCurrentStep(2);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setSelectedFile(e.target.files[0]);
    }
  };

  const handleSubmit = async () => {
    if (!selectedFile) {
      toast.error("Please upload your CV");
      return;
    }

    // Simulate submission
    toast.success("Application submitted successfully! We'll be in touch soon.");
    handleCloseModal();
  };

  const handleGeneralCVFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setGeneralCVFile(e.target.files[0]);
    }
  };

  const handleGeneralCVSubmit = async () => {
    if (!generalCVData.name.trim()) {
      toast.error("Please enter your name");
      return;
    }
    if (!generalCVData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(generalCVData.email)) {
      toast.error("Please enter a valid email address");
      return;
    }
    if (!generalCVFile) {
      toast.error("Please upload your CV");
      return;
    }

    // Simulate submission
    toast.success("CV submitted successfully! We'll review it and get back to you.");
    setIsGeneralCVModalOpen(false);
    setGeneralCVData({ name: "", email: "", phone: "", message: "" });
    setGeneralCVFile(null);
  };

  return (
    <div className="min-h-screen">
      {/* Application Modal */}
      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>Submit Your Application (Step {currentStep} of 2)</DialogTitle>
            <DialogDescription>
              Applying for: <span className="font-semibold text-foreground">{selectedPosition}</span>
            </DialogDescription>
          </DialogHeader>

          {currentStep === 1 ? (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name *</Label>
                <Input
                  id="name"
                  placeholder="Robert Maneno"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="robertjmaneno@gmail.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder="+265 881 626 484"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="coverLetter">Cover Letter</Label>
                <Textarea
                  id="coverLetter"
                  placeholder="Tell us why you're a great fit for this position..."
                  rows={4}
                  value={formData.coverLetter}
                  onChange={(e) => setFormData({ ...formData, coverLetter: e.target.value })}
                />
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={handleCloseModal}>
                  Cancel
                </Button>
                <Button onClick={handleNextStep} className="bg-primary hover:bg-primary-hover">
                  Next Step
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="cv">Upload Your CV *</Label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                  <input
                    id="cv"
                    type="file"
                    accept=".pdf,.doc,.docx"
                    onChange={handleFileChange}
                    className="hidden"
                  />
                  <label htmlFor="cv" className="cursor-pointer">
                    <Upload className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                    {selectedFile ? (
                      <div className="space-y-2">
                        <p className="text-sm font-medium text-foreground">{selectedFile.name}</p>
                        <p className="text-xs text-muted-foreground">
                          {(selectedFile.size / 1024).toFixed(2)} KB
                        </p>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedFile(null);
                          }}
                        >
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <div>
                        <p className="text-sm font-medium text-foreground mb-1">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PDF, DOC, or DOCX (Max 5MB)
                        </p>
                      </div>
                    )}
                  </label>
                </div>
              </div>
              <div className="flex justify-end gap-3 pt-4">
                <Button variant="outline" onClick={() => setCurrentStep(1)}>
                  Back
                </Button>
                <Button onClick={handleSubmit} className="bg-primary hover:bg-primary-hover">
                  Submit Application
                </Button>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      {/* Hero Section */}
      <section
        className="py-32 md:py-40 bg-cover bg-center bg-no-repeat text-white relative flex items-end justify-center pb-16 md:pb-20"
        style={getBackgroundImageStyle("images/join_cont01.avif")}
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
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Open Positions</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Explore exciting career opportunities across our subsidiaries
            </p>
          </div>

          <div className="space-y-6">
            {openPositions.map((position, index) => (
              <Card key={index} className="shadow-card hover:shadow-card-hover transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="pt-6 pb-4">
                  <div className="flex flex-col gap-6">
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
                        <Button
                          className="bg-white text-primary border-2 border-primary hover:bg-primary hover:text-white transition-colors"
                          onClick={() => handleApplyClick(position.title)}
                        >
                          Apply Now
                        </Button>
                      </div>
                    </div>
                    <div className="flex justify-end pt-2">
                      <p className="text-sm text-muted-foreground">
                        <span className="font-medium">Application Due:</span> {position.dueDate}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-8 md:py-12 bg-secondary/30">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Don't See the Right Role?</h2>
          <p className="text-lg mb-8 text-muted-foreground max-w-2xl mx-auto">
            We're always looking for talented individuals. Send us your CV and we'll keep you in mind for future opportunities.
          </p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary-hover text-primary-foreground"
            onClick={() => setIsGeneralCVModalOpen(true)}
          >
            Submit Your CV
          </Button>
        </div>
      </section>

      {/* General CV Submission Modal */}
      <Dialog open={isGeneralCVModalOpen} onOpenChange={setIsGeneralCVModalOpen}>
        <DialogContent className="sm:max-w-[650px]">
          <DialogHeader>
            <DialogTitle>Submit Your CV</DialogTitle>
            <DialogDescription>
              Send us your CV and we'll keep you in mind for future opportunities.
            </DialogDescription>
          </DialogHeader>

          <div className="space-y-4 py-4">
            <div className="space-y-2">
              <Label htmlFor="general-name">Full Name *</Label>
              <Input
                id="general-name"
                placeholder="James Bandai"
                value={generalCVData.name}
                onChange={(e) => setGeneralCVData({ ...generalCVData, name: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="general-email">Email *</Label>
              <Input
                id="general-email"
                type="email"
                placeholder="example@gmail.com"
                value={generalCVData.email}
                onChange={(e) => setGeneralCVData({ ...generalCVData, email: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="general-phone">Phone Number</Label>
              <Input
                id="general-phone"
                type="tel"
                placeholder="+265 881 626 484"
                value={generalCVData.phone}
                onChange={(e) => setGeneralCVData({ ...generalCVData, phone: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="general-message">Message (Optional)</Label>
              <Textarea
                id="general-message"
                placeholder="Tell us about your interests and career goals..."
                rows={3}
                value={generalCVData.message}
                onChange={(e) => setGeneralCVData({ ...generalCVData, message: e.target.value })}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="general-cv">Upload Your CV *</Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors">
                <input
                  id="general-cv"
                  type="file"
                  accept=".pdf,.doc,.docx"
                  onChange={handleGeneralCVFileChange}
                  className="hidden"
                />
                <label htmlFor="general-cv" className="cursor-pointer">
                  <Upload className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                  {generalCVFile ? (
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-foreground">{generalCVFile.name}</p>
                      <p className="text-xs text-muted-foreground">
                        {(generalCVFile.size / 1024).toFixed(2)} KB
                      </p>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={(e) => {
                          e.preventDefault();
                          setGeneralCVFile(null);
                        }}
                      >
                        Remove
                      </Button>
                    </div>
                  ) : (
                    <div>
                      <p className="text-sm font-medium text-foreground mb-1">
                        Click to upload or drag and drop
                      </p>
                      <p className="text-xs text-muted-foreground">
                        PDF, DOC, or DOCX (Max 5MB)
                      </p>
                    </div>
                  )}
                </label>
              </div>
            </div>
            <div className="flex justify-end gap-3 pt-4">
              <Button variant="outline" onClick={() => setIsGeneralCVModalOpen(false)}>
                Cancel
              </Button>
              <Button onClick={handleGeneralCVSubmit} className="bg-primary hover:bg-primary-hover">
                Submit CV
              </Button>
            </div>
          </div>
        </DialogContent>
      </Dialog>

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

export default Careers;

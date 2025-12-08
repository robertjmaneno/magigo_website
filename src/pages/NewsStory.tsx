import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Calendar, User, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { getBackgroundImageStyle } from "@/lib/imageUtils";

const NewsStory = () => {
  const { id } = useParams();

  // This would typically come from an API or database
  const stories = [
    {
      id: "1",
      title: "Digital Transformation in Malawi's Construction Industry",
      description: "Exploring how technology is revolutionizing building practices and supply chain management in Malawi's growing construction sector.",
      date: "December 5, 2025",
      author: "Magigo Editorial Team",
      category: "Technology",
      image: "images/join_cont01.avif",
      content: `
        <p>The construction industry in Malawi is undergoing a significant digital transformation, driven by innovative companies like Magigo Hardware and the adoption of modern supply chain management systems.</p>
        
        <h2>The Current Landscape</h2>
        <p>Malawi's construction sector has traditionally relied on manual processes and paper-based systems for inventory management, order processing, and customer service. However, the landscape is rapidly changing as businesses recognize the need for efficiency and accuracy in their operations.</p>
        
        <h2>Key Technological Innovations</h2>
        <p>Several key innovations are driving this transformation:</p>
        <ul>
          <li><strong>Digital Inventory Management:</strong> Real-time tracking of building materials, from cement to roofing sheets, ensuring optimal stock levels and reducing waste.</li>
          <li><strong>Mobile Ordering Systems:</strong> Contractors and builders can now place orders through mobile apps, streamlining the procurement process.</li>
          <li><strong>Supply Chain Visibility:</strong> Advanced tracking systems provide complete visibility from supplier to construction site.</li>
          <li><strong>Automated Pricing:</strong> Dynamic pricing systems that reflect market conditions and bulk purchase benefits.</li>
        </ul>
        
        <h2>Impact on Local Businesses</h2>
        <p>Local construction companies and contractors are experiencing multiple benefits from these digital solutions. Response times have improved significantly, with order processing times reduced from days to hours. Accuracy in deliveries has increased, minimizing costly mistakes on construction sites.</p>
        
        <h2>Magigo Hardware's Role</h2>
        <p>As a leading supplier of building materials in Malawi, Magigo Hardware has been at the forefront of this digital transformation. The company has invested in modern point-of-sale systems, inventory management software, and customer relationship management tools to better serve their clients.</p>
        
        <h2>Looking Ahead</h2>
        <p>The future of Malawi's construction industry looks promising with continued digital adoption. We expect to see further innovations including integration with mobile money platforms for seamless payments, AI-powered demand forecasting, and blockchain for supply chain transparency.</p>
        
        <p>This digital transformation is not just about technology—it's about building a more efficient, transparent, and sustainable construction ecosystem for Malawi's growing infrastructure needs.</p>
      `
    },
    {
      id: "2",
      title: "Sustainable Agriculture: The Future of Farming in Malawi",
      description: "Latest innovations in irrigation technology and sustainable farming practices that are transforming agricultural productivity across the region.",
      date: "December 3, 2025",
      author: "Seah Farms Research Team",
      category: "Agriculture",
      image: "images/join_cont01.avif",
      content: `
        <p>Agriculture remains the backbone of Malawi's economy, employing over 80% of the population. As climate change poses new challenges, sustainable farming practices are becoming increasingly critical for the nation's food security and economic development.</p>
        
        <h2>The Challenge of Climate Change</h2>
        <p>Malawi's farmers face unprecedented challenges from changing rainfall patterns, prolonged dry seasons, and unpredictable weather events. Traditional farming methods are no longer sufficient to maintain productivity and ensure food security.</p>
        
        <h2>Innovative Irrigation Solutions</h2>
        <p>Modern irrigation technologies are transforming how Malawian farmers manage water resources:</p>
        <ul>
          <li><strong>Drip Irrigation Systems:</strong> Water-efficient systems that deliver moisture directly to plant roots, reducing water usage by up to 60%.</li>
          <li><strong>Solar-Powered Pumps:</strong> Sustainable energy solutions for water pumping, eliminating reliance on expensive diesel generators.</li>
          <li><strong>Smart Irrigation Controllers:</strong> IoT-enabled systems that optimize watering schedules based on soil moisture and weather forecasts.</li>
          <li><strong>Rainwater Harvesting:</strong> Collection and storage systems that capture seasonal rainfall for use during dry periods.</li>
        </ul>
        
        <h2>Sustainable Farming Practices</h2>
        <p>Beyond irrigation, farmers are adopting comprehensive sustainable practices including crop rotation, conservation agriculture, organic fertilizers, and integrated pest management.</p>
        
        <h2>Seah Farms' Contribution</h2>
        <p>Seah Farms has been pioneering sustainable agriculture in Malawi through demonstration farms, farmer training programs, provision of modern farming equipment, and partnerships with agricultural research institutions.</p>
        
        <h2>Economic Impact</h2>
        <p>The adoption of sustainable farming practices has shown remarkable results. Farmers using modern irrigation report yield increases of 30-50%, improved crop quality leading to better market prices, and reduced production costs through efficient resource use.</p>
        
        <h2>The Path Forward</h2>
        <p>The future of agriculture in Malawi lies in the widespread adoption of these sustainable practices. With continued investment in agricultural technology, farmer education, and infrastructure development, Malawi can achieve food security while protecting its natural resources for future generations.</p>
      `
    },
    {
      id: "3",
      title: "IT Solutions Driving Business Growth in East Africa",
      description: "How modern IT infrastructure and digital services are enabling businesses to scale and compete in the rapidly evolving East African market.",
      date: "December 1, 2025",
      author: "Magigo Systems Team",
      category: "Information Technology",
      image: "images/join_cont01.avif",
      content: `
        <p>East Africa is experiencing a digital revolution, with businesses across all sectors recognizing the transformative power of information technology. From small startups to large enterprises, companies are leveraging IT solutions to drive growth, improve efficiency, and compete in an increasingly digital economy.</p>
        
        <h2>The Digital Economy Boom</h2>
        <p>East Africa has become one of the fastest-growing digital markets in the world. Mobile internet penetration is increasing rapidly, fintech innovations are reshaping banking, and cloud computing is making enterprise-grade tools accessible to businesses of all sizes.</p>
        
        <h2>Key IT Solutions Driving Growth</h2>
        <p>Several technology solutions are proving particularly transformative for East African businesses:</p>
        
        <h3>1. Cloud Computing Services</h3>
        <p>Cloud platforms are eliminating the need for expensive on-premise infrastructure, providing scalable computing resources, enabling remote work and collaboration, and ensuring data security and disaster recovery.</p>
        
        <h3>2. Enterprise Software Solutions</h3>
        <p>Modern business software is helping companies streamline operations through ERP systems for resource planning, CRM platforms for customer management, accounting and financial management software, and supply chain management tools.</p>
        
        <h3>3. Custom Software Development</h3>
        <p>Businesses are investing in custom applications tailored to their unique needs, including mobile apps for customer engagement, web platforms for e-commerce, automated workflow systems, and data analytics dashboards.</p>
        
        <h3>4. IT Support and Maintenance</h3>
        <p>Reliable IT support services ensure business continuity through 24/7 technical support, proactive system monitoring, cybersecurity protection, and regular system updates and maintenance.</p>
        
        <h2>Magigo Systems' Approach</h2>
        <p>Magigo Systems has been helping businesses across Malawi and the region harness the power of IT through comprehensive technology consulting, custom software development, IT infrastructure setup and management, training and capacity building, and ongoing technical support.</p>
        
        <h2>Success Stories</h2>
        <p>We've seen remarkable transformations across various sectors. A manufacturing company increased productivity by 40% through automated inventory management. A retail chain expanded to multiple locations using integrated POS systems. An agricultural cooperative improved farmer payments through a custom mobile app.</p>
        
        <h2>The Future of Business IT</h2>
        <p>As technology continues to evolve, we anticipate several exciting developments including artificial intelligence and machine learning applications, Internet of Things (IoT) for smart operations, blockchain for secure transactions, and 5G enabling new possibilities for real-time data processing.</p>
        
        <h2>Conclusion</h2>
        <p>The businesses that will thrive in East Africa's future are those that embrace digital transformation today. By investing in the right IT solutions and partnering with experienced technology providers, companies can unlock new opportunities for growth, efficiency, and competitiveness in the digital age.</p>
      `
    }
  ];

  const story = stories.find(s => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Story Not Found</h1>
          <Link to="/newsletter">
            <Button>Back to Newsletter</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section
        className="py-32 md:py-40 bg-cover bg-center bg-no-repeat text-white relative"
        style={getBackgroundImageStyle(story.image)}
      >
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="container mx-auto px-4 relative z-10">
          <Link to="/newsletter">
            <Button variant="ghost" className="text-white hover:bg-white/20 mb-6">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Newsletter
            </Button>
          </Link>
          <div className="max-w-4xl">
            <div className="inline-block px-3 py-1 bg-primary text-white text-sm font-medium rounded-full mb-4">
              {story.category}
            </div>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{story.title}</h1>
            <div className="flex flex-wrap items-center gap-6 text-white/90">
              <div className="flex items-center gap-2">
                <Calendar className="h-5 w-5" />
                <span>{story.date}</span>
              </div>
              <div className="flex items-center gap-2">
                <User className="h-5 w-5" />
                <span>{story.author}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="shadow-card">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none">
                  <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                    {story.description}
                  </p>
                  <div 
                    className="story-content"
                    dangerouslySetInnerHTML={{ __html: story.content }}
                  />
                </div>

                {/* Share Section */}
                <div className="mt-12 pt-8 border-t">
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Share this story</h3>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Share
                    </Button>
                  </div>
                </div>

                {/* Back to Newsletter */}
                <div className="mt-8 text-center">
                  <Link to="/newsletter">
                    <Button size="lg" className="bg-primary hover:bg-primary-hover">
                      Read More Stories
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Related Stories */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">More Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {stories
              .filter(s => s.id !== id)
              .slice(0, 2)
              .map((relatedStory) => (
                <Card key={relatedStory.id} className="shadow-card hover:shadow-card-hover transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-3">
                      {relatedStory.category}
                    </div>
                    <h3 className="text-xl font-bold mb-3">{relatedStory.title}</h3>
                    <p className="text-muted-foreground mb-4">{relatedStory.description}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{relatedStory.date}</span>
                      </div>
                    </div>
                    <Link to={`/news/${relatedStory.id}`}>
                      <Button variant="outline" size="sm">
                        Read More
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default NewsStory;

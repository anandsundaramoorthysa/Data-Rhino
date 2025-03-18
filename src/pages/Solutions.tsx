
import { motion } from 'framer-motion';
import { Landmark, Stethoscope, Zap, Building2, ShoppingBag, Truck, ChevronRight } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import { Link } from 'react-router-dom';

const Solutions = () => {
  // Industry solutions
  const industries = [
    {
      id: "banking",
      title: "Banking & Financial Services",
      description: "Custom data solutions that drive innovation, reduce risk, and enhance customer experiences in the financial sector.",
      icon: <Landmark className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2574&auto=format&fit=crop",
      benefits: [
        "Fraud detection and prevention",
        "Risk management and compliance",
        "Customer segmentation and personalization",
        "Process automation and efficiency",
        "Predictive analytics for market trends"
      ],
      caseStudy: {
        title: "AI-Powered Fraud Detection",
        client: "Major US Bank",
        excerpt: "Implemented a sophisticated fraud detection system that reduced fraudulent transactions by 87% and saved the bank over $15M annually.",
        link: "/case-studies/ai-fraud-detection"
      }
    },
    {
      id: "healthcare",
      title: "Healthcare & Life Sciences",
      description: "Data-driven solutions that improve patient outcomes, optimize operations, and accelerate research in healthcare organizations.",
      icon: <Stethoscope className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      benefits: [
        "Patient outcome prediction and improvement",
        "Clinical trial optimization",
        "Operational efficiency and resource allocation",
        "Drug discovery and development acceleration",
        "Personalized medicine and treatment plans"
      ],
      caseStudy: {
        title: "Healthcare Data Platform",
        client: "Regional Hospital Network",
        excerpt: "Built a comprehensive data platform that improved patient outcomes by 23% through better diagnostic tracking and care coordination.",
        link: "/case-studies/healthcare-data-platform"
      }
    },
    {
      id: "energy",
      title: "Energy & Utilities",
      description: "Innovative data solutions that optimize operations, improve sustainability, and enhance grid management for energy companies.",
      icon: <Zap className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
      benefits: [
        "Smart grid optimization and management",
        "Predictive maintenance for equipment",
        "Energy consumption forecasting",
        "Sustainability and carbon footprint reduction",
        "Operational efficiency and cost reduction"
      ],
      caseStudy: {
        title: "Smart Grid Optimization",
        client: "Energy Provider",
        excerpt: "Developed a machine learning solution for grid management that reduced outages by 42% and improved energy distribution efficiency by 31%.",
        link: "/case-studies/smart-grid-optimization"
      }
    },
    {
      id: "public",
      title: "Public Sector",
      description: "Secure, compliant data solutions that improve citizen services, operational efficiency, and decision-making in government agencies.",
      icon: <Building2 className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2667&auto=format&fit=crop",
      benefits: [
        "Citizen service optimization",
        "Fraud and waste detection",
        "Public safety and emergency response",
        "Urban planning and infrastructure management",
        "Regulatory compliance and reporting"
      ],
      caseStudy: {
        title: "Smart City Initiative",
        client: "Metropolitan Government",
        excerpt: "Implemented a comprehensive data platform that improved city services, reduced operational costs by 28%, and enhanced citizen satisfaction.",
        link: "/case-studies/smart-city-initiative"
      }
    },
    {
      id: "retail",
      title: "Retail & E-commerce",
      description: "Data-driven solutions that enhance customer experiences, optimize inventory, and drive sales growth in retail businesses.",
      icon: <ShoppingBag className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2671&auto=format&fit=crop",
      benefits: [
        "Customer behavior analysis and segmentation",
        "Inventory optimization and demand forecasting",
        "Personalized marketing and recommendations",
        "Supply chain efficiency",
        "Pricing optimization and competitive analysis"
      ],
      caseStudy: {
        title: "Customer Personalization Engine",
        client: "Global Retail Chain",
        excerpt: "Developed a real-time personalization platform that increased online conversion rates by 34% and average order value by 28%.",
        link: "/case-studies/retail-personalization"
      }
    },
    {
      id: "logistics",
      title: "Supply Chain & Logistics",
      description: "Innovative solutions that optimize supply chain operations, improve delivery efficiency, and reduce costs for logistics companies.",
      icon: <Truck className="h-10 w-10" />,
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2670&auto=format&fit=crop",
      benefits: [
        "Route optimization and delivery efficiency",
        "Inventory management and forecasting",
        "Warehouse optimization",
        "Supply chain visibility and tracking",
        "Predictive maintenance for fleet vehicles"
      ],
      caseStudy: {
        title: "Logistics Optimization Platform",
        client: "Global Shipping Company",
        excerpt: "Created an AI-powered logistics platform that reduced delivery times by 22% and operational costs by 18% across global shipping routes.",
        link: "/case-studies/logistics-optimization"
      }
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        subtitle="Industry Solutions"
        title="Tailored Data Solutions for Your Industry"
        description="We combine deep domain expertise with cutting-edge technology to deliver industry-specific solutions that address the unique challenges and opportunities in your sector."
        backgroundClass="bg-gradient-to-tr from-rhino-darkblue via-rhino-blue to-rhino-lightblue"
      />
      
      {/* Industry Overview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Industries We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">Specialized Expertise</span> Across Key Industries
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We've developed deep domain knowledge across multiple industries, allowing us to deliver solutions that address sector-specific challenges and opportunities.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100} className="h-full">
                <a href={`#${industry.id}`} className="block h-full">
                  <div className="bg-white rounded-xl border border-gray-100 p-6 hover:border-rhino-blue/30 hover:shadow-lg transition-all duration-300 h-full">
                    <div className="h-14 w-14 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mb-6">
                      {industry.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{industry.title}</h3>
                    <p className="text-gray-600">{industry.description}</p>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Industry Sections */}
      {industries.map((industry, index) => (
        <section 
          key={index} 
          id={industry.id}
          className={`py-24 px-6 md:px-12 lg:px-24 ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
                <div className="bg-gradient-to-tr from-rhino-darkblue to-rhino-blue p-6 rounded-xl text-white inline-flex items-center justify-center mb-6">
                  {industry.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {industry.title}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {industry.description}
                </p>
                
                <h3 className="text-xl font-semibold mb-4">Key Benefits:</h3>
                <ul className="space-y-3 mb-8">
                  {industry.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start">
                      <ChevronRight className="h-5 w-5 text-rhino-blue mr-2 mt-0.5" />
                      <span className="text-gray-600">{benefit}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-rhino-blue/5 border border-rhino-blue/20 rounded-lg p-6 mb-6">
                  <h4 className="text-lg font-semibold mb-2">Featured Case Study</h4>
                  <h3 className="text-xl font-semibold mb-2">{industry.caseStudy.title}</h3>
                  <p className="text-gray-600 mb-4">
                    <span className="text-rhino-blue font-medium">{industry.caseStudy.client}:</span> {industry.caseStudy.excerpt}
                  </p>
                  <Link to={industry.caseStudy.link} className="text-rhino-blue font-medium flex items-center hover:underline">
                    Read Full Case Study
                    <ChevronRight className="h-4 w-4 ml-1" />
                  </Link>
                </div>
                
                <Link
                  to="/contact"
                  className="btn-primary inline-flex items-center"
                >
                  Discuss Your Project
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </AnimatedSection>
              
              <AnimatedSection animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-rhino-blue/10 rounded-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rhino-blue/10 rounded-lg"></div>
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={industry.image} 
                      alt={industry.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-tr from-rhino-darkblue to-rhino-blue text-white">
        <div className="container mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Industry with Data?
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg mb-10">
              Get in touch with our team of experts to discover how our industry-specific solutions can help you drive innovation, efficiency, and growth.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-rhino-darkblue rounded-md font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center"
            >
              Schedule a Consultation
              <ChevronRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Solutions;

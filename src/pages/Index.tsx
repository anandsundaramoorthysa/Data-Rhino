
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Activity, BarChart3, BrainCircuit, Code, Building2, Stethoscope, Zap, Landmark } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceCard from '@/components/ServiceCard';
import TestimonialCard from '@/components/TestimonialCard';
import CaseStudyCard from '@/components/CaseStudyCard';

const Index = () => {
  // Sample data (in a real app, this would come from an API)
  const services = [
    {
      title: "AI & Machine Learning",
      description: "Intelligent solutions that learn and adapt to your business needs, driving innovation and growth.",
      icon: <BrainCircuit className="h-6 w-6" />,
      link: "/services#ai-ml"
    },
    {
      title: "Data Analytics",
      description: "Transform raw data into actionable insights that power strategic decision-making.",
      icon: <BarChart3 className="h-6 w-6" />,
      link: "/services#data-analytics"
    },
    {
      title: "FinTech Solutions",
      description: "Custom financial technology solutions built for efficiency, security, and regulatory compliance.",
      icon: <Activity className="h-6 w-6" />,
      link: "/services#fintech"
    },
    {
      title: "Custom Development",
      description: "Tailored software solutions designed and built to address your unique business challenges.",
      icon: <Code className="h-6 w-6" />,
      link: "/services#custom-dev"
    }
  ];
  
  const industries = [
    {
      title: "Banking & Finance",
      description: "Transforming financial services with AI-driven insights and secure, compliant solutions.",
      icon: <Landmark className="h-6 w-6" />,
      link: "/solutions#banking"
    },
    {
      title: "Healthcare",
      description: "Enhancing patient care with data-driven diagnostics and healthcare analytics.",
      icon: <Stethoscope className="h-6 w-6" />,
      link: "/solutions#healthcare"
    },
    {
      title: "Energy & Utilities",
      description: "Optimizing operations and sustainability with innovative data solutions.",
      icon: <Zap className="h-6 w-6" />,
      link: "/solutions#energy"
    },
    {
      title: "Public Sector",
      description: "Improving citizen services through secure, efficient public sector technology.",
      icon: <Building2 className="h-6 w-6" />,
      link: "/solutions#public"
    }
  ];
  
  const testimonials = [
    {
      quote: "Big Data Rhino transformed our approach to data analytics. Their AI solutions helped us identify patterns we were missing and increased our operational efficiency by 35%.",
      author: "Sarah Johnson",
      position: "CTO",
      company: "Global Financial Services"
    },
    {
      quote: "The custom solutions built by the Big Data Rhino team integrated seamlessly with our existing systems. Their expertise in fintech compliance saved us countless hours and resources.",
      author: "Michael Chen",
      position: "VP of Technology",
      company: "Pacific Banking Corp"
    },
    {
      quote: "Working with Big Data Rhino has given us a competitive edge in the healthcare market. Their machine learning algorithms have improved our diagnostic accuracy by over 40%.",
      author: "Dr. Emily Wilson",
      position: "Chief Medical Officer",
      company: "HealthTech Innovations"
    }
  ];
  
  const caseStudies = [
    {
      title: "AI-Powered Fraud Detection",
      client: "Major US Bank",
      industry: "Banking",
      excerpt: "Implemented a sophisticated fraud detection system that reduced fraudulent transactions by 87% and saved the bank over $15M annually.",
      image: "https://images.unsplash.com/photo-1556742031-c6961e8560b0?q=80&w=2574&auto=format&fit=crop",
      slug: "ai-fraud-detection"
    },
    {
      title: "Healthcare Data Platform",
      client: "Regional Hospital Network",
      industry: "Healthcare",
      excerpt: "Built a comprehensive data platform that improved patient outcomes by 23% through better diagnostic tracking and care coordination.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2670&auto=format&fit=crop",
      slug: "healthcare-data-platform"
    },
    {
      title: "Smart Grid Optimization",
      client: "Energy Provider",
      industry: "Energy",
      excerpt: "Developed a machine learning solution for grid management that reduced outages by 42% and improved energy distribution efficiency by 31%.",
      image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=2670&auto=format&fit=crop",
      slug: "smart-grid-optimization"
    }
  ];
  
  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        subtitle="Welcome to Big Data Rhino"
        title="Transforming Data into Strategic Business Advantage"
        description="We empower businesses with cutting-edge data analytics, AI & ML solutions that drive innovation, enhance decision-making, and accelerate growth."
        ctaText="Get Started"
        ctaLink="/contact"
        secondaryCtaText="Explore Our Solutions"
        secondaryCtaLink="/solutions"
      />
      
      {/* Overview Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Why Choose Big Data Rhino
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">The Future of Data Analytics</span> For Your Business
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Big Data Rhino combines deep industry expertise with cutting-edge technology to deliver solutions that transform how businesses operate, compete, and grow.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mx-auto mb-6">
                  <BrainCircuit className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Advanced AI Capabilities</h3>
                <p className="text-gray-600">
                  Our proprietary ML algorithms process complex data at scale, uncovering insights that drive business growth.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={200}>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mx-auto mb-6">
                  <Activity className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Industry Expertise</h3>
                <p className="text-gray-600">
                  Deep domain knowledge in financial services, healthcare, energy, and government sectors.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={300}>
              <div className="text-center">
                <div className="h-16 w-16 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mx-auto mb-6">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Tailored Solutions</h3>
                <p className="text-gray-600">
                  Custom-built data solutions that integrate seamlessly with your existing infrastructure.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Services Preview Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Comprehensive Data Solutions For Every Need
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              From powerful AI implementations to custom analytics platforms, we deliver end-to-end data solutions that drive measurable business results.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={service.link}
                index={index}
                variant="bordered"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services" className="animated-border-button">
              <span>View All Services</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Industries/Solutions Section */}
      <section className="section-padding bg-gradient-to-tr from-rhino-darkblue to-rhino-blue text-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-white/20 rounded-full mb-4">
              Industry Solutions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Specialized Expertise Across Industries
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              We've developed deep domain expertise to deliver industry-specific solutions that address unique sector challenges.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <ServiceCard
                key={index}
                title={industry.title}
                description={industry.description}
                icon={industry.icon}
                link={industry.link}
                index={index}
                variant="glass"
                className="text-white border border-white/10"
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/solutions" className="px-8 py-4 bg-white text-rhino-darkblue rounded-md font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center mx-auto w-fit">
              Explore All Solutions
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Client Testimonials
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say About Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We've helped businesses across industries transform their operations with data-driven insights. Here's what they have to say.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                position={testimonial.position}
                company={testimonial.company}
                index={index}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Case Studies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real Results for Real Clients
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Explore how our data solutions have transformed businesses and delivered measurable results across industries.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {caseStudies.map((caseStudy, index) => (
              <CaseStudyCard
                key={index}
                title={caseStudy.title}
                client={caseStudy.client}
                industry={caseStudy.industry}
                excerpt={caseStudy.excerpt}
                image={caseStudy.image}
                slug={caseStudy.slug}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/case-studies" className="animated-border-button">
              <span>View All Case Studies</span>
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gradient-to-tr from-rhino-darkblue to-rhino-blue text-white">
        <div className="container mx-auto text-center">
          <AnimatedSection animation="fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Transform Your Business with Data?
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg mb-10">
              Get in touch with our team of experts to discover how we can help you harness the power of data to drive growth and innovation.
            </p>
            <Link
              to="/contact"
              className="px-8 py-4 bg-white text-rhino-darkblue rounded-md font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1 inline-flex items-center"
            >
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </AnimatedSection>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;

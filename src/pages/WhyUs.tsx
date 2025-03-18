
import { motion } from 'framer-motion';
import { ArrowRight, Award, BarChart, Code, BrainCircuit, Database, Shield, Clock, Medal } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';

const WhyUs = () => {
  // Core competencies data
  const competencies = [
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Advanced AI Expertise",
      description: "Our team of AI specialists brings cutting-edge machine learning techniques to solve complex business challenges."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Big Data Mastery",
      description: "We process and analyze massive datasets to uncover insights that drive strategic business decisions."
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Custom Solution Development",
      description: "Tailored solutions built specifically for your unique business requirements and objectives."
    },
    {
      icon: <Shield className="h-6 w-6" />,
      title: "Enterprise-Grade Security",
      description: "Robust security measures to protect your sensitive data and ensure compliance with regulations."
    }
  ];
  
  // Differentiators data
  const differentiators = [
    {
      icon: <BarChart className="h-10 w-10 text-rhino-blue" />,
      title: "Data-Driven Approach",
      description: "Every solution we develop is backed by rigorous data analysis and proven methodologies."
    },
    {
      icon: <Clock className="h-10 w-10 text-rhino-blue" />,
      title: "Rapid Deployment",
      description: "Our streamlined processes ensure quick implementation that delivers value faster."
    },
    {
      icon: <Award className="h-10 w-10 text-rhino-blue" />,
      title: "Industry Recognition",
      description: "Award-winning solutions recognized for innovation and business impact across multiple sectors."
    },
    {
      icon: <Medal className="h-10 w-10 text-rhino-blue" />,
      title: "Proven Results",
      description: "Documented success stories with measurable ROI and business transformation outcomes."
    }
  ];
  
  // Client success metrics
  const metrics = [
    { figure: "45%", label: "Average improvement in operational efficiency" },
    { figure: "32%", label: "Increase in customer satisfaction scores" },
    { figure: "3.5x", label: "Average ROI from our data solutions" },
    { figure: "60%", label: "Reduction in decision-making time" }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        subtitle="Why Choose Us"
        title="What Sets Big Data Rhino Apart"
        description="Discover why leading organizations across industries trust us with their most critical data challenges and digital transformation initiatives."
        backgroundClass="bg-gradient-to-tr from-rhino-darkblue via-rhino-blue to-rhino-lightblue"
      />
      
      {/* Key Differentiators Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Our Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">The Big Data Rhino</span> Difference
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We combine deep industry expertise, advanced technical capabilities, and a results-driven approach to deliver solutions that create real business value.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {differentiators.map((item, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 100} className="text-center">
                <div className="bg-white rounded-xl p-8 border border-gray-100 hover:border-rhino-blue/30 hover:shadow-xl transition-all duration-300 h-full">
                  <div className="h-20 w-20 mx-auto mb-6 flex items-center justify-center">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Core Competencies Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Core Competencies
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Technical Excellence That Delivers Results
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our specialized technical capabilities enable us to tackle the most complex data challenges with confidence and precision.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {competencies.map((competency, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <div className="h-12 w-12 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center">
                        {competency.icon}
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{competency.title}</h3>
                      <p className="text-gray-600">{competency.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Client Success Metrics Section */}
      <section className="section-padding bg-gradient-to-tr from-rhino-darkblue to-rhino-blue text-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-white/20 rounded-full mb-4">
              Client Success
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Real Results For Our Clients
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              We measure our success by the tangible outcomes we deliver for our clients. Here's what organizations achieve when partnering with Big Data Rhino.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {metrics.map((metric, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">{metric.figure}</h3>
                  <p className="text-white/80">{metric.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Testimonial Highlight Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-md">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-1">
                <AnimatedSection animation="fade-in">
                  <div className="flex justify-center">
                    <svg className="w-20 h-20 text-rhino-blue opacity-20" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                      <path d="M464 256h-80v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8c-88.4 0-160 71.6-160 160v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48zm-288 0H96v-64c0-35.3 28.7-64 64-64h8c13.3 0 24-10.7 24-24V56c0-13.3-10.7-24-24-24h-8C71.6 32 0 103.6 0 192v240c0 26.5 21.5 48 48 48h128c26.5 0 48-21.5 48-48V304c0-26.5-21.5-48-48-48z"></path>
                    </svg>
                  </div>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-4">
                <AnimatedSection animation="fade-in-right">
                  <blockquote>
                    <p className="text-xl md:text-2xl font-medium text-gray-700 mb-4">
                      "Big Data Rhino transformed our entire approach to data. Their analytics platform helped us identify opportunities we didn't know existed and has become a cornerstone of our strategic planning process."
                    </p>
                    <footer className="flex items-center">
                      <div className="mr-4 h-12 w-12 rounded-full overflow-hidden">
                        <img 
                          src="https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2776&auto=format&fit=crop" 
                          alt="Client"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-bold text-gray-900">Michael Rodriguez</p>
                        <p className="text-gray-600">CTO, Global Financial Services</p>
                      </div>
                    </footer>
                  </blockquote>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Industry Recognition Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Recognition
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Award-Winning Excellence
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our innovative approaches and client success stories have earned recognition from industry leaders and technology partners.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <Award className="h-12 w-12 text-rhino-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">AI Excellence Award</h3>
                <p className="text-gray-600 text-sm">Business Intelligence Group</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <Award className="h-12 w-12 text-rhino-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Top Data Science Provider</h3>
                <p className="text-gray-600 text-sm">CIO Review</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <Award className="h-12 w-12 text-rhino-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Innovator of the Year</h3>
                <p className="text-gray-600 text-sm">Tech Innovation Awards</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center">
                <Award className="h-12 w-12 text-rhino-blue mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Best ML Implementation</h3>
                <p className="text-gray-600 text-sm">Data Analytics Summit</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-tr from-rhino-darkblue to-rhino-blue rounded-xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <AnimatedSection animation="fade-in-left">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Transform Your Business with Data?
                </h2>
                <p className="text-white/80 text-lg mb-6">
                  Join the hundreds of organizations that have partnered with Big Data Rhino to unlock the full potential of their data.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    to="/contact"
                    className="px-6 py-3 bg-white text-rhino-darkblue rounded-md font-medium hover:bg-gray-100 transition-all duration-300 flex items-center justify-center"
                  >
                    Get Started
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                  <Link
                    to="/case-studies"
                    className="px-6 py-3 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-all duration-300 flex items-center justify-center"
                  >
                    View Case Studies
                  </Link>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in-right">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2670&auto=format&fit=crop" 
                    alt="Team collaboration" 
                    className="w-full h-auto"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default WhyUs;

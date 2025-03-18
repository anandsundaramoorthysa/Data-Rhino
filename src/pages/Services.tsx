
import { motion } from 'framer-motion';
import { BrainCircuit, BarChart3, Activity, Code, Database, Layers, LineChart, Lock, Server, Globe, Cpu, Cloud } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import ServiceCard from '@/components/ServiceCard';

const Services = () => {
  // Main service categories
  const mainServices = [
    {
      id: "ai-ml",
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence and machine learning to extract valuable insights from your data and automate complex processes.",
      icon: <BrainCircuit className="h-10 w-10" />,
      subServices: [
        {
          title: "Predictive Analytics",
          description: "Forecast trends and behaviors to make data-driven decisions that improve business outcomes.",
          icon: <LineChart className="h-6 w-6" />
        },
        {
          title: "Natural Language Processing",
          description: "Extract meaning from unstructured text data to power chatbots, sentiment analysis, and text classification.",
          icon: <Globe className="h-6 w-6" />
        },
        {
          title: "Computer Vision",
          description: "Analyze and interpret visual information from the world to automate tasks and gain insights.",
          icon: <Cpu className="h-6 w-6" />
        }
      ]
    },
    {
      id: "data-analytics",
      title: "Data Analytics",
      description: "Transform your raw data into actionable insights that drive strategic decision-making and operational excellence.",
      icon: <BarChart3 className="h-10 w-10" />,
      subServices: [
        {
          title: "Business Intelligence",
          description: "Create interactive dashboards and reports that provide real-time visibility into business performance.",
          icon: <Layers className="h-6 w-6" />
        },
        {
          title: "Data Warehousing",
          description: "Build centralized repositories that organize and store your data for efficient analysis and reporting.",
          icon: <Database className="h-6 w-6" />
        },
        {
          title: "Big Data Processing",
          description: "Process and analyze massive datasets to uncover patterns and insights that drive innovation.",
          icon: <Server className="h-6 w-6" />
        }
      ]
    },
    {
      id: "fintech",
      title: "FinTech Solutions",
      description: "Specialized data solutions for the financial industry, combining deep domain expertise with cutting-edge technology.",
      icon: <Activity className="h-10 w-10" />,
      subServices: [
        {
          title: "Fraud Detection",
          description: "Advanced AI systems that identify and prevent fraudulent activities in real-time.",
          icon: <Lock className="h-6 w-6" />
        },
        {
          title: "Risk Analytics",
          description: "Sophisticated models that assess and quantify financial risks to optimize decision-making.",
          icon: <Activity className="h-6 w-6" />
        },
        {
          title: "Regulatory Compliance",
          description: "Automated solutions that ensure adherence to complex financial regulations and reporting requirements.",
          icon: <Server className="h-6 w-6" />
        }
      ]
    },
    {
      id: "custom-dev",
      title: "Custom Development",
      description: "Tailored software solutions designed and built to address your unique business challenges and requirements.",
      icon: <Code className="h-10 w-10" />,
      subServices: [
        {
          title: "Web Applications",
          description: "Responsive, user-friendly web applications that deliver exceptional experiences across devices.",
          icon: <Globe className="h-6 w-6" />
        },
        {
          title: "Cloud Solutions",
          description: "Scalable, secure cloud-based applications and infrastructure that grow with your business.",
          icon: <Cloud className="h-6 w-6" />
        },
        {
          title: "Integration Services",
          description: "Seamless connections between your existing systems and new technologies for improved efficiency.",
          icon: <Layers className="h-6 w-6" />
        }
      ]
    }
  ];
  
  const processSteps = [
    {
      number: "01",
      title: "Discovery",
      description: "We start by understanding your business objectives, challenges, and data landscape to define the scope of your project."
    },
    {
      number: "02",
      title: "Strategy",
      description: "Our team develops a tailored strategy that aligns with your goals and leverages the most appropriate technologies."
    },
    {
      number: "03",
      title: "Development",
      description: "We build your solution using agile methodologies, ensuring flexibility and continuous improvement throughout."
    },
    {
      number: "04",
      title: "Implementation",
      description: "We deploy your solution, integrate it with your existing systems, and ensure a smooth transition for your team."
    },
    {
      number: "05",
      title: "Support",
      description: "Our partnership continues with ongoing support, monitoring, and optimization to ensure long-term success."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        subtitle="Our Services"
        title="Comprehensive Data Solutions Tailored to Your Needs"
        description="From advanced AI implementations to specialized fintech solutions, we deliver end-to-end data services that drive measurable business results."
      />
      
      {/* Service Categories Overview */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              What We Offer
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-gradient">End-to-End Data Solutions</span> For Every Business Need
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our comprehensive suite of services covers every aspect of the data lifecycle, from collection and processing to analysis and visualization.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {mainServices.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
                link={`#${service.id}`}
                index={index}
                variant="bordered"
              />
            ))}
          </div>
        </div>
      </section>
      
      {/* Detailed Service Sections */}
      {mainServices.map((service, index) => (
        <section 
          key={index} 
          id={service.id}
          className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}
        >
          <div className="container mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <AnimatedSection animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"}>
                <div className="bg-gradient-to-tr from-rhino-darkblue to-rhino-blue p-6 rounded-xl text-white inline-flex items-center justify-center mb-6">
                  {service.icon}
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  {service.title}
                </h2>
                <p className="text-gray-600 mb-8 text-lg">
                  {service.description}
                </p>
                
                <div className="space-y-6">
                  {service.subServices.map((subService, subIndex) => (
                    <div key={subIndex} className="flex">
                      <div className="flex-shrink-0 mr-4">
                        <div className="h-12 w-12 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center">
                          {subService.icon}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-2">{subService.title}</h3>
                        <p className="text-gray-600">{subService.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation={index % 2 === 0 ? "fade-in-right" : "fade-in-left"}>
                <div className="relative">
                  <div className="absolute -top-4 -right-4 w-24 h-24 bg-rhino-blue/10 rounded-lg"></div>
                  <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-rhino-blue/10 rounded-lg"></div>
                  <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                    <img 
                      src={`https://images.unsplash.com/photo-${1500 + index * 100}?auto=format&fit=crop&q=80&w=2670`} 
                      alt={service.title} 
                      className="w-full h-auto"
                    />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>
      ))}
      
      {/* Our Process Section */}
      <section className="section-padding bg-gradient-to-tr from-rhino-darkblue to-rhino-blue text-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-white/20 rounded-full mb-4">
              Our Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How We Deliver Excellence
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Our proven methodology ensures we consistently deliver high-quality solutions that exceed expectations.
            </p>
          </AnimatedSection>
          
          <div className="relative">
            {/* Process timeline line */}
            <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/20 hidden lg:block"></div>
            
            {/* Process steps */}
            <div className="space-y-12 relative">
              {processSteps.map((step, index) => (
                <AnimatedSection key={index} animation={index % 2 === 0 ? "fade-in-left" : "fade-in-right"} delay={index * 100}>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8`}>
                    <div className={`w-full lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                      <span className="text-5xl font-bold text-white/30">{step.number}</span>
                      <h3 className="text-2xl font-bold mb-3 mt-2">{step.title}</h3>
                      <p className="text-white/80">{step.description}</p>
                    </div>
                    
                    {/* Center dot */}
                    <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center relative z-10 lg:mx-4">
                      <div className="h-4 w-4 bg-rhino-blue rounded-full"></div>
                    </div>
                    
                    <div className="w-full lg:w-1/2"></div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="bg-gray-50 rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <AnimatedSection animation="fade-in-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Transform Your Business with Data?
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 lg:mb-0">
                    Get in touch with our team of experts to discuss your specific needs and discover how we can help.
                  </p>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-2">
                <AnimatedSection animation="fade-in-right">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="btn-primary flex-1 text-center"
                    >
                      Schedule a Consultation
                    </a>
                    <a
                      href="/case-studies"
                      className="btn-secondary flex-1 text-center"
                    >
                      View Case Studies
                    </a>
                  </div>
                </AnimatedSection>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Services;

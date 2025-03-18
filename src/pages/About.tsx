import { motion } from 'framer-motion';
import { BrainCircuit, Target, Award, Globe, Lightbulb, Heart, Scale, BarChart2 } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';

const About = () => {
  // Leadership team data
  const leaders = [
    {
      name: "Jennifer Williams",
      position: "Chief Executive Officer",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=2787&auto=format&fit=crop",
      bio: "With over 20 years of experience in technology and data science, Jennifer leads Big Data Rhino's vision and strategy."
    },
    {
      name: "David Chen",
      position: "Chief Technology Officer",
      image: "https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?q=80&w=2776&auto=format&fit=crop",
      bio: "David's expertise in AI and machine learning drives our technical innovation and product development."
    },
    {
      name: "Michael Rodriguez",
      position: "Chief Data Officer",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=2787&auto=format&fit=crop",
      bio: "Michael oversees our data strategies and ensures we deliver cutting-edge analytics solutions."
    },
    {
      name: "Sarah Johnson",
      position: "VP of Client Success",
      image: "https://images.unsplash.com/photo-1605664041952-4a2855d9654b?q=80&w=2660&auto=format&fit=crop",
      bio: "Sarah ensures our clients achieve their business objectives through our data solutions."
    }
  ];
  
  // Company values
  const values = [
    {
      icon: <BrainCircuit className="h-6 w-6" />,
      title: "Innovation",
      description: "We continuously push boundaries to develop cutting-edge data solutions."
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Excellence",
      description: "We hold ourselves to the highest standards in every aspect of our work."
    },
    {
      icon: <Heart className="h-6 w-6" />,
      title: "Integrity",
      description: "We operate with transparency, honesty, and strong ethical principles."
    },
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Collaboration",
      description: "We build strong partnerships with our clients and within our team."
    }
  ];
  
  // Achievements
  const achievements = [
    {
      figure: "200+",
      label: "Enterprise Clients"
    },
    {
      figure: "35M+",
      label: "Data Points Processed Daily"
    },
    {
      figure: "98%",
      label: "Client Retention"
    },
    {
      figure: "15+",
      label: "Industry Awards"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        subtitle="About Us"
        title="Leading the Future of Data Innovation"
        description="Big Data Rhino is a pioneering data analytics company dedicated to transforming how businesses leverage data to drive growth, innovation, and competitive advantage."
        backgroundClass="bg-gradient-to-tr from-rhino-darkblue via-rhino-blue to-rhino-lightblue"
      />
      
      {/* Our Story Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-left">
              <div className="relative">
                <div className="absolute -top-4 -left-4 w-24 h-24 bg-rhino-blue/10 rounded-lg"></div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-rhino-blue/10 rounded-lg"></div>
                <div className="relative z-10 rounded-xl overflow-hidden shadow-xl">
                  <img 
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2671&auto=format&fit=crop" 
                    alt="Big Data Rhino Team" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Pioneering Data Innovation</span> Since 2012
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                Founded with a mission to make advanced data analytics accessible to businesses of all sizes, Big Data Rhino has grown from a small startup to an industry leader in data innovation.
              </p>
              <p className="text-gray-600 mb-6">
                Our journey began when our founders recognized that most businesses were struggling to extract meaningful insights from their growing volumes of data. They set out to build a company that could bridge the gap between complex data science and practical business applications.
              </p>
              <p className="text-gray-600">
                Today, we're proud to serve over 200 enterprise clients across multiple industries, helping them transform raw data into strategic assets that drive growth, efficiency, and competitive advantage.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Mission & Vision Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <AnimatedSection animation="slide-up">
              <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                <div className="h-16 w-16 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mb-6">
                  <Target className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
                <p className="text-gray-600 mb-4">
                  To empower organizations with advanced data analytics and AI solutions that transform how they operate, compete, and grow in an increasingly data-driven world.
                </p>
                <p className="text-gray-600">
                  We're committed to making the power of data accessible, understandable, and actionable for businesses of all sizes, helping them navigate the complexities of the digital age with confidence.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="slide-up" delay={100}>
              <div className="bg-white rounded-xl p-8 shadow-lg h-full">
                <div className="h-16 w-16 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mb-6">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
                <p className="text-gray-600 mb-4">
                  To be the global leader in data innovation, revolutionizing how businesses extract value from their data and setting new standards for the industry.
                </p>
                <p className="text-gray-600">
                  We envision a world where every organization, regardless of size or industry, can harness the full potential of their data to make informed decisions, create exceptional customer experiences, and drive sustainable growth.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Our Values
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Guiding Principles That Define Us
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our core values shape our culture, guide our decisions, and define how we work with our clients and each other.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-rhino-blue/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="h-14 w-14 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mb-6">
                    {value.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Achievements Section */}
      <section className="section-padding bg-gradient-to-tr from-rhino-darkblue to-rhino-blue text-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-white/20 rounded-full mb-4">
              Our Achievements
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Making an Impact Through Data
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Our success is measured by the impact we've made for our clients and the industry recognition we've received.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <AnimatedSection key={index} animation="slide-up" delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-center">
                  <h3 className="text-4xl md:text-5xl font-bold mb-2 text-white">{achievement.figure}</h3>
                  <p className="text-white/80">{achievement.label}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Leadership Team Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Leadership Team
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Meet the Experts Behind Big Data Rhino
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Our leadership team brings decades of combined experience in data science, technology, and business transformation.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {leaders.map((leader, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={leader.image}
                      alt={leader.name}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-1">{leader.name}</h3>
                    <p className="text-rhino-blue mb-3">{leader.position}</p>
                    <p className="text-gray-600">{leader.bio}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-gray-50">
        <div className="container mx-auto">
          <div className="bg-white rounded-xl p-8 md:p-12 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <AnimatedSection animation="fade-in-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Partner with Big Data Rhino?
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 lg:mb-0">
                    Join the hundreds of businesses that have transformed their operations with our data solutions. Contact us today to start your data journey.
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
                      Contact Us
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

export default About;

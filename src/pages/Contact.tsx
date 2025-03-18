
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Globe } from 'lucide-react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import AnimatedSection from '@/components/AnimatedSection';

const Contact = () => {
  const officeLocations = [
    {
      city: "San Francisco",
      address: "123 Market Street, Suite 1000, San Francisco, CA 94105",
      phone: "+1 (415) 555-1234",
      email: "sf@bigdatarhino.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    },
    {
      city: "New York",
      address: "456 Madison Avenue, 15th Floor, New York, NY 10022",
      phone: "+1 (212) 555-5678",
      email: "nyc@bigdatarhino.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    },
    {
      city: "London",
      address: "10 Finsbury Square, London, EC2A 1AF, United Kingdom",
      phone: "+44 20 7123 4567",
      email: "london@bigdatarhino.com",
      hours: "Monday - Friday: 9:00 AM - 6:00 PM"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 md:px-12 lg:px-24 bg-gradient-to-tr from-rhino-darkblue to-rhino-blue text-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-white/20 rounded-full mb-4">
              Get in Touch
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Contact Us
            </h1>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              We'd love to hear from you. Reach out to discuss how we can help transform your business with our data solutions.
            </p>
          </AnimatedSection>
        </div>
      </section>
      
      {/* Contact Content Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            
            {/* Contact Info */}
            <div className="space-y-8">
              <AnimatedSection animation="fade-in" delay={100}>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <Mail className="h-6 w-6 text-rhino-blue mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Email</h4>
                        <a href="mailto:contact@bigdatarhino.com" className="text-gray-600 hover:text-rhino-blue transition-colors duration-200">
                          contact@bigdatarhino.com
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-6 w-6 text-rhino-blue mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Phone</h4>
                        <a href="tel:+18005551234" className="text-gray-600 hover:text-rhino-blue transition-colors duration-200">
                          +1 (800) 555-1234
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Globe className="h-6 w-6 text-rhino-blue mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Global Presence</h4>
                        <p className="text-gray-600">
                          Offices in San Francisco, New York, and London
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-6 w-6 text-rhino-blue mr-4 mt-0.5" />
                      <div>
                        <h4 className="font-semibold mb-1">Business Hours</h4>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM (Local Time)
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
              
              <AnimatedSection animation="fade-in" delay={200}>
                <div className="bg-white rounded-xl shadow-lg p-8">
                  <h3 className="text-xl font-bold mb-4">Connect With Us</h3>
                  <p className="text-gray-600 mb-4">
                    Follow us on social media for the latest updates, insights, and news.
                  </p>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-rhino-blue hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-rhino-blue hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-rhino-blue hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-gray-100 flex items-center justify-center hover:bg-rhino-blue hover:text-white transition-colors duration-300">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>
      
      {/* Office Locations Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Our Offices
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Global Locations
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Visit us at one of our offices around the world.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {officeLocations.map((office, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white rounded-xl border border-gray-100 p-6 shadow-md hover:shadow-lg transition-all duration-300 h-full">
                  <h3 className="text-xl font-semibold mb-4">{office.city}</h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-rhino-blue mr-3 mt-0.5" />
                      <p className="text-gray-600">{office.address}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-rhino-blue mr-3 mt-0.5" />
                      <p className="text-gray-600">{office.phone}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-rhino-blue mr-3 mt-0.5" />
                      <p className="text-gray-600">{office.email}</p>
                    </div>
                    
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-rhino-blue mr-3 mt-0.5" />
                      <p className="text-gray-600">{office.hours}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Map Section */}
      <section className="h-96 bg-gray-100 relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6304.829986131271!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1641831355329!5m2!1sen!2sus" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          loading="lazy"
          title="Map Location"
        ></iframe>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;

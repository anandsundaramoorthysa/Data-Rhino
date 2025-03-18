
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const footerLinks = {
    company: [
      { name: 'About Us', path: '/about' },
      { name: 'Why Us', path: '/why-us' },
      { name: 'Careers', path: '/careers' },
      { name: 'Contact', path: '/contact' },
    ],
    services: [
      { name: 'AI & ML', path: '/services#ai-ml' },
      { name: 'Data Analytics', path: '/services#data-analytics' },
      { name: 'FinTech Solutions', path: '/services#fintech' },
      { name: 'Custom Development', path: '/services#custom-dev' },
    ],
    solutions: [
      { name: 'Banking & Financial', path: '/solutions#banking' },
      { name: 'Healthcare', path: '/solutions#healthcare' },
      { name: 'Energy & Utilities', path: '/solutions#energy' },
      { name: 'Public Sector', path: '/solutions#public' },
    ],
    resources: [
      { name: 'Case Studies', path: '/case-studies' },
      { name: 'Blog', path: '/blog' },
      { name: 'FAQs', path: '/faqs' },
      { name: 'Support', path: '/support' },
    ],
  };
  
  const socialLinks = [
    { icon: Facebook, link: 'https://facebook.com' },
    { icon: Twitter, link: 'https://twitter.com' },
    { icon: Linkedin, link: 'https://linkedin.com' },
    { icon: Instagram, link: 'https://instagram.com' },
  ];
  
  const contactInfo = [
    { icon: Mail, info: 'contact@bigdatarhino.com' },
    { icon: Phone, info: '+1 (123) 456-7890' },
    { icon: MapPin, info: 'San Francisco, CA, USA' },
  ];

  return (
    <footer className="bg-gradient-to-tr from-gray-900 to-rhino-darkblue text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Company info */}
          <div className="lg:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <span className="text-2xl font-bold">Big Data Rhino</span>
            </Link>
            <p className="text-gray-300 mb-6">
              Empowering businesses with cutting-edge data analytics, AI & ML solutions that drive innovation and growth.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((item, index) => (
                <a 
                  key={index}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="h-10 w-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-rhino-blue transition-colors duration-300"
                >
                  <item.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>
          
          {/* Quick links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Company</h3>
            <ul className="space-y-4">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white flex items-center group"
                  >
                    <span className="link-underline">{link.name}</span>
                    <ArrowRight className="h-4 w-0 opacity-0 ml-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white flex items-center group"
                  >
                    <span className="link-underline">{link.name}</span>
                    <ArrowRight className="h-4 w-0 opacity-0 ml-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Solutions</h3>
            <ul className="space-y-4">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link 
                    to={link.path} 
                    className="text-gray-300 hover:text-white flex items-center group"
                  >
                    <span className="link-underline">{link.name}</span>
                    <ArrowRight className="h-4 w-0 opacity-0 ml-0 group-hover:w-4 group-hover:opacity-100 group-hover:ml-2 transition-all duration-300" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Us</h3>
            <ul className="space-y-4">
              {contactInfo.map((item, index) => (
                <li key={index} className="flex items-start">
                  <item.icon className="h-5 w-5 mr-3 mt-0.5 text-rhino-blue" />
                  <span className="text-gray-300">{item.info}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {currentYear} Big Data Rhino. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="text-gray-400 hover:text-white text-sm">
              Privacy Policy
            </Link>
            <Link to="/terms-of-service" className="text-gray-400 hover:text-white text-sm">
              Terms of Service
            </Link>
            <Link to="/sitemap" className="text-gray-400 hover:text-white text-sm">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

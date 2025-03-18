
import { motion } from 'framer-motion';
import { Landmark, Stethoscope, Zap, Building2, ShoppingBag, Truck, Search, Filter } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import CaseStudyCard from '@/components/CaseStudyCard';

const CaseStudies = () => {
  // Industry filter options
  const industries = [
    { id: 'all', name: 'All Industries' },
    { id: 'banking', name: 'Banking & Finance', icon: Landmark },
    { id: 'healthcare', name: 'Healthcare', icon: Stethoscope },
    { id: 'energy', name: 'Energy & Utilities', icon: Zap },
    { id: 'public', name: 'Public Sector', icon: Building2 },
    { id: 'retail', name: 'Retail & E-commerce', icon: ShoppingBag },
    { id: 'logistics', name: 'Supply Chain', icon: Truck }
  ];
  
  // Case studies data
  const allCaseStudies = [
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
    },
    {
      title: "Smart City Initiative",
      client: "Metropolitan Government",
      industry: "Public",
      excerpt: "Implemented a comprehensive data platform that improved city services, reduced operational costs by 28%, and enhanced citizen satisfaction.",
      image: "https://images.unsplash.com/photo-1590274853856-f22d5ee3d228?q=80&w=2667&auto=format&fit=crop",
      slug: "smart-city-initiative"
    },
    {
      title: "Customer Personalization Engine",
      client: "Global Retail Chain",
      industry: "Retail",
      excerpt: "Developed a real-time personalization platform that increased online conversion rates by 34% and average order value by 28%.",
      image: "https://images.unsplash.com/photo-1481437156560-3205f6a55735?q=80&w=2671&auto=format&fit=crop",
      slug: "retail-personalization"
    },
    {
      title: "Logistics Optimization Platform",
      client: "Global Shipping Company",
      industry: "Logistics",
      excerpt: "Created an AI-powered logistics platform that reduced delivery times by 22% and operational costs by 18% across global shipping routes.",
      image: "https://images.unsplash.com/photo-1566576721346-d4a3b4eaeb55?q=80&w=2670&auto=format&fit=crop",
      slug: "logistics-optimization"
    },
    {
      title: "Investment Risk Analysis",
      client: "Asset Management Firm",
      industry: "Banking",
      excerpt: "Built a predictive analytics platform that improved investment performance by 18% while reducing portfolio risk exposure by 27%.",
      image: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?q=80&w=2670&auto=format&fit=crop",
      slug: "investment-risk-analysis"
    },
    {
      title: "Patient Care Optimization",
      client: "National Healthcare Provider",
      industry: "Healthcare",
      excerpt: "Implemented AI-driven patient flow management that reduced wait times by 41% and improved resource utilization by 32%.",
      image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=2680&auto=format&fit=crop",
      slug: "patient-care-optimization"
    },
    {
      title: "Renewable Energy Forecasting",
      client: "Renewable Energy Developer",
      industry: "Energy",
      excerpt: "Created a machine learning model that improved renewable energy production forecasting accuracy by 37%, optimizing grid integration.",
      image: "https://images.unsplash.com/photo-1509391366360-2e959784a276?q=80&w=2672&auto=format&fit=crop",
      slug: "renewable-energy-forecasting"
    }
  ];
  
  // State for filters and search
  const [selectedIndustry, setSelectedIndustry] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  
  // Filter and search case studies
  const filteredCaseStudies = allCaseStudies.filter(caseStudy => {
    // Industry filter
    const industryMatch = selectedIndustry === 'all' || caseStudy.industry.toLowerCase() === selectedIndustry.toLowerCase();
    
    // Search filter
    const searchMatch = searchQuery === '' || 
      caseStudy.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      caseStudy.client.toLowerCase().includes(searchQuery.toLowerCase()) || 
      caseStudy.industry.toLowerCase().includes(searchQuery.toLowerCase()) || 
      caseStudy.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    
    return industryMatch && searchMatch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        subtitle="Case Studies"
        title="Real Results for Real Clients"
        description="Explore how our data solutions have transformed businesses and delivered measurable results across industries."
      />
      
      {/* Filters Section */}
      <section className="py-10 px-6 md:px-12 lg:px-24 bg-white border-b border-gray-100">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="w-full md:w-auto">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search case studies..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full md:w-80 pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
                />
              </div>
            </div>
            
            <div className="w-full md:w-auto">
              <div className="flex items-center gap-2 overflow-x-auto py-2 md:py-0">
                <span className="flex-shrink-0 text-gray-500 flex items-center">
                  <Filter className="h-4 w-4 mr-1" />
                  Filter:
                </span>
                {industries.map((industry) => (
                  <button
                    key={industry.id}
                    onClick={() => setSelectedIndustry(industry.id)}
                    className={`flex items-center px-3 py-1.5 rounded-full border text-sm whitespace-nowrap transition-all duration-200 ${
                      selectedIndustry === industry.id
                        ? 'bg-rhino-blue text-white border-rhino-blue'
                        : 'bg-white text-gray-700 border-gray-300 hover:border-rhino-blue/50'
                    }`}
                  >
                    {industry.icon && <industry.icon className="h-4 w-4 mr-1.5" />}
                    {industry.name}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Case Studies Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          {filteredCaseStudies.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredCaseStudies.map((caseStudy, index) => (
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
          ) : (
            <div className="text-center py-16">
              <h3 className="text-2xl font-semibold mb-4">No case studies found</h3>
              <p className="text-gray-600 mb-8">
                No case studies match your current filters. Try adjusting your search or filter criteria.
              </p>
              <button
                onClick={() => {
                  setSelectedIndustry('all');
                  setSearchQuery('');
                }}
                className="btn-primary"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-6 md:px-12 lg:px-24 bg-white">
        <div className="container mx-auto">
          <div className="bg-gradient-to-tr from-rhino-darkblue to-rhino-blue rounded-xl p-8 md:p-12 text-white">
            <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-center">
              <div className="lg:col-span-3">
                <AnimatedSection animation="fade-in-left">
                  <h2 className="text-3xl md:text-4xl font-bold mb-6">
                    Ready to Write Your Success Story?
                  </h2>
                  <p className="text-white/80 text-lg mb-8 lg:mb-0">
                    Join our growing list of clients who have transformed their businesses with our data solutions. Contact us today to get started.
                  </p>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-2">
                <AnimatedSection animation="fade-in-right">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a
                      href="/contact"
                      className="px-6 py-3 bg-white text-rhino-darkblue rounded-md transition-all duration-300 hover:bg-gray-100 flex-1 text-center"
                    >
                      Contact Us
                    </a>
                    <a
                      href="/services"
                      className="px-6 py-3 bg-transparent text-white border-2 border-white rounded-md transition-all duration-300 hover:bg-white/10 flex-1 text-center"
                    >
                      View Services
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

export default CaseStudies;

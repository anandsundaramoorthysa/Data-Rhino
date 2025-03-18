
import { motion } from 'framer-motion';
import { CheckCircle, MapPin, Clock, ArrowRight, Search } from 'lucide-react';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import Hero from '@/components/Hero';
import AnimatedSection from '@/components/AnimatedSection';
import CareerCard from '@/components/CareerCard';

const Careers = () => {
  // Benefits data
  const benefits = [
    {
      title: "Competitive Compensation",
      description: "We offer competitive salaries, stock options, and performance bonuses."
    },
    {
      title: "Health & Wellness",
      description: "Comprehensive health, dental, and vision insurance, plus wellness programs."
    },
    {
      title: "Professional Development",
      description: "Continuous learning, conference sponsorships, and education reimbursements."
    },
    {
      title: "Work-Life Balance",
      description: "Flexible work arrangements, generous PTO, and family leave policies."
    },
    {
      title: "Team Building",
      description: "Regular team events, offsites, and collaborative work environments."
    },
    {
      title: "Modern Workspace",
      description: "State-of-the-art offices with the latest technology and ergonomic amenities."
    }
  ];
  
  // Job openings data
  const jobOpenings = [
    {
      title: "Senior Data Scientist",
      department: "Data Science",
      location: "San Francisco, CA",
      type: "Full-time",
      postedDate: "2 weeks ago",
      slug: "senior-data-scientist"
    },
    {
      title: "Machine Learning Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      postedDate: "1 week ago",
      slug: "machine-learning-engineer"
    },
    {
      title: "FinTech Solutions Architect",
      department: "Solutions",
      location: "New York, NY",
      type: "Full-time",
      postedDate: "3 days ago",
      slug: "fintech-solutions-architect"
    },
    {
      title: "Healthcare Data Analyst",
      department: "Data Science",
      location: "Remote",
      type: "Remote",
      postedDate: "1 month ago",
      slug: "healthcare-data-analyst"
    },
    {
      title: "Frontend Developer",
      department: "Engineering",
      location: "London, UK",
      type: "Full-time",
      postedDate: "2 weeks ago",
      slug: "frontend-developer"
    },
    {
      title: "Product Manager - AI Solutions",
      department: "Product",
      location: "San Francisco, CA",
      type: "Full-time",
      postedDate: "1 week ago",
      slug: "product-manager-ai"
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Remote",
      postedDate: "3 weeks ago",
      slug: "devops-engineer"
    },
    {
      title: "Sales Executive - Enterprise",
      department: "Sales",
      location: "New York, NY",
      type: "Full-time",
      postedDate: "5 days ago",
      slug: "sales-executive-enterprise"
    }
  ];
  
  // Filter options
  const locations = ['All Locations', 'San Francisco, CA', 'New York, NY', 'London, UK', 'Remote'];
  const departments = ['All Departments', 'Engineering', 'Data Science', 'Product', 'Sales', 'Solutions'];
  const jobTypes = ['All Types', 'Full-time', 'Part-time', 'Contract', 'Remote'];
  
  // State for filters and search
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Locations');
  const [selectedDepartment, setSelectedDepartment] = useState('All Departments');
  const [selectedType, setSelectedType] = useState('All Types');
  
  // Filter jobs
  const filteredJobs = jobOpenings.filter(job => {
    // Location filter
    const locationMatch = selectedLocation === 'All Locations' || job.location === selectedLocation;
    
    // Department filter
    const departmentMatch = selectedDepartment === 'All Departments' || job.department === selectedDepartment;
    
    // Type filter
    const typeMatch = selectedType === 'All Types' || job.type === selectedType;
    
    // Search filter
    const searchMatch = searchQuery === '' || 
      job.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      job.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    return locationMatch && departmentMatch && typeMatch && searchMatch;
  });

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <Hero
        subtitle="Join Our Team"
        title="Build Your Career at Big Data Rhino"
        description="Join a team of innovative thinkers and problem solvers who are passionate about transforming how businesses leverage data."
        backgroundClass="bg-gradient-to-tr from-rhino-darkblue via-rhino-blue to-rhino-lightblue"
      />
      
      {/* Company Culture Section */}
      <section className="section-padding bg-white">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="fade-in-left">
              <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
                Our Culture
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <span className="text-gradient">Innovation, Collaboration,</span> and Growth
              </h2>
              <p className="text-gray-600 mb-6 text-lg">
                At Big Data Rhino, we're building a culture where curiosity is encouraged, innovation is celebrated, and every team member has the opportunity to make an impact.
              </p>
              <p className="text-gray-600 mb-6">
                We believe that diverse perspectives lead to better solutions, and we're committed to creating an inclusive environment where everyone can thrive. Our team members come from a wide range of backgrounds and bring unique experiences and ideas to the table.
              </p>
              <p className="text-gray-600">
                If you're passionate about data, technology, and making a difference, we'd love to have you join our growing team.
              </p>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in-right">
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
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Why Work With Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits & Perks
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              We offer competitive compensation and a comprehensive benefits package designed to support your health, wealth, and personal growth.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={index} animation="fade-in" delay={index * 100}>
                <div className="bg-white rounded-xl p-6 border border-gray-100 hover:border-rhino-blue/30 hover:shadow-lg transition-all duration-300 h-full">
                  <div className="h-12 w-12 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mb-6">
                    <CheckCircle className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
      
      {/* Job Openings Section */}
      <section className="section-padding bg-white" id="openings">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-rhino-blue bg-rhino-blue/10 rounded-full mb-4">
              Open Positions
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Current Job Openings
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Find the perfect role to match your skills and career aspirations.
            </p>
          </AnimatedSection>
          
          {/* Filters */}
          <div className="mb-12 bg-gray-50 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                <input
                  type="text"
                  placeholder="Search positions..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
                />
              </div>
              
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
              >
                {locations.map((location, index) => (
                  <option key={index} value={location}>{location}</option>
                ))}
              </select>
              
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
              >
                {departments.map((department, index) => (
                  <option key={index} value={department}>{department}</option>
                ))}
              </select>
              
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-rhino-blue focus:border-transparent transition-all duration-200"
              >
                {jobTypes.map((type, index) => (
                  <option key={index} value={type}>{type}</option>
                ))}
              </select>
            </div>
          </div>
          
          {/* Job Listings */}
          {filteredJobs.length > 0 ? (
            <div className="space-y-6">
              {filteredJobs.map((job, index) => (
                <CareerCard
                  key={index}
                  title={job.title}
                  department={job.department}
                  location={job.location}
                  type={job.type as any}
                  postedDate={job.postedDate}
                  slug={job.slug}
                  index={index}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-gray-50 rounded-lg">
              <h3 className="text-xl font-semibold mb-2">No positions found</h3>
              <p className="text-gray-600 mb-4">
                We couldn't find any positions matching your current filters.
              </p>
              <button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedLocation('All Locations');
                  setSelectedDepartment('All Departments');
                  setSelectedType('All Types');
                }}
                className="btn-primary inline-flex items-center"
              >
                Reset Filters
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Hiring Process Section */}
      <section className="section-padding bg-gradient-to-tr from-rhino-darkblue to-rhino-blue text-white">
        <div className="container mx-auto">
          <AnimatedSection className="text-center mb-16">
            <span className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-white/20 rounded-full mb-4">
              Our Hiring Process
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What to Expect
            </h2>
            <p className="text-white/80 max-w-3xl mx-auto text-lg">
              Our hiring process is designed to be thorough, transparent, and respectful of your time.
            </p>
          </AnimatedSection>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <AnimatedSection animation="fade-in" delay={100}>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 h-full">
                <div className="h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">1</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Application Review</h3>
                <p className="text-white/80">
                  Our recruiting team reviews your application to assess your skills and experience against the role requirements.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={200}>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 h-full">
                <div className="h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">2</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Initial Interview</h3>
                <p className="text-white/80">
                  A conversation with a recruiter to discuss your background, the role, and determine mutual fit.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={300}>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 h-full">
                <div className="h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">3</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Technical Assessment</h3>
                <p className="text-white/80">
                  Depending on the role, you may complete a technical challenge or assessment to showcase your skills.
                </p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fade-in" delay={400}>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 h-full">
                <div className="h-12 w-12 rounded-full bg-white/10 text-white flex items-center justify-center mb-6">
                  <span className="text-2xl font-bold">4</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Team Interviews</h3>
                <p className="text-white/80">
                  Meet with potential team members and leaders to discuss technical skills, experience, and cultural fit.
                </p>
              </div>
            </AnimatedSection>
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
                    Don't See the Perfect Fit?
                  </h2>
                  <p className="text-gray-600 text-lg mb-8 lg:mb-0">
                    We're always looking for talented individuals to join our team. Send us your resume and we'll keep you in mind for future opportunities.
                  </p>
                </AnimatedSection>
              </div>
              <div className="lg:col-span-2">
                <AnimatedSection animation="fade-in-right">
                  <a
                    href="mailto:careers@bigdatarhino.com"
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    Send Your Resume
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
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

export default Careers;

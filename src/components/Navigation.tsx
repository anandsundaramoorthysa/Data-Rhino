
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [solutionsOpen, setSolutionsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Why Us', path: '/why-us' },
    { 
      name: 'Services', 
      path: '/services',
      dropdown: true,
      items: [
        { name: 'AI & ML', path: '/services#ai-ml' },
        { name: 'Data Analytics', path: '/services#data-analytics' },
        { name: 'FinTech Solutions', path: '/services#fintech' },
        { name: 'Custom Development', path: '/services#custom-dev' },
      ] 
    },
    { 
      name: 'Solutions', 
      path: '/solutions',
      dropdown: true,
      items: [
        { name: 'Banking & Financial', path: '/solutions#banking' },
        { name: 'Healthcare', path: '/solutions#healthcare' },
        { name: 'Energy & Utilities', path: '/solutions#energy' },
        { name: 'Public Sector', path: '/solutions#public' },
      ] 
    },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Contact', path: '/contact' },
    { name: 'Careers', path: '/careers' },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    closeMenu();
  }, [location]);

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300',
        scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-3' : 'bg-transparent py-4'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <div className="flex-shrink-0">
            <Link to="/" className="flex items-center">
              <span className="text-xl font-bold text-rhino-darkblue">Big Data Rhino</span>
            </Link>
          </div>
          
          {/* Desktop menu */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navItems.map((item) => (
              !item.dropdown ? (
                <Link 
                  key={item.name}
                  to={item.path} 
                  className={cn(
                    'nav-link text-sm font-medium',
                    location.pathname === item.path ? 'text-rhino-blue after:w-full' : ''
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <div 
                  key={item.name}
                  className="relative" 
                  onMouseEnter={() => item.name === 'Services' ? setServicesOpen(true) : setSolutionsOpen(true)}
                  onMouseLeave={() => item.name === 'Services' ? setServicesOpen(false) : setSolutionsOpen(false)}
                >
                  <Link 
                    to={item.path}
                    className={cn(
                      'nav-link flex items-center text-sm font-medium',
                      location.pathname === item.path ? 'text-rhino-blue after:w-full' : ''
                    )}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </Link>
                  
                  {/* Dropdown menu */}
                  <div 
                    className={cn(
                      'absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md overflow-hidden transition-all duration-300 transform origin-top-left z-50',
                      (item.name === 'Services' && servicesOpen) || (item.name === 'Solutions' && solutionsOpen) 
                        ? 'scale-100 opacity-100' 
                        : 'scale-95 opacity-0 pointer-events-none'
                    )}
                  >
                    <div className="py-1">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.name}
                          to={subItem.path}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-rhino-blue hover:text-white transition-colors duration-200"
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              )
            ))}
            <Link 
              to="/contact" 
              className="btn-primary animate-pulse-glow"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button 
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-rhino-blue hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-rhino-blue"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      <div 
        className={cn(
          'md:hidden fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out pt-20',
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <div key={item.name}>
              {!item.dropdown ? (
                <Link
                  to={item.path}
                  className={cn(
                    'block px-3 py-2 rounded-md text-base font-medium',
                    location.pathname === item.path 
                      ? 'bg-rhino-blue/10 text-rhino-blue' 
                      : 'text-gray-700 hover:bg-gray-100 hover:text-rhino-blue'
                  )}
                >
                  {item.name}
                </Link>
              ) : (
                <div>
                  <button
                    onClick={() => item.name === 'Services' ? setServicesOpen(!servicesOpen) : setSolutionsOpen(!solutionsOpen)}
                    className={cn(
                      'flex w-full items-center justify-between px-3 py-2 rounded-md text-base font-medium',
                      location.pathname === item.path 
                        ? 'bg-rhino-blue/10 text-rhino-blue' 
                        : 'text-gray-700 hover:bg-gray-100 hover:text-rhino-blue'
                    )}
                  >
                    {item.name}
                    <ChevronDown className={cn(
                      'h-4 w-4 transition-transform',
                      (item.name === 'Services' && servicesOpen) || (item.name === 'Solutions' && solutionsOpen) ? 'rotate-180' : ''
                    )} />
                  </button>
                  
                  <div 
                    className={cn(
                      'pl-4 space-y-1 overflow-hidden transition-all duration-200',
                      (item.name === 'Services' && servicesOpen) || (item.name === 'Solutions' && solutionsOpen) 
                        ? 'max-h-96 opacity-100 pt-2' 
                        : 'max-h-0 opacity-0'
                    )}
                  >
                    {item.items?.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className="block px-3 py-2 rounded-md text-sm text-gray-700 hover:bg-gray-100 hover:text-rhino-blue"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="block w-full text-center px-3 py-2 bg-rhino-blue text-white rounded-md"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;


import { motion } from 'framer-motion';
import { MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CareerCardProps {
  title: string;
  department: string;
  location: string;
  type: 'Full-time' | 'Part-time' | 'Contract' | 'Remote';
  postedDate: string;
  slug: string;
  index?: number;
  className?: string;
}

const CareerCard = ({
  title,
  department,
  location,
  type,
  postedDate,
  slug,
  index = 0,
  className = ''
}: CareerCardProps) => {
  const delay = index * 0.1;
  
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5,
        delay 
      }
    }
  };
  
  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Full-time':
        return 'bg-emerald-100 text-emerald-800';
      case 'Part-time':
        return 'bg-amber-100 text-amber-800';
      case 'Contract':
        return 'bg-purple-100 text-purple-800';
      case 'Remote':
        return 'bg-blue-100 text-blue-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      className={cn(
        'group bg-white rounded-lg border border-gray-100 p-6 hover:shadow-lg hover:border-rhino-blue/30 transition-all duration-300',
        className
      )}
    >
      <div className="flex flex-col md:flex-row md:items-center md:justify-between">
        <div>
          <div className="flex items-center mb-2">
            <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${getTypeColor(type)} mr-2`}>
              {type}
            </span>
            <span className="text-xs text-gray-500 flex items-center">
              <Calendar className="h-3 w-3 mr-1" />
              Posted {postedDate}
            </span>
          </div>
          
          <h3 className="text-xl font-semibold text-gray-900 group-hover:text-rhino-blue transition-colors duration-300 mb-1">
            {title}
          </h3>
          
          <p className="text-sm text-gray-600 mb-2">
            {department}
          </p>
          
          <div className="flex items-center text-gray-500">
            <MapPin className="h-4 w-4 mr-1" />
            <span className="text-sm">{location}</span>
          </div>
        </div>
        
        <div className="mt-4 md:mt-0">
          <Link
            to={`/careers/${slug}`}
            className="inline-flex items-center justify-center h-10 px-4 py-2 bg-rhino-blue/10 text-rhino-blue rounded-md hover:bg-rhino-blue hover:text-white transition-all duration-300"
          >
            Apply Now
            <ArrowUpRight className="ml-2 h-4 w-4" />
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default CareerCard;

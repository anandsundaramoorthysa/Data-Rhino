
import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  link: string;
  index?: number;
  className?: string;
  variant?: 'default' | 'glass' | 'bordered';
}

const ServiceCard = ({
  title,
  description,
  icon,
  link,
  index = 0,
  className = '',
  variant = 'default'
}: ServiceCardProps) => {
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
  
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={cardVariants}
      className={cn(
        'group cursor-pointer transition-all duration-300 hover:shadow-xl',
        variant === 'default' && 'bg-white rounded-lg p-6',
        variant === 'glass' && 'glass-card backdrop-blur-md rounded-lg p-6',
        variant === 'bordered' && 'bg-white border-2 border-gray-100 hover:border-rhino-blue/50 rounded-lg p-6',
        className
      )}
    >
      <Link to={link} className="block">
        <div className="p-3 rounded-full w-16 h-16 bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mb-4 group-hover:bg-rhino-blue group-hover:text-white transition-all duration-300">
          {icon}
        </div>
        
        <h3 className="text-xl font-semibold mb-3 group-hover:text-rhino-blue transition-colors duration-300">{title}</h3>
        
        <p className="text-gray-600 mb-4">{description}</p>
        
        <div className="flex items-center text-rhino-blue font-medium">
          <span className="link-underline">Learn More</span>
          <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-2 transition-transform duration-300" />
        </div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;

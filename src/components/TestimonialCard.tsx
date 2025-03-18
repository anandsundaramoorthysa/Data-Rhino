
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { cn } from '@/lib/utils';

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  company: string;
  avatar?: string;
  index?: number;
  className?: string;
  variant?: 'default' | 'glass' | 'bordered';
}

const TestimonialCard = ({
  quote,
  author,
  position,
  company,
  avatar,
  index = 0,
  className = '',
  variant = 'default'
}: TestimonialCardProps) => {
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
        'transition-all duration-300',
        variant === 'default' && 'bg-white rounded-lg p-6 shadow-md',
        variant === 'glass' && 'glass-card backdrop-blur-md rounded-lg p-6',
        variant === 'bordered' && 'bg-white border-2 border-gray-100 rounded-lg p-6',
        className
      )}
    >
      <div className="flex justify-end mb-4">
        <Quote className="h-12 w-12 text-rhino-blue/20" />
      </div>
      
      <p className="text-gray-700 mb-6 italic">{quote}</p>
      
      <div className="flex items-center">
        {avatar ? (
          <img 
            src={avatar} 
            alt={author} 
            className="h-12 w-12 rounded-full object-cover mr-4"
          />
        ) : (
          <div className="h-12 w-12 rounded-full bg-rhino-blue/10 text-rhino-blue flex items-center justify-center mr-4">
            {author.charAt(0)}
          </div>
        )}
        
        <div>
          <h4 className="font-semibold text-gray-900">{author}</h4>
          <p className="text-sm text-gray-500">{position}, {company}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;

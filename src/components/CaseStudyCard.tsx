
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

interface CaseStudyCardProps {
  title: string;
  client: string;
  industry: string;
  excerpt: string;
  image: string;
  slug: string;
  index?: number;
  className?: string;
}

const CaseStudyCard = ({
  title,
  client,
  industry,
  excerpt,
  image,
  slug,
  index = 0,
  className = ''
}: CaseStudyCardProps) => {
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
        'group rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300',
        className
      )}
    >
      <Link to={`/case-studies/${slug}`} className="block">
        <div className="relative overflow-hidden aspect-[16/9]">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-60 group-hover:opacity-70 transition-opacity duration-300"></div>
          <div className="absolute bottom-0 left-0 p-4">
            <span className="inline-block px-3 py-1 text-xs font-semibold text-white bg-rhino-blue rounded-full mb-2">
              {industry}
            </span>
            <h3 className="text-xl font-semibold text-white mb-1">{title}</h3>
            <p className="text-white/80 text-sm">{client}</p>
          </div>
        </div>
        
        <div className="p-6 bg-white">
          <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center text-rhino-blue font-medium">
              <span className="link-underline">Read Case Study</span>
            </div>
            <span className="h-10 w-10 rounded-full bg-rhino-blue/10 flex items-center justify-center text-rhino-blue group-hover:bg-rhino-blue group-hover:text-white transition-all duration-300">
              <ArrowUpRight className="h-5 w-5" />
            </span>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

export default CaseStudyCard;

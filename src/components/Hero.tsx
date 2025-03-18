
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AnimatedSection from './AnimatedSection';

interface HeroProps {
  title: string;
  subtitle: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  secondaryCtaText?: string;
  secondaryCtaLink?: string;
  backgroundClass?: string;
  align?: 'left' | 'center' | 'right';
}

const Hero = ({
  title,
  subtitle,
  description,
  ctaText = 'Get Started',
  ctaLink = '/contact',
  secondaryCtaText,
  secondaryCtaLink,
  backgroundClass = 'bg-gradient-to-tr from-rhino-darkblue to-rhino-blue',
  align = 'center'
}: HeroProps) => {
  return (
    <div className={`relative overflow-hidden ${backgroundClass} min-h-screen flex items-center`}>
      {/* Background animated patterns */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-[10%] -left-[10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-3xl"></div>
        <div className="absolute top-[45%] left-[55%] w-[30%] h-[30%] bg-white/5 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 relative z-10">
        <div className={`max-w-4xl mx-auto text-${align}`}>
          <AnimatedSection animation="fade-in" className="mb-4">
            <h2 className="inline-block px-3 py-1 text-xs font-semibold uppercase tracking-wider text-white bg-white/20 backdrop-blur-sm rounded-full">
              {subtitle}
            </h2>
          </AnimatedSection>
          
          <AnimatedSection animation="fade-in" delay={100} className="mb-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white">
              {title}
            </h1>
          </AnimatedSection>
          
          {description && (
            <AnimatedSection animation="fade-in" delay={200} className="mb-8">
              <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
                {description}
              </p>
            </AnimatedSection>
          )}
          
          <AnimatedSection animation="fade-in" delay={300} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to={ctaLink}
              className="px-8 py-4 bg-white text-rhino-darkblue rounded-md font-medium hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center"
            >
              {ctaText}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            
            {secondaryCtaText && secondaryCtaLink && (
              <Link
                to={secondaryCtaLink}
                className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-md font-medium hover:bg-white/10 transition-all duration-300"
              >
                {secondaryCtaText}
              </Link>
            )}
          </AnimatedSection>
        </div>
      </div>
    </div>
  );
};

export default Hero;

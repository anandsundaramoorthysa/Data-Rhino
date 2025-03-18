
import { useRef, useEffect, useState, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up';
  threshold?: number;
}

const AnimatedSection = ({ 
  children, 
  className = "", 
  delay = 0, 
  animation = 'fade-in',
  threshold = 0.2
}: AnimatedSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px'
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [threshold]);

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all duration-700';
    
    // Handle opacity transitions
    const opacityClasses = isVisible ? 'opacity-100' : 'opacity-0';
    
    // Handle transform transitions based on animation type
    let transformClasses = '';
    if (animation === 'slide-up') {
      transformClasses = isVisible ? 'translate-y-0' : 'translate-y-10';
    } else if (animation === 'fade-in-left') {
      transformClasses = isVisible ? 'translate-x-0' : 'translate-x-10';
    } else if (animation === 'fade-in-right') {
      transformClasses = isVisible ? 'translate-x-0' : '-translate-x-10';
    }
    
    return `${baseClasses} ${opacityClasses} ${transformClasses}`;
  };

  return (
    <div
      ref={sectionRef}
      className={cn(
        getAnimationClasses(),
        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;

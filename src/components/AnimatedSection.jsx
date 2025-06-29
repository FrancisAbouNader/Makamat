import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const AnimatedSection = ({ 
  children, 
  className = '', 
  animation = 'fadeInUp',
  delay = 0,
  duration = 600,
  ...props 
}) => {
  const [ref, isVisible] = useScrollAnimation();

  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    const durationClass = `duration-${duration}`;
    
    if (!isVisible) {
      switch (animation) {
        case 'fadeInUp':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
        case 'fadeInDown':
          return `${baseClasses} ${durationClass} opacity-0 -translate-y-8`;
        case 'fadeInLeft':
          return `${baseClasses} ${durationClass} opacity-0 -translate-x-8`;
        case 'fadeInRight':
          return `${baseClasses} ${durationClass} opacity-0 translate-x-8`;
        case 'fadeIn':
          return `${baseClasses} ${durationClass} opacity-0`;
        case 'scaleIn':
          return `${baseClasses} ${durationClass} opacity-0 scale-95`;
        case 'slideInUp':
          return `${baseClasses} ${durationClass} opacity-0 translate-y-16`;
        default:
          return `${baseClasses} ${durationClass} opacity-0 translate-y-8`;
      }
    }
    
    return `${baseClasses} ${durationClass} opacity-100 translate-y-0 translate-x-0 scale-100`;
  };

  return (
    <div
      ref={ref}
      className={`${getAnimationClasses()} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
      {...props}
    >
      {children}
    </div>
  );
};

export default AnimatedSection;
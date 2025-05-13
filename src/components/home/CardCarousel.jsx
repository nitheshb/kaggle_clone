
import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CardCarousel = ({ children, itemsToShow = 4, gap = 6 }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollAmount = container.clientWidth * 0.75;
    const scrollLeft = direction === 'left' 
      ? container.scrollLeft - scrollAmount 
      : container.scrollLeft + scrollAmount;
    
    container.scrollTo({
      left: scrollLeft,
      behavior: 'smooth'
    });
  };

  return (
    <div className="relative group">
      <div 
        ref={scrollContainerRef} 
        className="flex overflow-x-auto pb-4 hide-scrollbar"
        style={{ 
          scrollbarWidth: 'none', 
          msOverflowStyle: 'none',
          scrollSnapType: 'x mandatory' 
        }}
      >
        <div className={`grid grid-flow-col auto-cols-max gap-${gap}`}>
          {children}
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <Button 
        onClick={() => scroll('left')} 
        variant="outline" 
        size="icon" 
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white shadow-md border rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Scroll left"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>
      
      <Button 
        onClick={() => scroll('right')} 
        variant="outline" 
        size="icon" 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 bg-white shadow-md border rounded-full opacity-0 group-hover:opacity-100 transition-opacity z-10"
        aria-label="Scroll right"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      <style jsx>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
};

export default CardCarousel;

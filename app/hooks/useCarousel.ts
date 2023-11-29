import { useState, useEffect } from 'react';

type UseCarouselProps = {
  gallery: string[];
  autoplayInterval?: number;
};

export const useCarousel = ({ gallery, autoplayInterval = 5000 }: UseCarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % gallery.length);
  };

  useEffect(() => {
    const intervalId = setInterval(nextSlide, autoplayInterval);

    return () => {
      clearInterval(intervalId);
    };
  }, [currentIndex, autoplayInterval]);

  return {
    currentIndex,
  };
};

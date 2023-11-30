import { useEffect, useRef } from 'react';
import useEmblaCarousel from 'embla-carousel-react'
import gsap from 'gsap';
import Autoplay from 'embla-carousel-autoplay'

type CarouselProps = {
  gallery: string[];
  autoplayInterval?: number;
};

export const Carousel = ({ gallery, autoplayInterval = 4000 }: CarouselProps) => {
  const autoplayOptions = { delay: autoplayInterval, rootNode: (emblaRoot: any) => emblaRoot.parentElement }
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay(autoplayOptions)])
  const imgRefs = useRef<(HTMLImageElement | null)[]>(Array(gallery.length).fill(null));


  useEffect(() => {
    if (!emblaApi) return;

    const onSlideChange = () => {
      const currentIndex = emblaApi.selectedScrollSnap();
      const activeImg = imgRefs.current[currentIndex]


      gsap.fromTo(
        activeImg,
        { scale: 1.2, opacity: 0.3 }, // Initial state (zoomed in and slightly faded)
        {
          scale: 1,
          opacity: 1,
          duration: 2.5,
          ease: 'power3.out', // You can change the easing function as needed
        }
      );
    };

    emblaApi.on('select', onSlideChange);

    return () => {
      emblaApi.off('select', onSlideChange);
    };
  }, [emblaApi]);

  return (
    <div className="embla overflow-hidden h-full w-full" ref={emblaRef}>
      <div className="embla__container flex h-full w-full">
        {gallery.map((imageSrc, index) => {
          return (
            <div key={index} className="embla__slide grow-0 shrink-0 w-full">
              <img
                ref={(el) => (imgRefs.current[index] = el)}
                className="object-cover h-full w-full" src={imageSrc} alt="" />
            </div>
          )
        })}
      </div>
    </div>
  );
};